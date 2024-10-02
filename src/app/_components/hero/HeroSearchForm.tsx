import searchIcon from "../../../public/static/assets/icons/search.svg";
import Image from "next/image";

function HeroSearchForm() {
  //   function onSubmit(formData: FormData) {
  //     "use server";
  //     const content = formData.get("content");
  //   }
  return (
    <form action={() => {}} className="search-form">
      <div className="input-box">
        <Image src={searchIcon} alt="search" height={20} width={20} />
        <input type="text" placeholder="Search location" />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default HeroSearchForm;
