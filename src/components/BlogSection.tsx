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
    content: `Cómo empezar hablando de algo tan difícil. -"¿De qué?" te estarás preguntando.

Pues de aquello que solemos hacer todos con bastante asiduidad: mirar hacia otro lado; Enjuiciar, apuntar con el dedo, hacernos los locos, apartar, dejar de lado…no sé, ponle el nombre que quieras.

El mundo se está volviendo loco, va cada vez a peor. Miramos hacia otro lado cuando vemos una injusticia, cuando vemos a alguien diferente, extraordinario, extravagante, ante lo que no es lo normativo, correcto, e inclusive ante aquello que es puro, ingenuo, vulnerable o débil. Pero, ¿qué nos pasa?

Voy más allá.

Miramos a otro lado hasta en algo tan maravilloso como el compromiso, el amor. Ah, pero…¿por qué? Llámenme loca, pero yo lo tengo claro. La gente está cagada. El compromiso, amar abiertamente o entregarte significa responsabilizarte: De tus actos, de tu crecimiento, de tus dudas, del dolor del otro, del estar ahí, del OTRO. Y del YO con el OTRO. Ya dejas de ser tú para ser NOS.

Cuando el amor nos llama o aparece, salimos por patas saboteándolo con miedos absurdos que nos inventamos, con excusas baratas o historias del pasado, con tonteos ridículos con otras personas que ni siquiera te llenan o ni siquiera piensas, o con dudas donde antes no las había. Cuando llama surge eso que, al pensarlo tanta gracia me hace y que taaaaaantas veces he oído en consulta e incluso en alguna relación que he tenido: "Es que siento que no soy suficiente para ti", "Siento que no estoy a tu altura o no voy a poder darte lo que necesitas" o "yo no sé si soy la persona que buscas" ¡PUES PONTE LAS PILAS ACHO, que para algo te ha elegido esa persona ¿no? Anda que….

¿Habrá algo más bonito y valiente que vivir el amor libremente, con todo tu corazón?

Si es que vivimos en el mundo del 'sinsentido'. ¿No te has fijado que cuando amas y te aman, te sientes más fuerte, más grande, más capaz de todo y te invade una sensación de que la vida merece la pena? Ser valiente es garantía de felicidad porque eres coherente. Garantía de dormir con la conciencia tranquila. Es garantía de poder (no hay limites).

Ya no hay gente con coraje, con valentía y pudor. Amar es de valientes, pero amar eh, no te confundas. No que te amen, no. AMAR A OTRO. Y no me refiero solo al amor romántico de pareja, sino amar una causa, amar una bandera, un ideal, un credo. Y es que no hay gente de esas de las de antes, que arriesgaban sus vidas por luchar por los derechos civiles, leales a una cosa, a un dogma, a una fe, a una persona o a una palabra; de las que luchaban por la paz o las que luchaban en contra de sus padres por un amor no permitido o aceptado. ¿Os imagináis un amor entre un blanco y una persona negra en los años 60? ¿o un amor homosexual? Dios…solo de pensarlo, se me nublan los ojos de lágrimas. ¿Dónde queda la moralidad, los valores y la bondad humana? ¿Dónde está el hacer las cosas bien? Esa frase tan mítica de Jesucristo "haz bien y no mires a quien". Pero no, ante eso, seguimos mirando a otro lado, por miedo, por vergüenza, por el qué dirán. Elegimos negar el sentimiento, vivir en la negación constante, como que no pasa nada.

Sin embargo con este comportamiento no sólo no evitamos el sufrimiento si no que agrandamos el problema.

Es curioso, pero, podría llevarlo a cualquier área de la vida. Vemos a una persona llorar por la calle y nadie se acerca a preguntar. Miramos a otro lado. Vemos a un emprendedor en apuros, y preferimos ir al Mercadona que a ese emprendedor que tiene una frutería en la esquina. Vemos a una persona hablar más profundo o cosas diferentes y nos alejamos, la tachamos de "friki", "rara" o "loca". Seguimos mirando hacia otro lado.

Somos unos hipócritas, unos incongruentes. Nos alzamos para conseguir unos derechos y no vemos las obligaciones, que son responsabilidades al fin y al cabo. Nos indignamos por la muerte a un animal a manos de un cruel dueño sin alma, y no nos indignamos cuando vemos a alguien que le pega una paliza a un vagabundo en la calle. No. Miramos hacia otro lado, bueno...miento, lo grabamos con el móvil, que es más guay (notesé la ironía).

¿Y qué decir de los mayores? Ya ni los respetamos. No nos bajamos de la acera cuando vienen pasando. Miramos a otro lado incluso cuando vemos a dos ancianos besarse porque nos parece "ridículo" o "bochornoso" o peor aún, oír comentarios del tipo "que esas cosas a esas edades ya no se dan". Claro, es que con 70 años eres un frígido y no te excitas, ¿no?. Ay Dios mío… que de ignorancia. El amor no es solo empalmarse o que te penetren. Hay uno más potente, el mental, el de conectar, cuidar y entenderte. Pero ese es otro tema que abordaré en otro momento.

No respetamos a los demás, o a las cosas que hacen los demás, simplemente por creer que lo nuestro es lo mejor, es lo ideal y es lo único que vale. Que equivocados estamos. Atemorizados, acobardados, llenos de complejos e inseguridades, llenos de rabia y odio. Egos andantes. Vaya sociedad ególatra.

Pensando en esto, me viene a la cabeza la frase de Emiliano Zapata: "Mejor morir de pie que vivir arrodillado". Lo traduzco: Mejor morir por mis creencias, mis principios, mi dignidad, que no "ahogado" o atemorizado.

Valor y fuerza, personalidad, pensamiento crítico… Qué se yo. Eso ya no se lleva.

¿Pues saben qué? La justicia está ahí. No siempre sale cuando queremos, no siempre de la forma en la que pensamos, pero está. Y la vida, con lo larga que es, siempre nos pone alguna oportunidad para hacerla o verla. Justicia para volver a mirar de frente, con la frente alta (valga la redundancia).

No queremos creer porque asusta. Da miedo creer, da miedo enfrentar la verdad, alzarte como estandarte de ella (ya se vio en su día con Pedro, que negó a Jesús por tres veces por miedo a la represalia de decir la verdad).

Están los dos bandos. ¿En cuál estás tu? Yo sigo apostando por la gente que hace la vida de los demás mejor, más amable y justa. La vida es más hermosa con buena gente en ella y a tu lado, con gente que se une a tu lucha y no mira hacia a otro lado, que te agarra de la mano con miedo, pero no te suelta. Sigo apostando por Lorca, por Hipatia, por Jesucristo, por Martin Luther King, por Gandhi, Guevara, Kennedy, Espartaco y cientos más. ¡Salud por los inocentes, los vulnerables, los nobles de alma, los generosos y agradecidos, por los pobres de espíritu, por los humildes de corazón! Por los valientes, honrados, ¡y con coraje! Por los que luchan por lo que quieren y creen. Brindo por todos. Yo seguiré creyendo. Yo seguiré estando ahí, de pie. Nunca de rodillas. Yo seguiré mirando de frente y si desvío la mirada, que alguien me haga saber que estoy errando lo antes posible.

Por que los reyes de hoy serán los sirvientes del mañana, y los sirvientes de hoy, serán los reyes del futuro.

Levantensé. Miren al frente.`,
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
    content: `Qué tiempos más bonitos esos en los que conoces a alguien nuevo y te ilusionas, ¿verdad? En los que pones todo tu corazón, tus ganas, tu tiempo, tus sueños y empiezas como a flotar en una nube de sensaciones que...buah, hacía mil que no sentías o que incluso es la primera vez que lo experimentas.

El amor nos acompaña siempre: nos afecta, nos desvela, nos alimenta, nos alienta, nos consume por dentro y nos consuma como seres humanos. Es la experiencia universal que toca a todos los que tienen la suerte de vivirlo y por eso ha sido siempre la canción de los poetas.

Amor, ese del que todos hablan pero pocos alcanzan y saben qué es.

Tiempos estos que corren en los que todos dicen querer (que no amar) y en los que algún que otro atrevido/a, osa usar un "te amo" sin tener en cuenta la importancia de semejante palabra, pues, amar, no es lo mismo que querer. Querer es un intercambio, yo quiero algo de ti y tú de mi. No es altruista, no es limpio. Amar es incondicional, es estar por encima del ego, es entregar el alma.

Amar es dedicar tiempo, hacer sacrificios, poner esfuerzo, hablar y conversar cosas incómodas sin dejarlas pasar o evitarlas, es confrontar algo que es doloroso, es unirse ante la adversidad, es compartir las alegrías y crear recuerdos, y por supuesto, no es efímero.

Pero claro, vivimos en un tiempo en el que todo lo es. Todo es rápido, reemplazable, estresante, y como no, altamente ególatra/egoísta. ¿Caben estas palabras en el amor? Ciertamente, no.

Tiempos de tinder, de catálogos a elegir, de superficialidad y medicina estética, de cuerpos esculturales y mentes/almas vacías, de escapismo y pérdida de valores. Tiempos oscuros y difíciles para el amor.

Y es que, es tan fácil encontrar a otra persona (entiendase aquí el término persona como monigote que se sienta a tu lado con el móvil pero no habla contigo, entre otras cosas)....pero, una persona que te aporte, te escuche, te llene, te complete, te apoye, te motive, te haga crecer, te entregue su tiempo, su cariño y nobleza....eso no se encuentra a diario. Una persona que soporte tus manías, tus desplantes, tu carácter, tus días oscuros, tus problemas... eso no se encuentra a diario. Alguien que ilumine tus días o qué, directamente, haga tu vida más fácil y le de paz, eso te lo encuentras una vez. Dos no.

Pero hacemos caso omiso a eso, y solo nos oímos a nosotros. A lo que me pasa a mi, lo que me duele a mí, lo que me pica a mí, lo que me urge a mí, y todo se convierte en 'mi, me, conmigo'. Creemos que estar en un compromiso es escribir un "cómo estás" por la mañana, o un "buenas noches, te quiero" al acostarnos o llamarnos a diario, o quedar para tomar algo. Eso no es.

Esto pasa mucho:

- Buenos días cariño, cómo estás?
- Bien amor, aunque tengo cosas que me preocupan, n he dormido mucho. Y tú?
- Yo bien, corriendo que voy tarde al trabajo. Tengo ganas de verte! Un beso.

Y sin más, dejas pasar un momento para pararte y preguntar: "qué te preocupa, o qué cosas te rondan que no te dejan dormir? Escríbemelas y cuando tenga un momentito en el curro, te leo y las compartimos juntos". Eso es tener un compromiso. El compromiso de estar, de que te importa, de compartir, de saber qué ocurre. Eso es hacer ver a la otra persona que te importa, que estás. Eso es amor.

Hay un párrafo que impera en mi vida que dice:

"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.
No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor.
El amor no se deleita en la maldad, sino que se regocija con la verdad. Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta." Corintios 13:4-7

Pero claro, de todo esto que lees, ¿qué practicas tú? Porque desde tu ego seguramente digas que tu amas así, pero... ¿lo haces? Honestamente.

Hay una canción que a mi me gusta mucho de Christina Aguilera, de su album Stripped, que dice:

"Recuerdo cuando todo comenzó por primera vez
Estuvimos unidos desde el principio
No pasó mucho tiempo antes de que te pusieras duro en eso de tratar de ganar mi corazón.
Puse todo de mi para no caer, pero no pude evitarlo y puse mi corazón al final.
Fuiste considerado, y cuidabas de no herir la relación.
¿Qué pasó con aquellos días en que solías ser compasivo?
Cuidando lo que pensé y dije, tan atento, un caballero.
Ahora es difícil que apartes la cabeza del televisor
Dándome por garantizada últimamente, y francamente, esto tiene que acabar.
Ooh, me siento poco apreciada
Ooh, por todo el tiempo y esfuerzo que he puesto en este compromiso
Llevémoslo de nuevo al principio
Cuando nuestro amor era algo nuevo
Cuando el romance era importante
No era sólo "otra cosa más que hacer"
Me sentía muy alto en el deleite del amor
Pensé que nunca volvería a bajar
Ahora parece que tú y yo hemos perdido nuestro terreno sólido
Después de un tiempo me di cuenta de que parece que doy más de lo que consigo.
Es curioso cómo las cosas parecen cambiar después de unos años de compromiso.
Solíamos hablar durante horas sobre nuestros sueños mientras estábamos acostados en la cama
Extraño aquellos días en que te quedabas despierto
Ahora te das la vuelta y roncas en lugar de eso
(Estoy cansada de esto)
Echo de menos los masajes agradables, las largas llamadas telefónicas
Y la forma en que hablaste, cómo me excitó
Perderme en los baños de burbujas, tener las más dulces risas contigo.
Necesito que me devuelvan esos días...."

Qué gran álbum este. Para los curiosillos, esta canción se la escribió a su marido, del cual, se separó un año más tarde. A veces no hay más ciego que el no quiere ver y por lo visto él, no vio el mensaje.

Ojo, que esta letra, aunque esté escrita de mujer a hombre, sirve para todos lados. El "y viceversa" famoso. Da igual el género, simplemente de una persona a otra que empieza a meterse en su mundo, en sus problemas, en sus historias, en su egoísmo y se olvida del otro lado.

Las promesas empiezan a romperse, a incumplirse. Empezamos a aprovecharnos de la comodidad de saber que la otra persona está ahí aún con mi dejadez. Pero cuidado, porque todo el mundo se acaba cansando. Y hay algunos que van a consulta a hacer una terapia de pareja cuando ya es demasiado tarde, pues, la decepción y la frialdad se va construyendo poco a poco, con detalles del día a día, como el amor. Qué paradoja, ¿no?

Y es que el amor, se construye pero también se destruye. Y aunque tú tengas tus historias, la otra persona también tiene los suyos aunque no los diga, o sean menores, o simplemente no ocurre nada pero necesita sentir que te interesas de igual modo por averiguar si hay algo o no que le pueda preocupar.

Ay el amor, el amor...ese que aparece y descuidamos. Da igual si ha pasado un mes, un año o 23. El amor, ese baile de dos que se convierte en uno porque el otro se ha empezado a descolgar y no se ha dado ni cuenta cómo ni cuando fue. El amor, el santo grial que todos dicen buscar pero que cuando lo tienen delante, no saben protegerlo, cuidarlo, respetarlo y amarlo. Del que todos hablan pero nadie lo profesa.

Ama. Expande tu alma. El que ama se vuelve grande, se purifica, se nutre y hace que la vida del otro, se expanda igual.

Cuida tu relación como cuidas a tus animales, o tu trabajo, o tu moto, o a tus hijos, o tu cuerpo.

Compromiso: Del lat. compromissum.
1. m. Obligación contraída.
2. m. Palabra dada.
3. m. Acuerdo pactado entre distintas partes.

Si no cumples lo que dices, no lo digas. Pues en el compromiso no solo está implícita la otra parte, sino tu mismo, tus valores, tu integridad y tu palabra.

Sal del egoísmo, que aburre. Vive en equilibrio entre el TÚ y el YO.`,
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
    content: `"Solo escribo cuando tengo una crísis", eso es lo que le digo a la gente que me conoce, y es cierto. Desde 2020 no me he vuelto a sentar frente a mi ordenador a empezar y terminar un blog. He tenido algún que otro intento, pero como nunca era nada grave ni lo suficientemente profundo en mí como para hacerme parar, pues escribía 2 frases y lo borraba. Pero hoy, tres años después, estoy aquí, enfrentándome a una de las cosas que más me libera, me conecta, me hace encontrarme y me sana: Escribir. Soltar y compartir todo lo que llevo dentro es para mí, una de mis mejores terapias. Y aquí voy, esperando que os sirva, que os llegue y os sintáis en algún momento identificados para poder liberaros al leerlo y perdonaros.

Esto que escribo es para mí, pero también es para ti. Voy a hablarte de perderte; De esa sensación de estar mal, hundido, sin saber donde leches ir ni a dónde o a quien acudir y, por tanto, agarrarte a la primera piedra que aparece por tu vida. Algunos lo sabéis, otros no, pero mi madre ha fallecido hace 25 días. Para los que no lo sabéis, mi relación con ella era muy estrecha. Mi madre era mi Pilar, como su nombre lo decía. Era todo pues, no tenía nada más además de mis hermanos. Era mi padre, mi abuela, mi amiga, mi consejera, mi psicóloga, mi maestra, mi consuelo y también, por supuesto, mi criptonita.

Todo fue muy rápido. De repente. En dos semanas. De un día para otro. Y yo, al igual que ella y mis hermanos, no lo esperábamos. Estábamos en shock y de hecho, seguimos estándolo. Me decían varios amigos: "Nerea, a medida que pasen los días, la irás echando más y más de menos, esto acaba de empezar". Y era cierto. No voy a pararme mucho en este tema pues, es algo que reservo para mí y los míos, pero si voy a pararme en argumentar en lo que se siente: Vacío. Desconcierto. Perder el rumbo, el norte. Toda tu vida se tambalea y caes en un laberinto en movimiento que solo te genera confusión, caos y sensación de inestabilidad.

Esto os habrá podido pasar con alguna relación de pareja, con alguna muerte cercana, con cambios bruscos en vuestra vida por elección (hacer terapia consciente), etc…La cuestión es que, en esa sensación, salió a la luz la niña vulnerable, débil y pequeñita que hay en mí, al igual que la hay en ti. Vamos por la vida yendo de adultos, queriendo controlar todo, queriendo aparentar algo que a veces incluso detestamos, que nos sobrepasa, que no es coherente…pero sí, lo hacemos como medida de protección. Y, ¿qué pasa? Que cuando ese niño sale, hacemos muuuuuuchas idioteces, pues ese niño, solo va buscando amor. Como dice Julia Roberts en Notting Hill "No olvides que soy una chica delante de un chico, pidiendo que la quiera". Ese amor perdido es el que vas buscando. Puede ser el amor de una madre, una pareja, un hijo… seguro que entiendes lo que te quiero decir, porque al final, todos (o casi, conozco gente que no) buscamos que nos amen, ¿no? y más en un momento así.

Y cuando eso ocurre, sale ese corazón más inocente y más frágil a la superficie. Vamos llorando sin llorar en busca de un abrazo, de unas palabras de consuelo y de poder evitar ese dolor, esa pérdida. ¿Cómo lo solemos hacer? Pues hay muchas formas, unos se desmelenan, otros se drogan, otros se van a la India, y otros (la mayoría) saltando a los brazos de otra persona para reemplazar ese vacío y que, suele salir mal. Porque volcamos todo ahí y entonces es cuando ocurre… NOS PERDEMOS de nuestro foco. Y ahí, ahí está la hostia…porque no notamos que hay personas que pisotean nuestra paz mental de lo mal que estamos, y les damos un poder que no debemos dar.

Nos perdemos porque no estamos bien. Porque aunque nadie lo sepa, lloramos a diario. Nos cuestionamos a diario. Nos torturamos a diario. La pena nos inunda, el desconcierto, el desasosiego y … el no sentirse entendido por nadie. Te preguntas mil veces por que, para que. Y ninguna respuesta, SILENCIO.

Qué puñetera mierda, ¿no? Pues sí. Es duro, pero ¿sabéis qué? Es necesario. Yo me he perdido, y no es un delito. Es normal. Es necesario y es entendible. Y por ello te lo quiero decir a ti también. No pasa nada. A veces necesitamos perdernos para encontrarnos y renovar nuestra vibra, nuestra energía, y nuestra esencia. Esa de la que yo hablo mil veces y de la que siempre defiendo diciendo que NADIE puede ni debe quitártela. Pero es justo y debes permitirte sentirte de bajona e incluso sentir esa soledad en tu casa, enfrentarte al silencio, pues ese silencio te ayuda a escucharte a ti, a no tener ruidos externos de gente que te influencia o manipula, que te juzga y te dice lo que ser o decir o sentir.

Es cuestión de que te des tiempo y seas tremendamente amoroso contigo mismo, ya que es la mejor manera para reconfortarte. Yo estoy jodida, no lo voy a negar (y eso que no he contado ni la mitad de lo que me ha pasado entre historias amorosas y enfermedades en lo que llevo de mes, todo juntito) pero también sé que saldré, como siempre. Porque yo siempre salgo. Porque mi fuerza interior es más grande que todo esto. Porque mi amor interior es más potente que todo el miedo que me pueda inundar. Y porque, aunque mil veces me pierda o caiga, mil veces vuelvo a beber de la misma fuente: la mía. Yo sé quién soy. Lo que doy. Lo que seré. (REPITE PARA TI MISMO ESTE PARRAFO, te lo regalo, como mantra).

Una vez me dijo un jefe que tuve: "Nerea, no hay dedo que pueda tapar jamás el sol". Y es verdad. Al final los rayos se cuelan por mucho que intentes tapar al sol y yo amigos míos, soy Leo (El sol). Y aunque una cabra montesa vive en mí (Capricornio de ascendente) y me puedo ir al monte a esconderme "mientras me curo del corazón" como dice Karol G, yo al final, soy el sol.

Tiempo para curarnos mi gente, tiempo para perdonarnos, para sanar nuestros errores y no repetirlos, para recargar energía, para encontrarnos con nosotros mismos. Solo hay que saber rodearse de la compañía correcta, de esa que en tus momentos de tempestad, te deja su mitad de chubasquero y te da un abrazo para quitarte el frío. De esa que deja a un lado su vida estresante y rutinaria para poner el foco en ti un ratito y oírte llorar o simplemente hablar. Esa gente que, hace el esfuerzo de verte viniendo desde Sevilla aunque sea "para 10 minutos" como dice mi Joselito, esa "maléfica" que viene desde "Cai" para darte un abrazo que te cura y se va. O ese otro que viene desde Murcia para estar a tu lado al leer en el funeral de tu madre para apoyarte moralmente por si las lágrimas no me dejaban hacerlo. O esa otra escorpiana que te escribe a diario y te manda audios diciéndote "tu eres mi faro, te quiero mierda joe", y que te habla con dulzura, ternura y cariño. Y TODA ESA QUE, como mi rubiales, me sirve a mí de faro cuando estoy tan jodidamente mal (perdona Félix por hablar tan mal). De esos que puedes llegar a agotar contándole una y otra vez tus mierdas pero siempre están ahí, a cualquier hora, cualquier día, y te dan calma, te dan paz, te dan serenidad. Esas que apenas existen. Y como no, de tus familiares, de esos con los que puedes sincerarte y te escuchan pacientemente y te aman.

He perdido a mi madre, cierto. Pero ahora estoy encontrándome yo, y encontrando a gente bonita que, aún viendo mi momento de debilidad, no lo usa, sino que lo protege, me quiere, me ama, me abraza, me consuela y está ahí para mí.

Me decía mi amigo Lecum que, "tu siempre has estado para todo el mundo y ahora nos toca a nosotros estar para tí". (Lo que se siembra se recoge, ¿no mi capitán?)

Pues me siento bendecida, porque aún en estos momentos de tinieblas en los que a veces no veo nada y elijo mal, y me doy de hostias o me entristezco, tengo gente que está ahí para mí de verdad. Y os lo quiero agradecer a todos. A los que estáis a la altura y los que no. A los que me habéis dado amor y estáis cuidando mi delicado corazón con mucha empatía, con compasión y tacto y a los que os lo habéis cargado (lo poco que me quedaba), pues he aprendido mucho de vosotros y de cuanto debo cuidarme otra vez, cuanto de necesario era perderme en vuestros desprecios y decepciones para volver a darme cuenta de que ahí no era, era aquí: EN MÍ.

Así que, por favor, si estás pasando un momento difícil, se bondadoso contigo mismo. Date tiempo. Dale un descanso a tu exigencia. Ya volverás más recargado. Pero deja de hacer el tonto. Ya lo has hecho bastante. Ya has perdido tiempo bastante agarrándote a clavos ardiendo, llevando una vida incongruente, vacía, poniendo el foco fuera de ti.

"Cabeza alta" me dice mi alter ego, pues, aún estando rota y vacía Nerea, sigues dando amor.

A veces, los que tenemos este don (lo siento, todos no lo tenéis) de pulir de maravilla las piedras en bruto que se van encontrando por ahí, no nos damos cuenta que en nosotros está el diamante que tenemos que pulir, porque como dice mi querida Taylor Swift, "te echo de menos a ti, pero echo de menos brillar yo". Porque los que somos diamantes, tenemos que pulirnos, cuidarnos y no dejar de brillar.

Gracias sí has llegado hasta aquí. Porque este texto era para mí y me he sanado a través de tu lectura. Y que sepas que no estás solo, te sigo mandando amor, pues incluso en mi vacío, hay un amor tan grande dentro de mí que siempre se puede seguir dando amor allí donde saben apreciarlo. Y si lo necesitas, aquí te mando un poquito.

Cabeza alta. El universo ve, mira, observa y RECOMPENSA. Todo irá bien. No te machaques más.

P.D: Que hartón de llorar me he dado escribiendo esto, pero qué bonito es limpiar y sanar. Qué bonito es ser transparente, no controlar la emoción, no cohibirse en expresar sentimientos. Qué bonito es ser valiente, amar anchando el alma y ser libre para hacerlo.`,
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
    content: `Creo que es la frase que más he repetido en este año: Bendito 2020. La verdad es que he estado en alguna que otra mierda, algunas han sido pesadas, otras duraderas y las que menos, livianas. Sólo ha sido alguna que otra, porque en un alto porcentaje ha sido el mejor año de mi vida, pues ni el COVID ha podido con él. Es mi mejor año sin duda. En treinta años solo había cumplido un sueño. En el año que llevo, (ahora tengo treinta y uno), ya llevo cumplidos tres, más otro que está ya fraguándose. En proporción es mucho mejor, ¿no?

La realidad es que estaba estancada. No me gustaba la vida que llevaba, no era feliz, no me sentía plena y me estaba volviendo loca. A mí y a cualquiera que me rodeara. Enfadada con el mundo y conmigo misma, entré en un espiral del que no veía salida. Sabía que quería acabar y terminar, pero no sabía ni cómo, ni cuando sería el mejor momento. Tenía lazos de dependencia creados, compromisos y, en definitiva, zona de confort por doquier.

Total, que la vida me dijo "tu qué pasa cobarde, ¿qué no te atreves?, pues agárrate que te vamos a dar el empujón de tu vida". Y tanto que me lo dio, literalmente. Tuve el accidente de mi vida el 1 de febrero. Me rompí de todo y más, y me mandaron cama y heparina durante dos meses y medio. Me dijeron que no volvería a andar sino pasaba por una operación que tampoco me daban seguridad ni garantía de que fuera a quedar bien. Pinta bien ¿eh?, bueno, pues aún no has leído todo. Me pilla el confinamiento y mi traumatólogo coge el COVID. Se cancela la operación hasta más ver. Solo me quedaba incertidumbre, miedo y dudas.

Reconozco que lloré lo que no había llorado en mi vida. Me veía con 30 años sin poder volver a andar y sin que nadie me diera solución. Mi traumatólogo desapareció y mis esperanzas con él. Para más inri, mi relación de pareja de siete años se terminó de manera brusca en mitad de todo esto. Estaba sin poder andar y con el corazón hecho añicos. Y ahí estaba yo, en medio de un huracán del que no entendía nada.

Una semana más tarde de aquella decisión estaba con mis maletas en la puerta, mi negocio cerrado, todo mi dinero invertido perdido y el orgullo...herido. Aunque fue tremendamente doloroso para mí, fue a su vez una auténtica liberación que luego explicaré.

Tuve que buscar en plena pandemia un nuevo piso para mi, un hogar que antes no había tenido y crearlo desde cero. Llevaba los bolsillos vacíos y el alma rota, pero algo que no había sentido nunca antes: Por primera vez después de muchísimos años sentía coherencia con mi vida y lo que hacía con ella.

Os juro que no fue fácil. Tenía que aprender de nuevo a andar sola, pero el universo se encargó de ponerme ángeles en el camino que me iban dando pequeñas ayudas. Brutal, ha sido brutal todo el amor y el apoyo que yo he sentido. Familiares, amigos y amigas se volcaron conmigo, clientes que incluso vinieron a ayudarme a montar mi nuevo negocio, que cortaron conmigo maderas, cargaron muebles... lo recuerdo y me emociono de alegría. Que grandes sois. Yo iba coja, con muletas, pero tenía una fuerza que no sentí jamás.

De toda esa fuerza, saqué la suficiente para lo más importante: YO. Me olvidé de mí, me empequeñecí y me volví dependiente (o más bien, dejé que me hicieran dependiente). No era yo. No me sentía libre ni feliz. Pero todo eso cambió debido a ese bendito 1 de febrero que trajo como consecuencia el crecerme como persona, el no apoyarme en nadie y realizar el trabajo más duro que llevaba años evitando: quererme a mi misma más que a los que me rodeaban. Me dediqué a dar, a amar. Menos a mi. Me centré tanto en lo que estaba fuera de mí que un día no supe reconocerme. Me miraba en el espejo y sentía que no era yo. Ya no me arreglaba, ya no me importaba nada, no hacía ejercicio, no me trataba con respeto, no me escuchaba ni me conectaba con mi parte espiritual. Supongo que alguna vez te habrás sentido así y me entenderás. Me conformaba con migajas y no vivía en armonía con lo que realmente anhelaba. Rogaba que me quisieran, porque yo no me quería nada.

La realidad es que me echaba de menos. ¿Qué había sido de mi? ¿Dónde estaba yo?

Pero como os he dicho, todo eso cambió desde ese día 1 de febrero de 2020. Curioso, ¿no? Como un accidente que duró 9 segundos me cambió la vida. Bendito sea, pues fue lo mejor que me pudo ocurrir. Después de toda esa tempestad, como dice el refrán, llegó la calma.

Empecé a reencontrarme conmigo misma poco a poco. Fue un proceso lento y doloroso. No podía creer como había llegado hasta ahí. Pero paso que daba, era una auténtica victoria. Paso metafórico y literal. Al final, mi pie se curó de forma milagrosa. Sin ningún tratamiento ni operación. No me preguntéis cómo, fue un milagro, aunque he de decir, que me senté de la forma más sincera y noble a pedirle al de arriba que me curase, pero no sin antes yo demostrar que había cambiado, que había aprendido la lección y que iba a comprometerme conmigo misma y mi actitud ante toda esa mierda que estaba viviendo. Yo cumplí, y él también.

No sé si fue un milagro o fue la fuerza y entereza que le puse, pero la realidad es que ando 6 kilómetros diarios desde entonces y me pongo tacones de 9 cms de alto, y con eso me quedo yo.

Y vosotros diréis, "Nerea, y ¿qué c***** de bendito tiene esta historia?" Pues si os parece poco, la historia no queda aquí. Vinieron un millón de inconvenientes más, problemas, crisis internas que se agudizaban con el maldito confinamiento, que me obligaba sin duda a tener que pararme a reflexionar y vivir todo esto desde la soledad de mi casa, sin poder huir ni evadirme con salidas, viajes, amigos, ruidos, gentes… Mi alma pedía desmelenarme y la situación me decía que NO. Y menos mal, pues gracias a este bendito confinamiento que nunca acababa, tuve que sentarme y ponerme a trabajar, todos los días, sin poder escaparme de eso que tanto me dolía. Volví a aprender a quererme, pero esta vez, seriamente, haciéndome la promesa de no volver a dejarme en un rincón del olvido por nada ni nadie, poniéndome como prioridad ante cualquier cosa. Y haciéndolo sola, que tiene doble mérito y orgullo para mí, sin muletas (metafóricas, entiéndase).

Me he enfrentado a idas y venidas, a miedos, a noches oscuras sin luces que me protejan, a inseguridades. He vencido a mis dragones, he descubierto el sexo de verdad, el que te hace vibrar como nunca antes lo había hecho. Me he sentido deseada, tremendamente atractiva, he batallado con mi personalidad, he hablado directamente con mi mente y, familia, creedme, he salido vencedora y sobre todo, he descubierto una Nerea mucho más hermosa, más fuerte, más pura. ¡Buah!, me emociono al mencionarlo porque nunca pensé que me vería con estos ojos que me veo hoy. Por fin reconozco la gran mujer que soy, sin armaduras absurdas, con mis cosas buenas y malas, pero todas ellas son lo que soy yo hoy: independiente, serena, estable, libre, fuerte, feliz y entera. Va a sonar a cómic, pero me siento poderosa, invencible, y sobre todo…llena. Me vacíe de tanto dar, pero ahora me siento completamente llena. Ese accidente me dio el mayor regalo que uno puede esperar de la vida: estar en paz y amarse como uno es.

No sé si será que el karma me está devolviendo todo eso que di, pero yo puedo decir con el mentón alto y el corazón limpio que me lo merezco. He cumplido sueños, he encontrado nuevos amigos, he crecido el triple laboral y educacionalmente, he hecho el amor como nunca antes, he vivido risas y carcajadas hasta dolerme, me he reencontrado conmigo misma y aún más, he sacado lo mejor de mí que ni siquiera yo sabia que lo tenía. He ganado más dinero y me he reconciliado conmigo misma, ¿por qué tu ibas a ser menos? ¿Por qué no ibas a poder merecértelo? Joder, ya te toca, ¿no? Ya has dado, amado, prestado y entregado lo suficiente. Ahora es tu turno. Hay cosas hermosas esperando por ti y sabes que, aunque duela llegar ahí, cuando llegues será la hostia.

Porque yo no te estoy contando historias mentales ni psicológicas, ni herramientas ni leches fritas. Te estoy contando mi vida y mi verdad. Y la tuya está esperando, deseosa de salir a la luz, de dar un golpe en la mesa y decir YA NO PUEDO MÁS.

Tu esencia está gritándote "déjame salir" en forma de ansiedad, en forma de angustia, tristeza o miedo. Si no lo sabias o nadie te lo había dicho antes, te lo voy a decir yo: Vales un puñetero imperio. Me dan igual tus imperfecciones, me dan igual tus taras, tus caídas o cualquiera de esas cosas que estarás pensando. ME DAN IGUAL. ERES IGUALMENTE VALIOSO Y VALIOSA PARA MÍ COMO PERSONA. Y sí, te lo debes, te debes respeto, dignidad y cariño. Y ésta era la señal que esperabas. No sigas regodeándote en la mierda, en la migaja. Saca toda tu fuerza, esa que crees no tener, todo tu coraje y aborda tu vida. Porque vales, porque te lo mereces y porque tienes todo el maldito derecho a ser tú, sin miedo, sin dudas, sin nada que frente tu felicidad. Hay un mundo esperando por ti. Yo no soy más que tú, sólo soy humana, y por ende, tu puedes conseguirlo igual que yo. Solo requiere trabajo, consciencia, compromiso y esfuerzo.

Os espero a todos, en ese lado de la vida, porque ahí es donde realmente debes estar. Te lo debes.

P.D.: me lo dedico a mí misma, la chica del espejo. Por mí y todas las cabras montesas que suben presas en vertical.

No hay montaña alta, sino mente débil que cree no poder lograrla alcanzar.

Gracias 2020. Bendito 2020. Feliz Navidad.

Nerea Ballester Goytia.
Terapeuta y Coach.
www.neoka.es

Artículo publicado en el periódico Diario de Huelva: https://www.diariodehuelva.es/2020/12/11/nerea-ballester-2020-opinion/`,
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
    content: `Artículo publicado en el Diario de Huelva: https://www.diariodehuelva.es/2020/09/30/idolos-del-circo/

Siete y veinticinco de la mañana de un lunes. Me levanto y ¡zas! aparece una notificación en Facebook que me pregunta en qué estoy pensando. Empezamos bien la semana. Tengo siete notificaciones más y con la caraja típica de la mañana, voy deslizando con el dedo hacia la derecha para borrarlas con la mala pata que dejo pulsado demasiado tiempo (un segundo más) la notificación de Facebook con la consecuencia de que su apertura.

Lo primero que pienso es "buf, qué coñazo de Facebook". Esperando a que se abra la app para poder cerrarla, de repente veo una publicación curiosamente de una persona que ha acudido a consulta por primera vez.

Se presentó en mi sofá como una persona atormentada por sus relaciones tóxicas e intensas, con una baja autoestima considerable, arrastrada por una inseguridad impropia de un ser humano y con un sentimiento de infelicidad y desgana…Abrumador.

Al ver la publicación mi cara de asombro es como un cuadro de picasso. Dicha publicación era una oda a la felicidad, la seguridad e independencia, haciendo del amor propio una lucha sin fronteras, acompañado por supuesto de una foto con siete filtros y cuatro capas de maquillaje que, difícilmente hace que se pueda ver a la persona que yo veo en persona, de hecho, me costó reconocerla.

Lo peor de la historia no solo fue la hipocresía que vomitaba en dicho post, sino más bien la idea irreal que se traslada a los que le comentaron, que se creían dicho discurso (que firmemente parecía el de un político) como borregos de una sociedad que se compra lo primero que ve anunciado en la tele. Era increíble que hubieran ciento cincuenta y ocho likes y sesenta y siete comentarios creyéndose y alabando semejante mentira. ¿De verdad somos tan necios? Lo peor de todo, es que envidiamos eso.¡Envidiar el qué Dios mío, si es todo mentira!

Sesenta y siete personas idolatrando un mensaje y una irrealidad, un pantomima que lo que camufla en realidad es un deseo de reconocimiento abrumador. ¿Pero esto qué es?

Yo aprendí hace mucho tiempo que nada es lo que parece, que el ser humano es el "artilugio" más potente creado para autoengañarse y creer sobrevivir así.

Hay personas que quieren ser críticos con la política, yo lo prefiero hacer con la sociedad que nos contamina, pues gracias a ella, cada día somos más superficiales, más engañosos o más trapaleros (como dicen en mi pueblo). Cada día más distantes, fríos e insolidarios, cada día más deshumanizados e incoherentes y las redes sociales ayudan más a que eso se pronuncie.

Vivimos exclavizados del qué dirán, pero no nos damos cuenta de que lo provocamos nosotros exponiéndonos a ello. Si mostramos una mentira, ¿qué esperamos que nos llegue de vuelta? Si encontramos una relación que ha surgido de las redes sociales en las que sólo mostramos/vendemos nuestro cuerpo y lo empepinados que estamos (ego por doquier, eeeejeeemm) con nuestros "filtros" (reales y metafóricos), ¿qué esperamos atraer? Una relación basada en la profundidad y la esencia, seguro que no.

Vivan ustedes de mentiras y apariencias, que así nos va pues.

Bienvenidos al circo, ¿qué careta te toca hoy?`,
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
