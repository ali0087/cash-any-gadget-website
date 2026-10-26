export interface Category {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  examples: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'iphones',
    name: 'iPhones',
    short: 'iPhone',
    description: 'All iPhone generations, from recent models to older devices.',
    image: 'https://images.pexels.com/photos/11374459/pexels-photo-11374459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['iPhone 15 Pro', 'iPhone 14', 'iPhone 13', 'iPhone SE'],
  },
  {
    id: 'samsung-smartphones',
    name: 'Samsung & Other Smartphones',
    short: 'Samsung & Smartphones',
    description: 'Galaxy, Pixel, OnePlus, and other Android smartphones.',
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['Galaxy S24', 'Pixel 8', 'OnePlus 12'],
  },
  {
    id: 'ipads-tablets',
    name: 'iPads & Tablets',
    short: 'iPads & Tablets',
    description: 'Apple iPads and Android tablets in any storage size.',
    image: 'https://images.pexels.com/photos/10535365/pexels-photo-10535365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['iPad Pro', 'iPad Air', 'Galaxy Tab'],
  },
  {
    id: 'macbooks-laptops',
    name: 'MacBooks & Laptops',
    short: 'MacBooks & Laptops',
    description: 'MacBook Air, MacBook Pro, and Windows laptops.',
    image: 'https://images.pexels.com/photos/8533587/pexels-photo-8533587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['MacBook Pro', 'MacBook Air', 'Dell XPS'],
  },
  {
    id: 'desktop-computers',
    name: 'Desktop Computers',
    short: 'Desktops',
    description: 'iMacs, Mac minis, and Windows desktop PCs.',
    image: 'https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['iMac', 'Mac mini', 'Custom PC'],
  },
  {
    id: 'gaming-consoles',
    name: 'Gaming Consoles',
    short: 'Consoles',
    description: 'PS5, Xbox, Nintendo Switch, and retro consoles.',
    image: 'https://images.pexels.com/photos/4523006/pexels-photo-4523006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['PS5', 'Xbox Series X', 'Nintendo Switch'],
  },
  {
    id: 'video-games',
    name: 'Video Games',
    short: 'Video Games',
    description: 'New and used game discs, cartridges, and bundles.',
    image: 'https://images.pexels.com/photos/5883536/pexels-photo-5883536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['PS5 games', 'Switch games', 'Xbox games'],
  },
  {
    id: 'smartwatches',
    name: 'Apple Watches & Smartwatches',
    short: 'Smartwatches',
    description: 'Apple Watch, Galaxy Watch, Fitbit, and other wearables.',
    image: 'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['Apple Watch Series 9', 'Galaxy Watch', 'Fitbit'],
  },
  {
    id: 'airpods-headphones',
    name: 'AirPods & Headphones',
    short: 'AirPods & Headphones',
    description: 'AirPods, Bose, Sony, and other audio gear.',
    image: 'https://images.pexels.com/photos/3921817/pexels-photo-3921817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['AirPods Pro', 'Sony WH-1000', 'Bose QC'],
  },
  {
    id: 'cameras',
    name: 'Cameras & Photography Equipment',
    short: 'Cameras',
    description: 'DSLR, mirrorless, lenses, and photography accessories.',
    image: 'https://images.pexels.com/photos/6891485/pexels-photo-6891485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['Canon EOS', 'Nikon Z', 'Sony Alpha'],
  },
  {
    id: 'drones',
    name: 'Drones',
    short: 'Drones',
    description: 'DJI and other consumer drones with or without accessories.',
    image: 'https://images.pexels.com/photos/5555813/pexels-photo-5555813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['DJI Mavic', 'DJI Mini', 'DJI Air'],
  },
  {
    id: 'computer-components',
    name: 'Computer Components & Accessories',
    short: 'Components',
    description: 'GPUs, CPUs, RAM, monitors, keyboards, and more.',
    image: 'https://images.pexels.com/photos/28675583/pexels-photo-28675583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['GPU', 'Monitor', 'Mechanical keyboard'],
  },
  {
    id: 'other-electronics',
    name: 'Other Eligible Electronics',
    short: 'Other',
    description: 'Have something else? Tell us about it and we will take a look.',
    image: 'https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    examples: ['Smart home', 'E-readers', 'Other gadgets'],
  },
];

export const CATEGORY_NAMES = CATEGORIES.map((c) => c.name);

export const STORAGE_OPTIONS = [
  "Don\u2019t know",
  '32GB',
  '64GB',
  '128GB',
  '256GB',
  '512GB',
  '1TB',
  '2TB',
  'Other',
];

export const CONDITIONS: string[] = [
  'New / Sealed',
  'Like New',
  'Good',
  'Fair',
  'Broken / Damaged',
  'Not Working',
  'Other / Unsure',
];

export const TRI_OPTIONS: string[] = ['Yes', 'No', 'Unsure', 'Not Applicable'];
