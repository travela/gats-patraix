
import React from 'react';

const CatCard = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeaturedCats = () => {
  const cats = [
    {
      name: 'Milo',
      description: 'The adventurous one. Loves to explore and is always up for a game of fetch.',
      imageUrl: 'https://placekitten.com/400/400'
    },
    {
      name: 'Luna',
      description: 'The cuddly one. Will purr her way into your heart and loves a good nap.',
      imageUrl: 'https://placekitten.com/401/401'
    },
    {
      name: 'Leo',
      description: 'The majestic one. He may look serious, but he is a big softy at heart.',
      imageUrl: 'https://placekitten.com/402/402'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Stars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cats.map(cat => (
            <CatCard key={cat.name} {...cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCats;
