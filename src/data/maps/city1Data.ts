import { NPC, InteractiveEntity } from '../../types';

export interface CollisionBox {
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface CityObject {
  id: string;
  type: 'kiosk' | 'landmark' | 'collectible' | 'portal';
  name: string;
  x: number;
  y: number;
  radius: number;
  icon: string;
  prompt: Record<'en' | 'hi' | 'te', string>;
  title: Record<'en' | 'hi' | 'te', string>;
  content: Record<'en' | 'hi' | 'te', string>;
  details?: {
    category: string;
    financialLesson: string;
    recommendedAction?: string;
  };
}

export interface CityMapConfig {
  id: string;
  name: string;
  regionId: string;
  pillar: string;
  width: number;
  height: number;
  spawnPoint: {
    x: number;
    y: number;
    direction: 'up' | 'down' | 'left' | 'right';
  };
}

export const CITY1_CONFIG: CityMapConfig = {
  id: 'city_hostel_commons',
  name: 'Hostel Commons (City 1)',
  regionId: 'region_scholars_district',
  pillar: 'Plan & Budget (50-30-20 Rule)',
  width: 1024,
  height: 572,
  spawnPoint: {
    x: 75,
    y: 450,
    direction: 'right',
  },
};

// 2.5D Foot-Aligned Collision Geometry
export const CITY1_COLLISION_BOXES: CollisionBox[] = [
  // Outer perimeter boundaries (leaving North Road at x: 670-715 open for City 2 exit)
  { name: 'boundary_top_left', x: 0, y: 0, w: 670, h: 15 },
  { name: 'boundary_top_right', x: 715, y: 0, w: 309, h: 15 },
  { name: 'boundary_west', x: 0, y: 0, w: 10, h: 572 },
  { name: 'boundary_east', x: 1014, y: 0, w: 10, h: 572 },
  { name: 'boundary_bottom', x: 0, y: 560, w: 1024, h: 12 },

  // West River & Canal (Leaves bridge at y: 425-475 open)
  { name: 'river_north', x: 0, y: 290, w: 85, h: 135 },
  { name: 'river_south', x: 0, y: 475, w: 85, h: 95 },

  // School & Library Complex (NW)
  // Building foundation
  { name: 'school_main_building', x: 55, y: 30, w: 305, h: 125 },
  // Front stone walls (gate opening at x: 180-245 open)
  { name: 'school_wall_left', x: 110, y: 285, w: 70, h: 15 },
  { name: 'school_wall_right', x: 245, y: 285, w: 85, h: 15 },

  // Bookshop (North-Center-West)
  { name: 'bookshop_building', x: 330, y: 200, w: 85, h: 75 },

  // Study Room (North-Center)
  { name: 'study_room_building', x: 475, y: 65, w: 155, h: 115 },

  // Hostel (NE)
  // Building foundation
  { name: 'hostel_main_building', x: 745, y: 25, w: 225, h: 135 },
  // Courtyard south stone walls (gate opening at x: 830-890 open)
  { name: 'hostel_wall_left', x: 740, y: 220, w: 90, h: 15 },
  { name: 'hostel_wall_right', x: 890, y: 220, w: 85, h: 15 },

  // Campus Canteen & Patio Enclosure (Center)
  // Kitchen building
  { name: 'canteen_building', x: 340, y: 245, w: 160, h: 85 },
  // Patio fences (south gate at x: 345-435 open)
  { name: 'canteen_fence_west', x: 265, y: 250, w: 8, h: 160 },
  { name: 'canteen_fence_east', x: 505, y: 250, w: 8, h: 160 },
  { name: 'canteen_fence_south_left', x: 265, y: 410, w: 80, h: 10 },
  { name: 'canteen_fence_south_right', x: 435, y: 410, w: 78, h: 10 },

  // Electronics Repair Shop (Center-East)
  { name: 'electronics_shop', x: 590, y: 235, w: 80, h: 95 },

  // Savings Bank (SE)
  { name: 'savings_bank_building', x: 815, y: 400, w: 135, h: 95 },

  // South Banyan Tree Trunk & Planter (completely south of road!)
  { name: 'south_banyan_tree', x: 590, y: 475, w: 75, h: 45 },
];

// NPCs positioned on City 1 Map
export const CITY1_NPCS: NPC[] = [
  {
    id: 'npc_hostel_warden',
    name: 'Warden Rao Sir',
    role: 'Hostel Supervisor',
    avatar: '👨‍💼',
    x: 845,
    y: 180,
    cityId: 'city_hostel_commons',
    scenarioId: 'scenario_hostel_stipend',
    dialogueIntro: {
      en: 'Congratulations on the scholarship! But remember: hostel mess dues must be cleared on the 1st of every month. Plan your budget before you spend a single rupee!',
      hi: 'छात्रवृत्ति के लिए बधाई! लेकिन याद रखें: हर महीने की पहली तारीख को मेस का बकाया चुकाना होगा। एक भी रुपया खर्च करने से पहले बजट बनाएं!',
      te: 'స్కాలర్‌షిప్ వచ్చినందుకు అభినందనలు! కానీ ప్రతి నెలా 1వ తేదీన మెస్ ఫీజు కట్టాలని గుర్తుంచుకోండి. రూపాయి ఖర్చు చేసే ముందే ప్లాన్ చేసుకోండి!',
    },
    dialogueSolved: {
      en: 'Well done! Your mess dues are registered. That is the discipline of a true scholar.',
      hi: 'शाबाश! आपके मेस का भुगतान दर्ज हो गया है। यही एक समझदार छात्र की पहचान है।',
      te: 'చాలా బాగుంది! మెస్ ఫీజు నమోదైంది. క్రమశిక్షణతో కూడిన ఆర్థిక ప్రణాళిక మీది.',
    },
  },
  {
    id: 'npc_repair_tech',
    name: 'Suresh Anna',
    role: 'Electronics Repair Tech',
    avatar: '🔧',
    x: 650,
    y: 340,
    cityId: 'city_rainy_day_refuge',
    scenarioId: 'scenario_broken_phone',
    dialogueIntro: {
      en: 'Welcome to the repair shop! Keep an eye on your tech. A sudden broken screen can cost ₹1,200. Always keep an emergency reserve ready so you never have to turn to predatory loan apps!',
      hi: 'मरम्मत की दुकान में स्वागत है! अपने गैजेट्स का ध्यान रखें। टूटी स्क्रीन ₹1,200 ले जाएगी। हमेशा इमरजेंसी बचत रखें!',
      te: 'రిపేర్ షాప్‌కి స్వాగతం! మీ ఫోన్‌ని జాగ్రత్తగా చూసుకోండి. స్క్రీన్ పగిలితే ₹1,200 ఖర్చవుతుంది. ఎల్లప్పుడూ ఎమర్జెన్సీ ఫండ్ సిద్ధంగా ఉంచుకోండి!',
    },
    dialogueSolved: {
      en: 'Smart scholars plan ahead for sudden repairs. Never borrow at 30% monthly compounding interest!',
      hi: 'समझदार छात्र अचानक मरम्मत की योजना पहले से बनाते हैं। कभी भी 30% मासिक ब्याज पर कर्ज न लें!',
      te: 'తెలివైన విద్యార్థులు అత్యవసర ఖర్చులకు ముందే సిద్ధపడతారు. అధిక వడ్డీ యాప్‌లకు దూరంగా ఉండండి!',
    },
  },
  {
    id: 'npc_canteen_manager',
    name: 'Chary Garu',
    role: 'Canteen Cashier',
    avatar: '☕',
    x: 395,
    y: 340,
    cityId: 'city_hostel_commons',
    dialogueIntro: {
      en: 'Namaste thammudu! Our Irani chai is ₹15 and samosa is ₹20. Seems small, right? But having two every day is ₹1,050 a month! Discretionary micro-spending silently drains your wallet.',
      hi: 'नमस्ते भाई! ईरानी चाय ₹15 और समोसा ₹20 का है। छोटा लगता है ना? लेकिन रोज का ₹35 महीने में ₹1,050 बनता है! छोटे खर्चे जेब खाली कर देते हैं।',
      te: 'నమస్తే తమ్ముడూ! మా ఇరానీ చాయ్ ₹15, సమోసా ₹20. చిన్న మొత్తమే అనిపిస్తుంది కదా? కానీ రోజూ తాగితే నెలకు ₹1,050 అవుతుంది! చిన్న ఖర్చులు బడ్జెట్‌ను దెబ్బతీస్తాయి.',
    },
    dialogueSolved: {
      en: 'Enjoy your chai with friends, but keep it within the 30% "Wants" budget bucket!',
      hi: 'दोस्तों के साथ चाय का आनंद लें, लेकिन इसे अपने 30% शौक के बजट में ही रखें!',
      te: 'స్నేహితులతో చాయ్ తాగండి, కానీ దాన్ని మీ 30% విలాసాల బడ్జెట్ పరిధిలోనే ఉంచండి!',
    },
  },
  {
    id: 'npc_senior_librarian',
    name: 'Madam Lakshmi',
    role: 'Senior Academic Librarian',
    avatar: '📚',
    x: 210,
    y: 210,
    cityId: 'city_hostel_commons',
    dialogueIntro: {
      en: 'Welcome to the Central Library! Before rushing to buy brand-new textbooks for ₹3,000, check our reference copies or visit the Academic Bazaar for used books at 70% off!',
      hi: 'केंद्रीय पुस्तकालय में स्वागत है! ₹3,000 की नई किताबें खरीदने से पहले हमारी लाइब्रेरी प्रतियां देखें या 70% छूट पर पुरानी किताबें लें!',
      te: 'సెంట్రల్ లైబ్రరీకి స్వాగతం! ₹3,000 పెట్టి కొత్త పుస్తకాలు కొనేముందు లైబ్రరీ పుస్తకాలు లేదా సెకండ్ హ్యాండ్ పుస్తకాలు చూడండి!',
    },
  },
];

// Interactive Objects & Environmental Discoveries
export const CITY1_INTERACTIVES: CityObject[] = [
  {
    id: 'kiosk_atm_passbook',
    type: 'kiosk',
    name: 'Savings Bank ATM & Passbook Kiosk',
    x: 925,
    y: 505,
    radius: 60,
    icon: 'Landmark',
    prompt: {
      en: 'Press [E] / Space to inspect Bank Account & ATM',
      hi: 'बैंक खाता और ATM जांचने के लिए [E] दबाएं',
      te: 'బ్యాంక్ ఖాతా మరియు ATM చూడటానికి [E] నొక్కండి',
    },
    title: {
      en: 'Collegiate Student Savings Kiosk',
      hi: 'कॉलेजिएट छात्र बचत कियोस्क',
      te: 'విద్యార్థి సేవింగ్స్ బ్యాంక్ కియోస్క్',
    },
    content: {
      en: 'State Bank of India — Zero-Balance Student Passbook\n• Monthly Stipend Credit: ₹5,000 (Credited on 1st)\n• Debit Card Protection: 2FA Active\n• Daily Withdrawal Limit: ₹2,000\n\nFinancial Tip: Never write your 4-digit ATM PIN on the back of your card or share it via SMS.',
      hi: 'भारतीय स्टेट बैंक — शून्य-शेष छात्र पासबुक\n• मासिक वजीफा क्रेडिट: ₹5,000\n• डेबिट कार्ड सुरक्षा: 2FA सक्रिय\n• वित्तीय सुझाव: अपने कार्ड पर कभी भी PIN न लिखें।',
      te: 'స్టేట్ బ్యాంక్ ఆఫ్ ఇండియా — జీరో-బాలెన్స్ విద్యార్థి పాస్‌బుక్\n• నెలవారీ స్టైపెండ్: ₹5,000\n• డెబిట్ కార్డ్ రక్షణ: 2FA యాక్టివ్\n• ముఖ్య గమనిక: ఏటీఎం పిన్ ఎవరితోనూ పంచుకోకండి.',
    },
    details: {
      category: 'Banking Basics',
      financialLesson: 'Zero-fee custodial accounts ensure you never pay monthly maintenance penalties while safeguarding your scholarship funds.',
      recommendedAction: 'Always request an SMS alert for debit transactions to instantly detect unauthorized charges.',
    },
  },
  {
    id: 'notice_scholarship_letter',
    type: 'collectible',
    name: 'Official Scholarship Notice Board',
    x: 185,
    y: 395,
    radius: 60,
    icon: 'FileText',
    prompt: {
      en: 'Press [E] / Space to read Scholarship Award Notice',
      hi: 'छात्रवृत्ति नोटिस पढ़ने के लिए [E] दबाएं',
      te: 'స్కాలర్‌షిప్ నోటీసు చదవడానికి [E] నొక్కండి',
    },
    title: {
      en: 'Hyderabad Directorate of Higher Education — Merit Stipend',
      hi: 'हैदराबाद उच्च शिक्षा निदेशालय — मेधावी वजीफा',
      te: 'హైదరాబాద్ ఉన్నత విద్యా మండలి — మెరిట్ స్టైపెండ్',
    },
    content: {
      en: 'OFFICIAL NOTIFICATION:\n"Awarded to Scholar for Academic Excellence.\nMonthly Grant: ₹5,000.\n\nMandatory Requirement:\nStudents residing in hostel commons must prioritize mess dues (₹2,500) to maintain accommodation eligibility.\n\nRecommended Rule of Thumb:\n• 50% Needs (₹2,500)\n• 20% Emergency Savings (₹1,000)\n• 30% Discretionary / Books (₹1,500)"',
      hi: 'आधिकारिक सूचना:\n"मेधावी छात्रवृत्ति: ₹5,000 प्रति माह।\nमेस शुल्क (₹2,500) अनिवार्य है।\n50-30-20 बजट नियम का पालन करें।"',
      te: 'అధికారిక ప్రకటన:\n"నెలకు ₹5,000 మెరిట్ స్కాలర్‌షిప్ మంజూరు చేయబడింది.\nహాస్టల్ మెస్ ఫీజు (₹2,500) ఖచ్చితంగా ముందుగా చెల్లించాలి.\n50-30-20 బడ్జెట్ నియమాన్ని పాటించండి."',
    },
    details: {
      category: 'Budgeting Pillar',
      financialLesson: 'The 50/30/20 budget framework divides take-home income into Needs, Wants, and Savings, preventing lifestyle inflation.',
    },
  },
  {
    id: 'board_canteen_budget',
    type: 'landmark',
    name: 'Canteen Expense Leakage Calculator',
    x: 310,
    y: 380,
    radius: 60,
    icon: 'Receipt',
    prompt: {
      en: 'Press [E] / Space to inspect Canteen Expense Board',
      hi: 'कैंटीन खर्च बोर्ड देखने के लिए [E] दबाएं',
      te: 'క్యాంటీన్ ఖర్చుల బోర్డు చూడటానికి [E] నొక్కండి',
    },
    title: {
      en: 'The "Small Leakages" Spending Board',
      hi: '"छोटे खर्च" बजट विश्लेषण बोर्ड',
      te: 'చిన్న ఖర్చుల బడ్జెట్ విశ్లేషణ బోర్డు',
    },
    content: {
      en: 'CAMPUS SPENDING TRACKER:\n• 1 Special Chai: ₹15/day = ₹450/month\n• 1 Plate Mirchi Bajji: ₹25/day = ₹750/month\n• Packaged Soda Bottle: ₹40/day = ₹1,200/month\n\nTOTAL UNTRACKED EXPENSES = ₹2,400 / month!\nThat is nearly 50% of your entire monthly stipend vanishing without awareness!',
      hi: 'कैंपस खर्च ट्रैकर:\n• रोजाना एक चाय और समोसा = ₹1,200/माह!\nयह आपके पूरे वजीफे का लगभग आधा हिस्सा बिना हिसाब-किताब के गायब कर देता है!',
      te: 'క్యాంపస్ ఖర్చుల విశ్లేషణ:\n• రోజూ చాయ్ మరియు స్నాక్స్ = నెలకు దాదాపు ₹1,200!\nఇది మీ మొత్తం స్టైపెండ్‌లో దాదాపు సగం. చిన్న ఖర్చులను ఎప్పటికప్పుడు గమనించండి!',
    },
    details: {
      category: 'Discretionary Leakages',
      financialLesson: 'Micro-transactions add up exponentially over 30 days. Tracking them turns budget leaks into compounding savings.',
    },
  },
  {
    id: 'portal_city2_exit',
    type: 'portal',
    name: 'North Highway: Road to City 2',
    x: 685,
    y: 30,
    radius: 60,
    icon: 'Compass',
    prompt: {
      en: 'Press [E] / Space to travel to City 2 (Academic Bazaar)',
      hi: 'सिटी 2 (एकेडमिक बाजार) जाने के लिए [E] दबाएं',
      te: 'సిటీ 2 (అకాడమిక్ బజార్) వెళ్ళడానికి [E] నొక్కండి',
    },
    title: {
      en: 'Road to City 2: The Academic Bazaar',
      hi: 'सिटी 2 की राह: एकेडमिक बाजार',
      te: 'సిటీ 2 మార్గం: అకాడమిక్ బజార్',
    },
    content: {
      en: 'Gateway to City 2 (The Academic Bazaar — Koti Book Market).\n\nHere you will learn how to navigate textbook discounts, secondhand materials, and peer pressure while outfitting your scholastic journey.',
      hi: 'सिटी 2 का प्रवेश द्वार: यहां आप पुरानी किताबों और स्टेशनरी की स्मार्ट खरीदारी सीखेंगे।',
      te: 'సిటీ 2 ప్రవేశ ద్వారం: ఇక్కడ మీరు పాఠ్యపుస్తకాలు మరియు విద్య సామగ్రి కొనుగోలులో తెలివైన బడ్జెట్ నేర్చుకుంటారు.',
    },
    details: {
      category: 'World Transition',
      financialLesson: 'Each city in the Scholar\'s District unlocks a critical survival skill. Master your hostel dues before venturing into market shopping.',
    },
  },
];
