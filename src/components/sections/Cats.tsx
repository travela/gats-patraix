import { Calendar, User, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { loadCats, resolveImagePath } from '@/lib/utils';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface CatItem {
  id: string;
  name: string;
  age: string;
  gender: 'male' | 'female';
  personality: string[];
  description: string;
  image: string;
  publishedAt?: string;
  isSpecialNeeds?: boolean;
  link?: string;
}

interface CatsProps {
  t: any;
  cats?: CatItem[];
}


function Cats({ t, cats }: CatsProps) {
  // If cats not provided via props, load from content at build/server time
  const catsData: CatItem[] = loadCats();
  return (
    <section id="cats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.cats.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.cats.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {catsData.map((cat) => (
            <Card key={cat.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={resolveImagePath(cat.image)}
                  alt={cat.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {cat.isSpecialNeeds && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
                    Special Needs
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.cats.age}: {cat.age}
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <User className="w-4 h-4 mr-2" />
                  {t.cats.gender}: {cat.gender === 'male' ? 'Male' : 'Female'}
                </div>
                
                <div className="mb-3">
                  <div className="text-sm font-medium text-gray-700 mb-1">{t.cats.personality}:</div>
                  <div className="flex flex-wrap gap-1">
                    {cat.personality.map((trait, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-3">
                  {cat.description}
                </p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      {t.cats.adoptBtn}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{cat.name}</DialogTitle>
                      <DialogDescription className="mt-2 whitespace-pre-wrap text-sm text-gray-700">
                        {cat.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                      <div>{t.cats.age}: {cat.age}</div>
                      <div>{t.cats.gender}: {cat.gender === 'male' ? 'Male' : 'Female'}</div>
                    </div>
                    <div className="mt-4">
                      <a href={cat.link ?? 'https://www.instagram.com/gats_patraix/'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-orange-500 hover:underline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.contact.instagram ?? 'Instagram'}
                      </a>
                    </div>
                                        {cat.publishedAt && (
                      <div className="mt-2 text-sm text-gray-500">
                        {`Published on ${format(new Date(cat.publishedAt), 'PPP')}`}
                      </div>
                    )}
                    <DialogFooter className="mt-6">
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cats;
export { Cats };