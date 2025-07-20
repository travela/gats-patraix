// This simulates data that would come from Decap CMS
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  image: string
  tags: string[]
  featured: boolean
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "luna-rescue-story",
    title: "Luna's Amazing Rescue Story",
    excerpt:
      "How we found Luna abandoned in a cardboard box and nursed her back to health. A heartwarming tale of resilience and love.",
    content: `
# Luna's Amazing Rescue Story

It was a cold December morning when we received a call about a cardboard box left near the park entrance. What we found inside broke our hearts but also filled us with determination.

## The Discovery

Luna was barely 6 weeks old, severely malnourished, and suffering from a respiratory infection. She was so weak she could barely lift her head. Our veterinary team immediately sprang into action.

## The Recovery

For the first two weeks, Luna required round-the-clock care. Our volunteers took turns feeding her every two hours and administering medication. Slowly but surely, she began to show signs of improvement.

## Finding Her Forever Home

After three months of rehabilitation, Luna was ready for adoption. The Martinez family fell in love with her gentle nature and playful spirit. Today, Luna is a healthy, happy cat who loves to chase laser pointers and cuddle with her new family.

## How You Can Help

Stories like Luna's are possible because of generous donors and dedicated volunteers. Consider adopting, volunteering, or making a donation to help us save more lives.
    `,
    author: "Maria Rodriguez",
    publishedAt: "2024-01-15",
    image: "/placeholder.svg?height=400&width=600&text=Luna+the+rescued+cat",
    tags: ["rescue", "success-story", "kitten"],
    featured: true,
  },
  {
    id: "2",
    slug: "winter-care-tips",
    title: "Winter Care Tips for Outdoor Cats",
    excerpt: "Essential advice for keeping stray and outdoor cats safe during the cold winter months.",
    content: `
# Winter Care Tips for Outdoor Cats

Winter can be particularly harsh for cats living outdoors. Here are essential tips to help keep them safe and warm during the cold months.

## Providing Shelter

Create or provide insulated shelters that are:
- Small enough to retain body heat
- Raised off the ground
- Waterproof with proper drainage
- Filled with straw (not blankets that can freeze)

## Food and Water

- Increase food portions as cats need more calories to stay warm
- Use heated water bowls to prevent freezing
- Check food and water sources daily
- Provide high-quality, high-fat content food

## Health Monitoring

Watch for signs of:
- Frostbite on ears, paws, and tail tips
- Hypothermia (lethargy, shivering, weakness)
- Respiratory issues from cold air

## Community Support

Work with neighbors to:
- Share responsibility for feeding stations
- Monitor cat colonies together
- Coordinate veterinary care when needed

Remember, even small actions can make a big difference in an outdoor cat's survival during winter.
    `,
    author: "Dr. Carmen Vega",
    publishedAt: "2024-01-10",
    image: "/placeholder.svg?height=400&width=600&text=Cat+in+winter+shelter",
    tags: ["care-tips", "winter", "outdoor-cats"],
    featured: true,
  },
  {
    id: "3",
    slug: "adoption-success-milo",
    title: "Milo Finds His Perfect Match",
    excerpt:
      "After 8 months in our shelter, senior cat Milo finally found the perfect family who appreciates his calm and loving nature.",
    content: `
# Milo Finds His Perfect Match

Senior cats often wait longer for adoption, but Milo's story proves that patience pays off when finding the right match.

## The Wait

Milo, an 8-year-old tabby, spent 8 months at our shelter. Despite his gentle nature and perfect litter box habits, potential adopters often overlooked him for younger cats.

## The Perfect Family

The Johnson family was specifically looking for a calm, older cat to be a companion for their elderly mother. When they met Milo, it was love at first sight.

## Life in His New Home

Milo now spends his days sunbathing by the window and providing comfort to his new human grandmother. He's become her constant companion and source of joy.

## Why Senior Cats Make Great Pets

- Already trained and well-behaved
- Calmer and less destructive
- Grateful for a second chance
- Perfect for quieter households
- Often overlooked but incredibly loving

Consider giving a senior cat like Milo a chance - you might be surprised by how much love they have to give.
    `,
    author: "Ana Martinez",
    publishedAt: "2024-01-05",
    image: "/placeholder.svg?height=400&width=600&text=Senior+cat+Milo",
    tags: ["adoption", "senior-cats", "success-story"],
    featured: false,
  },
]

// Function to get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((post) => post.slug === slug)
}

// Function to get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  return blogData.filter((post) => post.featured).slice(0, 3)
}
