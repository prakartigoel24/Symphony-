import React from 'react'

const ErrorComponent = () => {
  return (
    <div className='flex flex-col justify-center items-center my-40 bg-slate-200 p-8'>
       <h1 className='text-6xl font-extrabold text-amber-950 py-5'>Oops!</h1>
       <h1 className='text-4xl pb-4 font-medium text-slate-600'>An Error occured. Please try again.</h1>
    </div>
  );
}

export default ErrorComponent;