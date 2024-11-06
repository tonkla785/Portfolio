import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import Button1 from '../components/Button1';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('tonkla785@gmail.com')
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const pointsData = [
    { lat: 13.7563, lng: 100.5018, label: 'Bangkok' },
  ];

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
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                atmosphereColor='rgba(255, 255, 255, 0.2)'
                atmosphereAltitude={0.3}
                pointsData={pointsData}
                pointAltitude={0.2}
                pointLabel='label'
                onPointClick={(point) => alert(`I live in ${point.label}`)}
              />
            </div>

            <div><br/>
              <p className='grid-headtext'>
                My Location 
              </p>
              <p className='grid-subtext'>
                Click at yellow bar   !
              </p><br/><br/>
              <a href='#resume' className='w-fit'>
              <Button1 name='My Resume' isBeam containerClass='w-full mt-10' />
              </a>
            </div>

          </div>

        </div>
        
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/Scale.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain brightness-[15]' /><br/>
              <div>
                <p className='grid-headtext'>Inspiration For Coding</p>
                <p className='grid-subtext'>I like to building things through code and I want to Self-development to be better in each day , coding give me a lot of money in the futures.It made me stand by my self and I like to work with computer because I can sit and work all along time. </p>
              </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/Scale1.png"
              alt="grid-4"
              className="w-full md:h-[220px] sm:h-[276px] h-fit object-cover sm:object-top brightness-[14]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">tonkla785@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
