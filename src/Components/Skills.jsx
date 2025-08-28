// import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiJavascript } from "react-icons/si";

// export default function Skills() {
//   const skills = [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-600" size={60} /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-600" size={60} /> },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" size={60} /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={60} /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={60} /> },
//     { name: "React JS", icon: <FaReact className="text-cyan-400" size={60} /> },
//   ];

//   return (
//     <section className="py-10 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-110 hover:rotate-3"
//           >
//             {skill.icon}
//             <p className="mt-3 text-sm font-semibold text-gray-700">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { color, motion } from "motion/react";
import tailwind from '../assets/Web_Images/tailwind.svg';

const skills = [
    {
        name: 'HTML',
        src: 'https://www.svgrepo.com/show/452228/html-5.svg',
    },
    {
        name: 'CSS',
        src: 'https://www.svgrepo.com/show/452185/css-3.svg',
    },
    {
        name: 'Bootstrap',
        src: 'https://www.svgrepo.com/show/353498/bootstrap.svg',
    },
    {
        name: 'Tailwind CSS',
        src: tailwind,
    },
    {
        name: 'JavaScript',
        src: 'https://www.svgrepo.com/show/353925/javascript.svg',
    },
    {
        name: 'React JS',
        src: 'https://www.svgrepo.com/show/354259/react.svg',
    }
]
export default function Skills(){
    return (
        <>
        <div 
        className="container">
        <div className="row" id="skills"> 
        <div className="col-md-12">
        <h2 className="text-center mt-5">Skills</h2>
        <div className="skills mt-2">

        {skills.map((skill, index)=>(
            <div className="card mt-3 me-3" style={{width: '10rem'}} key={index}>
                <img src={skill.src} className="card-img-top mt-3" alt={skill.name} width='100px' height='100px'/>
                <div className="card-body">
                    <h5 className="card-title text-center">{skill.name}</h5>
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