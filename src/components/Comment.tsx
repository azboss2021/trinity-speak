import { merriweather } from "@/lib/fonts";
import { CommentType } from "@/lib/types";
import { getTimeAgo } from "@/lib/utils";
import Image from "next/image";

const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="card w-full border">
      <div className="card-body p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={comment.author.image}
              alt={comment.author.name}
              width={100}
              height={100}
              className="h-6 w-6 rounded-full md:h-8 md:w-8"
            />
            <span className="text-base font-semibold md:text-lg">
              {comment.author.name}
            </span>
            <span className="badge badge-neutral text-xs">
              {comment.version.toUpperCase()}
            </span>
          </div>
          {/* {comment.author.isAdmin ? (
          <span className="badge badge-secondary gap-2 text-xs">
            <FaTools />
          </span>
        ) : null} */}
          <span className="text-sm font-semibold">
            {getTimeAgo(comment.createdAt)}
          </span>
        </div>
        <div className={`${merriweather.className} text-sm md:text-base`}>
          {comment.text}
        </div>
      </div>
    </div>

    // <div className="flex flex-col gap-2 rounded-xl border p-4">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center gap-2">
    //       <Image
    //         src={comment.author.image}
    //         alt={comment.author.name}
    //         width={100}
    //         height={100}
    //         className="h-8 w-8 rounded-full"
    //       />
    //       <span className="text-lg font-semibold">{comment.author.name}</span>
    //       <span className="badge badge-neutral text-xs">
    //         {comment.version.toUpperCase()}
    //       </span>
    //     </div>
    //     {/* {comment.author.isAdmin ? (
    //       <span className="badge badge-secondary gap-2 text-xs">
    //         <FaTools />
    //       </span>
    //     ) : null} */}
    //     <span className="text-sm font-semibold">
    //       {getTimeAgo(comment.createdAt)}
    //     </span>
    //   </div>
    // <div className={`${merriweather.className}`}>{comment.text}</div>
    // </div>
  );
};
export default Comment;
