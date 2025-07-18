import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const ServiceUsageDetails = () => {
  const tokenData = {
    balance: 32450,
    totalPurchased: 125000,
    totalUsed: 92550,
    services: [
      {
        name: "AI Lawyer Chatbot",
        used: 41648,
        percentage: 45,
        color: "#3b82f6",
      },
      {
        name: "Document Drafting",
        used: 23137,
        percentage: 25,
        color: "#10b981",
      },
      {
        name: "Law Search Engine",
        used: 18510,
        percentage: 20,
        color: "#f59e0b",
      },
      {
        name: "AI Judgement Analyses",
        used: 9255,
        percentage: 10,
        color: "#8b5cf6",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Service Usage Details</h2>
      <div className="grid gap-6">
        {tokenData.services.map((service) => (
          <Card key={service.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{service.name}</CardTitle>
              <CardDescription>
                {service.used.toLocaleString()} tokens ({service.percentage}% of
                total usage)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${service.percentage}%`,
                    backgroundColor: service.color,
                  }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceUsageDetails;
