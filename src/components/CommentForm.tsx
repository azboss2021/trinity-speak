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

const CommentForm = () => {
  const [characterCount, setCharacterCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("");

    console.log(values);

    toast.error("Failed to commment", { id: toastId });
    toast.success("Successfully commented", { id: toastId });
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      {/* <RulesExtraInfo /> */}

      <textarea
        className={`textarea textarea-bordered h-auto w-full resize-none break-words px-4 py-3 leading-relaxed`}
        onChange={(e) => setCharacterCount(e.target.value.trim().length)}
        placeholder="Add a comment..."
        // placeholder="Share your thoughts, stories, prayers, who, why, when, whatever."
      />
      {errors.comment && <span>{errors.comment.message}</span>}

      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button type="button" className="btn btn-sm">
            Gif <FaImage />
          </button>
          <button type="button" className="btn btn-sm">
            <FaRegSmile />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="btn btn-ghost btn-sm">
            Cancel
          </button>
          <button
            className="btn btn-primary btn-sm"
            disabled={characterCount > MAXCHARACTERCOUNT || characterCount < 1}
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
            // ${(characterCount / MAXCHARACTERCOUNT) * 100 > 80 && "text-warning"} ${(characterCount / MAXCHARACTERCOUNT) * 100 > 100 && "text-error"}
            // ${(characterCount / MAXCHARACTERCOUNT) * 100}
          )}
        </div>
      </div>
    </form>
  );
};
export default CommentForm;
