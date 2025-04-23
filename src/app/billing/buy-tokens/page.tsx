"use client";

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
import { PRICINGS, PLAN_TYPE } from "@/constant/pricing";
import { useState } from "react";
import { toast } from "sonner";
import { ValueOf } from "@/types/common";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";

const BuyTokens = () => {
  const router = useRouter();
  const [isInitiating, setIsInitiating] = useState(false);

  const handleInitiate = async ({
    type,
  }: {
    type: ValueOf<typeof PLAN_TYPE>;
  }) => {
    try {
      setIsInitiating(true);
      const { data } = await axiosInstance.post("payment/initiate", {
        type,
      });
      console.log("data", data);
      const shortUrl = data?.data?.short_url;
      if (!data.isError && shortUrl) {
        router.replace(shortUrl);
        toast.success("Payment link generated", {
          description: "Please complete the payment",
        });
      } else {
        toast.error("Failed to generate the payment. Please try again");
      }
      setIsInitiating(false);
    } catch (error) {
      setIsInitiating(false);
      console.error("Something went wrong ");
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Token Packages</h2>
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-700 border-amber-200"
          >
            Never Expire
          </Badge>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {PRICINGS.filter((f) => f.price !== 0).map((pkg) => (
            <Card
              key={pkg.token}
              className={`relative ${pkg.popular ? "border-primary" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <Badge className="bg-primary text-primary-foreground">
                    Best Value
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-center">
                  <Zap className="h-5 w-5 mr-2 text-amber-500" />
                  {pkg.token.toLocaleString()}
                </CardTitle>
                <CardDescription className="text-center">
                  tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-2">
                <p className="text-2xl font-bold">&#8377;{pkg.price}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  {((Number(pkg.price) / pkg.token) * 1000).toFixed(2)} &#8377;
                  per 1000 tokens
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  disabled={isInitiating}
                  className="w-full"
                  onClick={() => {
                    handleInitiate({ type: pkg.type });
                  }}
                >
                  Purchase
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <HowTokensWork />
    </div>
  );
};

const HowTokensWork = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">How Tokens Work</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="flex items-start">
              <div className="bg-slate-100 p-2 rounded-full mr-4">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Buy Once, Use Anytime</h3>
                <p className="text-sm text-muted-foreground">
                  Tokens never expire. Purchase them once and use them whenever
                  you need them.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-slate-100 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">Secure and Flexible</h3>
                <p className="text-sm text-muted-foreground">
                  Use your tokens across all our AI legal services based on your
                  specific needs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-slate-100 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="m4.93 4.93 2.83 2.83" />
                  <path d="m16.24 16.24 2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="m4.93 19.07 2.83-2.83" />
                  <path d="m16.24 7.76 2.83-2.83" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Know exactly what you're paying for. No subscriptions or
                  hidden fees.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyTokens;
