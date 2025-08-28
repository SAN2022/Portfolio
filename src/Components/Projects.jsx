// import CRUD from '../assets/Web_Images/CRUD.png'
import Weather from '../assets/Web_Images/Weather.png'
import Currency from '../assets/Web_Images/Currency.png'
import BMI from '../assets/Web_Images/BMI.png'
import { motion } from "motion/react";

const projectDetails = [
    // {
    //     name: 'CRUD Application',
    //     description: 'React JS CRUD Application with Node JS Backend handling JSON data',
    //     img: CRUD,
    //     github_link: '',
    //     live: ''
    // },
    {
        name: 'Weather Application',
        description: 'Search by City Name | Weather application with Open Weather API',
        img: Weather,
        github_link: 'https://github.com/SAN2022/Weather-application',
        live: 'https://san2022.github.io/Weather-application/'
    },
    {
        name: 'Currency Converter',
        description: 'Convert from currency to currency',
        img: Currency,
        github_link: 'https://github.com/SAN2022/Currency-converter',
        live: 'https://san2022.github.io/Currency-converter/'
    },
    {
        name: 'BMI Calculator',
        description: 'Calculate Body Mass Index by providing Height and Weight',
        img: BMI,
        github_link: 'https://github.com/SAN2022/BMI-Calculator-App',
        live: 'https://san2022.github.io/BMI-Calculator-App/'
    }
]
export default function Projects(){
    return (
        <>
            <div 
            className="container" id='projects'>
                <div className="row">
                    <h2 className="text-center mt-5">Main Projects</h2>
                    <div 
                        className="col-md-12 projects">
                            {
                                projectDetails.map((project, index)=>(
                                    <div className="card mt-3" style={{width: "18rem"}} key={index}>
                                        {/* <div className='' style={{width: '100%', height: '200px', backgroundImage: `url(${project.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '70% 20%'}}></div> */}
                                        <img src={project.img} className="card-img-top" alt="crud.png"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{project.name}</h5>
                                            <p className="card-text">{project.description}</p>
                                            {project.live && <a href={project.live} target="_blank" className="btn btn-primary me-2">View Project</a>}
                                            <a href={project.github_link} target="_blank" className="btn btn-primary">View Code</a>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </>
    )
}