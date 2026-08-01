"use client";

import { useEffect, useRef, useState } from "react";
import {
  CredentialResponse,
  GoogleLogin,
  type GoogleLoginProps,
} from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import Google from "@/assets/svg/Google";
import { cn } from "@/lib/utils";

type GoogleAuthButtonProps = {
  text?: GoogleLoginProps["text"];
  label: string;
  onSuccess: (res: CredentialResponse) => void;
  onError?: () => void;
  className?: string;
};

const GoogleAuthButton = ({
  text = "signin_with",
  label,
  onSuccess,
  onError,
  className,
}: GoogleAuthButtonProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const next = Math.floor(el.getBoundingClientRect().width);
      setWidth((prev) => (prev === next ? prev : next));
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-10", className)}
    >
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="pointer-events-none absolute inset-0 w-full"
        tabIndex={-1}
        aria-hidden
      >
        <Google className="mr-2 h-4 w-4" />
        {label}
      </Button>

      {width > 0 && (
        <div className="absolute inset-0 z-10 overflow-hidden opacity-0 [&_*]:!cursor-pointer [&_>div]:!h-full [&_>div]:!w-full [&_iframe]:!h-full [&_iframe]:!min-h-full [&_iframe]:!w-full">
          <GoogleLogin
            key={width}
            width={String(width)}
            theme="outline"
            size="large"
            shape="rectangular"
            text={text}
            logo_alignment="left"
            onSuccess={onSuccess}
            onError={onError}
          />
        </div>
      )}
    </div>
  );
};

export default GoogleAuthButton;
