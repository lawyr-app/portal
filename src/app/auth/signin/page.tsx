"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { CredentialResponse } from "@react-oauth/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import { getDecodedvalues } from "@/lib/google-auth";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import Google from "@/assets/svg/Google";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { storeUser } = useUser();

  const handleSignin = async (res: CredentialResponse) => {
    try {
      setIsLoading(true);
      const token = res.credential;
      if (token) {
        const userInfo = getDecodedvalues(token);
        const googleId = userInfo?.sub;
        if (googleId) {
          const payload = {
            googleId: userInfo.sub,
            name: userInfo.name,
            googleFirstName: userInfo.given_name,
            googleLastName: userInfo.family_name,
            profileImageUrl: userInfo.picture,
            email: userInfo.email,
            emailVerified: userInfo.email_verified,
            accessToken: token,
            tokenExpiresIn: userInfo.exp,
            tokenIssuedAt: userInfo.iat,
            tokenId: userInfo.jti,
            tokenNotValidBefore: userInfo.nbf,
          };
          try {
            const { data } = await axios.put(`/user/signin`, payload);
            if (!data.isError) {
              storeUser(data.data);
              router.push("/studio/ailawyer/");
            } else {
              const message = data?.message;
              if (message === "USER_DONT_EXISTS") {
                toast.warning("No such user exists. Creating Account");
                const payload = {
                  ...userInfo,
                  token,
                };
                localStorage.setItem("signupInfo", JSON.stringify(payload));
                router.push("/auth/onboarding");
                toast("We need few more details");
                // router.push("/auth/signup");
              } else {
                toast.error(
                  message ?? "Something went wrong. Please try again"
                );
              }
            }
          } catch (error) {
            console.error(`Something went wrong. Please try again`, error);
            toast.error("Something went wrong. Please try again");
          }
        }
      } else {
        console.error(`Something went wrong while signing up`);
        toast.error("Something went wrong while signing up");
      }
      setIsLoading(false);
    } catch (error: unknown) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-muted-foreground">
          Welcome back! Please sign in to your account
        </p>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <Button variant="outline" className="w-full" size="lg" disabled>
            <Google className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        ) : (
          <GoogleAuthButton
            text="signin_with"
            label="Sign in with Google"
            onSuccess={handleSignin}
            onError={() => {
              console.error(`Something went wrong in google login`);
            }}
          />
        )}
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Sign up
        </Link>
      </div>
    </>
  );
}
