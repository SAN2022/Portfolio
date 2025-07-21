// import my_img from '../assets/Web_Images/My_Image.png'
import '../App.css'
import Resume from '../assets/Resume.pdf'
import { motion } from "motion/react";

export default function Header(){
    const downloadResume = () =>{
        fetch(Resume)
        .then((res) => res.blob())
        .then((blob) => {
            const link = document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download = "Resume.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
    }
    return (
        <>
            <header>
                <div id='header'>
                {/* <img src={my_img} alt="" width='120px'/> */}
                    <h2>I'm Santhosh T</h2>
                    <h3>Website developer</h3>
                    <h4>A passionate web developer with the skills HTML, CSS, Bootstrap, JavaScript, React JS and Wordpress</h4>
                    <button className='connect btn'><a href="https://wa.me/+918344571951" target='_blank'>Connect with me</a></button>
                    <button className='resume btn' onClick={downloadResume}>Download Resume</button>
                    <div className="social-icons">
                        <a className='social-links' href="https://wa.me/+918344571951" target='_blank'><i class="bi bi-whatsapp"></i></a>
                        <a className='social-links' href="https://github.com/SAN2022" target='_blank'><i class="bi bi-github"></i></a>
                        <a className='social-links' href="https://www.linkedin.com/in/santhosh-t-4159ba228/" target='_blank'><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </header>
        </>
    )
}