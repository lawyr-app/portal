"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from "recharts";

const UsageLineChart = () => {
  const recentServiceUsage = [
    { date: "Apr 01", chatbot: 250, drafting: 120, search: 100, judgement: 50 },
    { date: "Apr 05", chatbot: 300, drafting: 150, search: 120, judgement: 80 },
    { date: "Apr 10", chatbot: 220, drafting: 100, search: 110, judgement: 50 },
    { date: "Apr 15", chatbot: 280, drafting: 130, search: 90, judgement: 80 },
    { date: "Apr 20", chatbot: 350, drafting: 170, search: 130, judgement: 70 },
    { date: "Apr 25", chatbot: 380, drafting: 200, search: 150, judgement: 70 },
    { date: "Apr 30", chatbot: 300, drafting: 150, search: 120, judgement: 80 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          Usage by Service (Last 30 Days)
        </CardTitle>
        <CardDescription>Token usage breakdown by service</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={recentServiceUsage}
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
              <Legend />
              <Line
                type="monotone"
                dataKey="chatbot"
                name="AI Lawyer Chatbot"
                stroke="#3b82f6"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="drafting"
                name="Document Drafting"
                stroke="#10b981"
              />
              <Line
                type="monotone"
                dataKey="search"
                name="Law Search"
                stroke="#f59e0b"
              />
              <Line
                type="monotone"
                dataKey="judgement"
                name="Judgement Analyses"
                stroke="#8b5cf6"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageLineChart;
