import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  image: string;
  email?: string;
  phone?: string;
}

export default function TeamMemberCard({
  name,
  title,
  specialties,
  bio,
  image,
  email,
  phone
}: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground display-font mb-1">
            {name}
          </h3>
          <p className="text-sm font-semibold text-primary">
            {title}
          </p>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
            Especialidades
          </p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-foreground/70 mb-6 flex-grow">
          {bio}
        </p>

        {/* Contact */}
        <div className="flex gap-3 pt-4 border-t border-border">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition rounded-lg text-sm font-semibold"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Ligar
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
