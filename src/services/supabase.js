import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wknjywipwyphmvivduso.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrbmp5d2lwd3lwaG12aXZkdXNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MjkyNzgsImV4cCI6MjA3ODAwNTI3OH0.Gsg6fl7pkgjp78t9Hh5pbZP6WDl8osQWGhkB_Lw6GnY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
