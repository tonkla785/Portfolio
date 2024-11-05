import { Canvas } from "@react-three/fiber"
import Something from "../components/Something"
import { Suspense, useRef, useEffect } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import gsap from 'gsap';
import Button from "../components/Button"


const Hero = () => {
    
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: "+=6.28319", 
        duration: 7,    
        repeat: -1,     
        ease: "none",   
      });
    }
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative over-flow-x-clip">
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
        <div className="transition-all duration-500 slide-in-top ease-in-out w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"> Hi, I am Ton-kla <span className="waving-hand">👾</span></p>
            <p className="hero_tag text-gray_gradient text-center">Font-end Developer & Iot Developer</p>
        </div>

        <div className="transition-all duration-800 slide-in-top ease-in-out w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>
                <perspectiveCamera makeDefault position = {[0,0,30]} />

                <Something  
                    ref={groupRef}
                    scale ={sizes.deskScale}
                    position = {sizes.deskPosition} 
                    rotation = {[0,-Math.PI ,0]}
                    />
                    
                    <group>
                        <ReactLogo 
                        scale = {sizes.reactScale}
                        position = {sizes.reactLogoPosition}/>
                        <Cube 
                        scale={sizes.cubeScale} 
                        position={sizes.cubePosition}/>
                    </group>

                    <ambientLight intensity={1.5}/>
                    <directionalLight position={[10,10,100]} intensity={1}/>
                </Suspense>
            </Canvas> 
        </div>
        <div className="transition-all duration-900 slide-in-bottom ease-in-out absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#contact" classname="w-fit">
            <Button name="Let's go if you want to work with me" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
    </section>
  )
}

export default Hero