"use client";

// import { merriweather } from "@/lib/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCopy, FaShare } from "react-icons/fa6";

const VerseOfTheDay = () =>
  // {
  //   verse,
  // }: {
  //   verse: {
  //     reference: string;
  //     verses: {
  //       book_id: string;
  //       book_name: string;
  //       chapter: number;
  //       verse: number;
  //       text: string;
  //     }[];
  //     text: string;
  //     translation_id: string;
  //     translation_name: string;
  //     translation_note: string;
  //   };
  // }
  {
    const [verse, setVerse] = useState<{
      reference: string;
      verses: {
        book_id: string;
        book_name: string;
        chapter: number;
        verse: number;
        text: string;
      }[];
      text: string;
      translation_id: string;
      translation_name: string;
      translation_note: string;
      date: Date;
    } | null>(null);
    const [translation, setTranslation] = useState("kjv");

    useEffect(() => {
      const fetchVerse = async () => {
        setVerse(null);

        const response = await fetch(
          `https://bible-api.com/john%203:16?translation=${translation}`,
          {
            method: "GET",
          },
        );
        const data = await response.json();

        setVerse({ ...data, date: new Date() });
      };

      fetchVerse();
    }, [translation]);

    if (!verse)
      return (
        <div className="flex flex-col gap-4">
          <div className="card w-full border">
            <div className="card-body p-4 md:p-8">
              <div className="skeleton h-8 w-24" />
              <div className="skeleton h-40 w-full" />
              <div className="skeleton h-6 w-full" />
              <div className="card-actions mt-2 flex w-full items-center justify-center gap-1 md:justify-between">
                <div className="flex gap-1">
                  <div className="skeleton h-12 w-16 md:w-24" />
                  <div className="skeleton h-12 w-16 md:w-24" />
                </div>
                <div className="skeleton h-12 w-24 md:w-32" />
              </div>
            </div>
          </div>
        </div>
      );

    return (
      <div className="flex flex-col gap-4">
        <div className="card w-full border">
          <div className="card-body p-4 md:p-8">
            <h2 className={`font-serif text-base font-extrabold md:text-xl`}>
              {verse.reference}
            </h2>

            <p className={`font-serif text-2xl md:text-3xl`}>{verse.text}</p>

            <select
              className="select select-bordered select-sm mt-2 rounded-none border-l-0 border-r-0 border-t-0 px-1"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
            >
              <option disabled>Choose Translation</option>
              <option value="asv">American Standard Version (1901)</option>
              <option value="bbe">Bible in Basic English</option>
              <option value="darby">Darby Bible</option>
              <option value="dra">Douay-Rheims 1899 American Edition</option>
              <option value="kjv">King James Version</option>
              <option value="web">World English Bible</option>
              <option value="ylt">Young&apos;s Literal Translation</option>
              <option value="oeb-cw">
                Open English Bible, Commonwealth Edition
              </option>
              <option value="webbe">
                World English Bible, British Edition
              </option>
              <option value="oeb-us">Open English Bible, US Edition</option>
              <option value="almeida">João Ferreira de Almeida</option>
            </select>

            <div className="card-actions mt-2 flex w-full items-center justify-between gap-1">
              <div className="flex gap-1">
                <button className="btn btn-sm md:btn-md">
                  Copy <FaCopy />
                </button>
                <button className="btn btn-primary btn-sm md:btn-md">
                  Share <FaShare />
                </button>
              </div>

              <Link
                href=""
                target="_blank"
                role="button"
                className="btn btn-ghost btn-sm md:btn-md"
              >
                Go To Chapter <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default VerseOfTheDay;
