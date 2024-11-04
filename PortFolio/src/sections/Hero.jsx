import { Canvas } from "@react-three/fiber"
import Something from "../components/Something"
import { Suspense, useRef, useEffect } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import gsap from 'gsap';

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
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"> Hi, I am Ton-kla <span className="waving-hand">🍀</span></p>
            <p className="hero_tag text-gray_gradient text-center">Font-end Developer & Iot Developer</p>
        </div>

        <div className="w-full h-full absolute inset-0">
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
    </section>
  )
}

export default Hero