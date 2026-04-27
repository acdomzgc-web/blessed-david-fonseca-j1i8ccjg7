DO $$
BEGIN
  -- Ensure the bucket exists and is configured as public
  INSERT INTO storage.buckets (id, name, public) 
  VALUES ('site-assets', 'site-assets', true) 
  ON CONFLICT (id) DO UPDATE SET public = true;
END $$;

-- Drop existing policies if any to ensure idempotency
DROP POLICY IF EXISTS "Public Access to site-assets" ON storage.objects;

-- Create policy to allow public read access to the bucket objects
-- This is necessary to use the storage.list() API as an anonymous user
CREATE POLICY "Public Access to site-assets" ON storage.objects 
  FOR SELECT USING (bucket_id = 'site-assets');

-- Ensure authenticated users have full access to manage the assets
DROP POLICY IF EXISTS "Auth Insert site-assets" ON storage.objects;
CREATE POLICY "Auth Insert site-assets" ON storage.objects 
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'site-assets');

DROP POLICY IF EXISTS "Auth Update site-assets" ON storage.objects;
CREATE POLICY "Auth Update site-assets" ON storage.objects 
  FOR UPDATE TO authenticated USING (bucket_id = 'site-assets');

DROP POLICY IF EXISTS "Auth Delete site-assets" ON storage.objects;
CREATE POLICY "Auth Delete site-assets" ON storage.objects 
  FOR DELETE TO authenticated USING (bucket_id = 'site-assets');
