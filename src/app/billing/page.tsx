import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";
import UsageSummary from "./components/UsageSummary";
import UsageBarChart from "./components/UsageBarChart";
import ServiceUsageDetails from "./components/ServiceUsageDetails";

export default function BillingGeneral() {
  return (
    <div className="space-y-8">
      <UsageSummary />
      {/* <UsageBarChart /> */}
      {/* <ServiceUsageDetails /> */}
    </div>
  );
}
