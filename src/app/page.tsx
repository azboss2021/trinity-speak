import Navbar from "@/components/Navbar";
import VerseOfTheDay from "@/components/VerseOfTheDay";

const HomePage = async () => {
  const response = await fetch(
    "https://bible-api.com/john%203:16?translation=kjv",
    {
      method: "GET",
    },
  );
  const data = await response.json();

  return (
    <main className="">
      <div className="flex flex-col gap-8">
        <VerseOfTheDay verse={data} />
        <div className="flex flex-col">
          <div className="label">
            <span className="label-text">Discussion</span>
          </div>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write your thoughts"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </main>
  );
};

export default HomePage;
