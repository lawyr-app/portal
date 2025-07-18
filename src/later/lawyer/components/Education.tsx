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

const Education = () => {
  const isEdit = false;
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => {}}
          >
            <Edit className="h-4 w-4" />
            {isEdit ? "Save" : "Edit"}
          </Button>
        </div>

        {isEdit ? (
          <div className="space-y-3">
            {[
              {
                degree: "LL.M. in Constitutional Law",
                institution:
                  "National Law School of India University, Bangalore",
                year: "2007",
              },
              {
                degree: "LL.B.",
                institution: "Faculty of Law, Delhi University",
                year: "2005",
              },
              {
                degree: "B.Com (Hons)",
                institution: "Shri Ram College of Commerce, Delhi University",
                year: "2002",
              },
            ].map((edu, index) => (
              <div key={index} className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  className="p-2 border rounded-md"
                  defaultValue={edu.degree}
                />
                <input
                  type="text"
                  className="p-2 border rounded-md"
                  defaultValue={edu.institution}
                />
                <input
                  type="text"
                  className="p-2 border rounded-md"
                  defaultValue={edu.year}
                />
              </div>
            ))}
            <Button size="sm" variant="outline" className="mt-2">
              + Add Education
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-start">
              <Award className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">LL.M. in Constitutional Law</h3>
                <p className="text-sm text-muted-foreground">
                  National Law School of India University, Bangalore (2007)
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">LL.B.</h3>
                <p className="text-sm text-muted-foreground">
                  Faculty of Law, Delhi University (2005)
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">B.Com (Hons)</h3>
                <p className="text-sm text-muted-foreground">
                  Shri Ram College of Commerce, Delhi University (2002)
                </p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Education;
