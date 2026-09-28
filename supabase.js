const SUPABASE_URL = "https://zfslphvoiixswaecyyne.supabase.co";
const SUPABASE_KEY = "sb_publishable_PzLI4p7lyhlFt8FrZgaEVg_D30GxMqe";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
