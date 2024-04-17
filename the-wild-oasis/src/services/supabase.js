import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hdcncarpfazfkoxmhaiu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkY25jYXJwZmF6ZmtveG1oYWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MzcxNzcsImV4cCI6MjAyODMxMzE3N30.EaWBDtm9U1FPHKzIbERjm6FzlGOEamcjJc8PX-4wfPg'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;