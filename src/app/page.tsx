import Navigation from "@/components/Navigation";
import WorkGrid from "@/components/WorkGrid";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="px-[30px] py-[30px]">
        <WorkGrid />
      </main>
    </>
  );
}
