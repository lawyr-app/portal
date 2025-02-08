import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";
import AllDetails from "./components/AllDetails";
import Similar from "./components/Similar";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Star,
  MessageCircle,
  Share2,
  Phone,
  Clock,
  MapPin,
  GraduationCap,
  Award,
  ChevronRight,
} from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ lawyerId: string }>;
}) {
  const { lawyerId } = await params;

  return (
    <>
      <div className="min-h-screen ">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <AllDetails />

              <Reviews />
              <FAQs />
            </div>

            <div className="lg:w-1/4">
              <Similar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
