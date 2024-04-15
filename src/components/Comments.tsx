import dummyComments from "@/lib/dummy";
import Comment from "./Comment";

const Comments = ({ signedIn }: { signedIn: boolean }) => {
  return (
    <div className="flex flex-col gap-4">
      {dummyComments.map((comment, index) => (
        <Comment
          key={index}
          reply={false}
          comment={comment}
          signedIn={signedIn}
        />
      ))}
    </div>
  );
};
export default Comments;
