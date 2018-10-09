const products = [
    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750301107609L.jpg",
        name: "Totopos tortiely",
        cod: "00750108970107",
        price: "12.50",
        desc: "Tortiely tiene para ti los totopos de 250 gramos, son elaborados a base de nixtamal.",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            },
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },
    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750108970107L.jpg",
        name: "Galletas de ajonjolí",
        cod: "00750301107609",
        price: "14.50",
        desc: "Galletas Pan Europeo arracadas con ajonjolí 3 piezas. Son una delicia a tu paladar.",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },
    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750117831737L.jpg",
        name: "Empanizador mauri",
        cod: "00750117831737",
        price: "17.00",
        desc: "Si no sabes cómo empanizar pollo, tenemos para ti el empanizador condimentado para carnes.",
        reviews: [
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },
    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750301107605L.jpg",
        name: "Tortillas de harina",
        cod: "00750301107605",
        price: "20.00",
        desc: "Tortillas de harina en presentación 'JUMBO', con IO Piezas y un diámetro aproximado de 27 cm",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            },
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00081380500229L.jpg",
        name: "Gomitas e frutti",
        cod: "00081380500229",
        price: "25.50",
        desc: "Diviertete con las gomitas e frutti Lunch Bag con forma de hamburguesas papas fritas y hot dogs.",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750047800040L.jpg",
        name: "Avena quaker oats",
        cod: "00750047800040",
        price: "34.50",
        desc: "Te invitamos a empezar cada mañana con la energía que las hojuelas de Avena Quaker® aportan",
        reviews: [
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00004000000707L.jpg",
        name: "Chocolate snickers",
        cod: "00004000000707",
        price: "16.00",
        desc: "Chocolate Snickers Almond Bar 49.9 g. Chocolate con leche relleno de caramelo, almendras y nougat.",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            },
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750100062183L.jpg",
        name: "Galletas emperador ",
        cod: "00750100062183",
        price: "34.90",
        desc: "Galletas forma tipo sándwich y relleno sabor a chocolate cremoso.",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00005100019532L.jpg",
        name: "Salsa para pizza prego 397 g",
        cod: "00005100019532",
        price: "27.50",
        desc: "Su textura y sabor intenso a tomate le encantará a tu familia. ¡Haz tu súper en minutos y recíbelo en casa!",
        reviews: [
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750630631300L.jpg",
        name: "Mayonesa hellmann's",
        cod: "00750630631300",
        price: "25.50",
        desc: "Ideal para acompañar pescados como salmón o atún y carnes rojas.!",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            },
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750100339308L.jpg",
        name: "Salsa clásica búfalo",
        cod: "00750100339308",
        price: "39.90",
        desc: "Ideal para que disfrutes en tus botanas",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00006731200564L.jpg",
        name: "Galletas voortman almonette",
        cod: "00006731200564",
        price: "39.90",
        desc: "Galletas Voortman de almendra glaseadas 227 g, sin azúcar, sin grasas trans. Certificación Kosher.",
        reviews: [
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00761303642078L.jpg",
        name: "Cápsulas de café nescafé",
        cod: " 00761303642078",
        price: "114.00",
        desc: "Descubre esta edición especial que NESCAFÉ® Dolce Gusto® tiene para ti.",
        reviews: [
            {
                author: "Daniel Herrera",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            },
            {
                author: "Alan Cerna",
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis officia ex beatae nulla dolor rem vero quia? Quaerat cumque sit provident? Praesentium ipsam quaerat totam excepturi voluptatem? Atque, assumenda mollitia."
            }
        ]
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00087979200015L.jpg",
        name: "Té chai imperial organic",
        cod: " 00087979200015",
        price: "78.00",
        desc: "Consiente a tu paladar tomando un delicioso Té chai Imperial Organic vainilla roiboa 32.4 g",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750105863165L.jpg",
        name: "Café soluble nescafé",
        cod: "00750105863165",
        price: "60.00",
        desc: "Café 100% puro soluble hecho con granos 100% mexicanos provenientes de las hermosas montañas de Veracruz.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750129560012L.jpg",
        name: "Leche santa clara",
        cod: "00750129560012",
        price: "19.50",
        desc: "Leche pura de vaca adicionada con calcio y vitamina A que fortalecen los huesos y ayudan a mantener saludable la vista.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750100802042L.jpg",
        name: "Cereal kellogg's",
        cod: "00750100802042",
        price: "42.90",
        desc: "Disfruta de un desayuno saludable con este cereal corn flakes de 530 g que Kellogg’s tiene para ti.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750224733814L.jpg",
        name: "Papel higiénico elite",
        cod: " 00750224733814",
        price: "110.00",
        desc: "Papel higiénico Elite triplex shea butter 18 rollos.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750100752842L.jpg",
        name: "Crema corporal lubriderm",
        cod: "00750100752842",
        price: "59.00",
        desc: "Repara y humecta tu piel por 24 horas gracias a su tecnología de liberación controlada",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750105861787L.jpg",
        name: "Leche condensada nestlé",
        cod: "00750105861787",
        price: "20.90",
        desc: "la original hecha con 100% leche de vaca, para darle mejor consistencia y más sabor a tus postres.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750194348964L.jpg",
        name: "Servilletas suavel 400 pzas",
        cod: "00750194348964",
        price: "30.00",
        desc: "En tu lista de abarrotes no olvides incluir estas servilletas que Suavel tiene para ti con 400 pzas.",
        reviews: []
    },
    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750179165713L.jpg",
        name: "Detergente líquido great",
        cod: "00750179165713",
        price: "109.00",
        desc: "El detergente para ropa de color es perfecto para que puedas lavar tu ropa de una manera más rápida, fácil y divertida.",
        reviews: []
    },
    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00070646024936L.jpg",
        name: "Alimento para perro",
        cod: "00070646024936",
        price: "10.30",
        desc: "Alimento Pedigree Vital Protection cachorro sabor pollo 100 g, 100 % completo y balanceado.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750105061112L.jpg",
        name: "Antimicótico lotrimin crema",
        cod: "00750105061112",
        price: "70.00",
        desc: "Antimicótico Lotrimin crema 30 g, alivia la comezón y el ardor, no grasoso, no mancha, antimicótico de aplicación rápida.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750102540305L.jpg",
        name: "Limpiador líquido pinol",
        cod: "00750102540305",
        price: "77.50",
        desc: "Ideal para limpiar y desinfectar pisos, ventanas, cocinas, baños y todo lo que desees.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750221116158L.jpg",
        name: "Bolsas para basura costalitos",
        cod: "00750221116158",
        price: "32.50",
        desc: "Costalitos que encuentras en un empaque con 12 piezas en tamaño grande, para que utilices solo las que necesitas.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750630630572L.jpg",
        name: "Bebida de soya ades",
        cod: "00750630630572",
        price: "21.00",
        desc: "AdeS Frutal Light con jugo de mango es una deliciosa combinación de la proteína de soya.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750102055344L.jpg",
        name: "Leche lala deslactosada light",
        cod: "00750102055344",
        price: "28.50",
        desc: "Contiene 1.5L de producto. Es despasteurizada adicionada con vitamina A y D, baja en grasa.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750102353502L.jpg",
        name: "Chilorio chata original",
        cod: "00750102353502",
        price: "49.90",
        desc: "Satisface tu apetito con un plato de exquisito chilorio sin perder tiempo en la cocina.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00003384400412L.jpg",
        name: "Imitación de tocino badia",
        cod: "00003384400412",
        price: "66.50",
        desc: "Para tus caldos, guisados o como complemento, disfruta de la imitación de tocino Badia",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00078536594043L.jpg",
        name: "Canela la colina entera",
        cod: "000078536594043",
        price: "72.00",
        desc: "Canela La Colina entera 100 g. ",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00003458709025L.jpg",
        name: "Sal natural la fina",
        cod: "00003458709025",
        price: "6.60",
        desc: "perfecta para preparar comidas saladas, como unas papas a la francesa o para tenerla siempre como sal de mesa.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750100518370L.jpg",
        name: "Caldo de camarón knorr",
        cod: "00750100518370",
        price: "19.90",
        desc: "Knorr® Caldo de Camarón puede ser utilizado para preparar caldos o sopas con pescado, camarón o mariscos.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00004139001646L.jpg",
        name: "Salsa de soya kikkoman",
        cod: "00004139001646",
        price: "45.90",
        desc: "Dale un toque picosito a tus platillos con la nueva salsa de soya con rodajas de chile serrano.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750100065472L.jpg",
        name: "Galletas gamesa cremax",
        cod: "00750100065472",
        price: "29.90",
        desc: "¡Las galletas Cremax® de Gamesa® son capas llenas de sabor! La perfecta mezcla de wafer y crema.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750224906329L.jpg",
        name: "Pasitas rucas mc kim cubiertas",
        cod: "00750224906329",
        price: "189.00",
        desc: "Son pasitas cubiertas con chocolate obscuro que deleitarán el paladar de toda tu familia.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750620580215L.jpg",
        name: "Chocolate en polvo",
        cod: "00750620580215",
        price: "34.00",
        desc: "Polvo adicionado con 23 vitaminas y minerales para preparar bebida.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00858500243571L.jpg",
        name: "Hojas sazonadoras maggi ",
        cod: "00858500243571",
        price: "16.00",
        desc: "Es una hoja deliciosamente condimentada para envolver el pollo y cocinarlo al sartén, dejándolo rico y jugoso!",
        reviews: []
    },


    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00075810400392L.jpg",
        name: "Agua bonafont levité",
        cod: "00075810400392",
        price: "10.00",
        desc: "Agua Bonafont Levité.",
        reviews: []
    },


        {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750104008376L.jpg",
        name: "Queso tipo manchego",
        cod: "00750104008376",
        price: "59.00",
        desc: "El queso manchego de Fud de 400 gramos es el ingrediente que no puede faltar en tus mejores comidas",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750100010630L.jpg",
        name: "Nito bimbo",
        cod: "00750100010630",
        price: "31.00",
        desc: "Nito Bimbo 4 pack.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00075810400320L.jpg",
        name: "Agua bonafont kids",
        cod: "00075810400320",
        price: "23.00",
        desc: "Botellas de agua natural de 300 ml c/u.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750103046661L.jpg",
        name: "Pan blanco bimbo sin orillas",
        cod: "00750103046661",
        price: "36.50",
        desc: "No batalles más quitando las molestas orillas de tu pan de caja, ahora con Bimbo sin orillas",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750105928166L.jpg",
        name: "Dulce de leche nestlé",
        cod: "00750105928166",
        price: "26.90",
        desc: "LA LECHERA® Dulce de Leche está hecho con 100% leche de vaca con una consistencia y sabor que te encantarán.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00007073405500L.jpg",
        name: "Té celestial seasonings",
        cod: "00007073405500",
        price: "59.00",
        desc: "Si quieres disfrutar todos los beneficios del té, no dejes de llevarte el té surtido frutal con 5 sabores diferentes.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750104003454L.jpg",
        name: "Flautas de cochinita",
        cod: "00750104003454",
        price: "71.50",
        desc: "Disfruta de los sabores de México que El Cazo Mexicano tiene para ti con sus flautas de cochinita pibil.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00001410008547L.jpg",
        name: "Galletas pepperidge",
        cod: "00001410008547",
        price: "41.00",
        desc: "No olvides acompañar todas tus botanas para fiestas con estas deliciosas galletas saladas.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750104141729L.jpg",
        name: "Lomo de atún tuny",
        cod: "00750104141729",
        price: "28.90",
        desc: "Lomo de atún Tuny aleta amarilla en aceite 295 g, jumbo, fuente natural de omega 3, sin conservadores.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750101700502L.jpg",
        name: "Rajas de chiles jalapeños",
        cod: "00750101700502",
        price: "10.90",
        desc: "Rajas de chiles jalapeños La Costeña en escabeche 220 g. Sin conservadores.",
        reviews: []
    },

    {
        photo: "https://super.walmart.com.mx/images/product-images/img_large/00750102055294L.jpg",
        name: "Alimento líquido lala ",
        cod: "00750102055294",
        price: "36.50",
        desc: "Alimento líquido a base de almendra, que te ofrece el delicioso sabor de las almendras que tanto te gusta.",
        reviews: []
    }
];