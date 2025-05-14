import my_img from '../assets/Web_Images/My_Image.png'
import '../App.css'

export default function Header(){
    return (
        <>
            <header>
                <div id='header'>
                    <img src={my_img} alt="" width='120px'/>
                    <h2>I'm Santhosh T</h2>
                    <h3>Front-end developer</h3>
                    <h4>A passionate web developer with the skills HTML, CSS, Bootstrap, JavaScript, React JS</h4>
                    <button className='connect btn'>Connect with me</button>
                    <button className='resume btn'>Download Resume</button>
                    <div className="social">
                        <i class="bi bi-whatsapp"></i>
                        <i class="bi bi-github"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
            </header>
        </>
    )
}