import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { loadBlogPosts, type BlogPost} from '@/lib/utils';
import type { Language } from '@/lib/i18n';

const images = import.meta.glob('/src/assets/images/*', { eager: true, as: 'url' });

interface BlogProps {
  t: any;
  lang: Language;
}

export function Blog({ t, lang }: BlogProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'ca' ? 'ca-ES' : lang === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // load CMS data stored in .md files
  const blogPosts: BlogPost[] = loadBlogPosts();

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.blog.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts && blogPosts.map((post) => (
            <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.blog.publishedOn} {formatDate(post.publishedAt)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags && post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all"
                  onClick={() => {
                    window.location.href = `/blog/${post.slug}`;
                  }}
                >
                  {t.blog.readMore}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}