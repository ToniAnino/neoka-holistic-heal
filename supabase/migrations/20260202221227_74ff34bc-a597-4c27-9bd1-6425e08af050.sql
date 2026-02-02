-- Add a SELECT policy that denies public access to contact_submissions
-- This protects sensitive personal information (names, emails, phone numbers)
CREATE POLICY "No public read access to contact submissions"
ON public.contact_submissions
FOR SELECT
TO anon, authenticated
USING (false);