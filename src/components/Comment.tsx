"use client";

import { CommentType } from "@/lib/types";
import { getTimeAgo } from "@/lib/utils";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";
import { FaFaceSmile, FaReply } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineAddReaction } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import {
  PiArrowFatUp,
  PiArrowFatUpFill,
  PiArrowFatDown,
  PiArrowFatDownFill,
} from "react-icons/pi";

const Comment = ({
  comment,
  signedIn,
}: {
  comment: CommentType;
  signedIn: boolean;
}) => {
  const replyCount = 5;

  return (
    <div className="card w-full rounded-none border-b px-2 py-2 md:py-4">
      <div className="card-body gap-3 p-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={comment.author.image}
              alt={comment.author.name}
              width={100}
              height={100}
              className="h-6 w-6 rounded-full md:h-8 md:w-8"
            />
            <span className="text-sm font-bold md:text-sm">
              {comment.author.name}
            </span>

            <span className="text-xs">({comment.version.toUpperCase()})</span>

            <span className="text-xs text-base-content/60">•</span>
            <span className="text-xs">{getTimeAgo(comment.createdAt)}</span>

            {/* <span className="badge badge-ghost badge-sm font-semibold">
              {comment.version.toUpperCase()}
            </span> */}
          </div>
          {/* <span className="text-sm">•</span> */}
          {/* <span className="badge badge-ghost badge-sm font-semibold">
            {comment.version.toUpperCase()}
          </span> */}
          {/* {comment.author.isAdmin ? (
          <span className="badge badge-secondary gap-2 text-xs">
            <FaTools />
          </span>
        ) : null} */}
        </div>

        <div className={`text-sm md:text-base`}>{comment.text}</div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <button className="btn btn-circle btn-ghost btn-sm -ml-2.5">
                <PiArrowFatUp size={18} />
              </button>
              <div className="text-sm">
                {comment.upvotes.length - comment.downvotes.length}
              </div>
              <button className="btn btn-circle btn-ghost btn-sm">
                <PiArrowFatDown size={18} />
              </button>
            </div>
            {signedIn && (
              <>
                <button className="btn btn-ghost btn-xs gap-1.5 px-2 font-normal md:btn-sm">
                  <MdChatBubbleOutline size={16} /> Reply
                </button>
                <button className="btn btn-ghost btn-xs gap-1.5 px-2 font-normal md:btn-sm">
                  <MdOutlineAddReaction size={16} /> React
                </button>
              </>
            )}
          </div>

          <button className="btn btn-ghost btn-xs -ml-2 w-full justify-start">
            View {replyCount} More Replies
          </button>
        </div>
      </div>
    </div>
  );
};
export default Comment;
