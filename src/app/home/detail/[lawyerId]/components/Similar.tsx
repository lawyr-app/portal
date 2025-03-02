import React from "react";
import { Star, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Similar = () => {
  return (
    <Card className="shadow-xl sticky top-4">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Similar Teachers</h2>
        <div className="space-y-4">
          {[
            {
              name: "Dr. Emily Chen",
              subject: "Physics",
              rating: 4.9,
            },
            {
              name: "Mr. David Brown",
              subject: "Chemistry",
              rating: 4.8,
            },
            {
              name: "Ms. Laura Taylor",
              subject: "Biology",
              rating: 4.7,
            },
          ].map((teacher, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{teacher.name}</div>
                <div className="text-sm text-muted-foreground">
                  {teacher.subject}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm">{teacher.rating}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Similar;
