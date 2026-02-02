-- Add a SELECT policy that denies public access to newsletter_subs
-- This protects subscriber email addresses from being harvested
CREATE POLICY "No public read access to newsletter subscriptions"
ON public.newsletter_subs
FOR SELECT
TO anon, authenticated
USING (false);