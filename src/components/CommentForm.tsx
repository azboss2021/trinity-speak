"use client";

import { FaPaperPlane, FaRegSmile } from "react-icons/fa";
import RulesExtraInfo from "./RulesExtraInfo";
import { FaImage } from "react-icons/fa6";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { MAXCHARACTERCOUNT } from "@/lib/constants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";

const WarningPercent = 95;
const CharCountUntilTextOnly = 9;

const formSchema = z.object({
  comment: z
    .string()
    .min(1, {
      message: "Comment must not be empty.",
    })
    .max(MAXCHARACTERCOUNT, {
      message: `Comment must not be more than ${MAXCHARACTERCOUNT} characters`,
    }),
});

const CommentForm = ({
  profileImage,
  setShowNewReply,
  showNewReply,
  newReplyTarget,
}: {
  profileImage: string;
  newReplyTarget?: string;
  showNewReply?: boolean;
  setShowNewReply?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [content, setContent] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: `${newReplyTarget ? `@${newReplyTarget} ` : ""}`,
    },
    mode: "onChange",
  });

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.textContent || "";
    setCharacterCount(newContent.trim().length);
    setContent(newContent);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // const toastId = toast.loading("");

    console.log(values);

    // toast.error("Failed to commment", { id: toastId });
    // toast.success("Successfully commented", { id: toastId });
  };

  return (
    <div className="flex w-full items-start gap-2">
      <Image
        src={profileImage}
        alt={`commenter profile image`}
        width={100}
        height={100}
        className={`rounded-full ${showNewReply ? "h-6 w-6 md:h-7 md:w-7" : "h-8 w-8 md:h-10 md:w-10"}`}
      />

      <form
        className="flex w-full flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`h-auto w-full resize-none break-words border-b-2 border-base-300 pb-0.5 leading-relaxed focus:border-base-content focus:outline-none sm:text-sm ${characterCount === 0 ? (showNewReply ? "beforeReply text-base-content/40" : "beforeComment text-base-content/40") : ""}`}
          contentEditable
          {...register("comment")}
          autoFocus={showNewReply || false}
          onInput={handleInput}
          dir="auto"
          aria-label={`Add a reply...`}
        />
        {/* {errors.comment && <span>{errors.comment.message}</span>} */}

        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {characterCount === 0 && (
              <button type="button" className="btn btn-sm">
                Gif <FaImage />
              </button>
            )}
            <button type="button" className="btn btn-sm">
              <FaRegSmile />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {setShowNewReply != null && (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setShowNewReply(false)}
              >
                Cancel
              </button>
            )}
            <button
              className="btn btn-primary btn-sm"
              disabled={
                characterCount > MAXCHARACTERCOUNT || characterCount < 1
              }
            >
              Comment
            </button>

            {characterCount > 0 && (
              <div className="h-[28px] w-[28px]">
                <CircularProgressbar
                  value={(characterCount / MAXCHARACTERCOUNT) * 100}
                  strokeWidth={
                    characterCount > MAXCHARACTERCOUNT &&
                    characterCount - MAXCHARACTERCOUNT > CharCountUntilTextOnly
                      ? 0
                      : 12
                  }
                  className="text-primary"
                  text={`${(characterCount / MAXCHARACTERCOUNT) * 100 > WarningPercent ? -(characterCount - MAXCHARACTERCOUNT) : ""}`}
                  styles={buildStyles({
                    pathColor: `${(characterCount / MAXCHARACTERCOUNT) * 100 >= 100 ? "oklch(var(--er))" : (characterCount / MAXCHARACTERCOUNT) * 100 > WarningPercent && (characterCount / MAXCHARACTERCOUNT) * 100 < 100 ? "oklch(var(--wa))" : "oklch(var(--p))"}`,
                    trailColor: "oklch(var(--b3))",
                    textColor: `${(characterCount / MAXCHARACTERCOUNT) * 100 < 100 ? "oklch(var(--bc))" : "oklch(var(--er))"}`,
                    textSize: "42px",
                    backgroundColor: "oklch(var(--b1))",
                  })}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default CommentForm;
