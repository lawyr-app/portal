"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CredentialResponse } from "@react-oauth/google";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { getDecodedvalues } from "@/lib/google-auth";
import { useUser } from "@/context/userContext";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import Google from "@/assets/svg/Google";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { storeUser } = useUser();

  const handleSignup = async (res: CredentialResponse) => {
    try {
      setIsLoading(true);
      const token = res.credential;
      if (token) {
        const userInfo = getDecodedvalues(token);
        const googleId = userInfo?.sub;
        if (googleId) {
          const { data } = await axios.post(`/user/exists`, {
            email: userInfo?.email,
          });
          if (!data.isError) {
            const userExists = data.data;
            if (userExists?._id) {
              storeUser(userExists);
              router.push("/studio/ailawyer/");
            } else {
              const payload = {
                ...userInfo,
                token,
              };
              localStorage.setItem("signupInfo", JSON.stringify(payload));
              router.push("/auth/onboarding");
              toast("We need few more details");
            }
          } else {
            console.error(`Something went wrong. Please try again`);
            toast.error("Something went wrong. Please try again");
          }
        }
      } else {
        console.error(`Something went wrong while signing up`);
        toast.error("Something went wrong while signing up");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(`Something went wrong in handle login due to `, error);
      toast.error("Something went wrong while signing up");
    }
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p className="text-muted-foreground">
          Create an account to get started
        </p>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <Button variant="outline" className="w-full" size="lg" disabled>
            <Google className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>
        ) : (
          <GoogleAuthButton
            text="signup_with"
            label="Sign up with Google"
            onSuccess={handleSignup}
            onError={() => {
              console.error(`Something went wrong in google login`);
            }}
          />
        )}

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
}
