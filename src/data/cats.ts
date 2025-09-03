export interface Cat {
  id: string;
  name: string;
  age: string;
  gender: 'male' | 'female';
  personality: string[];
  description: string;
  image: string;
  isSpecialNeeds?: boolean;
}

// Mock data that would come from Decap CMS
export const cats: Cat[] = [
  {
    id: '1',
    name: 'Luna',
    age: '2 years',
    gender: 'female',
    personality: ['Playful', 'Affectionate', 'Social'],
    description: 'Luna is a beautiful tabby who loves to play and cuddle. She gets along well with other cats and would make a perfect addition to any family.',
    image: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Milo',
    age: '4 years',
    gender: 'male',
    personality: ['Calm', 'Independent', 'Loyal'],
    description: 'Milo is a gentle giant who prefers quiet environments. He\'s perfect for someone looking for a calm, low-maintenance companion.',
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Bella',
    age: '1 year',
    gender: 'female',
    personality: ['Energetic', 'Curious', 'Brave'],
    description: 'Bella is a young kitten full of energy and curiosity. She loves exploring and would thrive in an active household.',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Oliver',
    age: '6 years',
    gender: 'male',
    personality: ['Gentle', 'Senior', 'Loving'],
    description: 'Oliver is a senior cat with so much love to give. He\'s looking for a quiet home where he can spend his golden years being pampered.',
    image: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=800',
    isSpecialNeeds: true
  }
];