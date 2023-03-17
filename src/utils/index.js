export const formatImagesData = (data = []) => {
  const formattedData = data?.map((item) => {
    return {
      id: item?.id,
      src: item?.urls?.small,
    };
  });
  return formattedData;
};

export const dummyData = [
  {
    id: 1,
    name: "Aeroplane",
  },
  {
    id: 2,
    name: "Airline",
  },
  {
    id: 3,
    name: "Buses",
  },
  {
    id: 4,
    name: "Bikes",
  },
  {
    id: 5,
    name: "Cats",
  },
  {
    id: 6,
    name: "Cities",
  },
  {
    id: 7,
    name: "Dogs",
  },
  {
    id: 8,
    name: "Dinasour",
  },
  {
    id: 9,
    name: "Eggs",
  },
  {
    id: 10,
    name: "Egypt",
  },
  {
    id: 11,
    name: "Fish",
  },
  {
    id: 12,
    name: "Fruits",
  },
  {
    id: 13,
    name: "Flowers",
  },
  {
    id: 14,
    name: "Goats",
  },
  {
    id: 15,
    name: "Grass",
  },
  {
    id: 16,
    name: "Horses",
  },
  {
    id: 17,
    name: "Houses",
  },
  {
    id: 18,
    name: "Ice cream",
  },
  {
    id: 19,
    name: "Island",
  },
  {
    id: 20,
    name: "Jungle",
  },
  {
    id: 21,
    name: "Jaipur",
  },
  {
    id: 22,
    name: "Kites",
  },
  {
    id: 23,
    name: "Keyboard",
  },
  {
    id: 24,
    name: "Loin",
  },
  {
    id: 25,
    name: "Lands",
  },
];
