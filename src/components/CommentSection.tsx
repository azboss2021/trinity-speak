import { FaSort } from "react-icons/fa6";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import SignInButton from "./SignInButton";
import { MdSort } from "react-icons/md";

const CommentSection = ({ signedIn }: { signedIn: boolean }) => {
  const commentCount = 52;

  return (
    <div className="flex flex-col gap-4">
      <div className="-mb-2 flex items-center justify-between pl-2">
        <span className="font-bold">52 Comments</span>
        <select className="select select-ghost w-fit">
          <option disabled>Sort By</option>
          <option>Newest first</option>
          <option>Top comments</option>
        </select>
      </div>
      {signedIn ? <CommentForm /> : <SignInButton />}
      <Comments signedIn={signedIn} />
    </div>
  );
};
export default CommentSection;
