import CommentSection from "@/components/CommentSection";
import Header from "@/components/Header";
import VerseOfTheDay from "@/components/VerseOfTheDay";

const HomePage = async () => {
  const signedIn = true;

  return (
    <main className="mx-auto w-full max-w-prose px-2 md:px-4">
      <div className="flex w-full flex-col gap-4">
        <Header />
        <VerseOfTheDay />
        <CommentSection signedIn={signedIn} />
      </div>
    </main>
  );
};

export default HomePage;
