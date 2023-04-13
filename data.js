const products = [
  {
    category: 'makers',
    brand: 'BREVILLE',
    title: 'The Barista Express Impress',
    description:
      "Experience third wave specialty coffee at home, made possible by the 4 keys formula. Designed to use the right dose of freshly grounds beans, ensure precise temperature control, optimal water pressure and create true microfoam milk essential for latte art. You're only a touch away.",
    capacity: '250g Bean Hopper, 2L Water Tank',
    dimensions: 'H: 16.1in, D: 14.9in, W: 12.9in',
    image:
      'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/BES876/BES876BSS1BNA1/pdp_notag.png?pdp',
    price: 719.96,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'makers',
    brand: 'HARIO',
    title: 'V60 Ceramic Coffee Dripper',
    description:
      'Specially designed to produce an evenly brewed cup of coffee. Durable Japanese ceramic retains heat to help ensure retain temperature throughout the brewing cycle. Specialty cone shape and unique spiral ridges allow for deeper layering of the coffee grounds, producing a deep, rich umami flavor.',
    capacity: '300 mL',
    dimensions: 'H: 4in, D: 4.7in, W: 5.5in',
    image:
      'https://www.kitocoffee.com/images/products/brew/hario_plastic_dripper_01.jpg',
    price: 24.5,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'makers',
    brand: 'ESPRO',
    title: 'French Press',
    description:
      "Unlike other presses, the patented double micro-filter keeps your cup extraordinarily free of grit and sludge. Pressing the filter stops extraction completely, so your coffee doesn't get bitter over time. The last cup tastes just like the first.",
    capacity: '32 Oz',
    dimensions: 'H: 9.75in, D: 4in, W: 6in',
    image:
      'https://cdn.shopify.com/s/files/1/0580/1390/9171/products/FrenchPresses-P5Polished-MAIN.png?v=1635271807&width=1080',
    price: 69.95,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'makers',
    brand: 'BIALETTI',
    title: 'Express Moka',
    description:
      'It is Made in Italy and its quality is enhanced by the patented safety valve which makes it easy to clean. Suitable for gas, electric and induction.',
    capacity: '1.42 L',
    dimensions: 'H: 9in, D: 4in, W: 4in',
    image:
      'https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/m/o/moka_express.png',
    price: 41.8,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'makers',
    brand: 'CHEMEX',
    title: 'Handblown Series',
    description:
      'The Classic Series used together with the scientifically designed, patented CHEMEX® Bonded Filters, will guarantee that our pour over brewing process will deliver the perfect cup of coffee, without any sediments or bitter elements',
    capacity: '25 Oz',
    dimensions: 'H: 8 1/2in, D: 4 5/8in',
    image:
      'https://cdn.shopify.com/s/files/1/0435/0201/0530/products/cafetiere-chemex-larbre-a-cafe-accessoire-788583_5000x.jpg?v=1658161421',
    price: 115.45,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'makers',
    brand: 'AEROPRESS',
    title: 'Original Coffee Maker',
    description:
      "Our patented technology produces the richest, smoothes coffee, cold brew, and espresso style drinks you've ever tasted. Designed in Silicon Valley, Made in the USA.",
    capacity: '10 Oz',
    dimensions: 'H: 11.75in, D: 4,75in, W: 4.75in',
    image: 'https://varuste.net/tiedostot/1/kuva/tuote/600/12842773.jpg',
    price: 39.95,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'grains',
    brand: 'GREEN COFFEE TRADERS',
    title: '100% Jamaica Blue Mountain Coffee',
    description:
      "The Blue Mountains of Jamaica provide ideal conditions for growing coffee. Small farms, set in the sheltered locations below the majestic rain forest, produce the world's finest coffee beans, handpicked with meticulous care.",
    capacity: '454 gr',
    dimensions: 'H: 5in, W: 2.5in',
    image:
      'https://cdn.shopify.com/s/files/1/0043/8714/3773/products/GCT_-_1JBM_New_bag_1024x1024@2x.jpg?v=1549425150',
    price: 35,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'grains',
    brand: 'CAFES GUILIS',
    title: 'Cafe de Finca 100% Colombia Natural',
    description:
      'Un café Premium procedente de las mejores fincas de Colombia. Tostado de forma natural con una curva de tueste desarrollada para este café, el resultado es una taza con un penetrante aroma afrutado y una nota de acidez natural.',
    capacity: '1000 gr',
    dimensions: 'H: 5in, W: 2.5in',
    image:
      'https://cafesguilis.com/wp-content/uploads/2022/04/cafes-guilis-origen-colombia-cafe-finca-aroma-afrutado-acidez-natural-cafe-grano-tueste-natural-10123-1.jpg',
    price: 25,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'grains',
    brand: 'VOLCANICA COFFEE',
    title: 'Ethiopian Yirgacheffe and Kenya AA',
    description:
      '100% Pure Ethiopian Coffee Beans - Yirgacheffe, Medium-bodied and brilliantly acidy with rough, fruity or winy tones. Thick body and an earthy aroma coupled with lemon, blueberry and blackberry notes. 100% Pure Kenya AA Coffee Beans with a rich body, pleasant vibrant acidity, fragrant aroma and flavor notes of raspberry, cranberry, fresh-cut redwood, alyssum-like flowers in aroma and cup.',
    capacity: '16 Oz',
    dimensions: 'H: 5in, W: 2.5in',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41NQo95kecS._AC_SR300,300_.jpg',
    price: 37.99,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'accessories',
    brand: 'SUNWILL',
    title: 'Insulated Stainless Steel Mug with Lip',
    description:
      'Coffee mug by Sunwill is with double wall vacuum insulation technology, keeping your favorite beverages hot for 3+ hours and cold for 9+ hours. Sweat proof, no condensation, burn free.',
    capacity: '14 Oz',
    dimensions: 'H: 4.1in, W: 3.4in',
    image: 'https://m.media-amazon.com/images/I/71SGwRKiT2L._AC_SX679_.jpg',
    price: 12.99,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'accessories',
    brand: 'JOYJOLT',
    title: 'Double Wall Insulated Glass Coffee Cups',
    description:
      'The double wall glass cups are perfect for hot or cold beverages. The elegant shape fits comfortably in your hand, and remains cool to the touch. This glass mugs are made of heat and condensation-resistant borosilicate glass and has a smooth finish.',
    capacity: '13 Oz',
    dimensions: '10.12in x 4.92in x 4.8in',
    image:
      'https://cdn.shopify.com/s/files/1/0321/0241/6515/products/JG10220-_3_1024x1024@2x.jpg?v=1580696937',
    price: 24.99,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'accessories',
    brand: 'LAGUNA PACIFIC',
    title: 'Manual Coffee Bean Grinder',
    description:
      'Introducing the ultimate manual coffee grinder for everyday coffee enthusiasts and connoisseurs alike. The ceramic conical burr grinding mechanism ensures a precise and consistent grind every time, while the dial with six coarseness settings allows for customization to suit your brewing method of choice.',
    capacity: '20 Oz',
    dimensions: '6.59in x 2.17in x 2.17in',
    image: 'https://m.media-amazon.com/images/I/61VCCzxRHzL._AC_SX679_.jpg',
    price: 29.99,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'accessories',
    brand: 'AEROPRESS',
    title: 'Micro Filters x 350 units',
    description:
      'Compatible with both the AeroPress Original and AeroPress Go. Removes grit and they are biodegradable and compostable.',
    capacity: 'not applicable',
    dimensions: '3.3in x 2.9in x 0.15in',
    image:
      'https://cdn.shopify.com/s/files/1/0601/8783/6659/products/B000LTOCSG.AP.PaperFilters.1MainOption_1300x.jpg?v=1669355126',
    price: 14.95,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'accessories',
    brand: 'HARIO',
    title: 'Buono Drip Kettle',
    description:
      "Stunning stainless steel stovetop kettle that's easy to use, and the slender gooseneck spout allows for a slow, steady, and controlled pour. Great for pour over, drip or manual coffee brewing.",
    capacity: '1.2 L',
    dimensions: 'Height: 13in, Diameter: 21in, Width: 18in',
    image:
      'https://cdn.shopify.com/s/files/1/0065/2718/9028/products/VKB-120HSV_1000x1000.jpg?v=1610527517',
    price: 44.5,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
  {
    category: 'accessories',
    brand: 'CHEMEX',
    title: 'Bonded Unfolded Filters x 100 units',
    description:
      'These filters will work and are designed, for all sizes and styles of Chemex Coffee Brewers except the small Chemex CM-1C & CM-1 models (pint size models) 1-3 Cup Coffee Makers. Chemex filters remove even the finest sediment particles as well as the undesirable oils and fats. The formulation of the filter permits the proper infusion time by regulating the filtration rate - not to slow, not too fast.',
    capacity: 'not applicable',
    dimensions: 'D: 12in',
    image: 'https://m.media-amazon.com/images/I/51lQpH4-VfL._AC_SX679_.jpg',
    price: 22.99,
    rating: {
      rate: 3.9,
      count: 258,
    },
  },
];

export default products;
