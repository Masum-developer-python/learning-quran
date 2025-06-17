/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 'media' for system preference
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        akber : ['akbar'],
        bangla : ["Siyam Rupali"],
        nastaleeq: ['nastaleeq-nafees', 'jameel-noori-nastaleeq', 'mehr-nastaleeq', 'lahori-nastaleeq', 'noto-nastaleeq'],
        arabic: ['saudi'],
        amiri : ['Amiri'],
        noto: ['Noto Naskh Arabic'],
        notoNastaleeq: ['noto-nastaleeq'],
        urdu: ['nastaleeq-nafees', 'jameel-noori-nastaleeq', 'mehr-nastaleeq', 'lahori-nastaleeq', 'noto-nastaleeq'], 
      }
    },
  },
  plugins: [require('tailwindcss-rtl')],
}


/** 
    <style>
      /* @font-face {
        font-family: "jameel-noori-nastaleeq";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/JameelNooriNastaleeq.woff")
          format("woff");
      } */
      /* @font-face {
        font-family: "nastaleeq";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/_PDMS_Jauhar_Regular.woff")
          format("woff");
      } */
      /* @font-face {
        font-family: "mehr-nastaleeq";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/MehrNastaleeq.ttf")
          format("ttf");
      } */
      /* @font-face {
        font-family: "nastaleeq-nafees";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/PDMS_NastaliqNafees.ttf")
          format("opentype");
      } */
      /* @font-face {
        font-family: "lahori-nastaleeq";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/AlviLahoriNastaleeq.woff2")
          format("woff2");
      } */
      /* @font-face {
        font-family: "jameel-noori-nastaleeq";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/JameelNooriNastaleeq.woff")
          format("woff");
      } */
      /* @font-face {
        font-family: "akbar";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/Akbar.woff")
          format("woff");
      } */
      /* @font-face {
        font-family: "saudi";
        src: url("https://github.com/quranacademy/test-arabic-fonts/blob/2642bd76b34faacad49b7b462a495e5b7705f899/fonts/saudi.ttf")
          format("opentype");
      } */
      /* @font-face {
        font-family: "noto-nastaleeq";
        src: url("https://cdn.jsdelivr.net/gh/tariq-abdullah/urdu-web-font-CDN/NotoNastaliqUrduDraft.woff")
          format("woff");
      } 
    </style>
    <!-- <link
      href="https://fonts.googleapis.com/css2?family=Siyam+Rupali&display=swap"
      rel="stylesheet"
    /> -->

    <!---https://github.com/tariq-abdullah/urdu-web-font-CDN?tab=readme-ov-file-->*/