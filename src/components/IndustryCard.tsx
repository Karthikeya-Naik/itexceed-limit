import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  solutions: string[];
}

const IndustryCard = ({ icon: Icon, title, description, solutions }: IndustryCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border group hover:border-primary/50">
      <CardHeader>
        <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-foreground">Our Solutions:</h4>
          <ul className="space-y-2">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <span className="text-primary mr-2 font-bold">✓</span>
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndustryCard;
