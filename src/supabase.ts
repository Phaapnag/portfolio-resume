import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cqnjelkmvzxmwfosgpuo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbmplbGttdnp4bXdmb3NncHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2OTUyNDgsImV4cCI6MjA4ODI3MTI0OH0.tNhWi8XYWFRygL_nQvLeCigILFCTHxiop5mxIbvNiv4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Table names
export const TABLES = {
  EXPERIENCE: 'resume_experience',
  EDUCATION: 'resume_education',
  SKILLS: 'resume_skills',
  PROJECTS: 'resume_projects',
  EXAMS: 'resume_exams',
  INFO: 'resume_info',
}
