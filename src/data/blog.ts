export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  tags: string[];
  slug: string;
}

// Mock data that would come from Decap CMS
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Tips for First-Time Cat Owners',
    excerpt: 'Essential advice for welcoming your new feline friend into your home and ensuring a smooth transition.',
    content: `# Tips for First-Time Cat Owners

Welcoming a cat into your home is an exciting experience! Here are some essential tips to help you and your new feline friend get off to the best start possible.

## Preparing Your Home

Before bringing your cat home, make sure you have all the essentials:
- Litter box and high-quality litter
- Food and water bowls
- Cat food appropriate for your cat's age
- Scratching post
- Cat bed
- Toys for mental stimulation

## The First Few Days

Your new cat may be nervous in their new environment. Give them time to adjust by:
- Setting up a quiet "safe room" where they can decompress
- Letting them explore at their own pace
- Maintaining a consistent routine
- Being patient with the bonding process

## Building Trust

Trust is built through consistent, gentle interactions:
- Speak softly and move slowly
- Let your cat approach you first
- Offer treats and gentle pets when they're receptive
- Respect their boundaries

Remember, every cat is unique and will adjust at their own pace. With patience and love, you'll build a wonderful relationship with your new companion!`,
    author: 'Maria Garcia',
    publishedAt: '2024-01-15',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['adoption', 'tips', 'first-time'],
    slug: 'tips-for-first-time-cat-owners'
  },
  {
    id: '2',
    title: 'Luna\'s Rescue Story: From Street to Home',
    excerpt: 'Follow Luna\'s incredible journey from being a scared street cat to finding her forever family.',
    content: `# Luna's Rescue Story: From Street to Home

Luna's story is one of transformation, resilience, and the power of love. When we first found her, she was a frightened street cat living in harsh conditions.

## The Rescue

Luna was discovered in an abandoned building, malnourished and scared of humans. Our rescue team worked patiently to gain her trust, providing food and gentle care from a distance.

## Recovery

At our shelter, Luna received:
- Medical treatment for minor injuries
- Nutritious food to help her gain healthy weight
- Socialization with our volunteers
- Lots of love and patience

## Finding Home

After three months of care, Luna was ready for adoption. The Martinez family fell in love with her gentle nature and provided the perfect home.

## Today

Luna is now living her best life, bringing joy to her family and serving as a reminder of why our work matters. Every cat deserves a second chance at happiness.`,
    author: 'Carlos Rodriguez',
    publishedAt: '2024-01-10',
    image: 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['rescue-story', 'success-story'],
    slug: 'lunas-rescue-story'
  },
  {
    id: '3',
    title: 'The Importance of Spaying and Neutering',
    excerpt: 'Learn why spaying and neutering your pets is crucial for their health and community welfare.',
    content: `# The Importance of Spaying and Neutering

Spaying and neutering are among the most important decisions you can make for your pet's health and the welfare of the broader cat community.

## Health Benefits

For female cats (spaying):
- Eliminates risk of ovarian and uterine cancers
- Reduces risk of mammary tumors
- Prevents potentially life-threatening uterine infections

For male cats (neutering):
- Eliminates risk of testicular cancer
- Reduces risk of prostate problems
- Decreases aggressive behaviors

## Community Impact

Spaying and neutering help control pet overpopulation:
- Prevents unwanted litters
- Reduces the number of cats in shelters
- Helps control feral cat populations

## When to Spay or Neuter

Most cats can be safely spayed or neutered:
- As early as 8 weeks old
- Before their first heat cycle (for females)
- Before territorial behaviors develop (for males)

## Our Low-Cost Program

Valencia Cat Association offers affordable spay/neuter services to make this essential care accessible to all pet owners. Contact us to learn more about our programs.`,
    author: 'Dr. Ana Fernandez',
    publishedAt: '2024-01-05',
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['health', 'education', 'spay-neuter'],
    slug: 'importance-of-spaying-and-neutering'
  }
];