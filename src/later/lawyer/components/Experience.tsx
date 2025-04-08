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

const Experience = () => {
  const isEdit = false;
  return (
    <Card className="mt-4">
      <CardContent className="p-6 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Professional Experience</h2>
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
                position: "Senior Advocate",
                organization: "Supreme Court of India",
                period: "2018 - Present",
              },
              {
                position: "Partner",
                organization: "Sharma & Associates",
                period: "2012 - 2018",
              },
              {
                position: "Associate",
                organization: "Luthra & Luthra Law Offices",
                period: "2008 - 2012",
              },
            ].map((exp, index) => (
              <div key={index} className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  className="p-2 border rounded-md"
                  defaultValue={exp.position}
                />
                <input
                  type="text"
                  className="p-2 border rounded-md"
                  defaultValue={exp.organization}
                />
                <input
                  type="text"
                  className="p-2 border rounded-md"
                  defaultValue={exp.period}
                />
              </div>
            ))}
            <Button size="sm" variant="outline" className="mt-2">
              + Add Experience
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-start">
              <Briefcase className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">Senior Advocate</h3>
                <p className="text-sm">Supreme Court of India</p>
                <p className="text-sm text-muted-foreground">2018 - Present</p>
              </div>
            </div>
            <div className="flex items-start">
              <Briefcase className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">Partner</h3>
                <p className="text-sm">Sharma & Associates</p>
                <p className="text-sm text-muted-foreground">2012 - 2018</p>
              </div>
            </div>
            <div className="flex items-start">
              <Briefcase className="h-5 w-5 mr-3 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold">Associate</h3>
                <p className="text-sm">Luthra & Luthra Law Offices</p>
                <p className="text-sm text-muted-foreground">2008 - 2012</p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Experience;
