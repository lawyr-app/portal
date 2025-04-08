"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Award,
  Briefcase,
  BookOpen,
  Users,
  Edit,
  MessageCircle,
  Navigation,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const LawyerDetails = () => {
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-row">
            <div>
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt="Advocate Rajesh Sharma"
                />
                <AvatarFallback className="text-2xl">RS</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Advocate Rajesh Sharma
              </h1>
              <p className="text-muted-foreground mt-1">
                Senior Advocate, Supreme Court of India
              </p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">
                  4.9 (127 reviews)
                </span>
                <Badge variant="outline" className="ml-2">
                  10+ Years
                </Badge>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mb-4">
          <Button className="flex items-center gap-2 rounded-full">
            <FaWhatsapp />
            Chat on WhatsApp
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full"
          >
            <Navigation className="h-4 w-4" />
            View Location
          </Button>
        </div>
        <p>
          Advocate Rajesh Sharma is a distinguished legal professional with over
          15 years of experience in various domains of law. He specializes in
          Constitutional Law, Corporate Law, and Criminal Law. As a Senior
          Advocate at the Supreme Court of India, he has represented clients in
          numerous landmark cases that have shaped legal precedents in the
          country.
        </p>
        <p>
          His approach combines thorough legal knowledge with practical
          solutions, ensuring clients receive the best possible representation.
          Advocate Sharma is known for his meticulous preparation, persuasive
          arguments, and ethical practice.
        </p>
      </CardContent>
    </Card>
  );
};

export default LawyerDetails;
