import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  weight: string;
  price: string;
  image: string;
  ingredients: string;
}

const ProductCard = ({ name, description, weight, price, image, ingredients }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Show a fallback message if image fails to load
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent && !parent.querySelector('.fallback-text')) {
              const fallback = document.createElement('div');
              fallback.className = 'fallback-text flex items-center justify-center h-full bg-muted text-muted-foreground';
              fallback.textContent = 'उत्पादनाचे चित्र';
              parent.appendChild(fallback);
            }
          }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">वजन:</span>
            <span className="text-sm text-muted-foreground">{weight}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">किंमत:</span>
            <span className="text-lg font-bold text-primary">{price}</span>
          </div>
        </div>
        
        <div className="border-t border-border pt-3">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">साहित्य:</span> {ingredients}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;