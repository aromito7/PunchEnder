import romito from '../images/romito.png';
import auch from '../images/auch.jpeg';
import ki from '../images/ki.jpg';

function AboutUs() {
    return (
        <div class="about-page">
            <h1>About Us</h1>
            <div class="team-members">
                <div class="team-member">
                    <img src="https://avatars.githubusercontent.com/u/70304890?v=4" alt="kim-pto"></img>
                    <h2>Abe Kim</h2>
                    <a target="_blank" href="https://github.com/arareabe">GitHub</a>
                    <a target="_blank" href="https://www.linkedin.com/in/abraham-kim-010132234/">LinkedIn</a>
                </div>
                <div class="team-member">
                    <img src={auch} alt="auch-pto"></img>
                    <h2>Alex Auch</h2>
                    <a target="_blank" href="https://github.com/AuchnotOuch">GitHub</a>
                    <a target="_blank" href="https://www.linkedin.com/in/alex-auch/">LinkedIn</a>
                </div>
                <div class="team-member">
                    <img src={romito} alt="romito-pto"></img>
                    <h2>Alex Romito</h2>
                    <a target="_blank" href="https://github.com/aromito7">GitHub</a>
                    <a target="_blank" href="https://www.linkedin.com/in/alexander-romito-b0bbb1149/">LinkedIn</a>
                </div>
                <div class="team-member">
                    <img src={ki} alt="ki-pto"></img>
                    <h2>Isaac Ki</h2>
                    <a target="_blank" href="https://github.com/isaacki1003">GitHub</a>
                    <a target="_blank" href="https://www.linkedin.com/in/isaac-ki-973894111/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
