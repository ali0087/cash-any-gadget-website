/*
# Create quote_requests table and storage bucket for Cash Any Gadget

## Purpose
Stores customer quote requests submitted from the public website. Each request
contains the customer's contact information and one or more device entries.
The business owner reviews these requests and calls the customer personally.

## 1. New Tables

### `quote_requests`
- `id` (uuid, primary key)
- `full_name` (text, required) — customer's full name
- `phone` (text, required) — customer's phone number
- `email` (text, optional) — customer's email address
- `contact_method` (text, required) — 'phone' or 'text'
- `zip_code` (text, optional) — customer ZIP code
- `devices` (jsonb, required) — array of device entries (category, brand, model, year, storage, condition, powers_on, unlocked, signed_out, details)
- `photo_paths` (jsonb, optional) — array of storage paths for uploaded photos
- `consent` (boolean, required) — customer acknowledged contact about the quote
- `notes` (text, private) — owner's private notes about the phone conversation
- `status` (text, required) — workflow status: 'new', 'contacted', 'offer_discussed', 'accepted', 'declined', 'completed'
- `submitted_at` (timestamptz, default now()) — when the request was submitted

## 2. Security (RLS)
- Enable RLS on `quote_requests`.
- Anonymous (public website) users can INSERT new quote requests only.
  They CANNOT read, update, or delete any requests — customer data stays private.
- Authenticated users (the business owner, signed in) can SELECT and UPDATE
  requests to review them and manage status / private notes.
- No one can DELETE requests (data retention).

## 3. Storage
- Create a public-read bucket `quote-photos` for optional customer device photos.
- Photos are uploaded by anonymous users; only the owner (authenticated) can
  list/delete them via the dashboard. Public read is fine for viewing.

## 4. Important notes
- This is a single-tenant app: the public site has NO sign-in. Only the owner
  dashboard uses Supabase auth, so dashboard policies are `TO authenticated`
  while the public insert policy is `TO anon, authenticated`.
- No automatic pricing is stored or calculated. Offers are given by phone.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  contact_method text NOT NULL DEFAULT 'phone',
  zip_code text,
  devices jsonb NOT NULL,
  photo_paths jsonb DEFAULT '[]'::jsonb,
  consent boolean NOT NULL DEFAULT false,
  notes text,
  status text NOT NULL DEFAULT 'new',
  submitted_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Public can submit quote requests (insert only). Cannot read/update/delete.
DROP POLICY IF EXISTS "public_insert_quote_requests" ON quote_requests;
CREATE POLICY "public_insert_quote_requests"
  ON quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Owner (authenticated) can review all quote requests.
DROP POLICY IF EXISTS "owner_select_quote_requests" ON quote_requests;
CREATE POLICY "owner_select_quote_requests"
  ON quote_requests FOR SELECT
  TO authenticated
  USING (true);

-- Owner (authenticated) can update status and private notes.
DROP POLICY IF EXISTS "owner_update_quote_requests" ON quote_requests;
CREATE POLICY "owner_update_quote_requests"
  ON quote_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Index for the dashboard's default sort (newest first) and status filtering.
CREATE INDEX IF NOT EXISTS quote_requests_submitted_at_idx
  ON quote_requests (submitted_at DESC);
CREATE INDEX IF NOT EXISTS quote_requests_status_idx
  ON quote_requests (status);

-- Storage bucket for optional device photos.
INSERT INTO storage.buckets (id, name, public)
VALUES ('quote-photos', 'quote-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Public can upload photos to the quote-photos bucket.
DROP POLICY IF EXISTS "public_upload_quote_photos" ON storage.objects;
CREATE POLICY "public_upload_quote_photos"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'quote-photos');

-- Public can read (view) photos.
DROP POLICY IF EXISTS "public_read_quote_photos" ON storage.objects;
CREATE POLICY "public_read_quote_photos"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'quote-photos');

-- Owner can delete photos.
DROP POLICY IF EXISTS "owner_delete_quote_photos" ON storage.objects;
CREATE POLICY "owner_delete_quote_photos"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'quote-photos');
