import { useState } from 'react'
import './../App.css'
import Web_dev from '../assets/Web_Images/Web Development Internship.png'

const internshipDetails = [
    {
        name: 'Web Development Internship',
        description: 'Have attended and completed Web Development Internship at Kashiv Info Tech',
        img: Web_dev
    }
]
export default function Internships(){
    const [show, setShow] = useState(false)

    const handleButton = () =>{
        setShow(!show)
    }

    return (
        <>
            <div className="container" id='internships'>
                <div className="row">
                    <h2 className="text-center mt-5">Internships</h2>
                    <div className="col-md-12 internships">
                        {
                            internshipDetails.map((internship, index)=>(
                                <div className="card mt-3" style={{width: "18rem"}} key={index}>
                                    <img src={internship.img} className="card-img-top" alt="crud.png"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{internship.name}</h5>
                                        <p className="card-text">{internship.description}</p>
                                        <button className="btn btn-primary me-2" onClick={handleButton}>View Certificate</button>
                                    </div>
                                </div>
                            ))
                        }

                        {show && (<div className="toggle">
                            <img src={Web_dev} alt=""/>
                            <button onClick={handleButton} className='btn btn-primary'>Close</button>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}