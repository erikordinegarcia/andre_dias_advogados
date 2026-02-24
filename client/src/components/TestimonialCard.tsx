import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  title: string;
  area: string;
  content: string;
  rating: number;
  image?: string;
}

export default function TestimonialCard({
  name,
  title,
  area,
  content,
  rating,
  image
}: TestimonialCardProps) {
  return (
    <Card className="p-8 h-full flex flex-col">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground/80 mb-6 flex-grow italic">
        "{content}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-bold text-foreground display-font">{name}</p>
          <p className="text-sm text-foreground/70">{title}</p>
          <p className="text-xs text-primary font-semibold">{area}</p>
        </div>
      </div>
    </Card>
  );
}
