import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const blogPosts = [
  {
    id: 1,
    title: "10 Digital Marketing Trends to Watch in 2023",
    excerpt:
      "Stay ahead of the curve with these emerging digital marketing trends that are set to dominate the industry in 2023.",
    category: "Digital Marketing",
    author: "Priya Sharma",
    date: "May 15, 2023",
    image: "/images/blog-content.jpg",
  },
  {
    id: 2,
    title: "How to Optimize Your Website for Better Conversion Rates",
    excerpt:
      "Learn proven strategies to improve your website's conversion rates and turn more visitors into customers.",
    category: "Web Development",
    author: "Rahul Verma",
    date: "April 28, 2023",
    image: "/images/web-development.jpg",
  },
  {
    id: 3,
    title: "The Ultimate Guide to SEO in 2023",
    excerpt:
      "Everything you need to know about search engine optimization to improve your website's visibility and rankings.",
    category: "SEO",
    author: "Amit Patel",
    date: "April 10, 2023",
    image: "/images/digital-marketing.jpg",
  },
  {
    id: 4,
    title: "Building a Strong Brand Identity: Tips and Strategies",
    excerpt:
      "Discover how to create a compelling brand identity that resonates with your target audience and sets you apart from competitors.",
    category: "Branding",
    author: "Neha Singh",
    date: "March 22, 2023",
    image: "/images/branding-design.jpg",
  },
  {
    id: 5,
    title: "The Power of Social Media Marketing for Small Businesses",
    excerpt:
      "How small businesses can leverage social media platforms to reach their target audience and drive growth.",
    category: "Digital Marketing",
    author: "Vikram Joshi",
    date: "March 15, 2023",
    image: "/images/digital-marketing.jpg",
  },
  {
    id: 6,
    title: "Mobile App Development: Native vs. Cross-Platform",
    excerpt:
      "A comprehensive comparison of native and cross-platform mobile app development approaches to help you make the right choice.",
    category: "App Development",
    author: "Sanjay Kumar",
    date: "February 28, 2023",
    image: "/images/web-development.jpg",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and industry news to help you navigate the digital landscape.
            </p>
            <div className="flex max-w-md mx-auto">
              <Input placeholder="Search articles..." className="rounded-r-none" />
              <Button className="rounded-l-none">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 h-auto">
              <TabsTrigger value="all" className="py-2">
                All
              </TabsTrigger>
              <TabsTrigger value="digital-marketing" className="py-2">
                Digital Marketing
              </TabsTrigger>
              <TabsTrigger value="web-development" className="py-2">
                Web Development
              </TabsTrigger>
              <TabsTrigger value="seo" className="py-2">
                SEO
              </TabsTrigger>
              <TabsTrigger value="branding" className="py-2">
                Branding
              </TabsTrigger>
              <TabsTrigger value="app-development" className="py-2">
                App Development
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digital-marketing" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Digital Marketing")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="web-development" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Web Development")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="seo" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "SEO")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="branding" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Branding")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="app-development" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "App Development")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest industry insights, tips, and news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <Input placeholder="Enter your email" className="sm:rounded-r-none" />
              <Button className="sm:rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  image: string
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-t-lg" />
        <div className="absolute top-2 left-2">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{post.title}</h3>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto" asChild>
          <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:underline">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
