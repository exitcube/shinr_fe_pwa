import { HomePageContent } from "@/components/HomePageContent";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[375px] h-[90vh] relative overflow-hidden">
          <HomePageContent />
        </div>
      </div>
    </>
  );
}
