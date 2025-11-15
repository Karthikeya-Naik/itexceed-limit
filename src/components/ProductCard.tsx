import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  specs?: string[];
  featured?: boolean;
}

const ProductCard = ({ name, category, description, specs, featured }: ProductCardProps) => {
  return (
    <Card className={`h-full hover:shadow-lg transition-all duration-300 ${featured ? 'border-primary shadow-md' : 'border-border'}`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant={featured ? "default" : "secondary"}>{category}</Badge>
          {featured && <Badge variant="destructive">Popular</Badge>}
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-base pt-2">{description}</CardDescription>
      </CardHeader>
      {specs && specs.length > 0 && (
        <CardContent>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-foreground mb-3">Key Specifications:</h4>
            <ul className="space-y-2">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <span className="text-primary mr-2">•</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
      <CardFooter className="flex gap-2">
        <Button className="flex-1">Request Quote</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;