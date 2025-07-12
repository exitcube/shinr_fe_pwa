import { HomePageContent } from "@/components/LandingPageContent";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-[90vh] relative overflow-hidden">
          <HomePageContent />
        </div>
      </div>
    </>
  );
}
