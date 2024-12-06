"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  RssIcon as Reddit,
  User,
  Scale,
  UserCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import { toast } from "sonner";

const socialPlatforms = [
  { name: "Facebook", icon: Facebook },
  { name: "Twitter", icon: Twitter },
  { name: "Instagram", icon: Instagram },
  { name: "LinkedIn", icon: Linkedin },
  { name: "YouTube", icon: Youtube },
  { name: "Reddit", icon: Reddit },
  { name: "Other", icon: User },
];

const userTypes = [
  { name: "Lawyer", value: "lawyer", icon: Scale },
  { name: "Not a Lawyer", value: "non-lawyer", icon: UserCheck },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [source, setSource] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [otherSource, setOtherSource] = useState<string>("");
  const [userType, setUserType] = useState<"lawyer" | "non-lawyer" | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const getSocial = () => {
    const src = socialPlatforms.find((f) => f.name === source)?.name;
    return src ?? otherSource;
  };

  const createAccount = async () => {
    try {
      setIsLoading(true);
      const signUpInfo = localStorage.getItem("signupInfo");
      const parsedSignupInfo = signUpInfo ? JSON.parse(signUpInfo) : null;
      if (parsedSignupInfo) {
        const payload = {
          username,
          social: getSocial(),
          isLawyer: userType === "lawyer",
          //we get it from google
          googleId: parsedSignupInfo.sub,
          name: parsedSignupInfo.name,
          googleFirstName: parsedSignupInfo.given_name,
          googleLastName: parsedSignupInfo.family_name,
          profileImageUrl: parsedSignupInfo.picture,
          email: parsedSignupInfo.email,
          emailVerified: parsedSignupInfo.email_verified,
          accessToken: parsedSignupInfo.token,
          tokenExpiresIn: parsedSignupInfo.exp,
          tokenIssuedAt: parsedSignupInfo.iat,
          tokenId: parsedSignupInfo.jti,
          tokenNotValidBefore: parsedSignupInfo.nbf,
        };
        const { data } = await axios.post(`/user/signup`, payload);
        if (data.isError) {
          toast.error("Something went wrong while creating account");
        } else {
          toast.success("Account created successfully");
          router.push("/playground");
        }
      } else {
        toast.error("Something went wrong while creating account");
        router.push("/auth/signup");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong while creating account");
    }
  };

  return (
    <div className="w-full p-2">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-2">
          Let's get to know you better
        </h1>
      </div>

      <form className="space-y-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-lg font-semibold">
              What should we call you?
            </Label>
            <div className="flex items-center space-x-2">
              <User className="text-muted-foreground" />
              <Input
                id="username"
                value={username}
                onChange={(e) => {
                  const value = e.target.value;
                  setUsername(value);
                }}
                placeholder="Enter your username"
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold">
              How did you hear about us?
            </Label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {socialPlatforms.map((platform) => (
                <button
                  key={platform.name}
                  type="button"
                  className={`p-4 rounded-lg border ${
                    source === platform.name
                      ? "border-primary bg-primary/10"
                      : "border-input hover:bg-accent hover:text-accent-foreground"
                  } transition-colors`}
                  onClick={() => setSource(platform.name)}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <platform.icon className="w-6 h-6" />
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {source === "Other" && (
            <div className="space-y-2">
              <Label htmlFor="otherSource" className="text-lg font-semibold">
                Please specify:
              </Label>
              <Input
                id="otherSource"
                placeholder="Enter the source"
                value={otherSource}
                onChange={(e) => setOtherSource(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Label className="text-lg font-semibold">Are you a lawyer?</Label>
          <div className="grid grid-cols-2 gap-4">
            {userTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                className={`p-4 rounded-lg border ${
                  userType === type.value
                    ? "border-primary bg-primary/10"
                    : "border-input hover:bg-accent hover:text-accent-foreground"
                } transition-colors`}
                onClick={() =>
                  setUserType(type.value as "lawyer" | "non-lawyer")
                }
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <type.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{type.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <Button
          type="button"
          onClick={() => {
            createAccount();
          }}
          className="w-full text-lg py-6"
        >
          Create Your Account
        </Button>
      </form>
    </div>
  );
}
