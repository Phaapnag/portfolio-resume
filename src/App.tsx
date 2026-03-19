import { 
  MapPin, Mail, ExternalLink, Github, Linkedin, 
  Code2, Lightbulb, Rocket, Briefcase, GraduationCap,
  ChevronDown, Download, Sparkles
} from 'lucide-react'
import './App.css'

function App() {
  const projects = [
    {
      name: "Trade Position Calculator",
      url: "https://tradesizer.vercel.app",
      problem: "Traders manually calculate position sizes in spreadsheets, losing precious seconds during live markets",
      solution: "Built React-based calculator that instantly computes optimal position size based on risk parameters",
      tech: "React, Google AI Studio, Vercel",
      result: "Reduced calculation time from minutes to seconds"
    },
    {
      name: "Candle Catcher",
      url: "https://candlecatcher.vercel.app",
      problem: "Traders struggle to spot candle patterns visually, especially during fast-moving markets",
      solution: "Interactive visual helper with neuomorphism UI design for pattern recognition",
      tech: "React, Responsive design, Google AI Studio, Vercel",
      result: "Clean, accessible interface demonstrating UI/UX principles"
    },
    {
      name: "Virtual Try-On Web UI Prototype",
      url: "#",
      problem: "Concept for virtual try-on experiences (fashion, accessories, lifestyle)",
      solution: "Interactive mockup with responsive layout",
      tech: "React, Figma, Responsive layout",
      result: "Proof-of-concept demonstrating full prototyping workflow"
    },
    {
      name: "Spot the Difference Automation",
      url: "#",
      problem: "Semi-automated pipeline generating game videos for YouTube Shorts",
      solution: "AIGC prompt engineering with semi-auto video editing",
      tech: "Midjourney, flux-schnell, n8n/Make.com",
      result: "Currently testing content quality and engagement metrics"
    }
  ]

  const skills = {
    languages: "React, JavaScript, HTML/CSS, Basic Python",
    tools: "Vercel, Netlify, GitHub, Git, Responsive Design",
    ai: "Google AI Studio, OpenWork Agent (OpenCode), LLMs (Gemini, Perplexity, Grok, Qwen)",
    key: "Fast prototyping, API integration, UI component development, Responsive web design"
  }

  const experience = [
    {
      company: "Legislative Council Secretariat 立法會秘書處",
      period: "Aug 2011 – Dec 2025",
      roles: [
        {
          title: "Public Information Officer",
          period: "Jun 2014 – Dec 2025",
          points: [
            "Managed operations of Legislative Council Souvenir Shop, streamlining processes and improving inventory efficiency",
            "Led and mentored a team of 26 frontline staff; implemented roster optimization reducing conflicts by ~30%",
            "Coordinated with stakeholders to resolve financial reporting and procurement issues",
            "Planned and executed souvenir promotion campaigns, analyzing market trends to drive product decisions",
            "Automated tracking and reporting, reducing administrative overhead"
          ]
        },
        {
          title: "Educator & Programme Developer",
          period: "Aug 2011 – May 2014",
          points: [
            "Designed and delivered engaging educational programmes to diverse audiences",
            "Conducted storytelling and interactive sessions improving audience engagement",
            "Collaborated with multiple departments to plan and execute public programmes"
          ]
        }
      ]
    },
    {
      company: "Teaching Experience",
      period: "Sep 2005 – Aug 2011",
      roles: [
        {
          title: "Yeo Chei Man Senior Secondary School",
          period: "Sep 2005 – Aug 2011",
          points: [
            "Taught F.4 & F.5 Mathematics; Drama module for F.5 Chinese Language",
            "Advisor of Drama Club, Class Tutor; Head of SLP (09–10), Deputy Head of OLE (08–09)",
            "Designed curriculum materials making complex concepts accessible"
          ]
        }
      ]
    }
  ]

  const education = [
    { degree: "Master of Fine Arts (Drama and Theatre Education)", school: "Hong Kong Academy for Performing Arts", year: "2014" },
    { degree: "Postgraduate Diploma in Education (Computer Studies)", school: "Hong Kong Baptist University", year: "2003" },
    { degree: "Bachelor of Electronic Engineering", school: "The Chinese University of Hong Kong", year: "2002" }
  ]

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Open to Opportunities</span>
          </div>
          <h1>WONG WAI HANG</h1>
          <p className="hero-subtitle">Creative Problem Solver | Software Engineer | AI-Assisted Developer</p>
          
          <div className="hero-info">
            <div className="info-item">
              <MapPin size={18} />
              <span>Tseung Kwan O, Hong Kong</span>
            </div>
            <div className="info-item">
              <Mail size={18} />
              <a href="mailto:wongwh1015@gmail.com">wongwh1015@gmail.com</a>
            </div>
            <div className="info-item">
              <Github size={18} />
              <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">github.com/yourname</a>
            </div>
            <div className="info-item">
              <Linkedin size={18} />
              <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourname</a>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="deco-block block-1"></div>
          <div className="deco-block block-2"></div>
          <div className="deco-block block-3"></div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="section summary-section">
        <div className="section-header">
          <Lightbulb size={24} />
          <h2>Professional Summary</h2>
        </div>
        <div className="summary-card">
          <p>
            Career-changing creative problem solver with electronic engineering foundation, 
            <strong> 14+ years operations leadership</strong>, and 
            <strong> rapid AI-assisted development skills</strong>. 
            Built React web apps deployed on Vercel using Google AI Studio and OpenWork Agent, 
            transforming complex trading workflows into intuitive tools in days. 
            Eager to apply systems thinking and fast prototyping to full-stack development challenges.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="section-header">
          <Code2 size={24} />
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h4>Languages & Frameworks</h4>
            <p>{skills.languages}</p>
          </div>
          <div className="skill-card">
            <h4>Dev & Deployment</h4>
            <p>{skills.tools}</p>
          </div>
          <div className="skill-card">
            <h4>AI & Automation</h4>
            <p>{skills.ai}</p>
          </div>
          <div className="skill-card">
            <h4>Key Competencies</h4>
            <p>{skills.key}</p>
          </div>
        </div>
        
        <div className="soft-skills">
          <h4>Soft Skills</h4>
          <div className="skill-tags">
            <span className="tag">Problem-solving</span>
            <span className="tag">Fast Prototyping</span>
            <span className="tag">Stakeholder Collaboration</span>
            <span className="tag">Team Leadership (26-person team)</span>
            <span className="tag">Process Optimization</span>
            <span className="tag">Project Management</span>
            <span className="tag">Agile Mindset</span>
            <span className="tag">Communication</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="section-header">
          <Rocket size={24} />
          <h2>Vibe Coding Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
                {project.url !== "#" && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Problem:</span>
                  <span>{project.problem}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Solution:</span>
                  <span>{project.solution}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tech:</span>
                  <span>{project.tech}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Result:</span>
                  <span>{project.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <div className="section-header">
          <Briefcase size={24} />
          <h2>Professional Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="role-item">
                    <h4>{role.title} <span className="role-period">({role.period})</span></h4>
                    <ul>
                      {role.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <div className="section-header">
          <GraduationCap size={24} />
          <h2>Education</h2>
        </div>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="edu-card">
              <h4>{edu.degree}</h4>
              <p className="edu-school">{edu.school}</p>
              <span className="edu-year">{edu.year}</span>
            </div>
          ))}
        </div>
        <div className="exam-results">
          <h4>Public Examinations</h4>
          <div className="exam-tags">
            <span>HKALE: 1B2C</span>
            <span>HKCEE: 6B2C</span>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section info-section">
        <div className="info-grid">
          <div className="info-card">
            <h4>Expected Salary</h4>
            <p>HK$30,000/month <span className="note">(negotiable)</span></p>
          </div>
          <div className="info-card">
            <h4>Availability</h4>
            <p>Immediate</p>
          </div>
          <div className="info-card">
            <h4>Languages</h4>
            <p>English (fluent), Cantonese (native), Mandarin (conversational)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Last Updated: March 2026 | Version: Software Engineer Track</p>
        <a href="/Wong_Wai_Hang_Resume.pdf" download className="download-btn">
          <Download size={18} />
          Download PDF
        </a>
      </footer>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronDown size={24} />
      </div>
    </div>
  )
}

export default App
