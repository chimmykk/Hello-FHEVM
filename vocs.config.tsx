import * as React from "react"; 
import { defineConfig } from "vocs";
import sidebar from "./sidebar";

export default defineConfig({
  title: "FHEVM by Zama",
  description: "Learn FHEVM by exploring code samples & deploy dapps",
  titleTemplate: "%s - FHEVM-by-Zama",
  /**@see https://vocs.dev/docs/api/config#element */
  head: ( 
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FHEVM by Zama· Learn and build on Zama by exploring code samples" />
      <meta property="og:image" content="https://fhevm.xyz/fhevm-og.png" />
      <meta property="og:url" content="https://fhevm.xyz" />
      <meta property="og:description" content="A carefully curated, lightweight, composable, and tweakable FHEVM starter pack to get you writing for the Zama blockchain faster than you can say Jack." />
    </> 
  ),
  sidebar,
  rootDir: ".",
  iconUrl: { light: "/sbe-icon-light.svg", dark: "/sbe-icon-dark.svg" },
  logoUrl: { light: "/sbe-icon-light.svg", dark: "/sbe-icon-dark.svg" },
  socials: [
    {
      icon: "github",
      link: "https://github.com/chimmykk",
    },
    {
      icon: "discord",
      link: "https://discord.gg/8fPYHXdX",
    },
    {
      icon: "x",
      link: "https://x.com/rilso_y",
    },
  ],
  theme: {
    accentColor: {
      light: "#ff9318",
      dark: "#ffc517",
    },
  },
  topNav: [
    {
      text: "Playground",
      items: [
        {
          text: "remix-ide",
          link: "https://remix.ethereum.org/",
        },
    
        
      ],
    },
    {
      text: "Code Snippet",
      link: "/dice-game",
    },
    {
      text: "FHEVM",
      items: [
        {
          text: `Learn FHEVM`,
          link: `/introduction`,
        },
     
        {
          text: "Contributing",
          link: "https://github.com/chimmykk/Hello-FHEVM/blob/main/CONTRIBUTING.md",
        },
      ],
    },
  ],
  search: {
    boostDocument(documentId) {
      if (documentId.startsWith("pages")) return 2;
      return 1;
    },
  },
  editLink: {
    pattern:
      "https://github.com/",
    text: "Suggest changes to this page",
  },
});
