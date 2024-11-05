import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className='c-space my-20' ref={sectionRef}>
      <div className={`transition-all duration-800 ${isVisible ? 'slide-in-left' : 'opacity-0'} ease-in-out grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full`}>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/Me1.png' alt='gird-1' className='w-full sm:h-276px h-fit object-contain' />
            <div>
              <p className='grid-headtext'>Hi, I am Tonkla</p>
              <p className='grid-subtext'>
                I am a student at King Mongkut's University of Technology North Bangkok, studying Computer Electronic Engineering, interested in front-end development, animated 3D websites, and IoT as well.I'am sociable person who enjoys drinking and always up for an invitation. I like to talk and am a positive thinker.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/skill.png' alt='grid-2' className='w-full sm:w-[400px] h-fit object-contain'/>
              <div>
                <p className='grid-headtext'>Tech Skill</p>
                <p className='grid-subtext'>I am interested in developing mobile apps using Flutter and React, and in the future, I aspire to develop myself into a full-stack developer.</p>
              </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center '>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
