import Navbar from "../home/components/Navbar";
import SettingNavbar from "./components/SettingNavbar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar className="border-none" />
      <SettingNavbar />
      <main className="container mx-auto mt-8 px-2">{children}</main>
    </div>
  );
}
