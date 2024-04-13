import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import SignInButton from "@/components/SignInButton";
import VerseOfTheDay from "@/components/VerseOfTheDay";

const HomePage = async () => {
  const signedIn = true;

  return (
    <main className="mx-auto w-full max-w-prose px-2 pb-32 md:px-4">
      <div className="flex w-full flex-col gap-4">
        <VerseOfTheDay />
        {signedIn ? <CommentForm /> : <SignInButton />}
        <Comments signedIn={signedIn} />
      </div>
    </main>
  );
};

export default HomePage;
