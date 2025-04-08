import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, FileText, Scale, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const QuickActionsData = [
  {
    id: 1,
    name: "AI Lawyer",
    href: "/studio/ailawyer",
    icon: Scale,
    isCommingSoon: false,
    info: "Legal advice and consultation",
    description:
      " Get AI-powered legal advice and consultation for your specific needs.",
  },
  {
    id: 2,
    name: "Drafter",
    href: "/studio/drafter",
    icon: FileText,
    isCommingSoon: true,
    info: "Create legal documents",
    description:
      "Draft contracts, agreements, and legal documents with AI assistance.",
  },
  {
    id: 3,
    name: "Judgements",
    href: "/studio/judgements",
    icon: Search,
    isCommingSoon: true,
    info: "Find relevant case law",
    description:
      "Search and analyze judgements and precedents from various courts.",
  },
  {
    id: 4,
    name: "Laws",
    href: "/studio/laws",
    icon: BookOpen,
    isCommingSoon: true,
    info: "Explore legal statutes",
    description:
      "Search and reference laws, statutes, and regulations across jurisdictions.",
  },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {QuickActionsData.map((m) => {
        const Icon = m.icon;
        return (
          <Link href={m.isCommingSoon ? "#" : m.href} key={m.id}>
            <Card className="opacity-80 p-4 bg-white dark:bg-black">
              <CardHeader className="pb-2 p-0">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    {m.name}
                  </CardTitle>
                  {m.isCommingSoon && (
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary font-medium"
                    >
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <CardDescription>{m.info}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 pt-4 px-0">
                <p className="text-sm text-muted-foreground">{m.description}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickActions;
