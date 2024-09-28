import React, {useState} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {
    const {id} = useParams();

    const {_id, jobTitle, companyName, minPrice, maxPrice, salarytype, jobLocation, postingDate, experienceLevel, companyLogo, employmentType, description, postedBy, skills} = useLoaderData();

    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        fetch(`http://localhost:3000/update-job/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.acknowledged = true){
                alert("Job Updated successfully!");
            }
            reset();
        });
    };

    const animatedComponents = makeAnimated();

    const options = [
        { value: "Javascript", label: "Javascript" },
        { value: "Python", label: "Python" },
        { value: "Java", label: "Java" },
        { value: "C", label: "C" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "Tailwind CSS", label: "Tailwind CSS" },
        { value: "Redux", label: "Redux" },
        { value: "React js", label: "React js" },
        { value: "Node js", label: "Node js" },
        { value: "Express js", label: "Express js" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Next js", label: "Next js" },
        { value: "MySQL", label: "MySQL" },
        { value: "Php", label: "Php" },
        { value: "Machine Learning", label: "Machine Learning" },
        { value: "Dev Ops", label: "Dev Ops" },
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* Job Form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                    {/* First Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Job Title</label>
                            <input type="text" defaultValue={jobTitle} {...register("jobTitle")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Company Name</label>
                            <input type="text" placeholder='E.g. Microsoft' defaultValue={companyName} {...register("companyName")} className='create-job-input' />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Minimum Salary</label>
                            <input type="text" placeholder="E.g. $20k" defaultValue={minPrice} {...register("minPrice")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Maximum Salary</label>
                            <input type="text" placeholder='E.g. $30k' defaultValue={maxPrice} {...register("maxPrice")} className='create-job-input' />
                        </div>
                    </div>
                    {/* Third Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Salary Type</label>
                            <select {...register("salarytype", { required: true })} className='create-job-input'>
                                <option value={salarytype}>{salarytype}</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Job Location</label>
                            <input type="text" placeholder='E.g. London' defaultValue={jobLocation} {...register("jobLocation")} className='create-job-input' />
                        </div>
                    </div>
                    {/* Fourth Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Job Posting Date</label>
                            <input type="date" placeholder='E.g. 2023-11-21' defaultValue={postingDate} {...register("postingDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Experience Level</label>
                            <select {...register("experienceLevel", { required: true })} className='create-job-input'>
                                <option value={experienceLevel}>{experienceLevel}</option>
                                <option value="All type">All type</option>
                                <option value="Internship">Internship</option>
                                <option value="More than 1 year">More than 1 year</option>
                            </select>
                        </div>
                    </div>
                    {/* Fifth Row */}
                    <div>
                        <label className='block text-lg mb-2'>Required skill sets</label>
                        <CreatableSelect defaultValue={skills} onChange={setSelectedOption} options={options} isMulti components={animatedComponents} className='create-job-input py-4' />
                    </div>
                    {/* Sixth Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Company Logo</label>
                            <input type="url" placeholder='Paste company logo URL: https://weshare.com/abc' defaultValue={companyLogo} {...register("companyLogo")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Employment Type</label>
                            <select {...register("employmentType", { required: true })} className='create-job-input'>
                                <option value={employmentType}>{employmentType}</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Full-time">Full-time</option>
                            </select>
                        </div>
                    </div>
                    {/* Seventh Row */}
                    <div className='w-full'>
                    <label className='block text-lg mb-2'>Job Description</label>
                    <textarea rows="6" placeholder='Job Description' defaultValue={description} {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none shadow-md border'/>
                    </div>
                    {/* Last Row */}
                    <div>
                    <label className='block text-lg mb-2'>Job Posted By</label>
                    <input type="email" placeholder='Enter your mail: e.g. xyz@gmail.com' defaultValue={postedBy} {...register("postedBy")} className='create-job-input' />
                    </div>
                    <input type="submit" className='my-5 p-2 px-4 cursor-pointer hover:bg-[#9d9d9d] duration-150 hover:scale-110 rounded-md bg-[#bfbfbf]' />
                </form>
            </div>
        </div>
  )
}

export default UpdateJob
