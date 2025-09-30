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
      { text: "DiceGameDApp Using CDN", link: "/dice-game-dapp" },
      { text: "DiceGameDApp Using @zama-fhe/relayer-sdk", link: "/dice-game-dapp-relayer-sdk" },
      { text: "Demo ", link: "/final-demo" }
    ]
  },
  {
    text: "How it works",
    items: [
      { text: "Brief", link: "/test-example" }
    ]
  },
  {
    text: "Misc",
    items: [
      { text: "What can i do next?", link: "/misc" }
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
      link: "https://github.com/chimmykk"
    },
    {
      icon: "discord",
      link: "https://discord.gg/8fPYHXdX"
    },
    {
      icon: "x",
      link: "https://x.com/rilso_y"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4IiwgInNpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiOyBcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2b2NzXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcIkZIRVZNIGJ5IFphbWFcIixcbiAgZGVzY3JpcHRpb246IFwiTGVhcm4gRkhFVk0gYnkgZXhwbG9yaW5nIGNvZGUgc2FtcGxlcyAmIGRlcGxveSBkYXBwc1wiLFxuICB0aXRsZVRlbXBsYXRlOiBcIiVzIC0gRkhFVk0tYnktWmFtYVwiLFxuICAvKipAc2VlIGh0dHBzOi8vdm9jcy5kZXYvZG9jcy9hcGkvY29uZmlnI2VsZW1lbnQgKi9cbiAgaGVhZDogKCBcbiAgICA8PlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJGSEVWTSBieSBaYW1hXHUwMEI3IExlYXJuIGFuZCBidWlsZCBvbiBaYW1hIGJ5IGV4cGxvcmluZyBjb2RlIHNhbXBsZXNcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2ZoZXZtLnh5ei9maGV2bS1vZy5wbmdcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9maGV2bS54eXpcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIGNhcmVmdWxseSBjdXJhdGVkLCBsaWdodHdlaWdodCwgY29tcG9zYWJsZSwgYW5kIHR3ZWFrYWJsZSBGSEVWTSBzdGFydGVyIHBhY2sgdG8gZ2V0IHlvdSB3cml0aW5nIGZvciB0aGUgWmFtYSBibG9ja2NoYWluIGZhc3RlciB0aGFuIHlvdSBjYW4gc2F5IEphY2suXCIgLz5cbiAgICA8Lz4gXG4gICksXG4gIHNpZGViYXIsXG4gIHJvb3REaXI6IFwiLlwiLFxuICBpY29uVXJsOiB7IGxpZ2h0OiBcIi9zYmUtaWNvbi1saWdodC5zdmdcIiwgZGFyazogXCIvc2JlLWljb24tZGFyay5zdmdcIiB9LFxuICBsb2dvVXJsOiB7IGxpZ2h0OiBcIi9zYmUtaWNvbi1saWdodC5zdmdcIiwgZGFyazogXCIvc2JlLWljb24tZGFyay5zdmdcIiB9LFxuICBzb2NpYWxzOiBbXG4gICAge1xuICAgICAgaWNvbjogXCJnaXRodWJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2NoaW1teWtrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcImRpc2NvcmRcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9kaXNjb3JkLmdnLzhmUFlIWGRYXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBcInhcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly94LmNvbS9yaWxzb195XCIsXG4gICAgfSxcbiAgXSxcbiAgdGhlbWU6IHtcbiAgICBhY2NlbnRDb2xvcjoge1xuICAgICAgbGlnaHQ6IFwiI2ZmOTMxOFwiLFxuICAgICAgZGFyazogXCIjZmZjNTE3XCIsXG4gICAgfSxcbiAgfSxcbiAgdG9wTmF2OiBbXG4gICAge1xuICAgICAgdGV4dDogXCJQbGF5Z3JvdW5kXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJyZW1peC1pZGVcIixcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vcmVtaXguZXRoZXJldW0ub3JnL1wiLFxuICAgICAgICB9LFxuICAgIFxuICAgICAgICBcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkNvZGUgU25pcHBldFwiLFxuICAgICAgbGluazogXCIvZGljZS1nYW1lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkZIRVZNXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYExlYXJuIEZIRVZNYCxcbiAgICAgICAgICBsaW5rOiBgL2ludHJvZHVjdGlvbmAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNoYW5nZWxvZ1wiLFxuICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJDb250cmlidXRpbmdcIixcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgc2VhcmNoOiB7XG4gICAgYm9vc3REb2N1bWVudChkb2N1bWVudElkKSB7XG4gICAgICBpZiAoZG9jdW1lbnRJZC5zdGFydHNXaXRoKFwicGFnZXNcIikpIHJldHVybiAyO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSxcbiAgfSxcbiAgZWRpdExpbms6IHtcbiAgICBwYXR0ZXJuOlxuICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vXCIsXG4gICAgdGV4dDogXCJTdWdnZXN0IGNoYW5nZXMgdG8gdGhpcyBwYWdlXCIsXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3llaXRlcmlsc29zaW5na29pcmVuZy9Eb3dubG9hZHMvc29yb2Jhbi1ieS1leGFtcGxlLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy95ZWl0ZXJpbHNvc2luZ2tvaXJlbmcvRG93bmxvYWRzL3Nvcm9iYW4tYnktZXhhbXBsZS1tYWluL3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3llaXRlcmlsc29zaW5na29pcmVuZy9Eb3dubG9hZHMvc29yb2Jhbi1ieS1leGFtcGxlLW1haW4vc2lkZWJhci50c1wiO2NvbnN0IHNpZGViYXIgPSBbXG4gICAge1xuICAgICAgICB0ZXh0OiAnSW50cm9kdWN0aW9uJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ0ZIRVZNJywgbGluazogJy9pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdJbnN0YWxsYXRpb24nLCBsaW5rOiAnL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsIGxpbms6ICcvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRGljZSBHYW1lJywgbGluazogJy9kaWNlLWdhbWUnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdEaWNlR2FtZURBcHAgVXNpbmcgQ0ROJywgbGluazogJy9kaWNlLWdhbWUtZGFwcCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ0RpY2VHYW1lREFwcCBVc2luZyBAemFtYS1maGUvcmVsYXllci1zZGsnLCBsaW5rOiAnL2RpY2UtZ2FtZS1kYXBwLXJlbGF5ZXItc2RrJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnRGVtbyAnLCBsaW5rOiAnL2ZpbmFsLWRlbW8nIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRleHQ6ICdIb3cgaXQgd29ya3MnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnQnJpZWYnLCBsaW5rOiAnL3Rlc3QtZXhhbXBsZScgfSxcbiAgICAgICBcbiAgICAgICAgXSxcblxuICAgIH0sXG4gICAge1xuICAgICAgICB0ZXh0OiAnTWlzYycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdXaGF0IGNhbiBpIGRvIG5leHQ/JywgbGluazogJy9taXNjJyB9LFxuICAgICAgXG4gICAgICAgIF0sXG4gICAgfSxcblxuXG4gIFxuICBcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXI7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7OztBQ0R1VSxJQUFNLFVBQVU7QUFBQSxFQUNoWDtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0gsRUFBRSxNQUFNLFNBQVMsTUFBTSxnQkFBZ0I7QUFBQSxNQUN2QyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sZ0JBQWdCO0FBQUEsTUFDOUMsRUFBRSxNQUFNLG1CQUFtQixNQUFNLG1CQUFtQjtBQUFBLE1BQ3BELEVBQUUsTUFBTSxhQUFhLE1BQU0sYUFBYTtBQUFBLE1BQ3hDLEVBQUUsTUFBTSwwQkFBMEIsTUFBTSxrQkFBa0I7QUFBQSxNQUMxRCxFQUFFLE1BQU0sNENBQTRDLE1BQU0sOEJBQThCO0FBQUEsTUFDeEYsRUFBRSxNQUFNLFNBQVMsTUFBTSxjQUFjO0FBQUEsSUFDekM7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0gsRUFBRSxNQUFNLFNBQVMsTUFBTSxnQkFBZ0I7QUFBQSxJQUUzQztBQUFBLEVBRUo7QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDSCxFQUFFLE1BQU0sdUJBQXVCLE1BQU0sUUFBUTtBQUFBLElBRWpEO0FBQUEsRUFDSjtBQUtKO0FBRUEsSUFBTyxrQkFBUTs7O0FEeEJYLG1CQUNFLEtBREY7QUFOSixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixlQUFlO0FBQUE7QUFBQSxFQUVmLE1BQ0UsaUNBQ0U7QUFBQSx3QkFBQyxVQUFLLFVBQVMsV0FBVSxTQUFRLFdBQVU7QUFBQSxJQUMzQyxvQkFBQyxVQUFLLFVBQVMsWUFBVyxTQUFRLHVFQUFtRTtBQUFBLElBQ3JHLG9CQUFDLFVBQUssVUFBUyxZQUFXLFNBQVEsa0NBQWlDO0FBQUEsSUFDbkUsb0JBQUMsVUFBSyxVQUFTLFVBQVMsU0FBUSxxQkFBb0I7QUFBQSxJQUNwRCxvQkFBQyxVQUFLLFVBQVMsa0JBQWlCLFNBQVEsMkpBQTBKO0FBQUEsS0FDcE07QUFBQSxFQUVGO0FBQUEsRUFDQSxTQUFTO0FBQUEsRUFDVCxTQUFTLEVBQUUsT0FBTyx1QkFBdUIsTUFBTSxxQkFBcUI7QUFBQSxFQUNwRSxTQUFTLEVBQUUsT0FBTyx1QkFBdUIsTUFBTSxxQkFBcUI7QUFBQSxFQUNwRSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFHRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGNBQWMsWUFBWTtBQUN4QixVQUFJLFdBQVcsV0FBVyxPQUFPLEVBQUcsUUFBTztBQUMzQyxhQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLFNBQ0U7QUFBQSxJQUNGLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
