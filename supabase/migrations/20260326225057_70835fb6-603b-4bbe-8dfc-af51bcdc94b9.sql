
-- 1. Drop existing permissive INSERT and UPDATE policies
DROP POLICY IF EXISTS "Anyone can insert posts stats" ON public.posts_stats;
DROP POLICY IF EXISTS "Anyone can update posts stats" ON public.posts_stats;

-- 2. Keep the SELECT policy (already exists as "Anyone can read posts stats")

-- 3. Create security definer function to increment views safely
CREATE OR REPLACE FUNCTION public.increment_post_views(p_post_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.posts_stats (post_id, views, likes)
  VALUES (p_post_id, 1, 0)
  ON CONFLICT (post_id) DO UPDATE
  SET views = posts_stats.views + 1,
      updated_at = now();
END;
$$;

-- 4. Create security definer function to toggle likes safely
CREATE OR REPLACE FUNCTION public.toggle_post_like(p_post_id text, p_increment boolean)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_likes integer;
BEGIN
  INSERT INTO public.posts_stats (post_id, views, likes)
  VALUES (p_post_id, 0, CASE WHEN p_increment THEN 1 ELSE 0 END)
  ON CONFLICT (post_id) DO UPDATE
  SET likes = CASE
    WHEN p_increment THEN posts_stats.likes + 1
    ELSE GREATEST(0, posts_stats.likes - 1)
  END,
  updated_at = now()
  RETURNING posts_stats.likes INTO new_likes;
  
  RETURN new_likes;
END;
$$;

-- 5. Add unique constraint on post_id for ON CONFLICT to work
ALTER TABLE public.posts_stats ADD CONSTRAINT posts_stats_post_id_unique UNIQUE (post_id);
