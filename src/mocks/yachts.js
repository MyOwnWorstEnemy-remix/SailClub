import meridian from "../assets/meridian.jpg"
import manhattan from "../assets/manhattan.jpg"
import starfisher from "../assets/starfisher.jpg"
import pacific from "../assets/pacific.jpg"
import atlantic from "../assets/atlantic.jpg"

const yachts = [
  {
    id: 0,
    name: "Катер Meridian 401",
    src: meridian,
    description:
      "Яхта 401 длиной 12.5 метров и шириной 4.2 метра, вместимостью 11 человек",
    features: [
      { id: 0, name: "2 каюты" },
      { id: 1, name: "4 спальных места" },
      { id: 2, name: "аудиосистема, кондиционер" },
      { id: 3, name: "холодильник, микроволновка" },
      { id: 4, name: "душ, туалет" },
    ],
    price: "14 000",
  },
  {
    id: 1,
    name: "Катер 60 Manhattan",
    src: manhattan,
    description:
      "Двухпалубное судно VIP уровня длиной 20 метров, вместимостью 10 человек",
    features: [
      { id: 0, name: "6 кают" },
      { id: 1, name: "носовая часть с огромной подушкой" },
      { id: 2, name: "просторный флайбридж" },
      { id: 3, name: "оборудованная кухня" },
      { id: 4, name: "джакузи" },
    ],
    price: "25 000",
  },
  {
    id: 2,
    name: "Катер Starfisher 34",
    src: starfisher,
    description: "Моторная яхта длиной 11 метров и вместимостью до 8 человек",
    features: [
      { id: 0, name: "4 каюты" },
      { id: 1, name: "6 спальных мест" },
      { id: 2, name: "аудиосистема, кондиционер" },
      { id: 3, name: "холодильник, микроволновка" },
      { id: 4, name: "душ, туалет" },
    ],
    price: "18 000",
  },
  {
    id: 3,
    name: "Катер Pacific 7-13",
    src: pacific,
    description:
      "Катер Pacific длиной 12 метров и шириной 4.6 метра, вместимостью 8 человек",
    features: [
      { id: 0, name: "1 каюта" },
      { id: 1, name: "2 спальных места" },
      { id: 2, name: "аудиосистема, кондиционер" },
      { id: 3, name: "холодильник, микроволновка" },
      { id: 4, name: "душ, туалет" },
    ],
    price: "11 000",
  },
  {
    id: 4,
    name: "Катер Atlantic 3000",
    src: atlantic,
    description: "Катер Atlantic длиной 14 метров и вместимостью до 6 человек",
    features: [
      { id: 0, name: "2 каюты" },
      { id: 1, name: "4 спальных места" },
      { id: 2, name: "просторный флайбридж" },
      { id: 3, name: "оборудованная кухня" },
      { id: 4, name: "душ, туалет" },
    ],
    price: "15 000",
  },
];

export default yachts;