const mobiles = [
  {
    modelNumber: 1301,
    modelName: "iPhone 13 Pro Max",
    description:
      "The ultimate iPhone with a large display and advanced camera system.",
    highlights: {
      processor: "A15 Bionic",
      RAM: "6GB",
      OS: "iOS 15",
      Display: "6.7-inch Super Retina XDR",
      Camera: "Triple 12MP camera system with LiDAR",
      color: "Graphite, Gold, Silver, Sierra Blue",
    },
    price: 1099.99,
    url: "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/3/e/o/iphone-13-pro-max-mll63hn-a-apple-original-imag6vpgwfgxdsj6.jpeg?q=70",
  },
  {
    modelNumber: 1302,
    modelName: "iPhone 13 Mini",
    description:
      "A compact iPhone with powerful features and a smaller form factor.",
    highlights: {
      processor: "A15 Bionic",
      RAM: "4GB",
      OS: "iOS 15",
      Display: "5.4-inch Super Retina XDR",
      Camera: "Dual 12MP camera system",
      color: "Pink, Blue, Midnight, Starlight, (PRODUCT)RED",
    },
    price: 699.99,
    url: "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/r/8/l/iphone-13-mini-mlk53hn-a-apple-original-imag6vp693zncyk7.jpeg?q=70",
  },
  {
    modelNumber: 1201,
    modelName: "iPhone 12 Pro",
    description:
      "A high-end iPhone with advanced photography and LiDAR technology.",
    highlights: {
      processor: "A14 Bionic",
      RAM: "6GB",
      OS: "iOS 14",
      Display: "6.1-inch Super Retina XDR",
      Camera: "Triple 12MP camera system with LiDAR",
      color: "Pacific Blue, Gold, Graphite, Silver",
    },
    price: 999.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/g/n/w/apple-iphone-12-pro-max-dummyapplefsn-original-imafwgcyauknkgwh.jpeg?q=70",
  },
  {
    modelNumber: 1303,
    modelName: "iPhone SE (3rd generation)",
    description:
      "An affordable iPhone with modern features and a familiar design.",
    highlights: {
      processor: "A15 Bionic",
      RAM: "4GB",
      OS: "iOS 15",
      Display: "4.7-inch Retina HD",
      Camera: "Single 12MP camera",
      color: "Black, White, (PRODUCT)RED",
    },
    price: 429.99,
    url: "https://rukminim2.flixcart.com/image/416/416/l0igvww0/mobile/9/6/t/-original-imagca67gxuvkmrj.jpeg?q=70",
  },
  {
    modelNumber: 1101,
    modelName: "iPhone 11",
    description: "A popular iPhone with a powerful dual-camera system.",
    highlights: {
      processor: "A13 Bionic",
      RAM: "4GB",
      OS: "iOS 13",
      Display: "6.1-inch Liquid Retina HD",
      Camera: "Dual 12MP Ultra Wide and Wide cameras",
      color: "Black, Green, Yellow, Purple, Red, White",
    },
    price: 699.99,
    url: "https://rukminim2.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
  },

  {
    modelNumber: 2101,
    modelName: "Vivo X60 Pro",
    description:
      "A flagship Vivo phone with a focus on camera performance and design.",
    highlights: {
      processor: "Exynos 1080",
      RAM: "12GB",
      OS: "Funtouch OS 11.1 (based on Android 11)",
      Display: "6.56-inch AMOLED",
      Camera: "Quad 48MP + 13MP + 13MP + 8MP",
      color: "Midnight Black, Shimmer Blue",
    },
    price: 799.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kmns7m80/mobile/d/j/i/x60-pro-v2046-vivo-original-imagfht6jmwvuvvp.jpeg?q=70",
  },
  {
    modelNumber: 2102,
    modelName: "Vivo V21e",
    description:
      "A mid-range Vivo phone with a sleek design and impressive selfie camera.",
    highlights: {
      processor: "MediaTek Dimensity 700",
      RAM: "8GB",
      OS: "Funtouch OS 11.1 (based on Android 11)",
      Display: "6.44-inch AMOLED",
      Camera: "Dual 64MP + 8MP",
      color: "Sunset Jazz, Dusk Blue",
    },
    price: 399.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kq9ta4w0/mobile/q/t/d/v21e-pd2102-vivo-original-imag4bcnejhj3x4x.jpeg?q=70",
  },
  {
    modelNumber: 2201,
    modelName: "Vivo X50 Pro+",
    description:
      "A high-end Vivo phone with a focus on photography and powerful performance.",
    highlights: {
      processor: "Snapdragon 865",
      RAM: "8GB",
      OS: "Funtouch OS 10.5 (based on Android 10)",
      Display: "6.56-inch AMOLED",
      Camera: "Quad 50MP + 13MP + 32MP + 13MP",
      color: "Black, Blue, Orange",
    },
    price: 999.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/e/x/v29-5g-v2250-vivo-original-imagtyqfjag4qbdw.jpeg?q=70",
  },
  {
    modelNumber: 2202,
    modelName: "Vivo Y200",
    description:
      "An affordable Vivo phone with a large battery and decent camera setup.",
    highlights: {
      processor: "MediaTek Helio G80",
      RAM: "4GB",
      OS: "Funtouch OS 10.5 (based on Android 10)",
      Display: "6.51-inch IPS LCD",
      Camera: "Triple 13MP + 2MP + 2MP",
      color: "Obsidian Black, Purist Blue",
    },
    price: 229.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70",
  },
  {
    modelNumber: 2301,
    modelName: "Vivo V23 Pro",
    description:
      "A stylish Vivo phone with a focus on slim design and advanced selfie capabilities.",
    highlights: {
      processor: "MediaTek Dimensity 900",
      RAM: "8GB",
      OS: "Funtouch OS 12 (based on Android 12)",
      Display: "6.58-inch AMOLED",
      Camera: "Dual 50MP + 32MP",
      color: "Sunset Gold, Midnight Black",
    },
    price: 549.99,
    url: "https://rukminim2.flixcart.com/image/416/416/ky0g58w0/mobile/a/n/d/-original-imagabvqhyaah4vh.jpeg?q=70",
  },

  {
    modelNumber: 3101,
    modelName: "Oppo Find X",
    description:
      "A flagship Oppo phone with a focus on cutting-edge technology and design.",
    highlights: {
      processor: "Snapdragon 8cx Gen 3",
      RAM: "12GB",
      OS: "ColorOS 12 (based on Android 12)",
      Display: "6.7-inch AMOLED",
      Camera: "Triple 50MP + 50MP + 13MP",
      color: "Ceramic Black, Ceramic White",
    },
    price: 1099.99,
    url: "https://rukminim2.flixcart.com/image/416/416/jjhglu80/mobile/v/y/2/oppo-find-x-cph1871-original-imaf7fkt57mq9yt6.jpeg?q=70",
  },
  {
    modelNumber: 3102,
    modelName: "Oppo Reno7 Pro",
    description:
      "A mid-range Oppo phone with a sleek design and advanced camera capabilities.",
    highlights: {
      processor: "MediaTek Dimensity 1200",
      RAM: "8GB",
      OS: "ColorOS 12 (based on Android 12)",
      Display: "6.55-inch AMOLED",
      Camera: "Quad 50MP + 16MP + 13MP + 2MP",
      color: "Galactic Silver, Starry Black",
    },
    price: 699.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kzhbfrk0/mobile/s/z/w/-original-imagbgxfgrqpqmpy.jpeg?q=70",
  },
  {
    modelNumber: 3201,
    modelName: "Oppo A79",
    description:
      "A mid-range Oppo phone with a focus on multimedia and a large battery.",
    highlights: {
      processor: "MediaTek Dimensity 900",
      RAM: "6GB",
      OS: "ColorOS 12 (based on Android 12)",
      Display: "6.43-inch AMOLED",
      Camera: "Triple 50MP + 8MP + 2MP",
      color: "Fluid Black, Fantastic Purple",
    },
    price: 449.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/b/-original-imagupg4ugbtjx8g.jpeg?q=70",
  },
  {
    modelNumber: 3202,
    modelName: "Oppo F19 Pro+",
    description:
      "A sleek Oppo phone with a focus on performance and an advanced camera system.",
    highlights: {
      processor: "MediaTek Dimensity 800U",
      RAM: "8GB",
      OS: "ColorOS 11.1 (based on Android 11)",
      Display: "6.43-inch AMOLED",
      Camera: "Quad 48MP + 8MP + 2MP + 2MP",
      color: "Fluid Black, Space Silver",
    },
    price: 499.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kn97te80/mobile/f/d/h/f19-pro-5g-cph2213-oppo-original-imagfz397gzbjxtb.jpeg?q=70",
  },
  {
    modelNumber: 3301,
    modelName: "Oppo A74",
    description:
      "An affordable Oppo phone with a large display and a focus on battery life.",
    highlights: {
      processor: "Snapdragon 662",
      RAM: "6GB",
      OS: "ColorOS 7.2 (based on Android 10)",
      Display: "6.43-inch AMOLED",
      Camera: "Triple 48MP + 2MP + 2MP",
      color: "Prism Black, Midnight Blue",
    },
    price: 279.99,
    url: "https://rukminim2.flixcart.com/image/416/416/knxiavk0/mobile/i/n/c/a74-5g-cph2263-oppo-original-imag2hzcqhapunqg.jpeg?q=70",
  },
  {
    modelNumber: 4101,
    modelName: "Xiaomi Mi 11i",
    description:
      "A flagship Xiaomi phone with a focus on photography, performance, and a secondary display.",
    highlights: {
      processor: "Snapdragon 888",
      RAM: "12GB",
      OS: "MIUI 12 (based on Android 11)",
      Display: "6.81-inch AMOLED",
      Camera: "Triple 50MP + 48MP + 48MP",
      color: "Ceramic White, Ceramic Black",
    },
    price: 1199.99,
    url: "https://rukminim2.flixcart.com/image/416/416/ky7lci80/mobile/e/j/x/-original-imagag2gatsxzcuv.jpeg?q=70",
  },
  {
    modelNumber: 4102,
    modelName: "Xiaomi Redmi Note 10 Pro Max",
    description:
      "A mid-range Xiaomi phone with a large battery, high-resolution camera, and a vibrant display.",
    highlights: {
      processor: "Snapdragon 732G",
      RAM: "6GB",
      OS: "MIUI 12 (based on Android 11)",
      Display: "6.67-inch Super AMOLED",
      Camera: "Quad 108MP + 8MP + 5MP + 2MP",
      color: "Glacial Blue, Vintage Bronze",
    },
    price: 349.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/y/5/-original-imaghfn2zmefy8t9.jpeg?q=70",
  },
  {
    modelNumber: 4201,
    modelName: "Xiaomi Poco X3 Pro",
    description:
      "A budget-friendly Xiaomi phone with a focus on gaming performance and a large battery.",
    highlights: {
      processor: "Snapdragon 860",
      RAM: "6GB",
      OS: "MIUI 12 (based on Android 11)",
      Display: "6.67-inch IPS LCD",
      Camera: "Quad 48MP + 8MP + 2MP + 2MP",
      color: "Phantom Black, Frost Blue",
    },
    price: 249.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kr9jafk0/mobile/m/m/y/x3-pro-mzb08t9in-poco-original-imag52znesm3hemf.jpeg?q=70",
  },
  {
    modelNumber: 4202,
    modelName: "Xiaomi Mi 10T Pro",
    description:
      "A high-end Xiaomi phone with a focus on a high-refresh-rate display and versatile camera setup.",
    highlights: {
      processor: "Snapdragon 865",
      RAM: "8GB",
      OS: "MIUI 12 (based on Android 10)",
      Display: "6.67-inch IPS LCD",
      Camera: "Triple 108MP + 13MP + 5MP",
      color: "Cosmic Black, Lunar Silver",
    },
    price: 599.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kg6vfrk0/mobile/e/s/6/mi-10t-pro-mzb07zdin-original-imafwhbrgytwfq6z.jpeg?q=70",
  },
  {
    modelNumber: 4301,
    modelName: "Xiaomi Redmi 9A",
    description:
      "An affordable Xiaomi phone with a large display, a big battery, and multiple cameras.",
    highlights: {
      processor: "MediaTek Helio G80",
      RAM: "4GB",
      OS: "MIUI 12 (based on Android 10)",
      Display: "6.53-inch IPS LCD",
      Camera: "Quad 13MP + 8MP + 5MP + 2MP",
      color: "Carbon Black, Ocean Green",
    },
    price: 179.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/x/i/8/-original-imag7chxqqu7h5hs.jpeg?q=70",
  },

  {
    modelNumber: 5101,
    modelName: "OnePlus 9 Pro",
    description:
      "A flagship OnePlus phone with a focus on photography, performance, and a high-refresh-rate display.",
    highlights: {
      processor: "Snapdragon 888",
      RAM: "12GB",
      OS: "OxygenOS 11 (based on Android 11)",
      Display: "6.7-inch Fluid AMOLED",
      Camera: "Quad 48MP + 50MP + 8MP + 2MP",
      color: "Morning Mist, Pine Green",
    },
    price: 999.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/p/a/d/-original-imaggceerybsxbff.jpeg?q=70",
  },
  {
    modelNumber: 5102,
    modelName: "OnePlus Nord 2",
    description:
      "A mid-range OnePlus phone with a focus on a versatile camera setup and 5G connectivity.",
    highlights: {
      processor: "MediaTek Dimensity 1200",
      RAM: "8GB",
      OS: "OxygenOS 11.3 (based on Android 11)",
      Display: "6.43-inch Fluid AMOLED",
      Camera: "Triple 50MP + 8MP + 2MP",
      color: "Gray Sierra, Blue Haze",
    },
    price: 499.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70",
  },
  {
    modelNumber: 5201,
    modelName: "OnePlus 8T",
    description:
      "A high-end OnePlus phone with a focus on fast charging, performance, and a 120Hz display.",
    highlights: {
      processor: "Snapdragon 865",
      RAM: "12GB",
      OS: "OxygenOS 11 (based on Android 11)",
      Display: "6.55-inch Fluid AMOLED",
      Camera: "Quad 48MP + 16MP + 5MP + 2MP",
      color: "Aquamarine Green, Lunar Silver",
    },
    price: 699.99,
    url: "https://rukminim2.flixcart.com/image/416/416/kyrlifk0/screen-guard/tempered-glass/a/e/e/oneplus-8t-front-back-tempered-glass-epicshield-original-imagawn2yzpnezn2.jpeg?q=70",
  },
  {
    modelNumber: 5202,
    modelName: "OnePlus 9",
    description:
      "A flagship OnePlus phone with a focus on photography, fast charging, and a high-refresh-rate display.",
    highlights: {
      processor: "Snapdragon 888",
      RAM: "8GB",
      OS: "OxygenOS 11 (based on Android 11)",
      Display: "6.55-inch Fluid AMOLED",
      Camera: "Triple 48MP + 50MP + 2MP",
      color: "Arctic Sky, Astral Black",
    },
    price: 799.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/x/k/o/-original-imagdhtm6dhbdswd.jpeg?q=70",
  },
  {
    modelNumber: 5301,
    modelName: "OnePlus Nord CE 5G",
    description:
      "A mid-range OnePlus phone with a focus on 5G connectivity, a sleek design, and a triple camera setup.",
    highlights: {
      processor: "Snapdragon 750G",
      RAM: "6GB",
      OS: "OxygenOS 10.5 (based on Android 10)",
      Display: "6.43-inch Fluid AMOLED",
      Camera: "Triple 64MP + 8MP + 2MP",
      color: "Charcoal Ink, Silver Ray",
    },
    price: 329.99,
    url: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/z/u/-original-imagtxvtmxpagdpn.jpeg?q=70",
  },
];

module.exports = mobiles;
