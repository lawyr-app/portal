import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const ContactCard = () => {
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-3 text-primary" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-3 text-primary" />
            <span>advocate.sharma@legalfirm.com</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
            <span>Chamber 503, Supreme Court Complex, New Delhi - 110001</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 text-primary" />
            <div>
              <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
