"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { LanguageProvider } from "@/contexts/language-context";
import type { BlogPost } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";

interface BlogPostClientProps {
  post: BlogPost;
}

function BlogPostContent({ post }: BlogPostClientProps) {
  const { t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("blog.back-to-home")}
            </Button>
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {t("blog.published")} {formatDate(post.publishedAt)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>
                {t("blog.by")} {post.author}
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
            {post.excerpt}
          </div>

          <div
            className="prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/\n/g, "<br>")
                .replace(/## /g, "<h2>")
                .replace(/# /g, "<h1>")
                .replace(
                  /<h2>/g,
                  '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">'
                )
                .replace(
                  /<h1>/g,
                  '<h1 class="text-3xl font-bold mt-8 mb-6 text-gray-900">'
                ),
            }}
          />
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t">
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("blog.back-to-home")}
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <LanguageProvider>
      <BlogPostContent post={post} />
    </LanguageProvider>
  );
}
