-- Migration: 0001_enquiries.sql
-- Real Cloudflare D1 persistence for technical visits, quotes, and B2B leads.

CREATE TABLE IF NOT EXISTS enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  reference TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  phone_or_email TEXT NOT NULL,
  municipality TEXT NOT NULL,
  project_scope TEXT NOT NULL,
  notes TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);
