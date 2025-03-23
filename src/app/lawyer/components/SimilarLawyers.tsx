import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Star } from "lucide-react";

const lawyers = [
  {
    name: "Adv. Priya Mehta",
    specialization: "Corporate Law",
    experience: "12 years",
    rating: 4.8,
    reviews: 98,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Adv. Vikram Singh",
    specialization: "Constitutional Law",
    experience: "18 years",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Adv. Ananya Desai",
    specialization: "Criminal Law",
    experience: "9 years",
    rating: 4.6,
    reviews: 72,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Adv. Suresh Kumar",
    specialization: "Family Law",
    experience: "14 years",
    rating: 4.5,
    reviews: 113,
    image: "/placeholder.svg?height=60&width=60",
  },
];

const SimilarLawyers = () => {
  return (
    <Card className="mt-4">
      <CardContent className="p-4 ">
        <h2 className="text-xl font-bold mb-4">Similar Lawyers</h2>
        <div className="space-y-4">
          {lawyers.map((lawyer, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={lawyer.image} alt={lawyer.name} />
                    <AvatarFallback>{lawyer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{lawyer.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {lawyer.specialization} • {lawyer.experience}
                    </p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">
                        {lawyer.rating} ({lawyer.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View More Lawyers
        </Button>
      </CardContent>
    </Card>
  );
};

export default SimilarLawyers;
