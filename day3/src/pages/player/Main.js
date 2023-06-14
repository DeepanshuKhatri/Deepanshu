import Container from "./Container"
import '../../assets/styles/styles.css'
import List from './List'
import { useState } from "react"
const Main = ()=>{
    
return(
    <>
    <div className="container">
        <Container/>
        {/* <audio src="../"></audio> */}
    </div>
    <div className="list">
        <List/>
    </div>
    </>
)
}
export default Main;