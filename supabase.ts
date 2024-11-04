import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ocwwnpkmkmbunrnmpfiz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jd3ducGtta21idW5ybm1wZml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MjkzODMsImV4cCI6MjAyNTMwNTM4M30.iOiVXYJhNZKBF1clbYPa14Bm3f5l4wyUye0dx60DV8g';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;