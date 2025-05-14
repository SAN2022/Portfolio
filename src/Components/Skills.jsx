const skills = [
    {
        name: 'HTML',
        src: 'https://www.svgrepo.com/show/452228/html-5.svg',
        source: './HTML.jpg'
    },
    {
        name: 'CSS',
        src: 'https://www.svgrepo.com/show/452185/css-3.svg',
        source: './HTML.jpg'
    },
    {
        name: 'Bootstrap',
        src: 'https://www.svgrepo.com/show/353498/bootstrap.svg',
        source: './HTML.jpg'
    },
    {
        name: 'JavaScript',
        src: 'https://www.svgrepo.com/show/353925/javascript.svg',
        source: './HTML.jpg'
    },
    {
        name: 'React JS',
        src: 'https://www.svgrepo.com/show/354259/react.svg',
        source: './HTML.jpg'
    }
]
export default function Skills(){
    return (
        <>
        <div className="container">
        <div className="row" id="skills"> 
        <div className="col-md-12">
        <h2 className="text-center mt-5">Skills</h2>
        <div className="skills mt-2">

        {skills.map((skill, index)=>(
            <div className="card mt-3 me-3" style={{width: '12rem'}} key={index}>
                <img src={skill.src} className="card-img-top mt-3" alt={skill.name} width='100px' height='100px'/>
                <div className="card-body">
                    <h5 className="card-title text-center">{skill.name}</h5>
                    {/* <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
        ))}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}