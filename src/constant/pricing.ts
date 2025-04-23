const TOKENS = {
  FREE: 0,
  BASIC: 1000,
  PRO: 5000,
  PREMIUM: 10000,
  ULTRA: 20000,
};

const PRICE = {
  FREE: 0,
  BASIC: 100,
  PRO: 450,
  PREMIUM: 800,
  ULTRA: 1400,
};

const PLAN_TYPE = {
  FREE: "FREE",
  BASIC: "BASIC",
  PRO: "PRO",
  PREMIUM: "PREMIUM",
  ULTRA: "ULTRA",
};

const PRICINGS = [
  {
    id: 1,
    name: "Free",
    price: PRICE.FREE,
    token: TOKENS.FREE,
    type: PLAN_TYPE.FREE,
    popular: false,
  },
  {
    id: 2,
    name: "Basic",
    price: PRICE.BASIC,
    token: TOKENS.BASIC,
    type: PLAN_TYPE.BASIC,
    popular: false,
  },
  {
    id: 3,
    name: "Pro",
    price: PRICE.PRO,
    token: TOKENS.PRO,
    type: PLAN_TYPE.PRO,
    popular: false,
  },
  {
    id: 4,
    name: "Premium",
    price: PRICE.PREMIUM,
    token: TOKENS.PREMIUM,
    type: PLAN_TYPE.PREMIUM,
    popular: true,
  },
  {
    id: 4,
    name: "Ultra",
    price: PRICE.ULTRA,
    type: PLAN_TYPE.ULTRA,
    token: TOKENS.ULTRA,
    popular: false,
  },
];

export { TOKENS, PRICE, PLAN_TYPE, PRICINGS };
