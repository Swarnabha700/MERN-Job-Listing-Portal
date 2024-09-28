import React from 'react'

const Jobs = ({ result }) => {
  return (
    <>
      <div>
        <h3 className='text-xl font-bold mb-2 tracking-wide'>{result.length} jobs</h3>
      </div>
      <section>{result}</section>
    </>
  )
}

export default Jobs
