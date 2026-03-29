/* ╔══════════════════════════════════════════════════════╗
   ║  PRICING DATA — Edit values here before going live  ║
   ║  All prices in SGD ($)                              ║
   ╚══════════════════════════════════════════════════════╝ */

const PRICING = {

  dessertCups: {
    note: "Available in 100 ml & 350 ml · All flavours same price",
    small: {
      label: "100 ml",
      sublabel: "Small Cup",
      options: [
        { qty: 3,  price: 8  },
        { qty: 6,  price: 15 },
        { qty: 12, price: 30 }
      ]
    },
    large: {
      label: "350 ml",
      sublabel: "Large Cup",
      options: [
        { qty: 3,  price: 13 },
        { qty: 6,  price: 23 },
        { qty: 12, price: 44 }
      ]
    }
  },

  browniePacks: {
    options: [
      { qty: 6, price: 16 }
    ]
  },

  cupcakes: {
    options: [
      { qty: 6,  price: 15 },
      { qty: 12, price: 25 },
      { qty: 24, price: 50 }
    ]
  }

};
