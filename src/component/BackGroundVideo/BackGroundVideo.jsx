import './BackGroundVideo.css'

const BackGroundVideo = (props) => {
    return (
        <video autoPlay loop muted src={ props.src } type='video/webm' id={props.id} className={props.className}/>
    )
}

export default BackGroundVideo;
