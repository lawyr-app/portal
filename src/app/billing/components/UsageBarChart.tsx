"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UsageBarChart = () => {
  const historicalData = [
    { date: "2024-11", tokens: 8500 },
    { date: "2024-12", tokens: 10200 },
    { date: "2025-01", tokens: 12500 },
    { date: "2025-02", tokens: 14200 },
    { date: "2025-03", tokens: 15800 },
    { date: "2025-04", tokens: 17550 },
  ];

  const recentData = [
    { date: "Apr 01", tokens: 520 },
    { date: "Apr 05", tokens: 650 },
    { date: "Apr 10", tokens: 480 },
    { date: "Apr 15", tokens: 580 },
    { date: "Apr 20", tokens: 720 },
    { date: "Apr 25", tokens: 800 },
    { date: "Apr 30", tokens: 650 },
  ];

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Usage History</h2>
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="recent">Last 30 Days</TabsTrigger>
            <TabsTrigger value="historical">All Time</TabsTrigger>
          </TabsList>

          <TabsContent value="recent">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Token Usage</CardTitle>
                  <CardDescription>
                    Token consumption over the last 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={recentData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [
                            `${value.toLocaleString()} tokens`,
                            "Usage",
                          ]}
                        />
                        <Bar
                          dataKey="tokens"
                          name="Token Usage"
                          fill="#f59e0b"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="historical">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Historical Token Usage
                </CardTitle>
                <CardDescription>
                  Token consumption since account creation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={historicalData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [
                          `${value.toLocaleString()} tokens`,
                          "Usage",
                        ]}
                      />
                      <Bar dataKey="tokens" name="Token Usage" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default UsageBarChart;
