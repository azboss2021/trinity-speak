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
        className={`${merriweather.className} textarea textarea-bordered h-48 w-full px-4 py-3 leading-relaxed`}
        onChange={(e) => setCharacterCount(e.target.value.trim().length)}
        placeholder="Share your thoughts, stories, prayers, who, why, when, whatever."
      />
      {errors.comment && <span>{errors.comment.message}</span>}

      <div className="flex w-full items-center gap-2">
        <button className="btn" type="button">
          Gif <FaImage />
        </button>
        <button
          className="btn btn-primary flex-1"
          disabled={characterCount > MAXCHARACTERCOUNT || characterCount < 1}
        >
          Submit <FaPaperPlane />
        </button>
        <div
          className="radial-progress bg-base-200 text-primary"
          style={{
            "--value": (characterCount / MAXCHARACTERCOUNT) * 100,
            "--size": "36px",
          }}
          role="progressbar"
        />
      </div>
    </form>
  );
};
export default CommentForm;
