import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";


const tours = [
  {
    id: "01",
    title: "Soin du visage",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Extensions de cils",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Epilation",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Manucure et pédicure",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Colloration cheveux",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Maquillage",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Massage",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Coiffure",
    city: "Grand Tunis",
    address:'Tunis,Ariana,Ben Arous, Manouba',
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 0,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
