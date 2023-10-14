import React from 'react'

const Blog = () => {
    const blogs = [
        {id:1 , title : 'Creating Streamlined Safeguarding Processes with OneRen', img:'./src/assets/blog1.png'},
        {id:2 , title : 'What are your safeguarding responsibilities and how can you manage them?', img:'./src/assets/blog2.png'},
        {id:3 , title : 'Revamping the Membership Model with Triathlon Australia', img:'./src/assets/blog3.png'},
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-xl mx-auto my-12'>
            <div className='text-center my-8 lg:w-1/2 mx-auto'>
                <h4 className='text-4xl font-semibold mb-3 text-neutralDGray'>Caring is the new marketing</h4>
                <p className=' text-neutralDGray text-sm mx-auto mb-8 md:w-3/4'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='grid gird-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto gap-8 justify-between'>
                {blogs.map(blog => <div key={blog.id} className='cursor-pointer relative mx-auto mb-12'>
                    <img src={blog.img} alt="" className='hover:scale-95 transition-all  duration-300' />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                    <h2 className='text-xl py-3 font-semibold text-neutralDGray'>{blog.title}</h2>
                    <a href="#" className='text-branchPrimary font-bold hover:text-neutralDGray'>Readmore <img src='./src/assets/arrow.png' alt='arrow' className='inline-block ml-0' /></a>
                    </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Blog