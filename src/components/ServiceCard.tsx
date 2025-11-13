import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, link }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border group">
      <CardHeader>
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-muted-foreground">
              <span className="text-primary mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
        {link && (
          <Button variant="outline" asChild className="w-full">
            <Link to={link}>Learn More</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
