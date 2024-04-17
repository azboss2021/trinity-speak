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
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  signedIn,
  reply,
}: {
  comment: CommentType;
  signedIn: boolean;
  reply: boolean;
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showNewReply, setShowNewReply] = useState(false);

  const toggleReplies = () => {
    setShowReplies((curr) => !curr);
  };

  const toggleNewReply = () => {
    setShowNewReply((curr) => !curr);
  };

  return (
    <div
      className={`flex items-start gap-2 md:gap-3 ${reply && "gap-1 md:gap-2"}`}
    >
      <Image
        src={comment.author.image}
        alt={comment.author.name}
        width={100}
        height={100}
        className={`rounded-full ${reply ? "h-6 w-6 md:h-7 md:w-7" : "h-8 w-8 md:h-10 md:w-10"}`}
      />

      <div className={`card w-full rounded-none`}>
        <div className="card-body gap-1.5 p-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold">
                @{comment.author.name}
              </span>

              <span className="text-xs text-base-content/60">
                {getTimeAgo(comment.createdAt)}
              </span>
            </div>
            <span className="badge badge-sm border-primary-content/80 text-[10px] font-semibold">
              {comment.version.toUpperCase()}
            </span>
          </div>

          <div className={`text-sm font-medium`}>{comment.text}</div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <button className="btn btn-circle btn-ghost btn-sm -ml-2.5">
                  <PiArrowFatUp size={17} />
                </button>
                <div className="text-sm">
                  {comment.upvotes.length - comment.downvotes.length}
                </div>
                <button className="btn btn-circle btn-ghost btn-sm">
                  <PiArrowFatDown size={17} />
                </button>
              </div>
              {signedIn && (
                <>
                  <button
                    className="btn btn-ghost btn-xs gap-1.5 px-2 font-normal"
                    onClick={() => setShowNewReply(true)}
                  >
                    Reply
                  </button>
                </>
              )}
            </div>

            {showNewReply && (
              <div className="my-2">
                <CommentForm
                  profileImage={comment.author.image}
                  newReplyTarget={comment.author.name}
                  showNewReply={showNewReply}
                  setShowNewReply={setShowNewReply}
                />
              </div>
            )}

            {comment.replies.length > 0 && (
              <button
                className="btn btn-ghost btn-xs -ml-2 -mt-2 w-fit justify-start text-primary md:btn-sm md:-ml-3"
                onClick={toggleReplies}
              >
                {showReplies ? (
                  <FaChevronUp size={10} />
                ) : (
                  <FaChevronDown size={10} />
                )}
                <span className="flex items-center gap-1">
                  <>{comment.replies.length}</>
                  <span>
                    {comment.replies.length === 1 ? "reply" : "replies"}
                  </span>
                </span>
              </button>
            )}

            {showReplies &&
              comment.replies.map((reply, index) => (
                <Comment
                  key={index}
                  comment={reply}
                  reply={true}
                  signedIn={true}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
