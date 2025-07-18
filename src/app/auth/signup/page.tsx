"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { getDecodedvalues } from "@/lib/google-auth";
import { useUser } from "@/context/userContext";

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
              router.push("/studio/ailawyer/");
              storeUser(userExists);
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
        {!isLoading ? (
          <GoogleLogin
            width="100%"
            onSuccess={(s) => handleSignup(s)}
            onError={() => {
              console.error(`Somethign went wrong in google login`);
            }}
            text="signup_with"
          />
        ) : (
          <Button variant="outline" className="w-full" size="lg" disabled>
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />

              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />

              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />

              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </Button>
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
