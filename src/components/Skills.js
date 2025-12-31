import React from "react";
import { motion } from "framer-motion";

function Skills() {
    const skillsData = {
        "Languages": ["Java", "Python", "JavaScript", "TypeScript", "C#", "OCaml", "C", "Rust", "Bash", "MATLAB", "HTML", "CSS"],
        "Frameworks & Libraries": ["React.js", "Flask", "Spring Boot", "Django", ".NET", "FastAPI", "Next.js", "BeautifulSoup", "Pandas"],
        "Tools & Platforms": ["Azure", "Azure OpenAI Service", "Git", "GitHub", "GitHub Copilot", "PostgreSQL", "Unix/Linux"]
    };

    return (
        <section id="skills" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Skills
                    </h2>
                    <div className="w-20 h-0.5 bg-black mx-auto mb-16"></div>

                    <div className="space-y-8">
                        {Object.entries(skillsData).map(([category, skills], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
