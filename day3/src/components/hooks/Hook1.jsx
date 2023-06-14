import {useState} from 'react'
const Hook1 =()=>{
    const [color, setColor] = useState("red");
    return(
        <>
        <h1>Color is {color}</h1>
        <button onClick={()=>{setColor("blue")}}>Click</button>
        </>
    )
}
export default Hook1;