import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import LeftSide from '../components/Left Side/LeftSide';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs").then(res => res.json()).then(data => {
      // console.log(data);
      setJobs(data);
      setIsLoading(false);
    }
    )
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  // Filter Jobs by Title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // Radio Button Based Filtering //  
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  // Button Based Filtering //
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  // Calculate the index range //
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }

  // Function for the next page //
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  // Function for the previous page //
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  // Main Function //
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, minPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(selected) <= parseInt(minPrice) ||
        experienceLevel.toLowerCase() === selected.toLowerCase()||
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
    }

    // Slice the data based on current page //
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const results = filteredData(jobs, selectedCategory, query);
  return (
    <div className='text-blue'>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main Content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* Left Side */}
        <div className='bg-white p-4 rounded '><LeftSide handleChange={handleChange} handleClick={handleClick} /></div>
        {/* Job Cards */}
        <div className='col-span-2 bg-white p-4 rounded'>
          {
            isLoading ? (<p className='text-lg'>Loading...</p>) : results.length > 0 ? (<Jobs result={results} />) :
              <div className='text-primary'>
                <h3 className='text-xl font-semibold'>{results.length} Jobs</h3>
                <p className='text-lg'>No Jobs Found!</p>
              </div>
          }

          {
            results.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage === 1} className='hover:scale-125 duration-200'>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:scale-125 duration-200'>Next</button>
              </div>
            ) : ""
          }
        </div>
        {/* Right Side */}
        <div className='bg-white p-4 rounded '><NewsLetter/></div>

      </div>
    </div>
  )
}


export default Home
