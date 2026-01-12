import { Eye, MessageCircle, Heart } from "lucide-react";
import { useState } from "react";
import { BlogPostModal } from "./BlogPostModal";

const initialBlogPosts = [
  {
    id: 1,
    title: "El amor se ha perdido.",
    date: "8 may 2024",
    readTime: "6 Min. de lectura",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
    views: 22,
    comments: 0,
    likes: 1,
    content: `Siento nostalgia.

Nostalgia por el amor dulce, tierno y hasta empalagoso. Ese amor que ahora tanto crítica la sociedad pero que, hipócritamente, todos buscamos en nuestro foro interno. Ese amor de no querer a medias, sino con todas.

¡Ay!…qué tiempos aquellos en los que estaba de moda ser romántico. Escribir una nota o dedicar un poema a tu pareja, de tu puño y letra y no mandando algo por Instagram o tik tok que se ha mandado cientos y miles de veces y que es de todo, menos único o hecho solo por y para ti. O enviar la letra de una canción profunda, y no una de reggaetón con una simple frase que te hace de todo, menos conectar con tu romanticismo.

Nostalgia amigos míos de amar serenamente, pero con fervor. Con pasión de dejarnos llevar, arrastrar, envolvernos y perdernos en la esencia, en la fragancia del otro. Por sentir el aliento de la otra persona por detrás de ti, rodeando tu cuerpo y que se te estremezcan hasta las entrañas, atravesando tu piel al tocarte, desde abajo hasta arriba y sintiendo como algo nace desde lo más profundo de ti, para acabar clavándose en tu pecho. Que se te corte el aliento al escuchar su nombre y caigas en picado como cuando caes desde una montaña rusa y todo el estómago te mariposea. Eso.

Nostalgia por dejarnos llevar, sin tener miedo a amores superfluos, vacuos, inertes, y terriblemente temporales, nimio. Nostalgia por no tener recelo a sentir, a reír, a llorar, compartir, apostar por un amor sincero, honesto, leal, estable e inamovible. De los que no les tiembla el pulso cuando vienen turbulencias.

Que fue de aquellos tiempos de vivir en un sueño constante, pero a su vez, estar en una relación estable, con los pies en la tierra. En los que conocer al otro y querer mejorar y compartir, era una aventura y/o un desafío motivante y no un hartazgo.

Ahora todo se vuelve correr. Hasta echar un ´kiki´ dura poco. Que triste. Queremos sentir emociones fuertes, rápidas, intensas y nos enamoramos y desenamoramos con la misma rapidez que los mecánicos de Fernando Alonso cambian las ruedas del coche de éste. Pero, ¿qué nos pasa? ¿Dónde quedaron los "a fuego lento tu mirada"? ¿Dónde quedaron los poemas de Becquer? ¿O el querer ir despacio para ir descubriendo a esa persona poco a poco e ir enamorándote cada día de una cosa nueva? ¿Dónde ha quedado quedarse, permanecer, estar?

Como decía Alejandro Sanz, "no es lo mismo ser que estar, no es lo mismo estar, que quedarse, ¡que va!"

Nada. Ahora todo es YA, AHORA (pero paradójicamente no sabemos vivir en el aquí y el ahora…). Lo queremos todo, y a todos. Sociedad caprichosa, frívola, desagradecida. Más emociones, más viajes, más dinero, más físico, más vivencias, más, más, más, y cuando no hay más…ohhhhh depresión. ¡No te jode! No sabemos disfrutar de nada de lo que tenemos, seguimos buscando más, sedientos de ego.

Siento nostalgia de pasar la noche de un sábado hablando hasta las 6 de la mañana, porque el sueño no pesaba, pero la emoción de hablar sí. Nostalgia de querer sorprender al otro y, por ende, a ti mismo, al tener que descubrir una faceta de creatividad y originalidad que solo el amor te sacaba.

Nostalgia por envolvernos en el cuerpo de la otra persona, sin prisa, sintiendo su calor, recorrerle poco a poco, sin dejarnos nada. Nostalgia por las historias románticas de película. Y no, no os engañéis, ni vayáis ahora todos de avanzados y modernos, que Pretty Woman sigue siendo una de las películas más vistas de la historia.

Ahora todo se convierte en morbo, en curiosidad, en oscuridad, en empaparme una serie hoy y otra mañana. Ingenua de mí pues. Yo soy de las que ven una serie una y otra vez, ¿saben por qué? Porque cada vez que la veo, descubro algo nuevo que antes no había visto, y me vuelve a conquistar o impresionar. Y esa es la belleza de la cuestión, que cuando te quedas, descubres cosas. Cuando miras con el alma, siempre hay algo nuevo. Pero claro, si te vas tan rápido, ¿cómo vas a verlo?

Hay una frase que yo escucho mucho en mi consulta que es: "Es que desde que le he dejado ha hecho no sé qué, o ha conseguido no sé cuál", "Ahora le veo diferente, está cambiado/a y estando conmigo no era así".

Yo no puedo cansarme de algo que me cautiva, que me apasiona, que me enamora, que me contagia. Es como una canción que no puedes quitarte de la cabeza y que, si hoy es tu favorita, lo seguirá siendo aun cuando la oigas dentro de 10 años ¿no? Hay cosas, como personas, que SIEMPRE resuenan dentro de nosotros; que marcarán un antes y un después, pero que, por un motivo que a veces ni siquiera sabemos, preferimos cambiar y dejarlas a un lado para descubrir algo nuevo, algo fresco, pensando que ahí, estará lo que anhelábamos. Naaaaahhh.

Cuando llegue vuestra vejez o, mejor dicho, la nuestra, porque yo también vivo en este planeta, a ver qué nos queda, a ver quién nos elige, cuida y ama, cuando todo se nos caiga: cuando ya no tengamos más botox que ponernos, más abdominales que hacer, cuando nuestros sueños, ilusiones y esperanzas, ya no existan y solo vivamos el día a día. A ver quién nos queda al lado. Porque señores, no se dejen engañar eh…La vida es corta y rápida, cierto, pero la vejez es leeeeeeenta, y está ahí. Tic Tac. Que no tik tok.

Que será de nosotros cuando la frialdad, el egoísmo, la frivolidad, la superficialidad y los valores perdidos nos alcancen y llame a nuestra puerta y al abrirla, no haya nadie quien nos consuele, espere, alegre o simplemente, nos reciba para darnos un cálido beso y nos pregunte cómo estamos.

Hoy puede que lo haya, que lo tengas, y mañana también. Pero más te vale elegir bien a tu compañero/a de vida, porque no todos saben perdurar, estar a la altura, permanecer en las malas y regenerar tus ilusiones cuando no te queden.

Sigo sintiendo nostalgia pues por dos viejecitos de 87 años de la mano que pasean al atardecer. Nostalgia por volver a creer que, en este mundo, aún hay almas creyendo en el amor romántico, en el de llorar, en el de ir corriendo hacia al otro para encontrarse de nuevo después de un tiempo separados, por aquellas personas que abren su alma, enseñan sus vulnerabilidades, pecan en equivocarse y aprender. Por correr de la mano de esa persona entre el trigo de un campo de Andalucía.

Nostalgia de mí, y de ti. Nostalgia de sentir, de vibrar, de ¡aaaahhhhhhh!, vivir. De romper el molde y ser feliz. Nostalgia de pensar en mil maneras de diferentes de escapar, pero contigo. Y no sin ti. Nostalgia de sentir nostalgia, que ya ni eso nos permitimos. Nostalgia por sentir la fuerza, coraje y valentía por darle la vuelta al destino y hacer posible lo imposible. Porque triunfe el amor. Nostalgia por no sentir vergüenza de sentir, de expresar, de contar, de gritar al mundo el amor que tienes hacia otra persona. Por no cohibirse, por no dejar en el olvido o peor, para mañana. Nostalgia por la gente que sí quiere trabajar en la pareja y le dedica un rato a diario, o tiene detalles cada dos semanas.

Nostalgia de alguien que te deja huella y "le debas" un cambio profundo en ti, para hacerte mejor persona, para sacarte lo mejor y pulir lo peor. Nostalgia para saber morir y nacer dentro de un mismo compromiso, sin tener que echar a la otra persona.

Que pena de aquellos que, buscan y cambian de compañeros de vida constantemente porque se dejan atraer por lo "nuevo", por ideales que luego no resultan ser, por querer buscar fuera lo que no son capaces de valorar o promover dentro. Que pena de aquellas personas que se dejan cautivar por mensajes, mentes o cuerpos, que son estacionales, ilusorios. Que pena de los débiles, que no saben amar hasta el final sabiendo llegar a un equilibrio donde ambas almas puedan llegarse a entender y respetar.

Amar. Que bonitos recuerdos aquellos. A mí que me dejen, que yo quiero seguir soñando y amando. Yo quiero seguir vibrando, cantándole una canción al amor de mi vida a pleno pulmón en el coche, escribirle una nota, sorprenderle, darle todo mi amor, paciencia, comprensión, mi tiempo y quitárselo a otras cosas o personas; mis miedos, alegrías, pasión, entrega, mis sueños y… volar, lejos, muy lejos, dónde las almas se encuentran y los egos se pierden. Donde todo es volver a empezar, pero con la misma persona. Para el resto de lo que nos quede. En esta vida y en la otra.`,
  },
  {
    id: 2,
    title: "Mirar hacia otro lado",
    date: "1 may 2024",
    readTime: "5 Min. de lectura",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    views: 354,
    comments: 0,
    likes: 11,
  },
  {
    id: 3,
    title: "La importancia del compromiso.",
    date: "11 oct 2023",
    readTime: "8 Min. de lectura",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    views: 462,
    comments: 0,
    likes: 4,
  },
  {
    id: 4,
    title: "Perderse - Encontrarse = Catarsis.",
    date: "8 jun 2023",
    readTime: "7 Min. de lectura",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
    views: 352,
    comments: 0,
    likes: 24,
  },
  {
    id: 5,
    title: "Bendito 2020.",
    date: "11 dic 2020",
    readTime: "7 Min. de lectura",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    views: 478,
    comments: 0,
    likes: 8,
  },
  {
    id: 6,
    title: "Ídolos del circo.",
    date: "20 sept 2020",
    readTime: "3 Min. de lectura",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
    views: 69,
    comments: 0,
    likes: 3,
  },
];

export const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (postId: number) => {
    setBlogPosts((posts) =>
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: likedPosts.has(postId) ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleAddComment = (postId: number) => {
    setBlogPosts((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, comments: post.comments + 1 } : post
      )
    );
  };

  const currentPost = selectedPost
    ? blogPosts.find((p) => p.id === selectedPost.id) || selectedPost
    : null;

  return (
    <section id="blog" className="py-20 bg-background">
      {/* Header */}
      <div className="bg-primary py-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground text-center">
          Nuestro blog
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedPost(post)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                {/* Top Info */}
                <div className="flex flex-col gap-1">
                  <span className="text-primary font-semibold text-sm">
                    Neoka B.G
                  </span>
                  <span className="text-white/80 text-xs">
                    {post.date} · {post.readTime}
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                      className={`flex items-center gap-1 ml-auto transition-colors ${
                        likedPosts.has(post.id) ? "text-red-400" : "text-white/80 hover:text-red-400"
                      }`}
                    >
                      <span>{post.likes}</span>
                      <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ver más button */}
        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Ver todos los artículos
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>

      {/* Blog Post Modal */}
      {currentPost && (
        <BlogPostModal
          post={currentPost}
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
          onLike={() => handleLike(currentPost.id)}
          onAddComment={() => handleAddComment(currentPost.id)}
          isLiked={likedPosts.has(currentPost.id)}
        />
      )}
    </section>
  );
};
