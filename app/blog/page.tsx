"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"
import { blogData } from "@/data/blog-data"
import Image from "next/image"
import Link from "next/link"

function BlogListingContent() {
  const { t } = useLanguage()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("blog.back-to-home")}
            </Button>
          </Link>
          <h1 className="text-xl font-bold">{t("blog.title")}</h1>
          <div></div>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group bg-white">
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/blog/${post.slug}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-orange-50 group-hover:border-orange-200 bg-transparent"
                  >
                    {t("blog.read-more")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default function BlogListingPage() {
  return (
    <LanguageProvider>
      <BlogListingContent />
    </LanguageProvider>
  )
}
