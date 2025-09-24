// vocs.config.tsx
import { defineConfig } from "file:///Users/yeiterilsosingkoireng/Downloads/soroban-by-example-main/node_modules/.pnpm/vocs@1.0.0-alpha.55_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1_rollup@4.21.0_typescript@5.5.4/node_modules/vocs/_lib/index.js";

// sidebar.ts
var sidebar = [
  {
    text: "Introduction",
    items: [
      { text: "FHEVM", link: "/introduction" },
      { text: "Installation", link: "/installation" },
      { text: "Getting Started", link: "/getting-started" },
      { text: "Dice Game", link: "/dice-game" },
      { text: "DiceGameDApp", link: "/dice-game-dapp" },
      { text: "Demo ", link: "/final-demo" }
    ]
  },
  {
    text: "Basic",
    items: [
      { text: "Counter", link: "/basic-counter-contract" }
    ]
  },
  {
    text: "How it works",
    items: [
      { text: "Brief", link: "/test-example" }
    ]
  }
];
var sidebar_default = sidebar;

// vocs.config.tsx
import { Fragment, jsx, jsxs } from "file:///Users/yeiterilsosingkoireng/Downloads/soroban-by-example-main/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js";
var vocs_config_default = defineConfig({
  title: "FHEVM by Zama",
  description: "Learn FHEVM by exploring code samples & deploy dapps",
  titleTemplate: "%s - FHEVM-by-Zama",
  /**@see https://vocs.dev/docs/api/config#element */
  head: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "FHEVM by Zama\xB7 Learn and build on Zama by exploring code samples" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://fhevm.xyz/fhevm-og.png" }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://fhevm.xyz" }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: "A carefully curated, lightweight, composable, and tweakable FHEVM starter pack to get you writing for the Zama blockchain faster than you can say Jack." })
  ] }),
  sidebar: sidebar_default,
  rootDir: ".",
  iconUrl: { light: "/sbe-icon-light.svg", dark: "/sbe-icon-dark.svg" },
  logoUrl: { light: "/sbe-icon-light.svg", dark: "/sbe-icon-dark.svg" },
  socials: [
    {
      icon: "github",
      link: "https://github.com/"
    },
    {
      icon: "discord",
      link: "https://discord.gg/"
    },
    {
      icon: "x",
      link: "https://x.com/"
    }
  ],
  theme: {
    accentColor: {
      light: "#ff9318",
      dark: "#ffc517"
    }
  },
  topNav: [
    {
      text: "Playground",
      items: [
        {
          text: "remix-ide",
          link: "https://remix.ethereum.org/"
        }
      ]
    },
    {
      text: "Code Snippet",
      link: "/dice-game"
    },
    {
      text: "FHEVM",
      items: [
        {
          text: `Learn FHEVM`,
          link: `/introduction`
        },
        {
          text: "Changelog",
          link: "https://github.com/"
        },
        {
          text: "Contributing",
          link: "https://github.com/"
        }
      ]
    }
  ],
  search: {
    boostDocument(documentId) {
      if (documentId.startsWith("pages")) return 2;
      return 1;
    }
  },
  editLink: {
    pattern: "https://github.com/",
    text: "Suggest changes to this page"
  }
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgInNpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiOyBcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2b2NzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcIkZIRVZNIGJ5IFphbWFcIixcbiAgZGVzY3JpcHRpb246IFwiTGVhcm4gRkhFVk0gYnkgZXhwbG9yaW5nIGNvZGUgc2FtcGxlcyAmIGRlcGxveSBkYXBwc1wiLFxuICB0aXRsZVRlbXBsYXRlOiBcIiVzIC0gRkhFVk0tYnktWmFtYVwiLFxuICAvKipAc2VlIGh0dHBzOi8vdm9jcy5kZXYvZG9jcy9hcGkvY29uZmlnI2VsZW1lbnQgKi9cbiAgaGVhZDogKCBcbiAgICA8PlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJGSEVWTSBieSBaYW1hXHUwMEI3IExlYXJuIGFuZCBidWlsZCBvbiBaYW1hIGJ5IGV4cGxvcmluZyBjb2RlIHNhbXBsZXNcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2ZoZXZtLnh5ei9maGV2bS1vZy5wbmdcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9maGV2bS54eXpcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIGNhcmVmdWxseSBjdXJhdGVkLCBsaWdodHdlaWdodCwgY29tcG9zYWJsZSwgYW5kIHR3ZWFrYWJsZSBGSEVWTSBzdGFydGVyIHBhY2sgdG8gZ2V0IHlvdSB3cml0aW5nIGZvciB0aGUgWmFtYSBibG9ja2NoYWluIGZhc3RlciB0aGFuIHlvdSBjYW4gc2F5IEphY2suXCIgLz5cbiAgICA8Lz4gXG4gICksXG4gIHNpZGViYXIsXG4gIHJvb3REaXI6IFwiLlwiLFxuICBpY29uVXJsOiB7IGxpZ2h0OiBcIi9zYmUtaWNvbi1saWdodC5zdmdcIiwgZGFyazogXCIvc2JlLWljb24tZGFyay5zdmdcIiB9LFxuICBsb2dvVXJsOiB7IGxpZ2h0OiBcIi9zYmUtaWNvbi1saWdodC5zdmdcIiwgZGFyazogXCIvc2JlLWljb24tZGFyay5zdmdcIiB9LFxuICBzb2NpYWxzOiBbXG4gICAge1xuICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogXCJkaXNjb3JkXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vZGlzY29yZC5nZy9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFwieFwiLFxuICAgICAgbGluazogXCJodHRwczovL3guY29tL1wiLFxuICAgIH0sXG4gIF0sXG4gIHRoZW1lOiB7XG4gICAgYWNjZW50Q29sb3I6IHtcbiAgICAgIGxpZ2h0OiBcIiNmZjkzMThcIixcbiAgICAgIGRhcms6IFwiI2ZmYzUxN1wiLFxuICAgIH0sXG4gIH0sXG4gIHRvcE5hdjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiUGxheWdyb3VuZFwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwicmVtaXgtaWRlXCIsXG4gICAgICAgICAgbGluazogXCJodHRwczovL3JlbWl4LmV0aGVyZXVtLm9yZy9cIixcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJDb2RlIFNuaXBwZXRcIixcbiAgICAgIGxpbms6IFwiL2RpY2UtZ2FtZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJGSEVWTVwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IGBMZWFybiBGSEVWTWAsXG4gICAgICAgICAgbGluazogYC9pbnRyb2R1Y3Rpb25gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJDaGFuZ2Vsb2dcIixcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQ29udHJpYnV0aW5nXCIsXG4gICAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIHNlYXJjaDoge1xuICAgIGJvb3N0RG9jdW1lbnQoZG9jdW1lbnRJZCkge1xuICAgICAgaWYgKGRvY3VtZW50SWQuc3RhcnRzV2l0aChcInBhZ2VzXCIpKSByZXR1cm4gMjtcbiAgICAgIHJldHVybiAxO1xuICAgIH0sXG4gIH0sXG4gIGVkaXRMaW5rOiB7XG4gICAgcGF0dGVybjpcbiAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL1wiLFxuICAgIHRleHQ6IFwiU3VnZ2VzdCBjaGFuZ2VzIHRvIHRoaXMgcGFnZVwiLFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy95ZWl0ZXJpbHNvc2luZ2tvaXJlbmcvRG93bmxvYWRzL3Nvcm9iYW4tYnktZXhhbXBsZS1tYWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveWVpdGVyaWxzb3Npbmdrb2lyZW5nL0Rvd25sb2Fkcy9zb3JvYmFuLWJ5LWV4YW1wbGUtbWFpbi9zaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95ZWl0ZXJpbHNvc2luZ2tvaXJlbmcvRG93bmxvYWRzL3Nvcm9iYW4tYnktZXhhbXBsZS1tYWluL3NpZGViYXIudHNcIjtjb25zdCBzaWRlYmFyID0gW1xuICAgIHtcbiAgICAgICAgdGV4dDogJ0ludHJvZHVjdGlvbicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdGSEVWTScsIGxpbms6ICcvaW50cm9kdWN0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnSW5zdGFsbGF0aW9uJywgbGluazogJy9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdHZXR0aW5nIFN0YXJ0ZWQnLCBsaW5rOiAnL2dldHRpbmctc3RhcnRlZCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0RpY2UgR2FtZScsIGxpbms6ICcvZGljZS1nYW1lJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRGljZUdhbWVEQXBwJywgbGluazogJy9kaWNlLWdhbWUtZGFwcCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0RlbW8gJywgbGluazogJy9maW5hbC1kZW1vJyB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnQmFzaWMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnQ291bnRlcicsIGxpbms6ICcvYmFzaWMtY291bnRlci1jb250cmFjdCcgfSxcbiAgICAgIFxuICAgICAgICBdLFxuICAgIH0sXG5cbiB7XG4gICAgICAgIHRleHQ6ICdIb3cgaXQgd29ya3MnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnQnJpZWYnLCBsaW5rOiAnL3Rlc3QtZXhhbXBsZScgfSxcbiAgICAgICBcbiAgICAgICAgXSxcblxuICAgIH0sXG4gIFxuICBcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXI7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7OztB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
