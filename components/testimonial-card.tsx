import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  rating: number
}

export default function TestimonialCard({ quote, author, position, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all duration-300 dark:dark-card-glow">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500 dark:star-glow" : "text-muted"} ${
                i < rating ? "animate-[pulse_1s_ease-in-out_infinite]" : ""
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <blockquote className="text-lg italic mb-4">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="border-t pt-4 dark:border-border/50">
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{position}</div>
        </div>
      </CardFooter>
    </Card>
  )
}
