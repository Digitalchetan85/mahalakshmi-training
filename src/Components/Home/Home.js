import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Home = () => {

    // useState

    const [Value, SetValue] = useState(0);

    const Increment = () => {
        SetValue(Value+1)
        // SetValue([...Value, Value+1]);
    }

    const Decrement = () => {
        SetValue(Value-1)
    }

    return (
        <div className="text-center"> 
            <h1>Home {Value}</h1>

            <Button className="btn btn-primary mx-5" onClick={Increment}>Increment</Button>
            <Button className="btn btn-primary" onClick={Decrement}>Decrement</Button>
        </div>
    )
}

export default Home
