"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BillingUsageDetails() {
  const list = [
    {
      id: 1,
      type: "CHAT",
      input: 100,
      output: 100,
      title: "lorem ipsum",
    },
    {
      id: 2,
      type: "CHAT",
      input: 100,
      output: 100,
      title: "lorem ipsum",
    },
    {
      id: 3,
      type: "CHAT",
      input: 100,
      output: 100,
      title: "lorem ipsum",
    },
    {
      id: 4,
      type: "CHAT",
      input: 100,
      output: 100,
      title: "lorem ipsum",
    },
    {
      id: 5,
      type: "CHAT",
      input: 100,
      output: 100,
      title: "lorem ipsum",
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg">Token Usage</CardTitle>
              <CardDescription>Tokens used for each service</CardDescription>
            </div>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-sm text-muted-foreground cursor-help">
                    <Info className="h-4 w-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>
                    Input tokens are used when you send data to the AI. Output
                    tokens are used when the AI responds.
                  </p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead className="text-right">Input</TableHead>
                <TableHead className="text-right">Output</TableHead>
                <TableHead className="text-right">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p>{item.title}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {item.input} tokens
                  </TableCell>
                  <TableCell className="text-right">
                    {item.output} tokens
                  </TableCell>
                  <TableCell className="text-right">{item.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
