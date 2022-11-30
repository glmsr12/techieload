const products = [
  {
    _id: '1',
    name: 'Mechanical Hybrid Gaming Keyboard ',
    image: '/assets/item1.JPG',
    description:
      ' Gaming keyboard has hybrid mechanical switches that combine the smoothness of a membrane switch with the added durability, performance, and satisfying tactile click of a blue mechanical switch.',
    brand: 'Apex',
    category: 'keyboard',
    price: 77.99,
    countInStock: 6,
    rating: 4.5,
    numReviews: 4,
  },
  {
    _id: '2',
    name: 'Gamer Master Gaming Desktop ',
    image: '/assets/item2.JPG',
    description:
      ' Edge out the pack with this CyberPowerPC Gamer Master gaming computer.',
    brand: 'CyberPowerPC',
    category: 'desktop',
    price: 649.99,
    countInStock: 7,
    rating: 4.6,
    numReviews: 5,
  },
  {
    _id: '3',
    name: 'SlateMESH Gaming Desktop - Intel i7-12700F ',
    image: '/assets/item3.JPG',
    description:
      ' It is 16GB of RAM and Intel i7-12700F processor lets you run multiple programs at once, and its NIVIDA RTX 3060 graphics card renders fast-paced action smoothly without screen tearing.',
    brand: 'iBUYPOWER',
    category: 'desktop',
    price: 1299.99,
    countInStock: 10,
    rating: 5,
    numReviews: 5,
  },
  {
    _id: '4',
    name: 'Inspiron Compact Desktop - Intel Core i7-12700/bundle ',
    image: '/assets/item4.JPG',
    description:
      ' Powerful 12-core processing performance. The Intel® Turbo Boost technology delivers dynamic extra power when you need it, while increasing energy efficiency when you do not.',
    brand: 'Dell',
    category: 'desktop',
    price: 1399.99,
    countInStock: 9,
    rating: 4.6,
    numReviews: 5,
  },
  {
    _id: '5',
    name: 'Full-size Wired Mechanical, Gaming Keyboard ',
    image: '/assets/item5.JPG',
    description:
      ' Step up your game with the precision of this Corsair K70 RGB MK.2 gaming keyboard. ',
    brand: 'Nyper',
    category: 'keyboard',
    price: 159.99,
    countInStock: 12,
    rating: 4.7,
    numReviews: 12,
  },
  {
    _id: '6',
    name: 'Ultimate Wireless Optical with HyperSpeed Gaming Mouse ',
    image: '/assets/item6.JPG',
    description:
      ' HyperSpeed wireless technology minimizes latency, and the Focus+ optical sensor lets you aim precisely with a sensitivity of up to 20,000 dpi. ',
    brand: 'Razer',
    category: 'mouse',
    price: 67.99,
    countInStock: 16,
    rating: 4.9,
    numReviews: 148,
  },
  {
    _id: '7',
    name: 'Full-size Wireless Membrane Keyboard',
    image: '/assets/item7.JPG',
    description:
      ' Logitech Advanced 2.4 GHz wireless delivers the reliability of a cord plus wireless convenience for up to 32.8ft, with virtually no delays or dropouts—even in the busiest wireless environments. ',
    brand: 'Logitech',
    category: 'keyboard',
    price: 39.99,
    countInStock: 21,
    rating: 4.3,
    numReviews: 176,
  },
  {
    _id: '8',
    name: 'Microsoft - Surface Pro 7+ - 12.3” Touch Screen',
    image: '/assets/item8.JPG',
    description:
      ' Classic Surface Pro 2-in-1 design meets high-speed performance, giving you premium laptop power, a powerful tablet, or portable digital canvas designed to light up the best of Windows 11.',
    brand: 'Microsoft',
    category: 'tablet',
    price: 699.99,
    countInStock: 10,
    rating: 4.7,
    numReviews: 65,
  },

  {
    _id: '9',
    name: 'Fire HD 8 10th Generation Tablet',
    image: '/assets/item9.JPG',
    description:
      ' Work and play on the go with this 8-inch 10th Gen Amazon Fire HD tablet. ',
    brand: 'Amazon Fire',
    category: 'tablet',
    price: 129.99,
    countInStock: 10,
    rating: 4.3,
    numReviews: 66,
  },
  {
    _id: '10',
    name: 'Gamer Xtreme Gaming Desktop',
    image: '/assets/item10.JPG',
    description:
      ' Destroy the competition with the CyberPowerPC Gamer Xtreme series of gaming desktops. ',
    brand: 'Acer',
    category: 'desktop',
    price: 1599.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 11,
  },
  {
    _id: '11',
    name: 'Gamer Xtreme Gaming Desktop',
    image: '/assets/item11.JPG',
    description: ' AMD FreeSync - VESA - Monitor (HDMI) - Black. ',
    brand: 'Dell',
    category: 'desktop',
    price: 209.99,
    countInStock: 10,
    rating: 4.4,
    numReviews: 130,
  },
  {
    _id: '12',
    name: 'Tab P12 Pro Tablet with Keyboard',
    image: '/assets/item12.JPG',
    description:
      ' The Lenovo Tab P12 Pro doubles as a wireless second screen for your laptop while also supporting touch and pen input, thanks to Lenovo Project Unity. ',
    brand: 'Lenovo',
    category: 'tablet',
    price: 929.99,
    countInStock: 16,
    rating: 4.7,
    numReviews: 204,
  },
  {
    _id: '13',
    name: 'Aerox 3 2022 Edition Lightweight Wireless Optical Gaming Mouse ',
    image: '/assets/item13.JPG',
    description:
      ' The SteelSeries Aerox 3 Wireless 2022 mouse has an ultra lightweight 68g design perfectly optimized for super light mouse swipes. ',
    brand: 'SteelSeries',
    category: 'mouse',
    price: 99.99,
    countInStock: 28,
    rating: 4.9,
    numReviews: 177,
  },
  {
    _id: '15',
    name: '27" IPS LED FHD FreeSync Monitor / White ',
    image: '/assets/item15.JPG',
    description:
      ' The New Definition of High Definition: This FHD monitor feels as good as it looks, packing IPS technology for 178 degrees ultra-wide viewing angles. ',
    brand: 'HP',
    category: 'desktop',
    price: 399.99,
    countInStock: 7,
    rating: 4.6,
    numReviews: 47,
  },
  {
    _id: '16',
    name: 'Kone XP Wired Optical Gaming Mouse ',
    image: '/assets/item16.JPG',
    description:
      'The ROCCAT Kone XP 3D Lighting Gaming Mouse utilizes the refined ergonomics of the iconic Kone shape.  ',
    brand: 'Roccat',
    category: 'mouse',
    price: 69.99,
    countInStock: 13,
    rating: 4.6,
    numReviews: 37,
  },
  {
    _id: '17',
    name: 'Galaxy Book2 360 13.3" AMOLED Touch Screen Laptop ',
    image: '/assets/item17.JPG',
    description:
      'Transform your everyday with Galaxy Book2 360, the PC that’s ready to go wherever you go. ',
    brand: 'Samsung',
    category: 'laptop',
    price: 1149.99,
    countInStock: 18,
    rating: 4.5,
    numReviews: 56,
  },
];

export default products;
