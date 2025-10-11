import React from 'react';

const Cards = () => {
  const pets = [
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      gender: 'Male',
      location: 'Dholpur',
      img: 'https://placedog.net/400/300?id=1', // sample image
    },
    {
      name: 'Luna',
      breed: 'Labrador',
      gender: 'Female',
      location: 'Agra',
      img: 'https://placedog.net/400/300?id=2',
    },
    {
      name: 'Charlie',
      breed: 'Beagle',
      gender: 'Male',
      location: 'Jaipur',
      img: 'https://placedog.net/400/300?id=3',
    },
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      gender: 'Male',
      location: 'Dholpur',
      img: 'https://placedog.net/400/300?id=1', // sample image
    },
    {
      name: 'Luna',
      breed: 'Labrador',
      gender: 'Female',
      location: 'Agra',
      img: 'https://placedog.net/400/300?id=2',
    },
    {
      name: 'Charlie',
      breed: 'Beagle',
      gender: 'Male',
      location: 'Jaipur',
      img: 'https://placedog.net/400/300?id=3',
    },
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      gender: 'Male',
      location: 'Dholpur',
      img: 'https://placedog.net/400/300?id=1', // sample image
    },
    {
      name: 'Luna',
      breed: 'Labrador',
      gender: 'Female',
      location: 'Agra',
      img: 'https://placedog.net/400/300?id=2',
    },
    {
      name: 'Charlie',
      breed: 'Beagle',
      gender: 'Male',
      location: 'Jaipur',
      img: 'https://placedog.net/400/300?id=3',
    },
    {
      name: 'Buddy',
      breed: 'Golden Retriever',
      gender: 'Male',
      location: 'Dholpur',
      img: 'https://placedog.net/400/300?id=1', // sample image
    },
    {
      name: 'Luna',
      breed: 'Labrador',
      gender: 'Female',
      location: 'Agra',
      img: 'https://placedog.net/400/300?id=2',
    },
    {
      name: 'Charlie',
      breed: 'Beagle',
      gender: 'Male',
      location: 'Jaipur',
      img: 'https://placedog.net/400/300?id=3',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 w-[80%] mx-auto">
      {pets.map((pet, index) => (
        <div
          key={index}
          className="w-64 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <img
            src={pet.img}
            alt={pet.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 flex flex-col gap-1">
            <h2 className="font-bold text-lg">{pet.name}</h2>
            <p className="text-gray-600 text-sm">Breed: {pet.breed}</p>
            <p className="text-gray-600 text-sm">Gender: {pet.gender}</p>
            <p className="text-gray-600 text-sm">Location: {pet.location}</p>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 m-4 rounded-full transition">
            Adopt
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
