import { useState, useEffect, useRef } from 'react';
import '../../assets/styles/styles.css'
import forward from '../../assets/icons/forward.svg'
import prev from '../../assets/icons/prev.svg'
import data from '../../data'
const Button = (props)=>{
    const [state, setState] = useState('play');
    const [status, setStatus] = useState(true);
    const [sendRequest, setSendRequest] = useState(false)
    const [audio, setAudio] = useState(data[props.index].audio)
    var song = useRef(new Audio(audio));
    useEffect(()=>{
        song.current.pause();
        song.current = new Audio(audio);
        setState('pause')
    },[audio])

    useEffect(()=>{
        if(sendRequest){
            if(state==='pause'){
                // setState('pause');
                song.current.play();
            }
            else{
                // setState('play')
                song.current.pause();
            }
        }
    },[state])


    function Change(){
        (state==='play')? setState('pause'):setState('play');
        setSendRequest(true);
        
    }
    
    function nextInd(){
        props.nextIndex();
        setAudio(data[props.index].audio);
        song.current.play();
    }
    function prevInd(){
        props.prevIndex();
        setAudio(data[props.index].audio);
    }

    return( 
        <>
        <div className="controls">
            <img className='btn' onClick={prevInd} src={prev} alt="" />
            <img className="btn" onClick={Change}  src={require(`../../assets/icons/${state}.svg`)} alt="" />
            <img className='btn' onClick={nextInd}  src={forward} alt="hsrg"/>
        </div>
        </>
    )
}
export default Button;
