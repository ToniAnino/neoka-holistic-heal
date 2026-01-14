-- Tabla para estadísticas de posts (visitas y likes)
CREATE TABLE public.posts_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id TEXT NOT NULL UNIQUE,
  views INTEGER NOT NULL DEFAULT 0,
  likes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabla para comentarios
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabla para suscriptores del newsletter
CREATE TABLE public.newsletter_subs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS en todas las tablas
ALTER TABLE public.posts_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subs ENABLE ROW LEVEL SECURITY;

-- Políticas para posts_stats: todos pueden leer, todos pueden incrementar (insert/update)
CREATE POLICY "Anyone can read posts stats"
  ON public.posts_stats FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert posts stats"
  ON public.posts_stats FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update posts stats"
  ON public.posts_stats FOR UPDATE
  USING (true);

-- Políticas para comments: todos pueden leer y añadir, nadie puede borrar (excepto admin si lo hubiera)
CREATE POLICY "Anyone can read comments"
  ON public.comments FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert comments"
  ON public.comments FOR INSERT
  WITH CHECK (true);

-- No se crea política DELETE, así nadie puede borrar comentarios

-- Políticas para newsletter_subs: solo insertar (suscribirse)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subs FOR INSERT
  WITH CHECK (true);

-- Función para actualizar timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger para posts_stats
CREATE TRIGGER update_posts_stats_updated_at
  BEFORE UPDATE ON public.posts_stats
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Habilitar realtime para comentarios
ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;