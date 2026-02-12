-- Tegnspill – Supabase leaderboard setup
-- Kjør denne i Supabase SQL Editor (Dashboard → SQL Editor → New query)

-- Tabell for scores
CREATE TABLE IF NOT EXISTS scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  score INTEGER NOT NULL,
  name TEXT DEFAULT 'Spiller',
  ts BIGINT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for rask sortering på leaderboard
CREATE INDEX IF NOT EXISTS idx_scores_ts ON scores(ts DESC);
CREATE INDEX IF NOT EXISTS idx_scores_score ON scores(score DESC);

-- Row Level Security (RLS) – tillat anonym lesing og innlegging
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tillat lesing av alle scores"
  ON scores FOR SELECT
  USING (true);

CREATE POLICY "Tillat innlegging av nye scores"
  ON scores FOR INSERT
  WITH CHECK (true);
