import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cqnjelkmvzxmwfosgpuo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbmplbGttdnp4bXdmb3NncHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MTgzMzEsImV4cCI6MjA1NjI5NDMzMX0.RqB3iMVD5M0E9xXJ3y3yqNk5a7vLQJ8gX4P9F2n7vXw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Table names
export const TABLES = {
  EXPERIENCE: 'resume_experience',
  EDUCATION: 'resume_education',
  SKILLS: 'resume_skills',
  PROJECTS: 'resume_projects',
}
