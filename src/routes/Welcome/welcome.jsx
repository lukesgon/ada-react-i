import './welcome.css'
import ContentBox from '../../component/ContentBox/ContentBox';
import BackGroundVideo from '../../component/BackGroundVideo/BackGroundVideo';
import Video from '../../assets/joystick.webm'

const Welcome = () => {
    return (
        <>
            <ContentBox>
                <BackGroundVideo src={ Video } id='background-video'/>
            </ContentBox>
            <ContentBox id='intro-content'>
                <h2>GamerHub</h2>
                <p>Onde a comunidade gamer se encontra!</p>
                <p>Compartilhe suas opiniões sobre os jogos que você experimenta e descubra novas experiências que vão te surpreender. Estamos aqui para ajudar você a encontrar os melhores jogos, com avaliações confiáveis, da comunidade, para a comunidade.</p>
            </ContentBox>
        </>
    )
}

export default Welcome;