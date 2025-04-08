import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const CourtAppearanceCard = () => {
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Court Appearances</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3 text-primary" />
            <div>
              <p className="font-medium">Supreme Court of India</p>
              <p className="text-sm text-muted-foreground">Monday & Thursday</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3 text-primary" />
            <div>
              <p className="font-medium">Delhi High Court</p>
              <p className="text-sm text-muted-foreground">
                Tuesday & Wednesday
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3 text-primary" />
            <div>
              <p className="font-medium">District Courts</p>
              <p className="text-sm text-muted-foreground">Friday</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourtAppearanceCard;
