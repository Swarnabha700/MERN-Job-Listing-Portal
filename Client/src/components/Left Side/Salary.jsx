import React from 'react'
import Button from './Button'
import InputField from '../InputField'

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
      </div>
      <div className='py-4 text-primary'>
        <label className='sidebar-label-container'>
          <input type="radio" name='test' id='test' value="" onChange={handleChange} />
          <span className='checkmark'></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="> 30k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="> 50k"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={70}
          title="> 70k"
          name="test"
        />
      </div>
    </div>
  )
}

export default Salary
