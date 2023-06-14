import Button from "./Button.jsx";
import "../../assets/styles/styles.css";
import { useState } from "react";
import data from '../../data.js'

const Display = () => {
    const [index, setIndex] = useState(0);

    const nextIndex=()=>{
      if(index <data.length-1){
        setIndex(index+1);
      }
    }

    const prevIndex =()=>{
      if(index >0){
        setIndex(index-1);
      }
    }

  return (
    <>
      <div className="display">
        <div className="details">
          <div className="singer">
            <h2>{data[index].singer}</h2>
          </div>
          <div className="name"> 
            <p>{data[index].name}</p>
          </div>
        </div>
        <Button index={index} nextIndex={nextIndex} prevIndex={prevIndex}/>
      </div>
    </>
  );
};
export default Display;
