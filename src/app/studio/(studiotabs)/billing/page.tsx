import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TokenUsage } from "../components/TokenUsage";

const tokenPlans = [
  { name: "Basic", tokens: 100000, price: 9.99 },
  { name: "Pro", tokens: 500000, price: 49.99 },
  { name: "Enterprise", tokens: 2000000, price: 199.99 },
];

const paymentHistory = [
  { date: "2023-11-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-10-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-09-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-08-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-07-01", amount: 9.99, plan: "Basic", status: "Paid" },
];

const currentPlan = "Basic";

const StudioBillingTab = () => {
  return (
    <div className="space-y-6">
      <TokenUsage used={75000} total={100000} currentPlan={currentPlan} />

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">
            Available Plans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {tokenPlans.map((plan) => (
              <Card
                key={plan.name}
                className={plan.name === currentPlan ? "border-primary" : ""}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${plan.price}/month</p>
                  <p className="text-sm text-muted-foreground">
                    {plan.tokens.toLocaleString()} tokens
                  </p>
                  {plan.name !== currentPlan && (
                    <Button className="mt-4 w-full">Upgrade</Button>
                  )}
                  {plan.name === currentPlan && (
                    <p className="mt-4 text-sm font-medium text-center text-primary">
                      Current Plan
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/info/pricing"
              className="text-sm text-primary hover:underline"
            >
              View full pricing details
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">
            Payment History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
                  <TableCell>{payment.plan}</TableCell>
                  <TableCell>{payment.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudioBillingTab;
