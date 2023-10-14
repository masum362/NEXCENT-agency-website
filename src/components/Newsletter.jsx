import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 my-8 max-w-screen-xl mx-auto  py-16' id='testimonial'>
      <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
        <div className='text-center'>
          <h2 className='lg:text-4xl text-3xl text-neutralDGray font-semibold mb-6 lg:leading-snug'>Pellentesque suscipit fringilla libero eu.</h2>
          <div className='flex items-center justify-center gap-8'>
            <button className='btn-primary text-white'>Get A Demo<svg className='inline-block text-2xl ml-2' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676" stroke="white" />
            </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter