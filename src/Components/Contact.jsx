import contact_us from '../assets/Web_Images/Contact us.png'
import { useEffect } from "react"
import { useState } from "react"

export default function Contact(){
    const initialValues = {name: '', email: '', message: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        console.log(formErrors)

        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
            alert('Thanks for Submitting!')
        }
    },[formErrors])

    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    const validate = (values) =>{
        const errors = {}
        const namePattern = /^[a-zA-Z ]+$/
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        if(!values.name){
            errors.name = 'Name is required'
        }else if(!namePattern.test(values.username)){
            errors.username = 'Username must be an alphabetic characters'
        }
        if(!values.email){
            errors.email = 'Email is required'
        }else if(!emailPattern.test(values.email)){
            errors.email = 'Please enter a valid email address!'
        }
        if(!values.message){
            errors.message = 'Message is required'
        }
        return errors
    }
    return (
        <>
            <div className="order-1 container" id='contact'>
            {/* <h2 className="text-center mt-3">Contact form</h2> */}
            <div className="row mt-4">
                <div className="col-md-6 order-2 order-md-1">
                <h2>Contact Form</h2>
                <form>
                    <div className="">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" value={formValues.name} onChange={handleChange}/>
                    <p className="text-danger">{formErrors.name}</p> 
                    </div>

                    <div className="">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange}/>
                    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                    <p className="text-danger">{formErrors.email}</p>
                    </div>

                    <div className="">
                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                    <textarea type="text" className="form-control" name="message" id="exampleInputPassword1" value={formValues.message} onChange={handleChange}/>
                    <p className="text-danger">{formErrors.message}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                </form>
                </div>

                <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                <div className="contact">
                    <img src={contact_us} alt="contact-us" width='100%'/>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}