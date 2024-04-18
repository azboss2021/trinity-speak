import { auth } from "@/auth";
import CommentSection from "@/components/CommentSection";
import Header from "@/components/Header";
import VerseOfTheDay from "@/components/VerseOfTheDay";

const HomePage = async () => {
  const session = await auth();

  return (
    <main className="mx-auto w-full max-w-3xl px-2 md:px-4">
      <div className="flex w-full flex-col gap-4">
        <Header />
        <VerseOfTheDay />
        <CommentSection signedIn={!!session} />
      </div>
    </main>
  );
};

export default HomePage;
