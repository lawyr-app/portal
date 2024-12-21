import { Copy } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type CopyInputProps = React.FC<{
  value: string;
  className: string;
  disabled?: boolean;
}>;
const CopyInput: CopyInputProps = ({ value, className, disabled = true }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(String(value)).then(
      () => {
        toast.success("Copied successfully");
        console.log("Copied to clipboard:", value);
      },
      (err) => {
        toast.error("Failed to copy");
        console.error("Failed to copy to clipboard:", err);
      }
    );
  };

  return (
    <div className={cn("flex flex-row ", className)}>
      <Input
        className="rounded-r-none focus-visible:outline-none focus-visible:ring-0"
        value={String(value)}
        disabled={disabled}
      />
      <Button
        onClick={handleCopy}
        className="border-l-0 rounded-l-none"
        variant="outline"
        size="icon"
      >
        <Copy />
      </Button>
    </div>
  );
};

export default CopyInput;
