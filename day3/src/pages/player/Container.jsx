import Image from "../../components/player/Image"
import audio from '../../assets/audio/audio1.mp3'
import '../../assets/styles/styles.css'
import Audio from "../../components/player/Audio"
import '../../assets/styles/styles.css'
const Container = ()=>{
    return(
        <>
        <div className="image">
            <Image/>
        </div><div className="player">
            <Audio/>
        </div>
        </>
    )
}
export default Container;