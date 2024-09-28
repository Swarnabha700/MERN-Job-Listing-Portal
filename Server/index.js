const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const { ObjectId } = require('mongodb');
const port = process.env.PORT || 3000; 

// Using middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.xykhz.mongodb.net/`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDB() {
  try {
    // Connect the client to the server (starting in v4.7)
    await client.connect();
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}
connectToDB();

const db = client.db("mernJobPortal");
const jobCollections = db.collection("demoJobs");

// Post a job
app.post("/post-job", async (req, res) => {
  const body = req.body;
  body.createdAt = new Date();
  try {
    const result = await jobCollections.insertOne(body);
    if (result.insertedId) {
      res.status(200).send(result);
    } else {
      res.status(404).send({
        message: "Cannot insert! Try again later...",
        status: false,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error,
    });
  }
});

// Get all jobs
app.get("/all-jobs", async (req, res) => {
  try {
    const jobs = await jobCollections.find({}).toArray();
    res.send(jobs);
  } catch (error) {
    res.status(500).send({
      message: "Error fetching jobs",
      error,
    });
  }
});

//Get single job using id
app.get("/all-jobs/:id", async(req, res) => {
  const id = req.params.id;
  const job = await jobCollections.findOne({
    _id: new ObjectId(id)
  })
  res.send(job);
})

//Get jobs by email
app.get("/myJobs/:email", async(req, res)=> {
  //console.log(req.params.email);
  const jobs = await jobCollections.find({postedBy: req.params.email}).toArray();
  res.send(jobs);
})

//Delete a job
app.delete("/job/:id", async(req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await jobCollections.deleteOne(filter);
  res.send(result);
});

//Update a job
app.patch("/update-job/:id", async(req, res) => {
  const id = req.params.id;
  const jobData = req.body;
  const filter = {_id: new ObjectId(id)};
  const options = {upsert : true};
  const updateDoc = {
    $set: {
      ...jobData
    },
  };
  const result = await jobCollections.updateOne(filter, updateDoc, options);
  res.send(result);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
