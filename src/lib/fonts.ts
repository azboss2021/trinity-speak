import {
  Inter,
  Merriweather,
  Montserrat,
  Open_Sans,
  Playfair_Display,
  Poppins,
} from "next/font/google";
// import localFont from "next/font/local";

export const open_sans = Open_Sans({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "hebrew",
    "latin",
    "latin-ext",
    "math",
    "symbols",
    "vietnamese",
  ],
});

export const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export const playfair_display = Playfair_Display({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
});

export const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari", "latin", "latin-ext"],
});

export const inter = Inter({ subsets: ["latin"] });

// export const impact = localFont({
//   src: "./fonts/impact.ttf",
//   display: "swap",
// });
