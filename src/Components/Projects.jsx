// import CRUD from '../assets/Web_Images/CRUD.png'
import Weather from '../assets/Web_Images/Weather.png'
import Currency from '../assets/Web_Images/Currency.png'
import BMI from '../assets/Web_Images/BMI.png'
import Aswin from '../assets/Web_Images/Aswin.png'
import Maaruthi from '../assets/Web_Images/Maaruthi.png'
import dashboard from './../assets/Web_Images/dashboard.png';
import QuizApp from '../assets/Web_Images/Quiz.png';
import QR from './../assets/Web_Images/QR.png';

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const allProjects = [
  {
    type: "main",
    name: "Leads Management Dashboard",
    img: dashboard,
    link: "https://leads-dashboard-nu.vercel.app/",
    code: 'https://github.com/SAN2022/Leads-Dashboard',
    desc: "Responsive dashboard built with React & Tailwind CSS for managing leads."
  },
  {
    type: "main",
    name: "Aswin Homeopathy Clinic Website",
    img: Aswin,
    link: 'https://aswin-homeo-clinic.vercel.app/',
    code: 'https://github.com/SAN2022/aswin-homeo-clinic',
    desc: "Modern responsive website built for a client using React and Tailwind CSS."
  },
  {
    type: "main",
    name: "Sri Maaruthi Siddha Clinic Website",
    img: Maaruthi,
    link: 'https://maaruthi-siddha-clinic.vercel.app/',
    code: 'https://github.com/SAN2022/Maaruthi-Siddha-Clinic',
    desc: "Modern responsive website built for a client using React and Tailwind CSS."
  },
   {
    type: "main",
    name: "Weather App",
    img: Weather,
    link: "https://san2022.github.io/Weather-application/",
    code: 'https://github.com/SAN2022/Weather-application',
    desc: "Fetches live weather data using OpenWeather API."
  },
  {
    type: "main",
    name: "Currency Converter",
    img: Currency,
    link: "https://san2022.github.io/Currency-converter/",
    code: 'https://github.com/SAN2022/Currency-converter',
    desc: "A simple CRUD Todo app built using React."
  },
  {
    type: "main",
    name: "BMI Calculator",
    img: BMI,
    link: "https://san2022.github.io/BMI-Calculator-App/",
    code: 'https://github.com/SAN2022/BMI-Calculator-App',
    desc: "A simple CRUD Todo app built using React."
  },
  {
    type: "mini",
    name: "Quiz App",
    img: QuizApp,
    link: 'https://san2022.github.io/Quiz-application/',
    code: 'https://github.com/SAN2022/Quiz-application',
    desc: "Generates downloadable QR codes with customizable size."
  }, 
   {
    type: "mini",
    name: "QR Code Generator",
    img: QR,
    link: "https://san2022.github.io/QR-Code-Generator/",
    code: 'https://github.com/SAN2022/QR-Code-Generator',
    desc: "A simple CRUD Todo app built using React."
  },
//   {
//     type: "mini",
//     name: "Portfolio Website",
//     img: "https://via.placeholder.com/400x200",
//     link: "#",
//     code: '',
//     desc: "My personal portfolio website showcasing my skills & projects."
//   },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === filter);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">
          My Projects
        </h2>
{/* Underline */}
        <motion.div
          className="w-20 h-1 bg-green-600 mx-auto mb-10 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["all", "main", "mini"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-md font-semibold capitalize transition cursor-pointer ${
                filter === tab
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab === "all" ? "All Projects" : tab === "main" ? "Main Projects" : "Mini Projects"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 mr-3 inline-block text-sm px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    View Project
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
