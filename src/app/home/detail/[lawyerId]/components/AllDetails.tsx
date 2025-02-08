import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MessageCircle,
  Share2,
  Phone,
  Clock,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";

const AllDetails = () => {
  return (
    <Card className="overflow-hidden shadow-xl mb-8">
      <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="absolute -bottom-16 left-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Ms. Sarah Johnson"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <CardContent className="pt-20 px-8 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Ms. Sarah Johnson</h1>
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">5.0</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm text-muted-foreground">124 reviews</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              <span>London, UK</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>10+ years experience</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button className="shadow-md">
              <MessageCircle className="mr-2 h-4 w-4" /> Chat Now
            </Button>
            <Button variant="outline" className="shadow-sm">
              <Phone className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
            <Button variant="ghost">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6">
              As a dedicated and experienced tuition teacher with over a decade
              of experience, I specialize in Mathematics and Science for
              secondary school students. My passion lies in unlocking each
              student's potential through personalized learning strategies and
              interactive teaching methods. I believe in creating a supportive
              and engaging learning environment that encourages curiosity and
              critical thinking.
            </p>

            <h2 className="text-xl font-semibold mb-4">Expertise</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                Mathematics
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                Physics
              </Badge>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                Chemistry
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                Biology
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                Exam Preparation
              </Badge>
            </div>

            <h2 className="text-xl font-semibold mb-4">Teaching Philosophy</h2>
            <p className="text-muted-foreground mb-6">
              I believe that every student has unique learning needs and
              potential. My approach combines rigorous academic instruction with
              patience and encouragement. I strive to make complex concepts
              accessible and enjoyable, fostering a love for learning that
              extends beyond the classroom.
            </p>
          </div>

          <div>
            <Card className="bg-gray-50 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" /> Education
                </h2>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">BSc in Mathematics</div>
                    <div className="text-sm text-muted-foreground">
                      University of Cambridge
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">
                      PGCE in Secondary Education
                    </div>
                    <div className="text-sm text-muted-foreground">
                      University College London
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 shadow-sm mt-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" /> Achievements
                </h2>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">Teacher of the Year</div>
                    <div className="text-sm text-muted-foreground">
                      London Education Awards, 2022
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">100% Student Pass Rate</div>
                    <div className="text-sm text-muted-foreground">
                      A-Level Mathematics, 2021
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AllDetails;
