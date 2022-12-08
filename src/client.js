import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hjudnxozhddpxofegjug.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqdWRueG96aGRkcHhvZmVnanVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxMzE5NDcsImV4cCI6MTk4NTcwNzk0N30.YmIOoFGYxIBGfG1ICihRzHkfWXfLH2L49Tk_Sd9vqmc'
export const supabase = createClient(supabaseUrl, supabaseKey)