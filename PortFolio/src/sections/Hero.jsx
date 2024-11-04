import { Canvas } from "@react-three/fiber"
import Something from "../components/Something"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { Leva, useControls } from "leva"

const Hero = () => {
    const { scale,positionX,positionY,positionZ,rotationX,rotationY ,rotationZ } = useControls("Something", {
        scale: {
            value: 0,
            min: 0.1,
            max: 10,
        },
        positionX: {
            value: 0,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 0,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        },
    });

  return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans"> Hi, I am Ton-kla <span className="waving-hand">🍀</span></p>
            <p className="hero_tag text-gray_gradient text-center">Font-end Developer & Iot Developer</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Leva/>
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>
                <perspectiveCamera makeDefault position={[0,0,30]}/>
                <Something 
                    // scale = {0.6}  
                    position = {[positionX,positionY,positionZ]} 
                    rotation = {[rotationX,rotationY ,rotationZ]}
                    scale ={[scale,scale,scale]}
                    />
                    
                    <ambientLight intensity={1.5}/>
                    <directionalLight position={[10,10,100]} intensity={1}/>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero