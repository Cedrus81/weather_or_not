import { fetchDemoData } from "@/utils";
import HeroDisplay from "./_components/HeroDisplay";

export default async function Home() {
  const data = await fetchDemoData();
  console.log(data);
  return (
    <main>
      <HeroDisplay data={data} />
    </main>
  );
}
