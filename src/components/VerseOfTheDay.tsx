"use client";

import { useEffect, useState } from "react";

const VerseOfTheDay = ({
  verse,
}: {
  verse: {
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
  };
}) => {
  const [translation, setTranslation] = useState("kjv");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="">{verse.reference}</h2>
        <h3 className="text-xl">{verse.text}</h3>
      </div>

      <div className="flex flex-col">
        <div className="label">
          <span className="label-text">Translation</span>
        </div>
        <select
          className="select select-bordered select-sm"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
        >
          <option disabled selected>
            Choose Translation
          </option>
          <option value="cherokee">Cherokee New Testament</option>
          <option value="bkr">Bible kralická</option>
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
          <option value="webbe">World English Bible, British Edition</option>
          <option value="oeb-us">Open English Bible, US Edition</option>
          <option value="clementine">Clementine Latin Vulgate</option>
          <option value="almeida">João Ferreira de Almeida</option>
          <option value="rccv">
            Protestant Romanian Corrected Cornilescu Version
          </option>
        </select>
      </div>
    </div>
  );
};
export default VerseOfTheDay;
