# makefun-news-summary

make.fun bounty **news-summary-01** — "Write the best summary of 11 November's world news" ($200 shared by the top 20 entries).

## What it is

A deterministic Node 22 program (standard library only, no network) that writes one summary of Wednesday 11 November 2026 world news, in English, to `/output/entry.txt`. The summary is embedded in `main.ts` and `summary.txt` holds the same text.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The output is 1,922 characters (limit 2,000), UTF-8, byte-identical on every run. The summary covers 11 stories, ordered by importance and each sourced: the Abu Dhabi Russia-Ukraine talks (Atlantic Council), COP31 in Antalya (AFP), Mississippi's Senate race (AP), the Iran-linked threat to US forces in Britain (Fox News; BBC), the blocked Hegseth impeachment (BBC), Congo's Ebola outbreak (Reuters), Wall Street's rebound and oil (Reuters), El Salvador's Haiti operation (BBC), Trump's BBC suit (Reuters), the Seongnam bus crash (Yonhap), and Gaza flood aid (BBC).

## Owner

- GitHub: tiafatiara62-coder
- Referral: r6xcxcc9 — https://make.fun/r/r6xcxcc9
