import { useState, useEffect } from 'react'
import { supabase, TABLES } from './supabase'
import { 
  ArrowLeft, Trash2, Edit2, X, Check,
  Briefcase, GraduationCap, Code2, Rocket
} from 'lucide-react'
import './AdminConsole.css'

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
  display_order: number
}

interface Education {
  id: number
  degree: string
  school: string
  year: string
  display_order: number
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
  display_order: number
}

export default function AdminConsole() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills' | 'projects'>('experience')
  const [experience, setExperience] = useState<Experience[]>([])
  const [education, setEducation] = useState<Education[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<any>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const [expRes, eduRes, skillRes, projRes] = await Promise.all([
      supabase.from(TABLES.EXPERIENCE).select('*').order('display_order'),
      supabase.from(TABLES.EDUCATION).select('*').order('display_order'),
      supabase.from(TABLES.SKILLS).select('*'),
      supabase.from(TABLES.PROJECTS).select('*').order('display_order'),
    ])

    if (expRes.data) setExperience(expRes.data)
    if (eduRes.data) setEducation(eduRes.data)
    if (skillRes.data) setSkills(skillRes.data)
    if (projRes.data) setProjects(projRes.data)
  }

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  // Experience CRUD
  const startEditExperience = (exp: Experience) => {
    setEditingId(exp.id)
    setEditForm({ ...exp, roles: JSON.stringify(exp.roles, null, 2) })
  }

  const saveExperience = async () => {
    setSaving(true)
    try {
      const roles = JSON.parse(editForm.roles)
      const { error } = await supabase
        .from(TABLES.EXPERIENCE)
        .update({ company: editForm.company, period: editForm.period, roles })
        .eq('id', editingId)
      
      if (error) throw error
      
      await fetchData()
      setEditingId(null)
      setEditForm(null)
      showMessage('Experience saved!')
    } catch (e: any) {
      showMessage('Error: ' + e.message)
    }
    setSaving(false)
  }

  const deleteExperience = async (id: number) => {
    if (!confirm('Delete this experience?')) return
    await supabase.from(TABLES.EXPERIENCE).delete().eq('id', id)
    await fetchData()
    showMessage('Deleted!')
  }

  // Education CRUD
  const startEditEducation = (edu: Education) => {
    setEditingId(edu.id)
    setEditForm(edu)
  }

  const saveEducation = async () => {
    setSaving(true)
    const { error } = await supabase
      .from(TABLES.EDUCATION)
      .update({ degree: editForm.degree, school: editForm.school, year: editForm.year })
      .eq('id', editingId)
    
    if (!error) {
      await fetchData()
      setEditingId(null)
      setEditForm(null)
      showMessage('Education saved!')
    }
    setSaving(false)
  }

  const deleteEducation = async (id: number) => {
    if (!confirm('Delete this education?')) return
    await supabase.from(TABLES.EDUCATION).delete().eq('id', id)
    await fetchData()
    showMessage('Deleted!')
  }

  // Skills CRUD
  const startEditSkill = (skill: Skill) => {
    setEditingId(skill.id)
    setEditForm(skill)
  }

  const saveSkill = async () => {
    setSaving(true)
    const { error } = await supabase
      .from(TABLES.SKILLS)
      .update({ category: editForm.category, content: editForm.content })
      .eq('id', editingId)
    
    if (!error) {
      await fetchData()
      setEditingId(null)
      setEditForm(null)
      showMessage('Skill saved!')
    }
    setSaving(false)
  }

  const deleteSkill = async (id: number) => {
    if (!confirm('Delete this skill?')) return
    await supabase.from(TABLES.SKILLS).delete().eq('id', id)
    await fetchData()
    showMessage('Deleted!')
  }

  // Projects CRUD
  const startEditProject = (proj: Project) => {
    setEditingId(proj.id)
    setEditForm(proj)
  }

  const saveProject = async () => {
    setSaving(true)
    const { error } = await supabase
      .from(TABLES.PROJECTS)
      .update({
        name: editForm.name,
        url: editForm.url,
        problem: editForm.problem,
        solution: editForm.solution,
        tech: editForm.tech,
        result: editForm.result,
      })
      .eq('id', editingId)
    
    if (!error) {
      await fetchData()
      setEditingId(null)
      setEditForm(null)
      showMessage('Project saved!')
    }
    setSaving(false)
  }

  const deleteProject = async (id: number) => {
    if (!confirm('Delete this project?')) return
    await supabase.from(TABLES.PROJECTS).delete().eq('id', id)
    await fetchData()
    showMessage('Deleted!')
  }

  return (
    <div className="admin-console">
      <div className="admin-header">
        <a href="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </a>
        <h1>Portfolio Admin Console</h1>
      </div>

      {message && <div className="message">{message}</div>}

      <div className="tabs">
        <button 
          className={activeTab === 'experience' ? 'active' : ''} 
          onClick={() => setActiveTab('experience')}
        >
          <Briefcase size={18} /> Experience
        </button>
        <button 
          className={activeTab === 'education' ? 'active' : ''} 
          onClick={() => setActiveTab('education')}
        >
          <GraduationCap size={18} /> Education
        </button>
        <button 
          className={activeTab === 'skills' ? 'active' : ''} 
          onClick={() => setActiveTab('skills')}
        >
          <Code2 size={18} /> Skills
        </button>
        <button 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={() => setActiveTab('projects')}
        >
          <Rocket size={18} /> Projects
        </button>
      </div>

      <div className="tab-content">
        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="section">
            <h2>Experience</h2>
            {experience.map(exp => (
              <div key={exp.id} className="card">
                {editingId === exp.id ? (
                  <div className="edit-form">
                    <label>Company:
                      <input 
                        type="text" 
                        value={editForm?.company || ''} 
                        onChange={e => setEditForm({...editForm, company: e.target.value})}
                      />
                    </label>
                    <label>Period:
                      <input 
                        type="text" 
                        value={editForm?.period || ''} 
                        onChange={e => setEditForm({...editForm, period: e.target.value})}
                      />
                    </label>
                    <label>Roles (JSON):
                      <textarea 
                        value={editForm?.roles || '[]'} 
                        onChange={e => setEditForm({...editForm, roles: e.target.value})}
                        rows={10}
                      />
                    </label>
                    <div className="form-actions">
                      <button onClick={saveExperience} disabled={saving} className="btn-save">
                        <Check size={16} /> Save
                      </button>
                      <button onClick={() => { setEditingId(null); setEditForm(null) }} className="btn-cancel">
                        <X size={16} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="card-header">
                      <div>
                        <h3>{exp.company}</h3>
                        <span className="period">{exp.period}</span>
                      </div>
                      <div className="card-actions">
                        <button onClick={() => startEditExperience(exp)} className="btn-edit">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => deleteExperience(exp.id)} className="btn-delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <pre>{JSON.stringify(exp.roles, null, 2)}</pre>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="section">
            <h2>Education</h2>
            {education.map(edu => (
              <div key={edu.id} className="card">
                {editingId === edu.id ? (
                  <div className="edit-form">
                    <label>Degree:
                      <input 
                        type="text" 
                        value={editForm?.degree || ''} 
                        onChange={e => setEditForm({...editForm, degree: e.target.value})}
                      />
                    </label>
                    <label>School:
                      <input 
                        type="text" 
                        value={editForm?.school || ''} 
                        onChange={e => setEditForm({...editForm, school: e.target.value})}
                      />
                    </label>
                    <label>Year:
                      <input 
                        type="text" 
                        value={editForm?.year || ''} 
                        onChange={e => setEditForm({...editForm, year: e.target.value})}
                      />
                    </label>
                    <div className="form-actions">
                      <button onClick={saveEducation} disabled={saving} className="btn-save">
                        <Check size={16} /> Save
                      </button>
                      <button onClick={() => { setEditingId(null); setEditForm(null) }} className="btn-cancel">
                        <X size={16} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="card-header">
                    <div>
                      <h3>{edu.degree}</h3>
                      <span>{edu.school}</span>
                      <span className="period">{edu.year}</span>
                    </div>
                    <div className="card-actions">
                      <button onClick={() => startEditEducation(edu)} className="btn-edit">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => deleteEducation(edu.id)} className="btn-delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="section">
            <h2>Skills</h2>
            {skills.map(skill => (
              <div key={skill.id} className="card">
                {editingId === skill.id ? (
                  <div className="edit-form">
                    <label>Category:
                      <input 
                        type="text" 
                        value={editForm?.category || ''} 
                        onChange={e => setEditForm({...editForm, category: e.target.value})}
                      />
                    </label>
                    <label>Content:
                      <textarea 
                        value={editForm?.content || ''} 
                        onChange={e => setEditForm({...editForm, content: e.target.value})}
                        rows={3}
                      />
                    </label>
                    <div className="form-actions">
                      <button onClick={saveSkill} disabled={saving} className="btn-save">
                        <Check size={16} /> Save
                      </button>
                      <button onClick={() => { setEditingId(null); setEditForm(null) }} className="btn-cancel">
                        <X size={16} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="card-header">
                    <div>
                      <h3>{skill.category}</h3>
                      <p>{skill.content}</p>
                    </div>
                    <div className="card-actions">
                      <button onClick={() => startEditSkill(skill)} className="btn-edit">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => deleteSkill(skill.id)} className="btn-delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="section">
            <h2>Projects</h2>
            {projects.map(proj => (
              <div key={proj.id} className="card">
                {editingId === proj.id ? (
                  <div className="edit-form">
                    <label>Name:
                      <input 
                        type="text" 
                        value={editForm?.name || ''} 
                        onChange={e => setEditForm({...editForm, name: e.target.value})}
                      />
                    </label>
                    <label>URL:
                      <input 
                        type="text" 
                        value={editForm?.url || ''} 
                        onChange={e => setEditForm({...editForm, url: e.target.value})}
                      />
                    </label>
                    <label>Problem:
                      <textarea 
                        value={editForm?.problem || ''} 
                        onChange={e => setEditForm({...editForm, problem: e.target.value})}
                        rows={2}
                      />
                    </label>
                    <label>Solution:
                      <textarea 
                        value={editForm?.solution || ''} 
                        onChange={e => setEditForm({...editForm, solution: e.target.value})}
                        rows={2}
                      />
                    </label>
                    <label>Tech:
                      <input 
                        type="text" 
                        value={editForm?.tech || ''} 
                        onChange={e => setEditForm({...editForm, tech: e.target.value})}
                      />
                    </label>
                    <label>Result:
                      <textarea 
                        value={editForm?.result || ''} 
                        onChange={e => setEditForm({...editForm, result: e.target.value})}
                        rows={2}
                      />
                    </label>
                    <div className="form-actions">
                      <button onClick={saveProject} disabled={saving} className="btn-save">
                        <Check size={16} /> Save
                      </button>
                      <button onClick={() => { setEditingId(null); setEditForm(null) }} className="btn-cancel">
                        <X size={16} /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="card-header">
                      <h3>{proj.name}</h3>
                      <div className="card-actions">
                        <button onClick={() => startEditProject(proj)} className="btn-edit">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => deleteProject(proj.id)} className="btn-delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="card-body">
                      <p><strong>URL:</strong> {proj.url}</p>
                      <p><strong>Problem:</strong> {proj.problem}</p>
                      <p><strong>Solution:</strong> {proj.solution}</p>
                      <p><strong>Tech:</strong> {proj.tech}</p>
                      <p><strong>Result:</strong> {proj.result}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
