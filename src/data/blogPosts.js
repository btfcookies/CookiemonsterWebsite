// Each post takes: title, date, text, and an optional `images` array.
// Every image is { src, caption?, alt? }:
//   src     - either an imported asset:  import fluxPlot from "../assets/blog/flux-plot.png"
//             or a path under public/:   "/flux-plot.png"
//   caption - text shown under the image (optional)
//   alt     - screen-reader description; falls back to the caption (optional)
//
// Prefer the import form: Vite hashes the file and the build fails loudly if
// the image is missing, instead of shipping a broken <img> at runtime.

const blogPosts = [
   {
    title: "Stars",
    date: "August 15, 2026",
    text:"I recently found out about a Python library called lightkurve, which allows you to analyze data from the Kepler and TESS telescopes. I wrote a script that uses matplotlib to plot flux data for a selected star in the library. \nI started off by taking a look at some random stars, such as TIC 261136679 (recorded by the TESS telescope). When looking at the plot (shown in the image) I noticed two things. The first is the 4 dips in flux. After doing some research with Claude, I found out that these were caused by planets. Secondly, there is a large white gap in the center of the plot. Since there was no data whatsoever in that time period, I thought it must be some sort of issue in the antenna. After asking Claude, I found out that this was actually intentional. At the perigree of TESS (and most satellites)'s orbit, data collection is paused so that the antenna can be pointed down toward Earth to beam down collected data.",
    images: [
      { src: "/Figure_1.png", caption: "This is the plot that I made for TIC 261136679", alt: "temp" },
    ],
   },
  {
    title: "an error in qbreader",
    date: "May 13, 2026",
    text: "This was in reality a really simple error, but it took me like an hour to find out the cause. The error was that on qbreader, the clear stats button would only reset tossup points in multiplayer rooms, but it wouldn't reset bonus points until the user reloaded the page. I couldn't figure out what was wrong, since BonusRoom.clearStats() didn't seem to have any issues. Eventually, I realized that the issue was in the client side code, where the clearStats() function only affected tossup points.",
  },
  {
    title: "Discord UI",
    date: "April 27, 2026",
    text: "While working on Cortis recently, I noticed that Cortis' UI looked very cramped compared to Discord's UI, even though the actual spacing of each section of the site was roughly the same, and some parts of Cortis' UI were actually more spacious than Discord's.\n\nI took a closer look at Discord's UI and found something interesting. Discord actually uses slightly different colors for each section of the site, which gives the illusion that each section is more spaced out than it actually is.\n\nNot only that, instead of using bold lines to separate each section, Discord uses very subtle, thin lines which also gives the illusion of more space.\n\nI think this is a really clever UI feature, and I might try implementing something similar in Cortis' UI in the future.",
  },
  {
    title: "Debugging Cortis",
    date: "April 24, 2026",
    text: "For 2 days, I couldn't figure out a strange error coming from Cortis' API.\n\nThe error:\n\nReferenceError: Cannot access 'state' before initialization\n    at getUser (cortis/server/index.js:148:3)\n    at befriend (cortis/server/index.js:171:17)\n    at createSeedState (cortis/server/index.js:63:3)\n\nI initially thought this was coming from the createSeedState() function, where it returned the state data using return state.data, which I replaced with return data.\n\nHowever, I got the same error after running the server again.\n\nI eventually tried adding a separate definition of state, let state before the function createSeedState() was called.\n\nThis worked, which helped me realize that the error was caused by a temporal dead zone where state was being accessed before it was initialized.",
  },
]

export default blogPosts
