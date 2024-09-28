import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

const PostJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        fetch("http://localhost:3000/post-job", {
            method: "post",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.acknowledged = true){
                alert("Job Posted successfully!");
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
                            <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Company Name</label>
                            <input type="text" placeholder='E.g. Microsoft' {...register("companyName")} className='create-job-input' />
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Minimum Salary</label>
                            <input type="text" placeholder="E.g. $20k" {...register("minPrice")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Maximum Salary</label>
                            <input type="text" placeholder='E.g. $30k' {...register("maxPrice")} className='create-job-input' />
                        </div>
                    </div>
                    {/* Third Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Salary Type</label>
                            <select {...register("salarytype", { required: true })} className='create-job-input'>
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Job Location</label>
                            <input type="text" placeholder='E.g. London' {...register("jobLocation")} className='create-job-input' />
                        </div>
                    </div>
                    {/* Fourth Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Job Posting Date</label>
                            <input type="date" placeholder='E.g. 2023-11-21' {...register("postingDate")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Experience Level</label>
                            <select {...register("experienceLevel", { required: true })} className='create-job-input'>
                                <option value="">Choose your experience</option>
                                <option value="All type">All type</option>
                                <option value="Internship">Internship</option>
                                <option value="More than 1 year">More than 1 year</option>
                            </select>
                        </div>
                    </div>
                    {/* Fifth Row */}
                    <div>
                        <label className='block text-lg mb-2'>Required skill sets</label>
                        <CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti components={animatedComponents} className='create-job-input py-4' />
                    </div>
                    {/* Sixth Row */}
                    <div className="create-job-flex">
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Company Logo</label>
                            <input type="url" placeholder='Paste company logo URL: https://weshare.com/abc' {...register("companyLogo")} className='create-job-input' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block text-lg mb-2'>Employment Type</label>
                            <select {...register("employmentType", { required: true })} className='create-job-input'>
                                <option value="">Choose your employment type</option>
                                <option value="Temporary">Temporary</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Full-time">Full-time</option>
                            </select>
                        </div>
                    </div>
                    {/* Seventh Row */}
                    <div className='w-full'>
                    <label className='block text-lg mb-2'>Job Description</label>
                    <textarea rows="6" placeholder='Job Description' {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none shadow-md border'/>
                    </div>
                    {/* Last Row */}
                    <div>
                    <label className='block text-lg mb-2'>Job Posted By</label>
                    <input type="email" placeholder='Enter your mail: e.g. xyz@gmail.com' {...register("postedBy")} className='create-job-input' />
                    </div>
                    <input type="submit" className='my-5 p-2 px-4 cursor-pointer hover:bg-[#9d9d9d] duration-150 hover:scale-110 rounded-md bg-[#bfbfbf]' />
                </form>
            </div>
        </div>
    )
}

export default PostJob
