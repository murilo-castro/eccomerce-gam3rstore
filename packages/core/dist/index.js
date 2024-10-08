"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Calculateinstallment: () => Calculateinstallment,
  Cart: () => Cart,
  Coin: () => Coin,
  FilterProduct: () => FilterProduct,
  MAX_NUMBER_INSTALLMENTS: () => MAX_NUMBER_INSTALLMENTS,
  MONTHLY_INTEREST_RATE: () => MONTHLY_INTEREST_RATE,
  PaymentMethod: () => PaymentMethod,
  Status: () => Status,
  products: () => products_default
});
module.exports = __toCommonJS(src_exports);

// src/cart/Cart.ts
var Cart = class _Cart {
  constructor(items = []) {
    this.items = items;
  }
  addItem(product) {
    const item = this.itemByProduct(product);
    if (item) {
      return new _Cart(this.changeQuantityItem(this.items, product, 1));
    } else {
      return new _Cart([...this.items, { product, quantity: 1 }]);
    }
  }
  removeItem(product) {
    const item = this.itemByProduct(product);
    if (!item) return this;
    return new _Cart(this.changeQuantityItem(this.items, product, -1));
  }
  removeProduct(product) {
    const item = this.itemByProduct(product);
    if (!item) return this;
    return new _Cart(
      this.items.filter((item2) => item2.product.id !== product.id)
    );
  }
  clean() {
    return new _Cart();
  }
  get quantityItems() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }
  get totalValue() {
    return this.items.map((item) => item.product.sale_price * item.quantity).reduce((a, b) => a + b, 0);
  }
  get valueTotalFull() {
    return this.items.map((item) => item.product.base_price * item.quantity).reduce((a, b) => a + b, 0);
  }
  itemByProduct(product) {
    return this.items.find((item) => item.product.id === product.id);
  }
  changeQuantityItem(items, product, difference) {
    return items.map(
      (i) => i.product.id === product.id ? { ...i, quantity: i.quantity + difference } : i
    ).filter((i) => i.quantity > 0);
  }
};

// src/constants/products.ts
var products = [
  {
    id: 1,
    name: "Notebook Gamer Acer Nitro 5",
    description: "O Acer Nitro 5 \xE9 um notebook gamer poderoso, ideal para jogos pesados e multitarefas.",
    brand: "Acer",
    model: "AN515-54-58CL",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Facer-nitro-5.png?alt=media&token=094ba6a8-1a4d-414a-b32c-c176bfeaca8e",
    score: 4.5,
    review: "https://www.youtube.com/embed/8NQFr9De3lU?si=s_lN2KTQresD-36Y",
    tags: ["Baixou"],
    base_price: 6499.99,
    sale_price: 5999.99,
    lowest_price: 4850.9,
    highest_price: 9800.8,
    average_price: 6503.7,
    specification: {
      emphasis: "NVIDIA GeForce RTX 2060",
      Processor: "Intel Core i5-9300H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2060",
      Screen: "15.6 polegadas Full HD",
      Weight: "2.5 Kg"
    }
  },
  {
    id: 2,
    name: "Notebook Gamer Dell G5",
    description: "O Dell G5 oferece uma experi\xEAncia de jogo fluida e gr\xE1ficos de alta qualidade.",
    brand: "Dell",
    model: "G5-5590-A30B",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fdell-g5.png?alt=media&token=ac1cb3fa-4cc4-4f30-a831-19bca5b85644",
    score: 5,
    review: "https://www.youtube.com/embed/N5C1ALQkv1Q?si=KuVr4V6-A02Z23XK",
    tags: [],
    base_price: 7299.99,
    sale_price: 6799.99,
    lowest_price: 4850,
    highest_price: 9800,
    average_price: 6500,
    specification: {
      emphasis: "NVIDIA GeForce GTX 1660 Ti",
      Processor: "Intel Core i7-9750H",
      Memory: "16GB DDR4",
      Storage: "1TB HDD + 256GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce GTX 1660 Ti",
      Screen: "15.6 polegadas Full HD",
      Weight: "2.68 Kg"
    }
  },
  {
    id: 3,
    name: "Notebook Gamer Lenovo Legion Y540",
    description: "O Lenovo Legion Y540 \xE9 um notebook gamer de alta performance com design elegante.",
    brand: "Lenovo",
    model: "Legion Y540-15IRH",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Flegion-y540.png?alt=media&token=b36f6c61-8b7d-4454-9940-d945b89d44f8",
    score: 4.5,
    review: "https://www.youtube.com/embed/knhriyVTMpA?si=3RduZcEVx4mjEwER",
    tags: ["Recomendado"],
    base_price: 6999.99,
    sale_price: 6499.99,
    lowest_price: 4850,
    highest_price: 9800,
    average_price: 6500,
    specification: {
      emphasis: "NVIDIA GeForce GTX 1660 Ti",
      Processor: "Intel Core i7-9750H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce GTX 1660 Ti",
      Screen: "15.6 polegadas Full HD",
      Weight: "2.3 Kg"
    }
  },
  {
    id: 4,
    name: "Notebook Gamer HP Pavilion",
    description: "O HP Pavilion \xE9 um notebook gamer com desempenho s\xF3lido e design moderno, perfeito para jogadores que buscam custo-benef\xEDcio.",
    brand: "HP",
    model: "Pavilion 15-dk0010",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fhp-pavilion-dk0010.png?alt=media&token=6f0d7c8d-0612-4ca9-9ee8-1849971ae8c4",
    score: 4,
    review: "https://www.youtube.com/embed/dCvvugSjnZ4?si=zOMGbydgNdkB9QwY",
    tags: [],
    base_price: 5499.99,
    sale_price: 4999.99,
    lowest_price: 4133,
    highest_price: 7990.9,
    average_price: 5107.9,
    specification: {
      emphasis: "NVIDIA GeForce GTX 1650",
      Processor: "Intel Core i5-9300H",
      Memory: "8GB DDR4",
      Storage: "256GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce GTX 1650",
      Screen: "15.6 polegadas Full HD",
      Weight: "2.25 Kg"
    }
  },
  {
    id: 5,
    name: "Notebook Gamer ASUS TUF A15",
    description: "O ASUS TUF Gaming A15 combina durabilidade militar com um desempenho excelente para jogos.",
    brand: "ASUS",
    model: "TUF A15 FA506IV",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fasus-tuf-a15.png?alt=media&token=989d3375-f26b-4ada-a920-afa41dfdb8de",
    score: 5,
    review: "https://www.youtube.com/embed/v-LmH_Gfnn8?si=IGQmsvb-eZyDInwV",
    tags: ["Oportunidade"],
    base_price: 7499.99,
    sale_price: 6999.99,
    lowest_price: 4133,
    highest_price: 7990.9,
    average_price: 5107.9,
    specification: {
      emphasis: "NVIDIA GeForce RTX 2060",
      Processor: "AMD Ryzen 7 4800H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2060",
      Screen: "15.6 polegadas Full HD 144Hz",
      Weight: "2.3 Kg"
    }
  },
  {
    id: 6,
    name: "Notebook Gamer MSI GL65 Leopard",
    description: "O MSI GL65 Leopard oferece um desempenho superior com design agressivo e teclado RGB personaliz\xE1vel.",
    brand: "MSI",
    model: "GL65 Leopard 10SFK-062",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmsi-gl65.png?alt=media&token=24798828-8546-4720-bfe7-f813f4e78507",
    score: 4,
    review: "https://www.youtube.com/embed/uT-YHREKDaE?si=Z7e2lk9G-H7-cghs",
    tags: ["Melhor RTX 2070"],
    base_price: 8999.99,
    sale_price: 8499.99,
    lowest_price: 4133,
    highest_price: 7990.9,
    average_price: 5107.9,
    specification: {
      emphasis: "NVIDIA GeForce RTX 2070",
      Processor: "Intel Core i7-10750H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2070",
      Screen: "15.6 polegadas Full HD 144Hz",
      Weight: "2.3 Kg"
    }
  },
  {
    id: 7,
    name: "Notebook Gamer Razer Blade 15",
    description: "O Razer Blade 15 \xE9 um notebook gamer premium com design ultrafino e hardware de ponta.",
    brand: "Razer",
    model: "Blade 15 Base",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Frazer-blade-15.png?alt=media&token=6e23866d-56d0-4da9-94e8-feb1b57d8fac",
    score: 5,
    review: "https://www.youtube.com/embed/7kpreUxmHvA?si=wj5A9bw4F8zm_w_Y",
    tags: [],
    base_price: 12499.99,
    sale_price: 11999.99,
    lowest_price: 6850,
    highest_price: 13500,
    average_price: 10900.9,
    specification: {
      emphasis: "NVIDIA GeForce RTX 2070",
      Processor: "Intel Core i7-10750H",
      Memory: "16GB DDR4",
      Storage: "512GB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2070",
      Screen: "15.6 polegadas Full HD 144Hz",
      Weight: "2.1 Kg"
    }
  },
  {
    id: 8,
    name: "Notebook Gamer Alienware m15",
    description: "O Alienware m15 \xE9 um notebook gamer de alto desempenho com design futurista e recursos avan\xE7ados.",
    brand: "Dell",
    model: "m15 R3",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Falienware-m15.png?alt=media&token=85df89d1-3db1-4978-9581-4802b42d7c6e",
    score: 4.5,
    review: "https://www.youtube.com/embed/OywbZPwHJBw?si=cZmqJESmXGh-D1Bw",
    tags: ["Sem juros"],
    base_price: 14999.99,
    sale_price: 13999.99,
    lowest_price: 4133,
    highest_price: 7990.9,
    average_price: 5107.9,
    specification: {
      emphasis: "NVIDIA GeForce RTX 2080 Super",
      Processor: "Intel Core i7-10875H",
      Memory: "16GB DDR4",
      Storage: "1TB SSD",
      "Placa de V\xEDdeo": "NVIDIA GeForce RTX 2080 Super",
      Screen: "15.6 polegadas Full HD 240Hz",
      Weight: "2.5 Kg"
    }
  },
  {
    id: 9,
    name: "Processador AMD Ryzen 7 5700X3D",
    description: "Desfrute de velocidades supers\xF4nicas com 8 n\xFAcleos e 16 threads de processamento, prontos para enfrentar os t\xEDtulos mais desafiadores. Frequ\xEAncia base de 3,0GHz e boost din\xE2mico de at\xE9 4,1GHz para eliminar qualquer engasgo.",
    brand: "AMD",
    model: "100-100001503WOF",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-7-5700x3d.png?alt=media&token=62caf240-b3c6-41d9-889a-c4ca882822d9",
    score: 4.5,
    review: "https://www.youtube.com/embed/ic8a_L15Z98&t=67s",
    tags: ["Sem juros", "Mais Vendidos", "Custo Benef\xEDcio"],
    base_price: 2499.99,
    sale_price: 1189.99,
    lowest_price: 999.99,
    highest_price: 3290.9,
    average_price: 1699.9,
    specification: {
      emphasis: "AMD Ryzen 7 5700X3D",
      "N\xBA de n\xFAcleos de CPU": 8,
      "N\xBA de threads": 16,
      "Clock de Max Boost": 4.1,
      "Clock b\xE1sico": 3,
      "Total de Cache L2": "4MB",
      "Cach\xEA L3 total": "96MB",
      Socket: "AM4",
      "Temperatura m\xE1xima": "90\xB0C",
      Weight: "243 g"
    }
  },
  {
    id: 10,
    name: "Processador Intel Core i9-13900K",
    description: "O Intel Core i9-13900K \xE9 o processador ideal para gamers e profissionais que precisam de desempenho extremo. Equipado com 24 n\xFAcleos e 32 threads, alcan\xE7a frequ\xEAncias de at\xE9 5,8 GHz em modo turbo, oferecendo desempenho inigual\xE1vel.",
    brand: "Intel",
    model: "BX8071513900K",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fcore-i9-13900k.png?alt=media&token=9d185bf6-64ca-48bf-bdb7-acd0de317f09",
    score: 4.8,
    review: "https://www.youtube.com/embed/tV-FbmLJejg",
    tags: ["Desempenho M\xE1ximo", "Recomendado para Jogos", "Overclock"],
    base_price: 3899.99,
    sale_price: 3299.99,
    lowest_price: 2999.99,
    highest_price: 4199.9,
    average_price: 3599.9,
    specification: {
      emphasis: "Intel Core i9-13900K",
      "N\xBA de n\xFAcleos de CPU": 24,
      "N\xBA de threads": 32,
      "Clock de Max Boost": 5.8,
      "Clock b\xE1sico": 3,
      "Total de Cache L2": "32 MB",
      "Cach\xEA L3 total": "36 MB",
      Socket: "LGA 1700",
      Weight: "101 g"
    }
  },
  {
    id: 11,
    name: "Processador AMD Ryzen 9 7950X3D",
    description: "O processador AMD Ryzen 9 7950X3D redefine o desempenho de jogos e produtividade, com 16 n\xFAcleos e 32 threads e cache total de 128MB. Frequ\xEAncia de boost de at\xE9 5,7 GHz, ideal para cargas intensas de trabalho e multitarefa.",
    brand: "AMD",
    model: "100-100001700WOF",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fryzen-9-7950x3d.png?alt=media&token=74ab9ea8-1250-42b8-b653-db430969d3cf",
    score: 4.9,
    review: "https://www.youtube.com/embed/3XFI1jhZMEU",
    tags: ["Performance Extrema", "Topo de Linha", "Gamer"],
    base_price: 5899.99,
    sale_price: 4599.99,
    lowest_price: 4199.99,
    highest_price: 5999.9,
    average_price: 4999.9,
    specification: {
      emphasis: "AMD Ryzen 9 7950X3D",
      "N\xBA de n\xFAcleos de CPU": 16,
      "N\xBA de threads": 32,
      "Clock de Max Boost": 5.7,
      "Clock b\xE1sico": 4.2,
      "Total de Cache L2": "16 MB",
      "Cach\xEA L3 total": "128 MB",
      Socket: "AM5",
      "Temperatura m\xE1xima": "95\xB0C",
      Weight: "190 g"
    }
  },
  {
    id: 12,
    name: "Teclado Mec\xE2nico Gamer Razer BlackWidow V3",
    description: "O Razer BlackWidow V3 \xE9 equipado com switches mec\xE2nicos Razer Green para uma resposta t\xE1til precisa e feedback auditivo satisfat\xF3rio. Possui Lighting RGB Razer Chroma e Structure em alum\xEDnio para maior durabilidade.",
    brand: "Razer",
    model: "RZ03-03540100-R3U1",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-razer-blackwidow-v3.png?alt=media&token=41cf33c1-66d7-4c4f-a36f-a358d9061d29",
    score: 4.7,
    review: "https://www.youtube.com/embed/HVPSyfIs-84",
    tags: ["RGB Personaliz\xE1vel", "Durabilidade", "Switch T\xE1til"],
    base_price: 1299.99,
    sale_price: 999.99,
    lowest_price: 799.99,
    highest_price: 1599.99,
    average_price: 999.99,
    specification: {
      emphasis: "Switch Razer Green",
      "Tipo de Switch": "Mec\xE2nico",
      Connectivity: "Cabo USB",
      Lighting: "Razer Chroma RGB",
      Structure: "Alum\xEDnio",
      "Anti-Ghosting": "Sim, N-Key Rollover",
      Weight: "1130 g"
    }
  },
  {
    id: 13,
    name: "Teclado Mec\xE2nico Gamer Corsair K70 RGB MK.2",
    description: "Com switches Cherry MX Red, o Corsair K70 RGB MK.2 oferece resposta linear e silenciosa. Constru\xEDdo em alum\xEDnio escovado, ideal para sess\xF5es longas de gameplay, e com Lighting RGB din\xE2mica.",
    brand: "Corsair",
    model: "CH-9109010-NA",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-corsair-k70.png?alt=media&token=3dbe507e-1df9-4743-b8c4-cd782cfe6c63",
    score: 4.8,
    review: "https://www.youtube.com/embed/1ABIgPdZrkI?si=7HUrXG7JD-vkQR5_",
    tags: ["RGB Din\xE2mico", "Structure em Alum\xEDnio", "Switch Silencioso"],
    base_price: 1799.99,
    sale_price: 1349.99,
    lowest_price: 1199.99,
    highest_price: 2299.9,
    average_price: 1249.9,
    specification: {
      emphasis: "Switch Cherry MX Red",
      "Tipo de Switch": "Mec\xE2nico",
      Connectivity: "Cabo USB",
      Lighting: "RGB por tecla",
      Structure: "Alum\xEDnio escovado",
      "Anti-Ghosting": "Sim, N-Key Rollover",
      Weight: "1250 g"
    }
  },
  {
    id: 14,
    name: "Teclado Mec\xE2nico Gamer Redragon Draconic K530",
    description: "O Redragon Draconic K530 \xE9 um teclado mec\xE2nico compacto, sem fio, projetado para m\xE1xima portabilidade e desempenho. Equipado com switches Outemu Brown, ideal para quem busca um equil\xEDbrio entre feedback t\xE1til e sil\xEAncio, al\xE9m de Connectivity Bluetooth.",
    brand: "Redragon",
    model: "K530-RGB",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fteclado-redragon-draconic-k530.png?alt=media&token=d456ac67-d742-40ed-9a99-2c3281b9a2c2",
    score: 4.6,
    review: "https://www.youtube.com/embed/6sAqSwcjjt0",
    tags: ["Bluetooth", "Compacto", "Port\xE1til", "Switch T\xE1til"],
    base_price: 549.99,
    sale_price: 429.99,
    lowest_price: 399.99,
    highest_price: 599.99,
    average_price: 499.99,
    specification: {
      emphasis: "Switch Outemu Brown",
      "Tipo de Switch": "Mec\xE2nico",
      Connectivity: "Bluetooth 5.0 / Cabo USB-C",
      Lighting: "RGB",
      Structure: "Pl\xE1stico ABS refor\xE7ado",
      Keys: "61(Layout 60 %)",
      "Anti-Ghosting": "Sim, N-Key Rollover",
      Weight: "600 g"
    }
  },
  {
    id: 15,
    name: "Mouse Gamer Logitech G403 Hero",
    description: "O Logitech G403 Hero \xE9 equipado com o sensor HERO 25K, oferecendo precis\xE3o m\xE1xima com at\xE9 25.600 DPI ajust\xE1veis. Design ergon\xF4mico, Structure leve e Weight ajust\xE1vel, ideal para quem busca conforto e alto desempenho em jogos.",
    brand: "Logitech",
    model: "910-005631",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-logitech-g403-hero.png?alt=media&token=869b7dff-b08e-449f-b35c-c16d95d5cbe3",
    score: 4.8,
    review: "https://www.youtube.com/embed/SjxHa-hv_2c",
    tags: ["Ergon\xF4mico", "Weight Ajust\xE1vel", "Sensor HERO", "Custo Benef\xEDcio"],
    base_price: 399.99,
    sale_price: 299.99,
    lowest_price: 279.99,
    highest_price: 449.9,
    average_price: 349.99,
    specification: {
      emphasis: "HERO 16K / 25K",
      "DPI M\xE1ximo": 25600,
      Connectivity: "Cabo USB",
      "Bot\xF5es Program\xE1veis": 6,
      Lighting: "RGB LIGHTSYNC",
      "Tempo de Resposta": "1ms",
      Structure: "Pl\xE1stico ABS e borracha texturizada",
      Weight: "87 g (com Weight ajust\xE1vel de 10 g)"
    }
  },
  {
    id: 16,
    name: "Mouse Gamer Razer DeathAdder V2",
    description: "O Razer DeathAdder V2 possui o sensor \xF3tico Focus+ de 20.000 DPI, com switches \xF3pticos para cliques mais r\xE1pidos e durabilidade de at\xE9 70 milh\xF5es de cliques. Design ergon\xF4mico e leve, com cabo SpeedFlex para movimentos sem arrasto.",
    brand: "Razer",
    model: "RZ01-03210100-R3U1",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-razer-deathadder-v2.png?alt=media&token=6b3d7cf9-334d-4950-8c66-a15d136216a6",
    score: 4.7,
    review: "https://www.youtube.com/embed/jlmeKfzu_is",
    tags: ["Ergonomia", "Sensor \xD3ptico", "Switches \xD3pticos"],
    base_price: 499.99,
    sale_price: 399.99,
    lowest_price: 349.99,
    highest_price: 549.9,
    average_price: 449.99,
    specification: {
      emphasis: "Sensor Focus+",
      "DPI M\xE1ximo": 2e4,
      Connectivity: "Cabo USB SpeedFlex",
      "Bot\xF5es Program\xE1veis": 8,
      Lighting: "Razer Chroma RGB",
      "Tempo de Resposta": "0.2ms (switch \xF3ptico)",
      Structure: "Pl\xE1stico ABS texturizado",
      Weight: "88 g"
    }
  },
  {
    id: 17,
    name: "Mouse Gamer HyperX Pulsefire FPS Pro",
    description: "O HyperX Pulsefire FPS Pro \xE9 ideal para jogadores que buscam precis\xE3o e conforto. Equipado com o sensor Pixart 3389 de at\xE9 16.000 DPI e bot\xF5es Omron com alta durabilidade. Lighting RGB personaliz\xE1vel e design ergon\xF4mico.",
    brand: "HyperX",
    model: "HX-MC003B",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmouse-hyperxppulsefire-fps-pro.png?alt=media&token=8b0edce3-1eef-412e-be5f-bc701646b23f",
    score: 4.5,
    review: "https://www.youtube.com/embed/sJAM6Pxa4PI",
    tags: ["Alta Precis\xE3o", "Sensor Pixart", "Ergon\xF4mico"],
    base_price: 349.99,
    sale_price: 249.99,
    lowest_price: 219.99,
    highest_price: 399.9,
    average_price: 299.99,
    specification: {
      emphasis: "Sensor Pixart 3389",
      "DPI M\xE1ximo": 16e3,
      Connectivity: "Cabo USB",
      "Bot\xF5es Program\xE1veis": 6,
      Lighting: "RGB",
      "Tempo de Resposta": "1ms",
      Structure: "Pl\xE1stico ABS com laterais texturizadas",
      Weight: "95 g"
    }
  },
  {
    id: 18,
    name: "Headset Gamer HyperX Cloud II",
    description: "O HyperX Cloud II \xE9 um headset projetado para m\xE1ximo conforto e qualidade de som. Possui drivers de 53mm e som surround virtual 7.1, ideal para gamers que buscam imers\xE3o completa em jogos.",
    brand: "HyperX",
    model: "KHX-HSCP-RD",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-gamer-hyperx-cloud-II.png?alt=media&token=82dce4ef-75c7-4c75-9e1a-ccf20aac1af7",
    score: 4.8,
    review: "https://www.youtube.com/embed/BT6NFjvRNu0",
    tags: ["Confort\xE1vel", "Surround 7.1", "Microphone Remov\xEDvel"],
    base_price: 899.99,
    sale_price: 699.99,
    lowest_price: 649.99,
    highest_price: 949.99,
    average_price: 799.99,
    specification: {
      emphasis: "Surround Virtual 7.1",
      Drivers: "53mm",
      Connectivity: "USB / P2 3.5mm",
      Microphone: "Remov\xEDvel com cancelamento de ru\xEDdo",
      Compatibility: "PC, PS4, Xbox One",
      Weight: "320 g"
    }
  },
  {
    id: 19,
    name: "Headset Gamer Razer Kraken X",
    description: "O Razer Kraken X \xE9 um headset ultraleve com som surround 7.1 e almofadas em espuma com memoria para m\xE1ximo conforto. Microphone cardioide e Structure refor\xE7ada para durabilidade.",
    brand: "Razer",
    model: "RZ04-02890100-R3U1",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fheadset-razer-kraken-x-lite.png?alt=media&token=d1219f2a-2199-4e17-9dca-5b7db5537f55",
    score: 4.6,
    review: "https://www.youtube.com/embed/L3lW1P0rr_M",
    tags: ["Leve", "Surround 7.1", "Microfone Flex\xEDvel"],
    base_price: 299.99,
    sale_price: 229.99,
    lowest_price: 199.99,
    highest_price: 349.99,
    average_price: 269.99,
    specification: {
      emphasis: "Surround Virtual 7.1",
      Drivers: "40mm",
      Connectivity: "P2 3.5mm",
      Microphone: "Cardioide n\xE3o remov\xEDvel",
      Compatibility: "PC, PS4, Xbox One, Switch",
      Weight: "250 g"
    }
  },
  {
    id: 20,
    name: 'Monitor Gamer Samsung Odyssey G7 27"',
    description: "O Samsung Odyssey G7 possui taxa de atualiza\xE7\xE3o de 240Hz e tempo de resposta de 1ms. Com painel curvo QHD e Technology G-Sync, \xE9 ideal para gamers que buscam desempenho e imers\xE3o.",
    brand: "Samsung",
    model: "LC27G75TQSNXZA",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-samsung-led-27-odyssey-curvo.png?alt=media&token=98f062fb-4c3a-4e87-895d-61ecdd7f7609",
    score: 4.9,
    review: "https://www.youtube.com/embed/-xrNbdySG-Y",
    tags: ["240Hz", "Curvo", "G-Sync"],
    base_price: 3499.99,
    sale_price: 2999.99,
    lowest_price: 2799.99,
    highest_price: 3999.99,
    average_price: 3299.99,
    specification: {
      emphasis: "Painel Curvo QHD",
      Size: "27 polegadas",
      "Taxa de Atualiza\xE7\xE3o": "240Hz",
      "Tempo de Resposta": "1ms",
      Technology: "QLED",
      Connectivity: "HDMI, DisplayPort, USB",
      Weight: "6.5 kg"
    }
  },
  {
    id: 21,
    name: 'Monitor Gamer LG UltraGear 34"',
    description: 'O LG UltraGear 34" \xE9 um monitor ultra-wide com resolu\xE7\xE3o WQHD (3440x1440), taxa de atualiza\xE7\xE3o de 160Hz e suporte a G-Sync. Ideal para quem busca um monitor para jogos e produtividade.',
    brand: "LG",
    model: "34GN850-B",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmonitor-gamer-lg-ultragear-lg-34-curvo.png?alt=media&token=7f00d9ba-f2ef-416e-bf01-0b84962e099b",
    score: 4.7,
    review: "https://www.youtube.com/embed/YUbQODIro2k",
    tags: ["Ultra-Wide", "144Hz", "G-Sync"],
    base_price: 2999.99,
    sale_price: 2399.99,
    lowest_price: 2199.99,
    highest_price: 3999.99,
    average_price: 2899.99,
    specification: {
      emphasis: "Painel WQHD",
      Size: "34 polegadas",
      "Taxa de Atualiza\xE7\xE3o": "160Hz",
      "Tempo de Resposta": "1ms",
      Technology: "IPS",
      Connectivity: "HDMI, DisplayPort, USB",
      Weight: "7.3 kg"
    }
  },
  {
    id: 22,
    name: "Placa de V\xEDdeo NVIDIA GeForce RTX 3060 Ventus 2X MSI",
    description: "A RTX 3060 Ventus 2X MSI \xE9 equipada com 12GB GDDR6, oferecendo desempenho de \xFAltima gera\xE7\xE3o para jogos 4K e Ray Tracing. Possui suporte a DLSS e Technologys avan\xE7adas da NVIDIA para m\xE1xima performance.",
    brand: "MSI",
    model: "RTX 3060 Ventus",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-de-video-msi-nvidia-geforce-rtx-3060-ventus-2x-12gb.png?alt=media&token=ee112ada-6ac9-4f1c-9766-586caae1713a",
    score: 4.9,
    review: "https://www.youtube.com/embed/a_u2HPe2Cqg",
    tags: ["4K Gaming", "Ray Tracing", "DLSS", "NVidia", "GeForce"],
    base_price: 2399.99,
    sale_price: 1999.99,
    lowest_price: 1599.99,
    highest_price: 3899.99,
    average_price: 2199.99,
    specification: {
      emphasis: "12GB GDDR6",
      "CUDA Cores": 3584,
      Connectivity: "HDMI 2.1, DisplayPort 1.4a",
      TDP: "170 W",
      Weight: "1.03 kg"
    }
  },
  {
    id: 23,
    name: "Placa de V\xEDdeo AMD Radeon RX 6800 XT",
    description: "A RX 6800 XT possui 16GB GDDR6 e arquitetura RDNA 2, proporcionando excelente desempenho em jogos 1440p e 4K. Inclui suporte a Ray Tracing e Technology Smart Access Memory para CPUs Ryzen.",
    brand: "ASRock",
    model: "90-GA28ZZ-00UANF",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Famd-radeon-6800-xt.png?alt=media&token=f2fdddc2-fc6b-4286-8452-10add1ff37f8",
    score: 4.7,
    review: "https://www.youtube.com/embed/ddbpej8sM9s",
    tags: ["Ray Tracing", "16GB GDDR6", "Smart Access Memory"],
    base_price: 6449.99,
    sale_price: 5799.99,
    lowest_price: 5499.99,
    highest_price: 8199.99,
    average_price: 5999.99,
    specification: {
      emphasis: "16GB GDDR6",
      "Stream Processors": 4608,
      Connectivity: "HDMI 2.1, DisplayPort 1.4",
      TDP: "300W",
      Weight: "2,52 kg"
    }
  },
  {
    id: 24,
    name: "Placa M\xE3e ASUS ROG Strix Z590-E",
    description: "A ROG Strix Z590-E \xE9 uma placa-m\xE3e premium para processadores Intel de 11\xAA gera\xE7\xE3o, com suporte a overclock, Wi-Fi 6E integrado e Lighting RGB ASUS Aura Sync.",
    brand: "ASUS",
    model: "ROG STRIX Z590-E GAMING WIFI",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-asus-rog-strix-z590.png?alt=media&token=85f6951d-ff10-4a86-8000-089162c2f689",
    score: 4.8,
    review: "https://www.youtube.com/embed/toHoH4j25yo",
    tags: ["Wi-Fi 6E", "Overclocking", "RGB"],
    base_price: 2999.99,
    sale_price: 2799.99,
    lowest_price: 2599.99,
    highest_price: 3299.99,
    average_price: 2899.99,
    specification: {
      emphasis: "Chipset Z590",
      Socket: "LGA 1200",
      "RAM Suportada": "DDR4 at\xE9 5333MHz",
      Weight: "1.2 kg"
    }
  },
  {
    id: 25,
    name: "Placa M\xE3e MSI MAG B550 Tomahawk",
    description: "A MAG B550 Tomahawk \xE9 uma placa-m\xE3e robusta para CPUs AMD Ryzen, oferecendo suporte a PCIe 4.0 e design t\xE9rmico otimizado com dissipadores estendidos para maior estabilidade.",
    brand: "MSI",
    model: "B550 TOMAHAWK",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fplaca-mae-msi-mag-b550.png?alt=media&token=d605f0ca-bac9-4fde-89c6-879909542a03",
    score: 4.7,
    review: "https://www.youtube.com/embed/mv-HByOFJG0",
    tags: ["PCIe 4.0", "Dissipa\xE7\xE3o Avan\xE7ada", "Suporte Ryzen"],
    base_price: 1399.99,
    sale_price: 999.99,
    lowest_price: 899.99,
    highest_price: 1599.99,
    average_price: 1199.99,
    specification: {
      emphasis: "Chipset B550",
      Socket: "AM4",
      "RAM Suportada": "DDR4 at\xE9 4866MHz",
      Weight: "2.01 kg"
    }
  },
  {
    id: 26,
    name: "Mem\xF3ria RAM Corsair Vengeance RGB Pro 16GB (2x8GB)",
    description: "O kit Corsair Vengeance RGB Pro oferece desempenho de alto n\xEDvel para jogadores e criadores de conte\xFAdo, com 16GB de capacidade, frequ\xEAncia de 3200MHz e Lighting RGB din\xE2mica.",
    brand: "Corsair",
    model: "CMW16GX4M2C3200C16",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-corsair-vengeance-rgb-pro-16gb-2x8gb-3200mhz.png?alt=media&token=7dd6698e-8da9-4b0d-9e80-84b716da0c1a",
    score: 4.8,
    review: "https://www.youtube.com/embed/XRkJAV6-gFw",
    tags: ["Alto Desempenho", "RGB", "Dual-Channel"],
    base_price: 649.99,
    sale_price: 299.99,
    lowest_price: 299.99,
    highest_price: 749.99,
    average_price: 599.99,
    specification: {
      emphasis: "16GB (2x8GB)",
      Frequency: "3200MHz",
      Compatibility: "Intel e AMD",
      Weight: "120 g"
    }
  },
  {
    id: 27,
    name: "Mem\xF3ria RAM Kingston Fury Beast 32GB (2x16GB)",
    description: "A Kingston Fury Beast \xE9 projetada para usu\xE1rios que necessitam de capacidade extra. Com 32GB e frequ\xEAncia de 3200MHz, \xE9 ideal para multitarefa avan\xE7ada e jogos pesados, mantendo baixa lat\xEAncia.",
    brand: "Kingston",
    model: "KF436C18BBK2/32",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fmemoria-kingston-fury-beast-rgb-32gb-2x16gb-3200mhz.png?alt=media&token=533ffeb2-499b-4e72-87fb-238282dd20da",
    score: 4.7,
    review: "https://www.youtube.com/embed/MTvBo2pSBgQ",
    tags: ["Alta Capacidade", "3200MHz", "Heatsink"],
    base_price: 999.99,
    sale_price: 699.99,
    lowest_price: 549.99,
    highest_price: 1199.99,
    average_price: 799.99,
    specification: {
      emphasis: "32GB (2x16GB)",
      Frequency: "3200MHz",
      Compatibility: "Intel e AMD",
      Weight: "150 g"
    }
  },
  {
    id: 28,
    name: "Sony PlayStation 5 Slim",
    description: "O PlayStation 5 Slim oferece gr\xE1ficos de nova gera\xE7\xE3o com suporte a Ray Tracing, tempos de carregamento r\xE1pidos com seu SSD customizado e jogos exclusivos que definem a plataforma.",
    brand: "Sony",
    model: "CFI-1015A",
    image: "https://firebasestorage.googleapis.com/v0/b/formacao-dev.appspot.com/o/lancamentos%2Fgam3rstore%2Fps5-slim.png?alt=media&token=ed2ca61f-61c6-46bf-bc75-b4155132ca97",
    score: 4.9,
    review: "https://www.youtube.com/embed/bMFC-TM-t5E",
    tags: ["Nova Gera\xE7\xE3o", "Ray Tracing", "Exclusivos"],
    base_price: 3999.99,
    sale_price: 3499.99,
    lowest_price: 2999.99,
    highest_price: 5999.99,
    average_price: 3899.99,
    specification: {
      emphasis: "SSD Customizado",
      CPU: "AMD Ryzen Zen 2 8 n\xFAcleos",
      Storage: "1TB SSD",
      Weight: "4.05 kg"
    }
  }
];
var products_default = products;

// src/constants/index.ts
var MAX_NUMBER_INSTALLMENTS = 12;
var MONTHLY_INTEREST_RATE = 0.0167;

// src/installment/CalculateInstalment.ts
var Calculateinstallment = class {
  execute(value, numberOfInstallments = MAX_NUMBER_INSTALLMENTS, interestRate = MONTHLY_INTEREST_RATE) {
    if (numberOfInstallments < 2 || numberOfInstallments > MAX_NUMBER_INSTALLMENTS) {
      throw new Error(
        `Quantidade m\xE1xima de parcelas deve ser ${MAX_NUMBER_INSTALLMENTS} `
      );
    }
    const totalValue = this.calculateCompoundInterest(
      value,
      interestRate,
      numberOfInstallments
    );
    return {
      installment_value: this.withTwoDecimal(totalValue / numberOfInstallments),
      total_value: this.withTwoDecimal(totalValue),
      number_of_Installments: numberOfInstallments,
      interest_rate: interestRate
    };
  }
  calculateCompoundInterest(value, interestRate, numberOfInstallments) {
    return value * Math.pow(1 + interestRate, numberOfInstallments);
  }
  withTwoDecimal(value) {
    return Math.round(value * 100) / 100;
  }
};

// src/order/Status.ts
var Status = /* @__PURE__ */ ((Status2) => {
  Status2["RECEIVED"] = "RECEBIDO";
  return Status2;
})(Status || {});

// src/order/PaymentMethod.ts
var PaymentMethod = /* @__PURE__ */ ((PaymentMethod2) => {
  PaymentMethod2["PIX"] = "PIX";
  PaymentMethod2["TICKET"] = "BOLETO";
  PaymentMethod2["CARD"] = "CARTAO";
  return PaymentMethod2;
})(PaymentMethod || {});

// src/product/FilterProduct.ts
var FilterProduct = class {
  execute(search, product) {
    const words = search.toLowerCase().split(" ");
    return product.filter((product2) => {
      const text = `
                ${product2.name}
                ${product2.description}
                ${Object.values(product2.specification).join(" ")}
                ${product2.brand}
            `.toLowerCase();
      return words.every((palavra) => text.includes(palavra));
    });
  }
};

// src/utils/Coin.ts
var Coin = class {
  static format(value, location = "pt-BR", coin = "BRL") {
    return (value ?? 0).toLocaleString(location, {
      style: "currency",
      currency: coin
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Calculateinstallment,
  Cart,
  Coin,
  FilterProduct,
  MAX_NUMBER_INSTALLMENTS,
  MONTHLY_INTEREST_RATE,
  PaymentMethod,
  Status,
  products
});
