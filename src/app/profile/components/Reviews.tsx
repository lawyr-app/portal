import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";

const Reviews = () => {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>
        <div className="space-y-6">
          {[
            {
              name: "Alex P.",
              rating: 5,
              comment:
                "Ms. Johnson's teaching methods are exceptional. She made complex math concepts easy to understand.",
            },
            {
              name: "Emma S.",
              rating: 5,
              comment:
                "Thanks to her guidance, I achieved an A* in my A-Level Physics. Highly recommended!",
            },
            {
              name: "Ryan M.",
              rating: 4,
              comment:
                "Very patient and knowledgeable. Great at explaining difficult topics in Chemistry.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="border-b pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center mb-2">
                <div className="font-medium mr-2">{review.name}</div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Reviews;
