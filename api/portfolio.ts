import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cqnjelkmvzxmwfosgpuo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbmplbGttdnp4bXdmb3NncHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2OTUyNDgsImV4cCI6MjA4ODI3MTI0OH0.tNhWi8XYWFRygL_nQvLeCigILFCTHxiop5mxIbvNiv4'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    const [info, experience, education, skills, projects, exams] = await Promise.all([
      supabase.from('resume_info').select('*').single(),
      supabase.from('resume_experience').select('*').order('order'),
      supabase.from('resume_education').select('*').order('order'),
      supabase.from('resume_skills').select('*').order('category,order'),
      supabase.from('resume_projects').select('*').order('order'),
      supabase.from('resume_exams').select('*').order('year', { ascending: false })
    ])

    res.status(200).json({
      info: info.data,
      experience: experience.data || [],
      education: education.data || [],
      skills: skills.data || [],
      projects: projects.data || [],
      exams: exams.data || []
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}