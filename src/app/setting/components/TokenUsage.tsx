import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins } from "lucide-react";

interface TokenUsageProps {
  used: number;
  total: number;
  currentPlan: string;
}

export function TokenUsage({ used, total, currentPlan }: TokenUsageProps) {
  const percentage = (used / total) * 100;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-semibold">Token Usage</CardTitle>
        <Coins className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <div className="text-2xl font-bold">
            {used.toLocaleString()} / {total.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            Current Plan: {currentPlan}
          </div>
        </div>
        <Progress value={percentage} className="mt-2" />
        <p className="text-xs text-muted-foreground mt-2">
          {percentage.toFixed(1)}% of your token limit used
        </p>
      </CardContent>
    </Card>
  );
}
