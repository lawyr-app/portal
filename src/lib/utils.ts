import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    toast.error("Clipboard API not supported");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    toast("Copied successfully");
  } catch (err) {
    toast.error("Failed to copy");
  }
};
