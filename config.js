/**
 * Tegnspill – Konfigurasjon for global leaderboard (Supabase)
 *
 * 1. Opprett prosjekt på supabase.com
 * 2. Kjør supabase-setup.sql i SQL Editor
 * 3. Sett inn SUPABASE_URL og SUPABASE_ANON_KEY her (eller via Vercel env)
 */
const CONFIG = {
  // Supabase – hent fra Dashboard → Settings → API
  SUPABASE_URL: null,   // f.eks. 'https://xxxxxxxx.supabase.co'
  SUPABASE_ANON_KEY: null,

  // Maks antall scores på leaderboard
  LEADERBOARD_LIMIT: 20
};

// Eksporter for bruk i spill
if (typeof window !== 'undefined') window.TEGNSPILL_CONFIG = CONFIG;
