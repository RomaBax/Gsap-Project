import React, { useLayoutEffect } from 'react'
import './Home.css'
import gsap from "gsap"

function Home() {

    useLayoutEffect(() => {
        gsap.to(".box1", { rotation: 360, delay: 3 })
        gsap.to(".box2", { scale: 2, duration: 3 })
    }, [])

    return (
        <>
            <div className='Home'>
                <div className="box1">Box 1</div>
                <div className="box2">Box 2</div>
            </div>
        </>

    )
}

export default Home