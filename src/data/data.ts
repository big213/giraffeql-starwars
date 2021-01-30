export const luke = {
  type: "Human",
  id: "1000",
  name: "Luke Skywalker",
  friendIds: ["1002", "1003", "2000", "2001"],
  appearsIn: [4, 5, 6],
  homePlanet: "Tatooine",
};

export const vader = {
  type: "Human",
  id: "1001",
  name: "Darth Vader",
  friendIds: ["1004"],
  appearsIn: [4, 5, 6],
  homePlanet: "Tatooine",
};

export const han = {
  type: "Human",
  id: "1002",
  name: "Han Solo",
  friendIds: ["1000", "1003", "2001"],
  appearsIn: [4, 5, 6],
};

export const leia = {
  type: "Human",
  id: "1003",
  name: "Leia Organa",
  friendIds: ["1000", "1002", "2000", "2001"],
  appearsIn: [4, 5, 6],
  homePlanet: "Alderaan",
};

export const tarkin = {
  type: "Human",
  id: "1004",
  name: "Wilhuff Tarkin",
  friendIds: ["1001"],
  appearsIn: [4],
};

export const humanData = {
  [luke.id]: luke,
  [vader.id]: vader,
  [han.id]: han,
  [leia.id]: leia,
  [tarkin.id]: tarkin,
};

export const threepio = {
  type: "Droid",
  id: "2000",
  name: "C-3PO",
  friendIds: ["1000", "1002", "1003", "2001"],
  appearsIn: [4, 5, 6],
  primaryFunction: "Protocol",
};

export const artoo = {
  type: "Droid",
  id: "2001",
  name: "R2-D2",
  friendIds: ["1000", "1002", "1003"],
  appearsIn: [4, 5, 6],
  primaryFunction: "Astromech",
};

export const droidData = {
  [threepio.id]: threepio,
  [artoo.id]: artoo,
};
