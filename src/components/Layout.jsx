import React, { Children, Suspense, useEffect } from 'react'
import { Model } from './ModelMe'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Scene } from 'three'

const Layout = (props) => {
    return (
        <>
            <Navbar />
        <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col justify-center font-bold text-lg lg:text-2xl h-10 lg:h-full">
            {props.children}
            </div>
            <div className="lg:absolute right-0 w-screen lg:w-1/2 h-96 lg:h-screen -z-50">
                            <Canvas camera={{ fov: 100, position: [2, 3, 5] }}>
                    <ambientLight intensity={0.7} position={[5, 5, 5]} />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                </Canvas>
                </div>
            </div>
        </>
    )
}

export default Layout