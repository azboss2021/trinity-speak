import { FaSort } from "react-icons/fa6";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import SignInButton from "./SignInButton";
import { MdSort } from "react-icons/md";

const CommentSection = ({ signedIn }: { signedIn: boolean }) => {
  const commentCount = 52;
  const profileImage = "/profile.jpg";

  return (
    <div className="flex flex-col gap-6">
      <div className="-mb-2 flex items-center justify-between pl-1">
        <span className="text-lg font-bold">52 Comments</span>
        <select className="select select-ghost select-sm w-fit">
          <option disabled>Sort By</option>
          <option>Newest first</option>
          <option>Top comments</option>
        </select>
      </div>
      {signedIn ? (
        <CommentForm profileImage={profileImage} />
      ) : (
        <SignInButton />
      )}
      <Comments signedIn={signedIn} />
    </div>
  );
};
export default CommentSection;
