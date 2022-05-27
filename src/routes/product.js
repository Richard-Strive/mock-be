function getHistoryPurchase() {
  const products = [
    {
      type: "Attrazione",
      title: "Piazza San Marco",
      image: "/random.jpeg",
      localtion:"Venezia, Veneto",
      cane:"Lupo di mare"
    },
    {
      type: "hotel",
      title: "San Marco Palace",
      image: "/random.jpeg",
      localtion:"Venezia, Veneto"
    },
    {
      type: "restaurant",
      title: "Ristorante - $$$",
      image: "/random.jpeg",
      localtion:"Venezia, Veneto"
    },
    {
      type: "Visita con guida del posto in Piazza San Marco",
      title: "Attività - Durata 5 ore",
      image: "/random.jpeg",
      localtion:"Venezia, Veneto"
    },

  ];
  return products;
}

module.exports = getHistoryPurchase;
