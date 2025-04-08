import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const LanguagesCard = () => {
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Languages</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Hindi</span>
            <span className="text-sm font-medium">Native</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full w-full"></div>
          </div>

          <div className="flex justify-between items-center">
            <span>English</span>
            <span className="text-sm font-medium">Fluent</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full w-[95%]"></div>
          </div>

          <div className="flex justify-between items-center">
            <span>Punjabi</span>
            <span className="text-sm font-medium">Conversational</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full w-[80%]"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguagesCard;
