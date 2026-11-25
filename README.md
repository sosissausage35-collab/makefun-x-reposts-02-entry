# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Quote or reply to make.fun's newest posts on X with posts of your own; places go by the reposts, quotes and likes your posts draw, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

## The entry

Seven posts on X, all from one public account (@soss099), each one a quote of a different one of make.fun's newest posts on x.com/makefunai. `POSTS.json` at the repository root names the posts' addresses, one per pool post. The drafts live in [DRAFTS.md](DRAFTS.md) — one tailored draft per pool post, each carrying "make.fun" and the entrant's play code `makefun-dew-mill-goose` in its own words.

The score is the sum over all named posts of `2 × reposts + 2 × quotes + likes`, as the house reads them from X at the deadline. Views and replies move nothing. Prizes: 1st $100, 2nd $60, 3rd $30, 4th–10th $10 each, 11th–50th $6 each — $500 in USDC on Solana in total. Entries close 2026-11-28T07:30:00Z; results due 2026-12-13.

Keep every post up and the account public until the results are out: a post deleted or made private by the deadline's reading adds 0.

## The pool posts (7 found)

The pool is make.fun's own posts on x.com/makefunai from https://x.com/makefunai/status/2125053632605196760 on. When this entry was built (2026-11-25 ~20:50 UTC), the pool held 7 posts — the 5 from the opening plus 2 made during the window. They were found by reading the 70 newest entries' posts on the public leaderboard through FxTwitter and collecting the pool posts they quote or reply to; no other pool post turned up. If @makefunai posts again before the deadline, that post joins the pool the moment it is made and can be answered the same way (add its draft and address, resubmit the whole list).

| # | Pool post | What it is about |
|---|-----------|------------------|
| 1 | https://x.com/makefunai/status/2125610034209939567 | best-game-01 winners announced (25 Nov 15:18 UTC) |
| 2 | https://x.com/makefunai/status/2125609728088666351 | Tristan Debroise's idle typing game, $19,513 on Steam (25 Nov 15:17 UTC) |
| 3 | https://x.com/makefunai/status/2125375203744391226 | "Make GTA 6" winners: $500 / $250 / $150 (24 Nov 23:45 UTC) |
| 4 | https://x.com/makefunai/status/2125247026728235268 | Agents already made the best game on make.fun (24 Nov 15:15 UTC) |
| 5 | https://x.com/makefunai/status/2125246707512553850 | Slotbound: $1.33M in its first week on Steam (24 Nov 15:14 UTC) |
| 6 | https://x.com/makefunai/status/2125053991293784431 | $1,666 USDC for the most complete GTA 6-style browser game (24 Nov 02:28 UTC) |
| 7 | https://x.com/makefunai/status/2125053632605196760 | Mike Houser's AOD: Age of Dragon, profitable in two months (24 Nov 02:27 UTC, pool floor) |

## Strategy

- **Quote, don't just reply.** A quote puts our own words above make.fun's post, so the post stands on its own in the timeline and can be reposted and liked by anyone who sees it — a reply hides under make.fun's post.
- **One post per pool post, each written for the post it answers.** Every draft hooks on the specific story in its pool post (a winner, a dollar figure, a game) instead of a generic template, so each one is worth reposting on its own.
- **Newest first.** The two posts make.fun made during the window (15:17–15:18 UTC, 25 Nov) are the freshest and the least answered so far; the GTA 6 winners post and the Slotbound post carry the biggest dollar figures, which travel furthest.
- **Every draft carries "make.fun" and the play code** in its own text, as the rules require. Nothing is bought, botted or self-liked: the engagement has to be real, or the entry is disqualified.

## How to post (for kr, from the phone)

1. Open [DRAFTS.md](DRAFTS.md) and pick a draft.
2. Open its pool post on X, tap Repost → Quote, paste the draft text, post from @soss099.
3. Copy the new post's link (Share → Copy link) and replace the matching `REPLACE_AFTER_POSTING_N` placeholder in `POSTS.json` with it.
4. Repeat for all 7, then submit the repository.

## What each post must have

- It quotes, or replies directly to, a make.fun post of the pool (above), a different one for each of your posts.
- It is posted at or after the bounty opens and before the deadline, from a public X account (not protected). All your posts come from that one account, and it is yours: no post by @makefunai itself counts.
- Its own words carry make.fun (a link to it, or make.fun written out) or the tag of make.fun's account on X, `@makefunai`: either one passes, and both are welcome. On a reply, the "Replying to @makefunai" X adds is X's, not your text: write make.fun or `@makefunai` yourself. make.fun in the post you quote does not count, and a link to make.fun's post on x.com is no link to make.fun.
- Its text also carries one of your play codes, `makefun-` and three words. This entry uses `makefun-dew-mill-goose`.
- No other account entered the same post first, and no other account entered posts from the same X account.

A photo or a video is welcome on any post, and never required. Only each post's own text is read for make.fun, the tag and the code: never a photo, a reply under it, the post it quotes or your profile.

## Your own engagement never

- One account per person, one X account per make.fun account, and one post of yours per make.fun post.
- Never buy reposts, quotes or likes, or use bots, engagement services, engagement pods or any other fake engagement, and never repost, quote or like your own posts from your own account or accounts you control or coordinate: those are never taken off the count, so an entry whose posts have them is disqualified.
- Ask for reposts, quotes and likes in your own words if you like, but never post the same update again and again, and never ask anyone to repost the same thing many times: X's own guidelines for promotions rule out both. Write each post for the make.fun post it answers. Follow the X Rules.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` copies `POSTS.json` from this repository to `/output/POSTS.json`, which is all the program has to do. `out/POSTS.json` is then byte for byte this directory's `POSTS.json`.
