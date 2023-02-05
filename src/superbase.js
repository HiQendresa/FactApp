import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iawgtpiaviehjoxfkzfc.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlhd2d0cGlhdmllaGpveGZremZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzMjU1MTQsImV4cCI6MTk4NzkwMTUxNH0.vcNOm3YWRXayJGMU2QTubnXcoStFexpE3PSqhkZrRi4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
