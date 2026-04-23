import './Skills.css';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="skills-page"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="skills-top">
                <h1 className="skills-title">Technical Skills</h1>
                <div className="skills-title2">All the tools and technologies I use to bring my ideas to life</div>
            </div>
            <div className="skills-grid">
                <div className="skills-languages">
                    <h3 className="skills-category-title">Programming Languages</h3>
                    <div className="skills-list">
                        <div className="skill-item">JavaScript</div>
                        <div className="skill-item">TypeScript</div>
                        <div className="skill-item">Java</div>
                        <div className="skill-item">Python</div>
                        <div className="skill-item">HTML/CSS</div>
                        <div className="skill-item">C++</div>
                        <div className="skill-item">C</div>
                        <div className="skill-item">SQL</div>
                        <div className="skill-item">LaTeX</div>
                    </div>
                </div>
                <div className="skills-frameworks">
                    <h3 className="skills-category-title">Frameworks & Libraries</h3>
                    <div className="skills-list">
                        <div className="skill-item">ReactJS</div>
                        <div className="skill-item">NextJS</div>
                        <div className="skill-item">NodeJS</div>
                        <div className="skill-item">ExpressJS</div>
                        <div className="skill-item">FastAPI</div>
                        <div className="skill-item">TailwindCSS</div>
                        <div className="skill-item">Django</div>
                        <div className="skill-item">PyTest</div>
                        <div className="skill-item">JUnit</div>
                        <div className="skill-item">Jest</div>
                    </div>
                </div>
                <div className="skills-tools">
                    <h3 className="skills-category-title">Tools & Technologies</h3>
                    <div className="skills-list">
                        <div className="skill-item">Git</div>
                        <div className="skill-item">MySQL</div>
                        <div className="skill-item">MongoDB</div>
                        <div className="skill-item">PostgreSQL</div>
                        <div className="skill-item">Prisma</div>
                        <div className="skill-item">Docker</div>
                        <div className="skill-item">AWS</div>
                        <div className="skill-item">Google Cloud</div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Skills