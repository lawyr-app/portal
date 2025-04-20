import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Filter, Zap, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BillingPaymentHistory() {
  // This would come from your payment history data
  const payments = [
    {
      id: "TKN-001",
      date: "Apr 15, 2025",
      amount: "$49.99",
      tokens: 50000,
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "TKN-002",
      date: "Mar 22, 2025",
      amount: "$29.99",
      tokens: 25000,
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "TKN-003",
      date: "Feb 12, 2025",
      amount: "$14.99",
      tokens: 10000,
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "TKN-004",
      date: "Jan 05, 2025",
      amount: "$89.99",
      tokens: 100000,
      status: "completed",
      paymentMethod: "PayPal",
    },
    {
      id: "TKN-005",
      date: "Dec 10, 2024",
      amount: "$29.99",
      tokens: 25000,
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "TKN-006",
      date: "Nov 18, 2024",
      amount: "$14.99",
      tokens: 10000,
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold"></h2>
        <div className="flex space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Purchases</DropdownMenuItem>
              <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
              <DropdownMenuItem>Last 6 Months</DropdownMenuItem>
              <DropdownMenuItem>Last Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Token Purchase History</CardTitle>
          <CardDescription>
            View and download your past token purchases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Tokens</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell className="flex items-center">
                    <Zap className="h-4 w-4 mr-1 text-amber-500" />
                    {payment.tokens.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{payment.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
