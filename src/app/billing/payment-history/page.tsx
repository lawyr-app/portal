"use client";

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
import { CircleArrowOutUpRight, Download, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { formatDate } from "@/lib/datetime";
import { PAYMENT_STATUS, ValueOf } from "@/types/common";

export default function BillingPaymentHistory() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data: response } = await axiosInstance.get(`payment/payments`);
      if (!response.isError && response?.data) {
        setData(response.data);
      } else {
        setData([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(`Something went wrong in fetchData: ${error}`);
      setData([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getVariant = (status: ValueOf<typeof PAYMENT_STATUS>) => {
    if (status === PAYMENT_STATUS.SUCCESS) {
      return "secondary";
    }
    if (
      status === PAYMENT_STATUS.FAILED ||
      status === PAYMENT_STATUS.EXPIRED ||
      status === PAYMENT_STATUS.CANCELLED
    ) {
      return "destructive";
    }
    return "default";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Payment History</h2>
        <div className="flex space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" disabled={isLoading}>
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
          {/* <Button variant="outline" size="sm" disabled={isLoading}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button> */}
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
                {/* <TableHead className="text-right">View</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((payment) => (
                <TableRow key={payment._id || payment.id}>
                  <TableCell className="font-medium">{payment._id}</TableCell>
                  <TableCell>{formatDate(payment.createdAt)}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{payment.tokens.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={getVariant(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  {/* <TableCell className="text-right">
                    <Button variant="ghost" size="sm" disabled={isLoading}>
                      <p>View</p>
                      <CircleArrowOutUpRight style={{ height: 12 }} />
                    </Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
