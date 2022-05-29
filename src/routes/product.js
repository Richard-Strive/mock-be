function getHistoryPurchase() {
  const products = [
    {
      type: "Attrazione",
      title: "Piazza San Marco",
      image: "/random.jpeg",
      localtion:"Venezia",
    },
    {
      type: "hotel",
      title: "San Marco Palace",
      image: "/random.jpeg",
      localtion:"Venezia"
    },
    {
      type: "restaurant",
      title: "Ristorante - $$$",
      image: "/random.jpeg",
      localtion:"Venezia"
    },
    {
      type: "Visita con guida del posto in Piazza San Marco",
      title: "Attività - Durata 5 ore",
      image: "/random.jpeg",
      localtion:"Venezia"
    },
    {
      type: "Attrazione",
      title: "Piazza San Marco",
      image: "/random.jpeg",
      localtion:"Milano",
    },
    {
      type: "hotel",
      title: "San Marco Palace",
      image: "/random.jpeg",
      localtion:"Milano"
    },
    {
      type: "Visita con guida del posto in Piazza San Marco",
      title: "Attività - Durata 5 ore",
      image: "/random.jpeg",
      localtion:"Napoli"
    },
    {
      type: "hotel",
      title: "San Marco Palace",
      image: "/random.jpeg",
      localtion:"Palermo"
    },
    {
      type: "Visita con guida del posto in Piazza San Marco",
      title: "Attività - Durata 5 ore",
      image: "/random.jpeg",
      localtion:"Palermo"
    },

  ];
  return products;
}

module.exports = getHistoryPurchase;
