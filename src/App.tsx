import { useState, useEffect } from 'react'
import { 
  MapPin, Mail, ExternalLink, Github, 
  Code2, Lightbulb, Rocket, Briefcase, GraduationCap,
  ChevronDown, Download, Sparkles, Menu, X, FileText
} from 'lucide-react'
import { supabase, TABLES } from './supabase'
import './App.css'

interface Role {
  title: string
  period: string
  points: string[]
}

interface Experience {
  id: number
  company: string
  period: string
  roles: Role[]
}

interface Education {
  id: number
  degree: string
  school: string
  year: string
}

interface Skill {
  id: number
  category: string
  content: string
}

interface Project {
  id: number
  name: string
  url: string
  problem: string
  solution: string
  tech: string
  result: string
}

interface Exam {
  id: number
  label: string
  value: string
}

interface Info {
  id: number
  key: string
  value: string
}

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [experience, setExperience] = useState<Experience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [exams, setExams] = useState<Exam[]>([])
  const [info, setInfo] = useState<Info[]>([])
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = [
    { id: 'summary', label: 'Summary', icon: <Lightbulb size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Rocket size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'exams', label: 'Exams', icon: <GraduationCap size={18} /> },
    { id: 'info', label: 'Info', icon: <FileText size={18} /> },
  ]

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    const [expRes, eduRes, skillRes, projRes, examsRes, infoRes] = await Promise.all([
      supabase.from(TABLES.EXPERIENCE).select('*').order('display_order'),
      supabase.from(TABLES.EDUCATION).select('*').order('display_order'),
      supabase.from(TABLES.SKILLS).select('*'),
      supabase.from(TABLES.PROJECTS).select('*').order('display_order'),
      supabase.from(TABLES.EXAMS).select('*'),
      supabase.from(TABLES.INFO).select('*'),
    ])

    if (expRes.data) setExperience(expRes.data)
    if (eduRes.data) setEducation(eduRes.data)
    if (skillRes.data) setSkills(skillRes.data)
    if (projRes.data) setProjects(projRes.data)
    if (examsRes.data) setExams(examsRes.data)
    if (infoRes.data) setInfo(infoRes.data)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="app loading">
        <div className="loader">Loading...</div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Sticky Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Menu Dropdown */}
      {menuOpen && (
        <div className="menu-dropdown">
          {sections.map(section => (
            <button key={section.id} onClick={() => scrollToSection(section.id)}>
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>
      )}

      {/* Admin Link - Hidden for public view, access via /admin directly */}
      {/* <Link to="/admin" className="admin-link">
        <Settings size={18} />
        <span>Admin</span>
      </Link> */}

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
              <a href="https://github.com/Phaapnag" target="_blank" rel="noopener noreferrer">github.com/Phaapnag</a>
            </div>
            {/* LinkedIn removed - can add back if needed */}
          </div>
        </div>
        <div className="hero-decoration">
          <div className="deco-block block-1"></div>
          <div className="deco-block block-2"></div>
          <div className="deco-block block-3"></div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="section summary-section">
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
      <section id="skills" className="section skills-section">
        <div className="section-header">
          <Code2 size={24} />
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.id} className="skill-card">
              <h4>{skill.category}</h4>
              <p>{skill.content}</p>
            </div>
          ))}
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
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <Rocket size={24} />
          <h2>Vibe Coding Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.name}</h3>
                {project.url !== "#" && project.url && (
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
      <section id="experience" className="section experience-section">
        <div className="section-header">
          <Briefcase size={24} />
          <h2>Professional Experience</h2>
        </div>
        <div className="timeline">
          {experience.map(exp => (
            <div key={exp.id} className="timeline-item">
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
      <section id="education" className="section education-section">
        <div className="section-header">
          <GraduationCap size={24} />
          <h2>Education</h2>
        </div>
        <div className="education-grid">
          {education.map(edu => (
            <div key={edu.id} className="edu-card">
              <span className="edu-degree">{edu.degree}</span>
              <p className="edu-school">{edu.school}</p>
              <span className="edu-year">{edu.year}</span>
            </div>
          ))}
        </div>
        <div id="exams" className="exam-results">
          <h4>Public Examinations</h4>
          <div className="exam-tags">
            {exams.map(exam => (
              <span key={exam.id}>{exam.label}: {exam.value}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info - Hidden from public, only for admin */}
      {/* Admin-only section - uncomment to show in admin panel */}
      {/* <section id="info" className="section info-section">
        <div className="info-grid">
          {info.map(item => (
            <div key={item.id} className="info-card">
              <h4>{item.key}</h4>
              <p>{item.value.split('\\n').map((line, i) => (
                <span key={i}>{line}{i < item.value.split('\\n').length - 1 && <br />}</span>
              ))}</p>
            </div>
          ))}
        </div>
      </section> */}

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
