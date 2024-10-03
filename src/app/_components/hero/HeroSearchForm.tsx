import searchIcon from "../../../public/static/assets/icons/search.svg";
import Image from "next/image";
import { useWeatherData } from "@/app/_providers/WeatherDataProvider";
import { onSubmit } from "@/app/_server-actions";
import { useHeroDisplay } from "@/app/_providers/HeroDisplayProvider";
import { revalidatePath } from "next/cache";

function HeroSearchForm() {
  const { setWeatherData } = useWeatherData();
  const { setIsSearchActive } = useHeroDisplay();

  async function handleSubmit(formData: FormData) {
    const city = formData.get("city") as string;
    if (!city) return;
    const newWeatherData = await onSubmit(city);
    setWeatherData({ ...newWeatherData });
    setIsSearchActive(false);
    revalidatePath("/");
  }
  return (
    <form action={handleSubmit} className="search-form">
      <div className="input-box">
        <Image src={searchIcon} alt="search" height={20} width={20} />
        <input type="text" name="city" placeholder="Search location" />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default HeroSearchForm;
