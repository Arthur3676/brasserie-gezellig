// Supabase client — Brasserie Gezellig Admin
const SUPABASE_URL  = 'https://fsqyokndtyuwwvggqvqt.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcXlva25kdHl1d3d2Z2dxdnF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTA3MDgsImV4cCI6MjA5MjUyNjcwOH0.1EuFM1ewV6UzD013vgc-HGFCEkKbYl52Nm2p1BICBY4';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
