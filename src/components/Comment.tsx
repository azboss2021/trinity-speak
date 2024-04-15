"use client";

import { CommentType } from "@/lib/types";
import { getTimeAgo } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
import {
  FaChevronDown,
  FaChevronUp,
  FaFaceSmile,
  FaReply,
} from "react-icons/fa6";
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
  const [showReplies, setShowReplies] = useState(false);
  const replyCount: number = 5;

  const toggleReplies = () => {
    setShowReplies((curr) => !curr);
  };

  return (
    <div className="card w-full rounded-none px-2 py-2 md:py-4">
      <div className="card-body gap-1.5 p-0">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-1.5">
            <Image
              src={comment.author.image}
              alt={comment.author.name}
              width={100}
              height={100}
              className="h-8 w-8 rounded-full md:h-10 md:w-10"
            />

            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold">
                  @{comment.author.name}
                </span>

                <span className="text-xs text-base-content/60">
                  {getTimeAgo(comment.createdAt)}
                </span>
              </div>
              <span className="badge badge-neutral badge-sm text-[10px] font-semibold">
                {comment.version.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div className={`text-sm md:text-base`}>{comment.text}</div>

        <div className="flex flex-col gap-0.5">
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

          {comment.replies.length > 0 && (
            <button
              className="btn btn-ghost btn-xs -ml-2 w-fit justify-start text-primary md:btn-sm md:-ml-3"
              onClick={toggleReplies}
            >
              {showReplies ? (
                <FaChevronUp size={10} />
              ) : (
                <FaChevronDown size={10} />
              )}
              <span className="flex items-center gap-1">
                <>{comment.replies.length}</>
                <span>{replyCount === 1 ? "reply" : "replies"}</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Comment;
