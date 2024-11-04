import React from 'react'

const About = () => {
  return (
    <section className='c-space my-20'>
        <div className='gird xl:grid-cols-3 xl:gird-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='gird-container'>
                    <img src='/assets/Me1.png' alt='gird-1' className='w-full' sm:h-276px h-fit object-contain />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About