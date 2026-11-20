# GTA 6 Robbery Goes Wrong — a vertical clip for make.fun

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/fahroz1/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/fahroz1/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01): one GTA 6 moment, cut into a short vertical clip that hooks the viewer with the game and then pitches make.fun. Places go by the video's views, the most first; the top 20 share $500.

## The clip

**Source:** the official Grand Theft Auto VI Trailer 2 from Rockstar Games on YouTube (downloaded as source footage in the recorded build session).

**The moment (one moment, not a montage):** the convenience-store robbery — Lucia's "Trust me, this is going to be easy" cutting straight into the robbery and the getaway chase. It opens on dialogue and instantly recognizable GTA chaos: the robbery, the duo's chemistry, Vice City energy. The first two seconds already show action and the game's two leads, which is what stops a scroller — the robbery-gone-wrong is the classic GTA fantasy, and it is the strongest single beat of the trailer.

**The hook:** a cold open on the robbery itself — no slow intro, the first frame is the action.

**The pitch (on screen, ffmpeg drawtext, end of the clip):** after the moment, the clip turns to the viewer for about six seconds:

- "Make clips like this with AI" (3 seconds)
- "and earn money on make.fun" (3 seconds)
- "make.fun/bounty/gta6-clipper-01" beneath

The text sits centered inside the vertical frame's safe area, clear of YouTube's buttons at the bottom and the right edge.

**The cut:** trimmed to the moment (under 60 seconds, so it is a Short), blur-filled and cropped to vertical 9:16 (1080x1920), rendered with ffmpeg in the recorded build session. The rendered file is `clip.mp4`.

## The video

The clip goes up on YouTube as a public Short, with the bounty's line and the entrant's play code in its description. `VIDEO.json` at this repository's root names its address.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to the output directory. That is all it has to do — the house reads the video itself through the YouTube Data API. It resolves paths relative to its own file, never the working directory, and refuses to copy a `VIDEO.json` whose `url` is not a YouTube video address.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
