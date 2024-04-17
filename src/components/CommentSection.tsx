import CommentForm from "./CommentForm";
import Comments from "./Comments";
import RulesExtraInfo from "./RulesExtraInfo";
import SignInButton from "./SignInButton";

const CommentSection = ({ signedIn }: { signedIn: boolean }) => {
  const commentCount = 52;
  const profileImage = "/profile.jpg";

  return (
    <div className="flex flex-col gap-6">
      <div className="-mb-2 flex items-center justify-between pl-1">
        <span className="text-lg font-bold">52 Comments</span>
        <select className="select select-bordered select-sm w-fit">
          <option disabled>Sort By</option>
          <option>Newest First</option>
          <option>Top Comments</option>
        </select>
      </div>

      <RulesExtraInfo />
      {signedIn ? (
        <CommentForm mainComment={true} profileImage={profileImage} />
      ) : (
        <SignInButton />
      )}
      <Comments signedIn={signedIn} />
    </div>
  );
};
export default CommentSection;
