import type { DevicePageContent } from '@/components/DevicePageTemplate';

export const IPHONE_PAGE: DevicePageContent = {
  meta: {
    title: 'Sell Your iPhone for Cash on Long Island, NY',
    description:
      'Sell your used iPhone for cash. Cash Any Gadget buys iPhone 15, 14, 13, SE and older models on Long Island, NY. Free quote request, no obligation. We call you with an offer.',
    path: '/sell-your-iphone',
  },
  eyebrow: 'Sell Your iPhone',
  h1: 'Sell Your iPhone for Cash',
  heroSubtitle:
    'Turn your used or unwanted iPhone into cash. Tell us the model, condition, and storage, and we will personally call you with an offer.',
  breadcrumb: 'Sell Your iPhone',
  intro:
    'Cash Any Gadget buys used iPhones on Long Island, New York. Whether you have a recent iPhone 15 Pro or an older model in a drawer, submit a free quote request and we will review the details and call you to discuss an offer. We do not display automatic prices — every offer is discussed personally and based on your actual device.',
  whatWeAccept: [
    { title: 'All iPhone generations', detail: 'From the latest iPhone 15 series to older models. The model and condition affect the offer.' },
    { title: 'Unlocked or carrier-locked', detail: 'We consider both unlocked iPhones and devices tied to a carrier. Tell us the carrier status.' },
    { title: 'Various storage sizes', detail: 'From 64GB to 1TB and beyond. Include the storage in your request if you know it.' },
    { title: 'Damaged iPhones', detail: 'Cracked screens, battery issues, and other damage may still have value. Be honest about the condition.' },
  ],
  whatToProvide: [
    { title: 'Model name', detail: 'For example, iPhone 15 Pro, iPhone 14, iPhone SE (3rd generation).' },
    { title: 'Storage capacity', detail: 'Such as 128GB, 256GB, or 512GB. If you are unsure, select "Don\u2019t know."' },
    { title: 'Condition', detail: 'New, like new, good, fair, broken, or not working. Describe any cracks or damage.' },
    { title: 'Carrier status', detail: 'Is the iPhone unlocked or tied to a carrier? This helps us evaluate it.' },
  ],
  conditionInfo:
    'Our offer depends on the iPhone model, storage, cosmetic and functional condition, battery health, carrier status, and the current resale market. The final offer may be adjusted after an in-person inspection at our Long Island store.',
  processSteps: [
    { title: 'Submit your request', detail: 'Tell us your iPhone model, storage, and condition through our quote form.' },
    { title: 'We call you', detail: 'A real person reviews your details and calls you to discuss an offer.' },
    { title: 'Bring it in', detail: 'If you accept, bring your iPhone to our store for a quick inspection.' },
    { title: 'Get paid', detail: 'We pay you after the inspection and both sides agree on the final price.' },
  ],
  faqs: [], // filled from IPHONE_FAQS in the page file
  imageSrc:
    'https://images.pexels.com/photos/11374459/pexels-photo-11374459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'An iPhone resting on a surface, ready to be sold for cash',
};

export const SAMSUNG_PAGE: DevicePageContent = {
  meta: {
    title: 'Sell Your Samsung Phone for Cash on Long Island, NY',
    description:
      'Sell your used Samsung Galaxy or other Android phone for cash. Cash Any Gadget buys Galaxy S, Note, Z foldables, Pixel, OnePlus and more on Long Island, NY. Free quote request.',
    path: '/sell-your-samsung',
  },
  eyebrow: 'Sell Your Samsung',
  h1: 'Sell Your Samsung Phone for Cash',
  heroSubtitle:
    'Get cash for your used Samsung Galaxy or other Android smartphone. Tell us the model and condition, and we will call you with an offer.',
  breadcrumb: 'Sell Your Samsung',
  intro:
    'Cash Any Gadget buys Samsung Galaxy phones and other Android smartphones on Long Island, New York. From the latest Galaxy S24 to older models or devices with damage, submit a free quote request and we will personally call you to discuss an offer. Every offer is based on your actual device — no automatic pricing.',
  whatWeAccept: [
    { title: 'Galaxy S and Note series', detail: 'Galaxy S24, S23, S22, Note series, and other flagship Samsung phones.' },
    { title: 'Galaxy Z foldables', detail: 'Galaxy Z Fold and Z Flip models in various conditions.' },
    { title: 'Other Android brands', detail: 'Google Pixel, OnePlus, Motorola, and other Android smartphones.' },
    { title: 'Damaged phones', detail: 'Cracked screens, battery wear, or other issues may still have value.' },
  ],
  whatToProvide: [
    { title: 'Model name', detail: 'For example, Galaxy S24 Ultra, Pixel 8 Pro, OnePlus 12.' },
    { title: 'Storage capacity', detail: 'Such as 128GB, 256GB, or 512GB. Include it if you know it.' },
    { title: 'Condition', detail: 'New, like new, good, fair, broken, or not working.' },
    { title: 'Carrier status', detail: 'Unlocked or tied to a carrier? Let us know in your request.' },
  ],
  conditionInfo:
    'Our offer depends on the Samsung model, storage, cosmetic and functional condition, carrier status, and the current resale market. The final offer may be adjusted after an in-person inspection at our Long Island store.',
  processSteps: [
    { title: 'Submit your request', detail: 'Tell us your Samsung or Android model, storage, and condition.' },
    { title: 'We call you', detail: 'A real person reviews your details and calls you to discuss an offer.' },
    { title: 'Bring it in', detail: 'If you accept, bring your phone to our store for a quick inspection.' },
    { title: 'Get paid', detail: 'We pay you after the inspection and both sides agree on the price.' },
  ],
  faqs: [],
  imageSrc:
    'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'A Samsung Galaxy smartphone displayed on a table',
};

export const TABLET_PAGE: DevicePageContent = {
  meta: {
    title: 'Sell Your Tablet for Cash on Long Island, NY',
    description:
      'Sell your used iPad or Android tablet for cash. Cash Any Gadget buys iPad Pro, iPad Air, Galaxy Tab and more on Long Island, NY. Free quote request, no obligation.',
    path: '/sell-your-tablet',
  },
  eyebrow: 'Sell Your Tablet',
  h1: 'Sell Your Tablet for Cash',
  heroSubtitle:
    'Turn your used iPad or Android tablet into cash. Tell us the model and condition, and we will call you with an offer.',
  breadcrumb: 'Sell Your Tablet',
  intro:
    'Cash Any Gadget buys iPads and Android tablets on Long Island, New York. Whether you have an iPad Pro, iPad Air, Samsung Galaxy Tab, or another tablet sitting unused, submit a free quote request and we will personally call you to discuss an offer.',
  whatWeAccept: [
    { title: 'All iPad models', detail: 'iPad Pro, iPad Air, iPad, and iPad mini across generations.' },
    { title: 'Android tablets', detail: 'Samsung Galaxy Tab, Lenovo, and other Android tablets.' },
    { title: 'Various storage sizes', detail: 'From 32GB to 1TB. Include the storage if you know it.' },
    { title: 'Damaged tablets', detail: 'Cracked screens or other issues may still have value.' },
  ],
  whatToProvide: [
    { title: 'Brand and model', detail: 'For example, iPad Pro 12.9 (6th gen) or Galaxy Tab S9.' },
    { title: 'Storage capacity', detail: 'If you are not sure, select "Don\u2019t know" and we can help.' },
    { title: 'Condition', detail: 'Describe any cracks, functional issues, or cosmetic wear.' },
    { title: 'Accessories', detail: 'Chargers, cases, and the original box can improve your offer.' },
  ],
  conditionInfo:
    'Our offer depends on the tablet model, storage, cosmetic and functional condition, and the current resale market. The final offer may be adjusted after an in-person inspection at our Long Island store.',
  processSteps: [
    { title: 'Submit your request', detail: 'Tell us your tablet brand, model, and condition.' },
    { title: 'We call you', detail: 'A real person reviews your details and calls you with an offer.' },
    { title: 'Bring it in', detail: 'If you accept, bring your tablet to our store for inspection.' },
    { title: 'Get paid', detail: 'We pay you after the inspection and both sides agree on the price.' },
  ],
  faqs: [],
  imageSrc:
    'https://images.pexels.com/photos/10535365/pexels-photo-10535365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'An iPad tablet on a desk, ready to be sold for cash',
};

export const MACBOOK_PAGE: DevicePageContent = {
  meta: {
    title: 'Sell Your MacBook for Cash on Long Island, NY',
    description:
      'Sell your used MacBook Air, MacBook Pro, or Windows laptop for cash. Cash Any Gadget buys MacBooks and laptops on Long Island, NY. Free quote request, no obligation.',
    path: '/sell-your-macbook',
  },
  eyebrow: 'Sell Your MacBook',
  h1: 'Sell Your MacBook for Cash',
  heroSubtitle:
    'Get cash for your used MacBook or laptop. Tell us the model, year, and specs, and we will call you with an offer.',
  breadcrumb: 'Sell Your MacBook',
  intro:
    'Cash Any Gadget buys MacBook Air, MacBook Pro, and Windows laptops on Long Island, New York. Whether you upgraded to a new model or have a laptop you no longer use, submit a free quote request with the model and specifications, and we will personally call you to discuss an offer.',
  whatWeAccept: [
    { title: 'MacBook Air', detail: 'Including M1, M2, M3, and older Intel models.' },
    { title: 'MacBook Pro', detail: '13-inch, 14-inch, and 16-inch models across generations.' },
    { title: 'Windows laptops', detail: 'Dell XPS, HP Spectre, Lenovo ThinkPad, and other brands.' },
    { title: 'Damaged laptops', detail: 'Keyboard issues, screen damage, or battery wear may still have value.' },
  ],
  whatToProvide: [
    { title: 'Model name', detail: 'For example, MacBook Pro 14-inch (2023) or Dell XPS 13.' },
    { title: 'Model year', detail: 'The year helps us identify the processor and specs.' },
    { title: 'Processor and RAM', detail: 'Include chip type (M2, M3, Intel) and RAM if you know them.' },
    { title: 'Storage and condition', detail: 'Storage size and any functional or cosmetic issues.' },
  ],
  conditionInfo:
    'Our offer depends on the MacBook model, year, processor, RAM, storage, cosmetic and functional condition, and the current resale market. The final offer may be adjusted after an in-person inspection at our Long Island store.',
  processSteps: [
    { title: 'Submit your request', detail: 'Tell us your MacBook or laptop model, year, and specs.' },
    { title: 'We call you', detail: 'A real person reviews your details and calls you with an offer.' },
    { title: 'Bring it in', detail: 'If you accept, bring your laptop to our store for inspection.' },
    { title: 'Get paid', detail: 'We pay you after the inspection and both sides agree on the price.' },
  ],
  faqs: [],
  imageSrc:
    'https://images.pexels.com/photos/8533587/pexels-photo-8533587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'A MacBook laptop open on a desk, ready to be sold for cash',
};

export const CONSOLE_PAGE: DevicePageContent = {
  meta: {
    title: 'Sell Your Gaming Console for Cash on Long Island, NY',
    description:
      'Sell your used PlayStation, Xbox, Nintendo Switch, or retro gaming console for cash. Cash Any Gadget buys consoles and video games on Long Island, NY. Free quote request.',
    path: '/sell-your-gaming-console',
  },
  eyebrow: 'Sell Your Console',
  h1: 'Sell Your Gaming Console for Cash',
  heroSubtitle:
    'Get cash for your used PlayStation, Xbox, Nintendo Switch, or retro console. Tell us the model and condition, and we will call you with an offer.',
  breadcrumb: 'Sell Your Gaming Console',
  intro:
    'Cash Any Gadget buys gaming consoles and video games on Long Island, New York. From a PS5 you no longer play to a classic console collecting dust, submit a free quote request and we will personally call you to discuss an offer.',
  whatWeAccept: [
    { title: 'PlayStation', detail: 'PS5, PS4, and older PlayStation consoles.' },
    { title: 'Xbox', detail: 'Xbox Series X/S, Xbox One, and older Xbox models.' },
    { title: 'Nintendo Switch', detail: 'Standard, OLED, and Lite models.' },
    { title: 'Video games', detail: 'New and used game discs, cartridges, and bundles for most platforms.' },
  ],
  whatToProvide: [
    { title: 'Console model', detail: 'For example, PlayStation 5 (Disc Edition) or Xbox Series X.' },
    { title: 'Condition', detail: 'Does it power on? Any disc read errors, HDMI issues, or other problems?' },
    { title: 'Accessories', detail: 'Controllers, cables, docks, and the original box can add value.' },
    { title: 'Games included', detail: 'List any game titles you want to include in the sale.' },
  ],
  conditionInfo:
    'Our offer depends on the console model, functional and cosmetic condition, included accessories and games, and the current resale market. The final offer may be adjusted after an in-person inspection at our Long Island store.',
  processSteps: [
    { title: 'Submit your request', detail: 'Tell us your console model, condition, and accessories.' },
    { title: 'We call you', detail: 'A real person reviews your details and calls you with an offer.' },
    { title: 'Bring it in', detail: 'If you accept, bring your console and games to our store.' },
    { title: 'Get paid', detail: 'We pay you after the inspection and both sides agree on the price.' },
  ],
  faqs: [],
  imageSrc:
    'https://images.pexels.com/photos/4523006/pexels-photo-4523006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'A gaming console and controller on a table, ready to be sold',
};

export const ELECTRONICS_PAGE: DevicePageContent = {
  meta: {
    title: 'Sell Electronics for Cash on Long Island, NY',
    description:
      'Sell your used electronics for cash. Cash Any Gadget buys smartphones, tablets, laptops, gaming consoles, smartwatches, cameras, drones and more on Long Island, NY. Free quote request.',
    path: '/sell-electronics',
  },
  eyebrow: 'Sell Electronics',
  h1: 'Sell Your Electronics for Cash',
  heroSubtitle:
    'Turn your used and unwanted electronics into cash. Tell us what you have, and we will call you with an offer.',
  breadcrumb: 'Sell Electronics',
  intro:
    'Cash Any Gadget buys a wide range of used and unwanted electronics on Long Island, New York. From smartphones and tablets to cameras and computer components, submit a free quote request and we will personally call you to discuss an offer. If you are not sure whether we accept your device, send us the details and we will take a look.',
  whatWeAccept: [
    { title: 'Smartphones', detail: 'iPhones, Samsung Galaxy, Google Pixel, and other phones.' },
    { title: 'Tablets and laptops', detail: 'iPads, MacBooks, Windows laptops, and Android tablets.' },
    { title: 'Gaming consoles', detail: 'PlayStation, Xbox, Nintendo Switch, and video games.' },
    { title: 'Other electronics', detail: 'Smartwatches, headphones, cameras, drones, and computer components.' },
  ],
  whatToProvide: [
    { title: 'Device type', detail: 'Select the category that best matches your device.' },
    { title: 'Brand and model', detail: 'The brand and model name help us identify the device.' },
    { title: 'Condition', detail: 'Describe any damage, functional issues, or cosmetic wear.' },
    { title: 'Accessories', detail: 'Include chargers, cables, cases, or original packaging if available.' },
  ],
  conditionInfo:
    'Our offer depends on the device type, model, condition, accessories, and the current resale market. We consider many broken or damaged devices. The final offer may be adjusted after an in-person inspection at our Long Island store.',
  processSteps: [
    { title: 'Submit your request', detail: 'Tell us what electronics you want to sell.' },
    { title: 'We call you', detail: 'A real person reviews your details and calls you with an offer.' },
    { title: 'Bring it in', detail: 'If you accept, bring your devices to our store for inspection.' },
    { title: 'Get paid', detail: 'We pay you after the inspection and both sides agree on the price.' },
  ],
  faqs: [],
  imageSrc:
    'https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'A collection of electronic devices including a laptop, phone, and headphones',
};
