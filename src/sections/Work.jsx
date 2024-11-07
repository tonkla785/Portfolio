import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { Suspense, useState ,useEffect, useRef} from 'react'
import { myProjects } from '../constants/index.js';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import Monitor from '../components/Monitor.jsx';

const Work = () => {

  const projectCount = myProjects.length;

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
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

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];
  
  return (
    <section className='c-space my-20'  ref={sectionRef} id='work'>
      <div className={`transition-all duration-800 ${isVisible ? 'slide-in-right' : 'opacity-0'} ease-in-out`}>
        <p className='head-text'>My Work</p>

        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full '>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl'/>
                </div>
                <div className='flex flex-col gap-5 text-white-600 my-5'>
                  <p className='text-white text-2xl font-semibold animateText'>{currentProject.title}</p>
                  <p className='animateText'>{currentProject.desc}</p>
                  <p className='animateText'>{currentProject.subdesc}</p>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                  <div className='flex items-center gap-3'>
                    {currentProject.tags.map((tag,index) => (
                      <div key={index} className='tech-logo'>
                        <img src={tag.path} alt={tag.name} />
                      </div>
                    ))}
                  </div>
                  <a className='flex items-center gap-2 cursor-pointer text-white-600 relative' href={currentProject.href} target='_blank' rel='noreferrer'>
                    <p>Check GitHub</p>
                    <img src='/assets/arrow-up.png' className='w-3 h-3' alt='arrow' />
                  </a>
                </div>

                <div className="flex justify-between items-center mt-7">
                  <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                    <img src="/assets/left-arrow.png" alt="left arrow" />
                  </button>

                  <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                    <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                  </button>
                </div>
            </div>

            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full shadow-2xl shadow-black-200">
              <Canvas>
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 5]} />
                <Center>
                  <Suspense>
                    <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                      <Monitor 
                        texture={currentProject.texture}
                        scale = {0.35}
                        position = {[0,1.5,0]}
                      />
                    </group>
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2}  />
              </Canvas>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Work