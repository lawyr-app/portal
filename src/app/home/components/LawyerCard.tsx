"use client";

import PopoverButton from "@/components/PopoverButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { UserGender } from "@/constant/user";
import { useTheme } from "@/context/themeContext";
import { MapPin, MessageSquare, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const userDetails = {
  name: "Siddhesh Dabholkar",
  profileImage: "https://assets.aceternity.com/templates/startup-1.webp",
  gender: 3,
  bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        aspernatur veniam sunt vel distinctio natus debitis quas et aliquid
        explicabo quam, itaque odio ipsum ea fuga dolores ab quaerat
        reiciendis.`,
  expertise: ["criminal", "civil", "personal"],
};

const lawyerCard = () => {
  return (
    <Link href="/home/detail/uiwwoe">
      <Card className="w-full sm:w-[300px] p-3 relative">
        <div
          className="relative w-full rounded-lg overflow-hidden mb-2"
          style={{ height: 200 }}
        >
          <Image
            alt="usercard"
            style={{ zIndex: 1 }}
            fill
            src="https://assets.aceternity.com/templates/startup-1.webp"
          />
        </div>
        <div>
          <div className="flex flex-row">
            <div className="w-10/12">
              <h6 className="font-extrabold">{userDetails.name}</h6>
            </div>
            <div className="flex flex-row gap-2 justify-end w-2/10">
              <PopoverButton text="Share">
                <Button size="icon" className="h-7 w-7">
                  <Share2 className="h-4 w-4" />
                </Button>
              </PopoverButton>

              <PopoverButton text="Message">
                <Button size="icon" className="h-7 w-7">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </PopoverButton>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center text-[12px]">
            <MapPin className="h-3 w-3" />
            <span>Haden tadsen</span>
          </div>
          <div className="flex flex-row gap-2 my-2">
            {userDetails.expertise.map((m) => (
              <Badge key={m} variant="secondary">
                {m}
              </Badge>
            ))}
          </div>

          <p className="text-[13px] mb-2">{userDetails.bio}</p>
        </div>
      </Card>
    </Link>
  );
};

const GenderIcon = ({ type = UserGender.MALE }) => {
  const { isDarkMode } = useTheme();
  const color = isDarkMode ? "#fff" : "#000";
  const size = {
    height: 20,
    width: 20,
  };
  if (type === UserGender.MALE) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...size}>
        <circle
          cx="13"
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeMiterlimit={10}
          cy="19"
          r="8"
        />

        <path
          d="m19 13 8-8m0 10V5H17"
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeMiterlimit={10}
        />
      </svg>
    );
  }
  if (type === UserGender.FEMALE) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...size}
      >
        <path
          d="M17.41 9.682a5.7 5.7 0 0 1-1.661 4.032 5.7 5.7 0 0 1-4.067 1.695 5.727 5.727 0 1 1 5.727-5.727Z"
          stroke={color}
          stroke-width="1.909"
        />

        <path
          d="M11.5 15.5V21"
          stroke={color}
          stroke-width="1.909"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          d="M14 19H9"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg {...size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="60"
        r="30"
        stroke={color}
        stroke-width="6"
        fill="none"
      />

      <line
        x1="100"
        y1="90"
        x2="100"
        y2="140"
        stroke={color}
        stroke-width="6"
      />

      <line
        x1="85"
        y1="140"
        x2="115"
        y2="140"
        stroke={color}
        stroke-width="6"
      />

      <line x1="100" y1="30" x2="125" y2="5" stroke={color} stroke-width="6" />
      <line x1="125" y1="5" x2="135" y2="20" stroke={color} stroke-width="6" />

      <line x1="75" y1="25" x2="50" y2="5" stroke={color} stroke-width="6" />
      <line x1="50" y1="5" x2="35" y2="20" stroke={color} stroke-width="6" />
    </svg>
  );
};

export default lawyerCard;
