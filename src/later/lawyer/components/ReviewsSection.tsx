import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";

const ReviewsSection = () => {
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Client Reviews</h2>
        <div className="space-y-4">
          {[
            {
              name: "Amit Patel",
              rating: 5,
              date: "15 Feb 2023",
              comment:
                "Advocate Sharma handled my property dispute case with exceptional professionalism. His knowledge of property laws in India is impressive, and he was able to secure a favorable outcome for me. Highly recommended!",
            },
            {
              name: "Priya Malhotra",
              rating: 5,
              date: "3 Jan 2023",
              comment:
                "I approached Advocate Sharma for a corporate compliance issue. His advice was clear, practical and helped us navigate a complex regulatory environment. He is responsive and genuinely cares about his clients.",
            },
            {
              name: "Rahul Singh",
              rating: 4,
              date: "27 Nov 2022",
              comment:
                "Excellent representation in my criminal appeal. Advocate Sharma's arguments were persuasive and well-researched. The case was resolved faster than I expected.",
            },
          ].map((review, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <p className="mt-2 text-sm">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="outline" className="mt-4 w-full">
          View All 127 Reviews
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;
