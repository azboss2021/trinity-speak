import Comments from "@/components/Comments";
import RulesExtraInfo from "@/components/RulesExtraInfo";
import VerseOfTheDay from "@/components/VerseOfTheDay";
import { FaPaperPlane } from "react-icons/fa6";

const HomePage = async () => {
  return (
    <main className="mx-auto max-w-prose px-4">
      <div className="flex flex-col gap-4">
        <VerseOfTheDay />
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Share your thoughts, stories, prayers, who, why, when, whatever."
            />
          </div>
          <RulesExtraInfo />
          <button className="btn btn-primary">
            Submit <FaPaperPlane />
          </button>
        </form>
        <Comments />
      </div>
    </main>
  );
};

export default HomePage;
