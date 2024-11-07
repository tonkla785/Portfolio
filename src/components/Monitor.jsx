import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import gsap from 'gsap';

const Monitor = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/monitor.glb');
  const { actions } = useAnimations(animations, group);
  const pictureTexture = useTexture(props.texture || '/textures/project/project.png');

  useEffect(() => {
    if (pictureTexture) {
      pictureTexture.flipY = false;
    }
  }, [pictureTexture]);

  useEffect(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [pictureTexture]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, -0.001, Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[0, 0, Math.PI / 2]} scale={[19.412, 536.206, 242.198]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Screen_0.geometry}
              material={materials.Screen}
            >
              <meshBasicMaterial map={pictureTexture} toneMapped={false} />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Body_0_1.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ultrawide_Monitor_Lights_0.geometry}
              material={materials.Lights}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/monitor.glb');
export default Monitor;
