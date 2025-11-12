import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-page">
        <div className="skills-top">
            <h1 className="skills-title">Technical Skills</h1>
            <div className="skills-title2">All the tools and technologies I use to bring my ideas to life</div>
        </div>
        <div className="skills-grid">
            <div className="skills-languages">
                <h3 className="skills-category-title">Programming Languages</h3>
                <div className="skills-list">
                    <div className="skill-item">JavaScript</div>
                    <div className="skill-item">Python</div>
                    <div className="skill-item">Java</div>
                    <div className="skill-item">HTML</div>
                    <div className="skill-item">CSS</div>
                    <div className="skill-item">C++</div>
                    <div className="skill-item">C</div>
                    <div className="skill-item">SQL</div>
                    <div className="skill-item">R</div>
                    <div className="skill-item">LaTeX</div>

                </div>
            </div>
            <div className="skills-frameworks">
                <h3 className="skills-category-title">Frameworks & Libraries</h3>
                <div className="skills-list">
                    <div className="skill-item">React.js</div>
                    <div className="skill-item">Node.js</div>
                    <div className="skill-item">Express.js</div>
                    <div className="skill-item">Tailwind CSS</div>
                    <div className="skill-item">PyTest</div>
                    <div className="skill-item">JUnit</div>
                    <div className="skill-item">Jest</div>
                </div>
            </div>
            <div className="skills-tools">
                <h3 className="skills-category-title">Tools & Technologies</h3>
                <div className="skills-list">
                    <div className="skill-item">Git</div>
                    <div className="skill-item">GitHub</div>
                    <div className="skill-item">MySQL</div>
                    <div className="skill-item">MongoDB</div>
                    <div className="skill-item">PostgreSQL</div>
                    <div className="skill-item">Docker</div>
                    <div className="skill-item">Bash</div>
                    <div className="skill-item">VS Code</div>
                    <div className="skill-item">IntelliJ</div>
                    <div className="skill-item">PyCharm</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills