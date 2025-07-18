import { Linkedin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialConnect() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
        Connect With Us
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        You can directly contact the founder on the following platform
      </p>
      <div className="flex justify-center space-x-4">
        <Button asChild>
          <a
            href="https://twitter.com/lawyrhub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md flex items-center"
          >
            <X className="mr-2 h-5 w-5" />X (twitter)
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://www.linkedin.com/company/lawyrhub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md flex items-center"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  );
}
