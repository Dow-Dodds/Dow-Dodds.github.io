

import heroImg from "./../images/dowhero.jpg"
import flowerBtn from "./../images/bigblueflower.png"
// import arc from "./../images/arc.svg"


const Hero = () => {

  

    return (
        <div id="hero">
            <div id="heading-wrapper">
                <h1>Dow Dodds</h1>
            </div>
            <div id="hero-image">
                <img src={heroImg} alt="Dow" />
            </div>
            <div id="hero-bottom">             
                    <img id="abtBtn" src={flowerBtn} alt="about button" />        
                <div id="role">
                    <h3>UX/UI & WEB DESIGNER</h3>
                </div>
            </div>
        </div>
    )
    
}

export default Hero;