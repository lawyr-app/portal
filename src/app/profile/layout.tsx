import Navbar from "./components/Navbar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </div>
  );
}
