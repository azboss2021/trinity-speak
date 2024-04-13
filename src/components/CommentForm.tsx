"use client";

import { FaPaperPlane } from "react-icons/fa";
import RulesExtraInfo from "./RulesExtraInfo";
import { FaImage } from "react-icons/fa6";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { merriweather } from "@/lib/fonts";
import { useState } from "react";
import { MAXCHARACTERCOUNT } from "@/lib/constants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const WarningPercent = 95;
const CharCountUntilTextOnly = 10;

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
      <RulesExtraInfo />

      <textarea
        className={`${merriweather.className} textarea textarea-bordered h-auto w-full resize-none overflow-y-hidden px-4 py-3 leading-relaxed`}
        onChange={(e) => setCharacterCount(e.target.value.trim().length)}
        placeholder="Share your thoughts, stories, prayers, who, why, when, whatever."
      />
      {errors.comment && <span>{errors.comment.message}</span>}

      <div className="flex w-full items-center gap-2">
        <button className="btn btn-primary" type="button">
          Gif <FaImage />
        </button>

        <button
          className="btn btn-primary flex-1"
          disabled={characterCount > MAXCHARACTERCOUNT || characterCount < 1}
        >
          Submit <FaPaperPlane />
        </button>

        {characterCount > 0 && (
          <div className="h-[42px] w-[42px]">
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
                textColor: `${(characterCount / MAXCHARACTERCOUNT) * 100 < 100 ? "oklch(var(--p))" : "oklch(var(--er))"}`,
                textSize: "42px",
                backgroundColor: "oklch(var(--b1))",
              })}
            />
          </div>
          // ${(characterCount / MAXCHARACTERCOUNT) * 100 > 80 && "text-warning"} ${(characterCount / MAXCHARACTERCOUNT) * 100 > 100 && "text-error"}
          // ${(characterCount / MAXCHARACTERCOUNT) * 100}
        )}
      </div>
    </form>
  );
};
export default CommentForm;
