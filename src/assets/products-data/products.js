import { v4 as uuidv4 } from 'uuid';

export const productsData = [{
    category: 'fotografia', 
    products:[ {
            img: require('../sony-a7-iv.jpg'),
            name: 'Sony a 7iv',
            description: 'La resolución realista y el extraordinario enfoque automático con tecnología de inteligencia artificial de la α7 IV complementan una gama de funciones de primer nivel a la vanguardia de la tecnología de imagen. ', 
        url: 'sony-a7iv',
        caracteristicas: ['Tipo de sensor: Full-frame de 35 mm (35,9 x 23,9 mm), sensor Exmor R® CMOS', 'Numero de megapixeles: 33 megapixeles', 'Sensibilidad ISO: 100-51 200 con posibilidad de ampliar hasta 50-204.800', 'Tipo de visor: Visor electrónico de 1,3 cm (tipo 0.5) (OLED Quad-VGA)', 'Tipo de monitor: TFT de 7,5 cm (tipo 3.0)'],
        precio: 8000, 
        id: uuidv4()
             
    },
    {img: require('../products-imgs/black-magic.jpg'),
        name: 'Black Magic 4k Body', 
        description: 'Body Blackmagic Design Pocket 4k Cine', 
        url: 'black-magic',
        caracteristicas: [
             'Video 4k', '60fps', '4 baterias canon internas', '2 baterias np-f750 externas', '8hs de bateria','Cable para conectar microfono (camara con phantom)','1tb t5 disco ssd externo (1 hora en raw q0 / 4 horas en raw Q5 / 1000 minutos proxy)',' 250gb disco ssd externo (15 minutos en raw Q0 / 1 hora raw Q5 / 250 minutos proxy	)', '64gb extreme pro sandisk 170mb/s', 				
        ], 
        precio: 8000,
        id: uuidv4()
        
    }, 
    {img: require('../products-imgs/canon-t3i.jpg'),
        name: 'Body Canon T3i', 
        description: 'Body Canon T3i, con sensor aps-c', 
        url: 'canon-t3i',
        caracteristicas: [
             'Video full-hd 1080', '18 megapixeles', '8hs de bateria','tamaño de pantalla 3"',				
        ], 
        precio: 1400,
        id: uuidv4()
        
    }, 

    {img: require('../products-imgs/sigma-18-35-1.8.jfif'),
        name: 'Sigma 18-35mm art 1.8', 
        description: 'Este objetivo zoom estándar de formato APS-C para cámaras digitales Réflex.', 
        url: 'sigma-18-35', 
        caracteristicas: ['Montura: canon(con adaptador para sony)', 'Construccion del objetivo: 17 elementos en 12 grupos', 'Angulo de vision: 76.5°', 'Num. de láminas del diafragma: 9(diafragma circular)', 'Apertura minima: f16', 'Magnificación maxima: 1:4.3', 'Dimensiones: 78mm Diámetro x121mm Longitud', 'Peso: 810gr.',
        ], 
        precio: 3000,
        id: uuidv4()
        },
    {img: require('../products-imgs/sigma-30mm-1-4.jpg'),
        name: 'Sigma 30mm art 1.4', 
        description: 'Objetivo de la linea art, para camaras apsc, montura canon pero con adaptador sony o blackmagic/panasonic opcional', 
        url: 'sigma-30mm', 
        caracteristicas: ['Montura: canon(con adaptador para sony)', 'Construccion del objetivo: 9 elementos en 8 grupos', 'Angulo de vision: 50.7°', 'Num. de láminas del diafragma: 9(diafragma redondeado)', 'Apertura minima: f16', 'Magnificación maxima: 1:4.3', 'Dimensiones: 74.2mm Diámetro x63.3mm Longitud', 'Peso: 435gr.',
        ], 
        precio: 1800,
        id: uuidv4()
        },
        {
            img: require('../products-imgs/minolta-70-210.jfif'),
        name: 'Minolta 70-210 f4 Beercan', 
        description: 'Objetivo analogico Minolta, con montura para sony a y adaptador para sony e', 
        url: 'minolta-70-200', 
        caracteristicas: ['Apertura maxima f4 en todo el rango','rango focal 70-210', 'lente analogico muy robusto', 'Muy nitido'
        ], 
        precio: 1400,
        id: uuidv4()
        },

        {
            img: require('../products-imgs/sigma-24mm.jpg'),
        name: 'Sigma super wide 24mm 2.8 macro', 
        description: 'Objetivo sigma analogico, montura a y con adaptador a montura e', 
        url: 'sigma-24mm', 
        caracteristicas: ['Funciona como lente macro', 'Peso: 260gr', 'Tamaño del filtro: 52mm'
        ], 
        precio: 900,
        id: uuidv4()
        },
    
    
    {img: require('../products-imgs/GIMBALL.jfif'),
        name: 'Dji Ronin rs2', 
        description: 'Estabilizador gimball para Dji Ronin rs2', 
        url: 'ronin-rs2', 
        caracteristicas: ['Peso: 1,3kg', 'Carga maxima: 4,5kg', 'Dimesiones cerrado:  26 x 26,5 x 7 cm', 'Dimnsiones abierto: 41 x 26 x 19,5 cm', 'Duración de batería: 12hs', 'Tiempo de carga: 1hs', 'Pantalla tactil: si', 'Material: fibra de carbono'], 
        precio: 1800, 
        id: uuidv4()
        },
     {img: require('../products-imgs/monitor.jpg'),
        name: 'Monitor Feelworld FW703 4k', 
        description: 'monitor feelworld fw703 4k 323ppi ultra thin ips color hdmi 7 pulgadas', 
        url: 'Monitor-Feelworld-FW703-4k', 
        caracteristicas: ['Pantalla:7 ips 3g-sdi 4k hdmi, full hd 1920x1200 de alta resolucion, alto brillo: 450cd/m2, alto contraste: 1200: 1, relacion de aspecto 16: 10, angulo de vision: 80*/80*(l/ r) 80*/80*(u/d), el amplio angulo de vision de 160* facilita que varios miembros de la tripulacion lo vean al mismo tiempo', 'Entradas: 3g-sdi, hdmi, salidas: 3g-sdi, hdmi, auriculares estereo, altavoz (incorporado), compatible con entrada y salida 4k hdmi', 'Peso: 320gr', ], 
         precio: 780, 
         id: uuidv4()
        },
      {img: require('../products-imgs/drone.png'),
        name: 'Drone Dji mavic air', 
        description: 'Drone Dji mavic air 4k / slow motion Full HD', 
        url: 'drone-dji-mavic-air', 
        caracteristicas: ['Sensor: 1/2.3” CMOS Effective Pixels: 12 MP', ], 
        precio: 3000,
        id: uuidv4()
        },
    ]
},

    {
        category: 'luces', 

        products:[{
        img: require('../leds.jpg'),
        description: 'incluye adaptadores, rotulas y tripies sin cargo', 
        name: 'Pack Ilimuniación cine 1',
            url: 'pack-iluminacion1', 
            caracteristicas: [' kit luces yognuo x3 + panel de 9600LM IRC 95% bateria 4hs en maxima potencia', 'A vara led yognuo 360 colores + bateria np750 IRC 95%', 'B vara led yognuo 360 colores + bateria np750 IRC 95%', 'C vara led yognuo 360 colores + bateria np750 IRC 95%', 'D Led Yongnuo control remoto 1200+transformador+baterias IRC 95%'], 
            precio: 3000,
            id: uuidv4()

},
 
    {
        img: require('../leds.jpg'),
        name: 'Pack Ilimuniación cine 2', 
        description: 'incluye adaptadores, rotulas y tripies sin cargo', 
        url: 'pack-iluminacion2', 
        caracteristicas: ['Kit luces yongnuo x3 bateria 4hs en maxima potencia', 'A vara led yognuo 360 colores + bateria np750 IRC 95%', 'B vara led yognuo 360 colores + bateria np750 IRC 95%', 'C vara led yognuo 360 colores + bateria np750 IRC 95%'], 
        precio: 1700,
        id: uuidv4()
    }, 
    {
        img: require('../products-imgs/visico-200t.jpg'),
        name: 'Visico 200t', 
        description: 'Luz continua VISICO 200T con control remoto.', 
        url: 'visico1200t', 
        caracteristicas: ['Equivalente a 4000w temperatura °5500k', 'Montura bowens y paraguas / corriente directa'], 
        precio: 1800,
        id: uuidv4()
    }, 
    {
        img: require('../products-imgs/yognuo-1200yn.jpg'),
        name: 'Yognuo yn1200', 
        description: 'Panel led yognuo yn1200 con tomacorriente', 
        url: 'yognuoyn1200', 
        precio: 1300,
        caracteristicas: ['Equivalente a 1000w temperatura °5500k', 'Montura bowens y paraguas / corriente directa', 'Se puede pedir con cuatro baterias npf950, en este caso su precio seria 1800'], 
        id: uuidv4()
    }, 
    {
        img: require('../products-imgs/yognuo-360-rgb.jpg'),
        name: 'Yognuo yn360 rgb', 
        description: 'Vara led Yognuo RGB, con baterias', 
        url: 'yognuo360rgb', 
        precio: 800,
        caracteristicas: ['Equivalente a 250w °5500°3200+RGB','Con dos baterias npf 750'], 
        id: uuidv4()
    }, 
    {
        img: require('../products-imgs/yognuo-360s.jpg'),
        name: 'Yognuo yn360s slim', 
        description: 'Vara led Yognuo con baterias', 
        url: 'yognuo360s', 
        precio: 700,
        caracteristicas: ['Equivalente a 250w °5500°3200', 'Con dos baterias npf 750'], 
        id: uuidv4()
    }, 
            {
                img: require('../products-imgs/photix65.jpg'),
                name: 'Softbox Photix lantern 65',
                description: 'Softbox para led',
                url: 'photix65',
                precio: 800,
                caracteristicas: ['Diametro: 65cm','Ofrece luz suave e iluminacion omnidireccional', 'Montura Bowens', 'Armado rapido','Tela difusora de nylon', 'Varillas de fibra de vidrio flexibles y ligeras, muy conveniente para instalar y desmontar'], 
        id: uuidv4()
    }, 
        {
                img: require('../products-imgs/photix-oval.jpg'),
                name: 'Softbox Photix raja oval 50x120',
                description: 'Softbox para led',
                url: 'photix-oval',
                precio: 700,
                caracteristicas: ['Medidas: 50cm x 120cm','Utiliza un sistema de armado rápido con varillas metálicas plegables de gran flexibilidad y resistencia', ' Construido con nuevo material de última generación SL-Tech', 'Armado rapido','Tela difusora de nylon'], 
        id: uuidv4()
    }, 
            {
                img: require('../products-imgs/sombrilla-plateada-dorada-godox.jpg'),
                name: 'Sombrilla Godox',
                description: 'Sombrilla doble cara dorada o plateada de  101cm.',
                url: 'sombrilla-plateada-dorada',
                precio: 200,
                caracteristicas: ['De un lado refleja luz plateada más dura y fría','Si se lo invierte refleja la luz dorada más cálida', 'Permiten amplificar el volumen de la luz del flash, sin que éste incida directamente sobre el modelo'], 
        id: uuidv4()
    }, 
            {
                img: require('../products-imgs/sombrilla-translucida.jpg'),
                name: 'Sombrilla Genki',
                description: 'Sombrilla translucidade  103cm.',
                url: 'sombrilla-translucida',
                precio: 300,
                caracteristicas: ['Ancho: 103 cm','Compatibilidad: Universal','Material: Tela','Tipo de montaje: soporte o rotula','Ancho: 103 cm','Es plegable: Sí'], 
        id: uuidv4()
    }, 
            {
                img: require('../products-imgs/flash-tt350s.jpg'),
                name: 'Flash Godox tt350s',
                description: 'Flash speedlight Godox tt350s.',
                url: 'godox-tt350s',
                precio: 1000,
                caracteristicas: ['Modos de flash: TTL/MANUAL/MASTER FLASH/ESCLAVO','Sistema de radio interno X1 compatible por radio con otros flashes de la marca.','Tiene un número guía de 36 a ISO 100','Sincroniza en 1, 2 y en HSS hasta 1/8000 de segundo','Cabezal inclinable y giratorio de -7 a 90º', 'Incluye pilas'], 
        id: uuidv4()
    }, 
            {
                img: require('../products-imgs/radio-godoxx1.jfif'),
                name: 'Radio Godox X1',
                description: 'Radio para manejo del flash Godox.',
                url: 'radio-godoxx1',
                precio: 700,
                caracteristicas: ['Transmisión wireless: 2,4 Ghz','Peso : 70 gramos', 'Dimensiones: 70 x 65 x 47mm', 'Fuente de alimentación: 2 pilas AA / (incluidas)','Grupos: máximo de 5 grupos ( A / B / C / D / E)'], 
        id: uuidv4()
    }, 
            {
                img: require('../products-imgs/flash-canon.jpg'),
                name: 'Canon 320EX',
                description: 'Con tecnología de receptor inalámbrico, un cabezal de rebote/giratorio y una fuente de iluminación LED constante para trabajar con vídeo, el nuevo Canon Speedlite 320EX abre la puerta a nuevas posibilidades creativas para fotógrafos EOS.',
                url: 'canon-320ex',
                precio: 800,
                caracteristicas: ['Número Guía 32 (m, ISO100)','Cabezal de flash de rebote y giratorio, con configuración de zoom de 24 mm y 50 mm', 'Luz de vídeo LED integrada','Funcionalidad inalámbrica esclava para el flash TTL independiente','Botón de Disparador Remoto', 'Reciclaje rápido y silencioso'], 
        id: uuidv4()
    }, 
            {
                img: require('../products-imgs/visico-801.jfif'),
                name: 'Visico 801tx',
                description:'Control remoto por radio visico vc-801tx para flashes de estudio visico ve pljus, VCHH, Visico 4 e iluminadores Led150t y 200t' ,
                url: 'godox-tt350s',
                precio: 700,
                caracteristicas: ['Frecuencia 2.4 GHz','4 grupos 16 canales','Compatible con Iluminadores Visico LED 150T y 200T','Botón de Disparador Remoto', ' Distancia máxima de Operación: 100m (depende del entorno y de posibles interferencias)'], 
        id: uuidv4()
    }, 

]
    },
    
    {
    category: 'sonido', 
    products:[   {
        img: require('../products-imgs/microfono-boya.jpg'),
        name: 'Microfono BY-PVM1000', 
        description: 'Microfono BY-PVM1000 + Paraviento + Antishock', 
        url: 'microfonoBy-pvm1000', 
        caracteristicas: ['Micrófono unidireccional de alta calidad para producciones profesionales', 'Para videocámaras o DSLR, también puede ser usado como micrófono de cañón','Funciona con batería interna (1.5V tipo AA) o con una alimentación Phantom de 48V','Fabricado en aluminio, con una longitud de 28mm y un peso muy ligero de 110g','Rango de frecuencia de 25Hz a 20.000Hz, e incluye filtro HPF (High pass filter) ','Sensibilidad de -33db, nivel de ruido a partir de 80db, y baja impedancia de salida','Incluye soporte de amortiguación, cubierta de espuma, antiviento y cable de 1,5m con conexión mini jack 3,5mm'],
        precio: 600,
        id: uuidv4()
        },
 
    {
        img: require('../products-imgs/Rode-ntg4-plus.jpg'),
        name: 'Rode ntg4 plus', 
        description: 'Rode Ntg4 Plus + Paraviento y Antishock genericos + pasabajos ', 
        url: 'rode-ntg4-plus', 
        caracteristicas: [' 150h de bateria interna', 'Microfono a condensador cañon (225mm)', 'dispone de pasa altos y atenuador'],
        precio: 1100,
        id: uuidv4()
        }, 
    {
        img: require('../products-imgs/sony-corbatero.jfif'),
        name: 'Sony ECM-W2BT', 
        description: 'Sony corbatero inalambrico ECM-W2BT', 
        url: 'sony-ecm-2bt', 
        caracteristicas: ['Sonido de alta calidad', 'Capta el sonido desde cualquier dirección','Transmición sencilla y sin cables.', 'Transmición de audio de alta calidad hacia el receptor.', 'Graba de forma inalámbrica hasta nueve horas.'],
        precio: 700,
        id: uuidv4()
        }, 
    {
        img: require('../products-imgs/monitores-rokit.jpg'),
        name: 'Monitor Audio Krk Rokit', 
        description: 'Las bocinas ROKIT de KRK son posiblemente los monitores de estudio más ubicuos de los últimos 15 años. Los encontrarás en estudios caseros, suites de edición y en instalaciones profesionales a gran escala junto con monitores que cuestan diez veces su precio.', 
        url: 'monitores-rokit', 
        caracteristicas: ['Un monitor de estudio de campo cercano increíblemente versátil, ideal para cualquier estilo de música.', 'La guía de ondas optimizada proporciona agudos suaves, prístinos y articulados de hasta 35 kHz.',  'Bi-amplificado a medida, clase A/B que ofrece un gran headroom y baja distorsión.'],
        precio: 600,
        id: uuidv4()
        },]
    },
]