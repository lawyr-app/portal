import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AreasOfPractice = () => {
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Areas of Practice</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Constitutional Law</Badge>
          <Badge variant="secondary">Corporate Law</Badge>
          <Badge variant="secondary">Criminal Law</Badge>
          <Badge variant="secondary">Family Law</Badge>
          <Badge variant="secondary">Property Law</Badge>
          <Badge variant="secondary">Intellectual Property</Badge>
          <Badge variant="secondary">Tax Law</Badge>
          <Badge variant="secondary">Civil Litigation</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default AreasOfPractice;
