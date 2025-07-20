// This simulates data that would come from Decap CMS
export interface Cat {
  id: string
  name: string
  age: number
  gender: "male" | "female"
  personality: string[]
  description: string
  image: string
  available: boolean
}

export const catsData: Cat[] = [
  {
    id: "1",
    name: "Luna",
    age: 2,
    gender: "female",
    personality: ["Playful", "Affectionate", "Social"],
    description:
      "Luna is a beautiful tabby who loves to play and cuddle. She gets along well with other cats and would make a perfect addition to any family.",
    image: "/placeholder.svg?height=300&width=300",
    available: true,
  },
  {
    id: "2",
    name: "Milo",
    age: 4,
    gender: "male",
    personality: ["Calm", "Independent", "Gentle"],
    description:
      "Milo is a gentle giant who enjoys quiet moments and gentle pets. He would be perfect for someone looking for a calm companion.",
    image: "/placeholder.svg?height=300&width=300",
    available: true,
  },
  {
    id: "3",
    name: "Bella",
    age: 1,
    gender: "female",
    personality: ["Energetic", "Curious", "Friendly"],
    description:
      "Bella is a young kitten full of energy and curiosity. She loves to explore and would thrive in an active household.",
    image: "/placeholder.svg?height=300&width=300",
    available: true,
  },
  {
    id: "4",
    name: "Oliver",
    age: 3,
    gender: "male",
    personality: ["Loyal", "Protective", "Loving"],
    description:
      "Oliver is a loyal companion who forms strong bonds with his humans. He is protective yet gentle and very loving.",
    image: "/placeholder.svg?height=300&width=300",
    available: true,
  },
]
