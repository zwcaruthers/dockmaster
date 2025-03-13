const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(
  "https://piekfuughinhptgxkupj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZWtmdXVnaGluaHB0Z3hrdXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTYyOTIsImV4cCI6MjA1NzQ3MjI5Mn0.M0kHqDvlQClrqwkJ6Rs3oQCpusXXDgQd1bsn3TCMIgY"
);

module.exports = supabase;
