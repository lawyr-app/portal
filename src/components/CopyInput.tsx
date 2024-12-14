import { Copy } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

type CopyInputProps = React.FC<{
  value: String;
}>;
const CopyInput: CopyInputProps = ({ value }) => {
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
    <div className="flex flex-row ">
      <Input
        className="border-r-0 rounded-r-none"
        value={String(value)}
        disabled
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
