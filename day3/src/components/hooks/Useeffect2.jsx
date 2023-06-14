import { useEffect, useState } from "react";

const Useeffect2 =()=>{
    const [num, setNum] = useState(0);
    const [multiply, setMultiply] = useState(0);
    useEffect(()=>{
        setMultiply(num*num);
    }, [num])

    return(
        <>
            <h1>ComponentDidUpdate</h1>
            <h3>Count:{num}</h3>
            <h3>Square:{multiply}</h3>
            <button onClick={()=>setNum(num+1)}>click</button>
            
        </>
    )
}
export default Useeffect2;