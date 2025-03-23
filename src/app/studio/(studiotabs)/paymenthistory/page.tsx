import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const paymentHistory = [
  { date: "2023-11-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-10-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-09-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-08-01", amount: 9.99, plan: "Basic", status: "Paid" },
  { date: "2023-07-01", amount: 9.99, plan: "Basic", status: "Paid" },
];

const PaymentHistory = () => {
  return (
    <div>
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
    </div>
  );
};

export default PaymentHistory;
