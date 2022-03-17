function getHistoryPurchase() {
  const products = [
    {
      type: "activity",
      title: "Roma: la città storica",
      time: "12:00",
      startDate: "2019-03-03",
      endDate: "2019-03-04",
      image: "/PlayItaly_Venezia.jpeg",
      people: {
        adults: {
          quantity: 3,
          transferInstanceId: "ejehdui",
        },
      },
      startDestination: "Milano",
      endDestination: "Napoli",
      note: "Arrivo con 5 minuti di ritardo",
      price: "250",
      language: "IT",
    },
    {
      type: "package",
      title: "Roma: la città storica",
      time: "12:00",
      startDate: "2022-03-16",
      endDate: "2022-02-03",
      image: "/PlayItaly_Venezia.jpeg",
      rooms: [
        {
          adults: {
            quantity: 2,
            price: "600",
            allInclusiveInstanceId: "hxuias",
          },
          children: {
            quantity: 2,
            price: "10",
            allInclusiveInstanceId: "fssrsrs",
          },
          allInclusiveInstanceRoomId: "sajkas",
        },
      ],
      startDestination: "Milano",
      endDestination: "Napoli",
      note: "Arrivo con 5 minuti di ritardo",
      price: "250",
      language: "IT",
    },
    {
      id: "328738238",
      title: "Mondello Palace luxury hotel",
      checkIn: "2022-01-02",
      checkout: "2022-02-02",
      people: {
        adult: 2,
        child: 1,
      },
      price: "300",
      type: "hotel",
      hotelInstanceId: "saskjaksui",
    },
    {
      type: "transfer",
      title: "transfer title",
      time: "12.00",
      startDate: "2022-09-20",
      endDate: "2022-02-02",
      image: "/PlayItaly_Venezia.jpeg",
      people: {
        adults: {
          quantity: 2,
          transferInstanceId: "sjkau",
        },
      },
      startDestination: "Milano",
      endDestination: "Napoli",
      note: "Hello",
      price: 344,
      language: "IT",
    },
  ];
  return products;
}

module.exports = getHistoryPurchase;
