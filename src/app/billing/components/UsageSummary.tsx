import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Zap, Info } from "lucide-react";

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

const UsageSummary = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <Zap className="h-4 w-4 mr-2 text-amber-500" />
              Available Tokens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {tokenData.balance.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">Never expire</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Purchased</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {tokenData.totalPurchased.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {tokenData.totalUsed.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground">
              {((tokenData.totalUsed / tokenData.totalPurchased) * 100).toFixed(
                1
              )}
              % of purchased
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsageSummary;
