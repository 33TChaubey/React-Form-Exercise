import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ handleFormSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const handleSubmitData = (data) => {
    handleFormSubmitData(data)
    reset();
  }
  return (
    <div className="mt-10 flex gap-10 justify-center">
      <form action="" className="flex  gap-10" onSubmit={handleSubmit(handleSubmitData)}>
        <input  {...register('name')} className='rounded-md px-2 py-1 text-base outline-none font-semibold' placeholder='name' type="text" />
        <input  {...register('email')} className='rounded-md px-2 py-1 text-base outline-none font-semibold' placeholder='email' type="text" />
        <input  {...register('image')} className='rounded-md px-2 py-1 text-base outline-none font-semibold' placeholder='imageurl' type="text" />
        <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit" />
      </form>
    </div>
  )
}

export default Form;
