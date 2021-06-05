import React, { useEffect, useState } from 'react'

// useEffect clean up function
const UseEffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const actualWidth = () => {
        console.log('I am a width');
        setWidthCount(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize' , actualWidth)
        return () =>{
            window.removeEventListener('resize' , actualWidth)
        }
    })
    return (
        <div>
            <p>The actual size of the window is : </p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2
