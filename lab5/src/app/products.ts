export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
  categoryName: string;
  likes: number
}

export const products = [
  {
    id: 1,
    name: 'IPhone XR',
    price: 216974,
    description: 'Apple iPhone Xr — воплощение красоты и интеллекта.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h29/63943986774046.jpg?format=preview-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    price: 414050,
    description: 'Apple iPhone 13 mini получил дисплей 5.4 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-512gb-zelenyi-104184124/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h76/64946073468958.jpg?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 3,
    name: 'IPhone SE',
    price: 233995,
    description: 'Apple iPhone SE 2022 классический дизайн с мощной начинкой. Благодаря дисплею Retina HD 4.7 дюйма, смартфон легко поместится даже в карман.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
    rating : 3,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 4,
    name: 'IPhone 15 Pro Max',
    price: 619410,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 5,
    name: 'Phone 15 Pro',
    price: 549372,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-belyi-114790416/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h21/84557784645662.jpg?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 6,
    name: 'Phone 15',
    price: 382411,
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-dual-sim-rozovyi-113933635/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h52/84205863469086.png?format=preview-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 7,
    name: 'MacBook Air 13 M1',
    price: 415785,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 8,
    name: 'MacBook Air 13 M2',
    price: 549990,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 9,
    name: 'MacBook Pro 16',
    price: 1449950,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-mnw93-seryi-108645788/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/heb/68378829062174.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 10,
    name: 'MacBook Pro 14',
    price: 979318,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mphe3-seryi-108645925/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h95/68379275755550.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 11,
    name: 'Apple Vision Pro',
    price: 2199334,
    description: 'Apple Vision Pro, революционный пространственный компьютер.',
    link: 'https://kaspi.kz/shop/p/apple-vision-pro-256-gb-116472681/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hf9/85120232751134.png?format=preview-large',
    rating: 3,
    categoryName: 'Headsets',
    likes: 0
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/