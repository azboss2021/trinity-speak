import dummyComments from "@/lib/dummy";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-2">
      {dummyComments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};
export default Comments;
