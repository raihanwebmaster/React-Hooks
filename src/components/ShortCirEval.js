import React, { useState } from 'react'

const ShortCirEval = () => {
    const [demo, setDemo] = useState('hi');
    return (
        <div>
            <h1 className="h1style">{ demo || "uddin"}</h1>
            <h1 className="h1style">{ "uddin" || demo }</h1>
            <h1 className="h1style">{ demo && "raihan"}</h1>
        </div>
    )
}

export default ShortCirEval
