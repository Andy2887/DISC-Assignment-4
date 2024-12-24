const { createClient } = require("@supabase/supabase-js");

if (!process.env.REACT_APP_SUPABASE_URL || !process.env.REACT_APP_SUPABASE_ANON_KEY) {
  throw new Error("Missing required Supabase environment variables");
}

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);


