import { motion } from "framer-motion";

const skills = [
  { name: "HTML", src: "https://www.svgrepo.com/show/452228/html-5.svg" },
  { name: "CSS", src: "https://www.svgrepo.com/show/452185/css-3.svg" },
  { name: "Bootstrap", src: "https://www.svgrepo.com/show/353498/bootstrap.svg" },
  {
    name: "Tailwind CSS",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-16 h-16 mb-4"
      >
        <path
          fill="#38bdf8"
          d="M24,9.5c-6.667,0-10.833,3.333-12.5,10c2.5-3.333,5.417-4.583,8.75-3.75
          c1.902,0.475,3.264,1.875,4.757,3.416C27.541,21.708,30.417,24,36.5,24c6.667,0,10.833-3.333,12.5-10
          c-2.5,3.333-5.417,4.583-8.75,3.75c-1.902-0.475-3.264-1.875-4.757-3.416C32.459,11.792,29.583,9.5,24,9.5z 
          M11.5,24c-6.667,0-10.833,3.333-12.5,10c2.5-3.333,5.417-4.583,8.75-3.75c1.902,0.475,3.264,1.875,4.757,3.416
          C15.041,36.208,17.917,38.5,24,38.5c6.667,0,10.833-3.333,12.5-10c-2.5,3.333-5.417,4.583-8.75,3.75
          c-1.902-0.475-3.264-1.875-4.757-3.416C20.459,25.792,17.583,24,11.5,24z"
        />
      </svg>
    ),
  },
  { name: "JavaScript", src: "https://www.svgrepo.com/show/353925/javascript.svg" },
  { name: "React JS", src: "https://www.svgrepo.com/show/354259/react.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Underline */}
        <motion.div
          className="w-20 h-1 bg-green-600 mx-auto mb-10 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border-2 border-transparent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: -2,
                boxShadow: "0px 0px 20px rgba(34,197,94,0.6)",
                borderColor: "#22c55e",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* If skill has SVG, render that. Otherwise render <img> */}
              {skill.svg ? (
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {skill.svg}
                </motion.div>
              ) : (
                <motion.img
                  src={skill.src}
                  alt={skill.name}
                  className="w-16 h-16 object-contain mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              )}
              <h5 className="text-gray-700 font-semibold">{skill.name}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
