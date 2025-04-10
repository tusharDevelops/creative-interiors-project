'use client'; // 👈 Add this as the very first lineimport { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import useDimension from '@/hooks/use-dimension';
import Model from './model';
import { Canvas } from '@react-three/fiber';

export default function Scene() {
  const device = useDimension();

  if (!device.width || !device.height) {
    return null;
  }

  const frustumSize = device.height;
  const aspect = device.width / device.height;
  return (
    <div className='h-screen w-full relative bg-gray-950 text-white'>
      <Canvas>
        <OrthographicCamera
          makeDefault
          args={[
            (frustumSize * aspect) / -2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
            1000,
          ]}
          position={[0, 0, 2]}
        />
        <Model />
      </Canvas>
      <article className='absolute w-full bottom-14  text-center'>
        <h1 className='2xl:text-8xl text-7xl tracking-tighter uppercase'>
          Independent
        </h1>
        <p className='2xl:text-2xl text-xl'>
          Live for yourself, not for society.
        </p>
      </article>
    </div>
  );
}