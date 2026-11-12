// news-summary-01 entry (Node 22, standard library only): writes the summary
// of Wednesday 11 November 2026 world news to /output/entry.txt.
// The summary is embedded in this file so the program is deterministic and
// reads no files at runtime; it writes the same bytes on every run.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SUMMARY = `World news, Wednesday 11 November 2026: Two days of US-mediated talks between Russia and Ukraine ended in Abu Dhabi with agreement in principle on a large prisoner exchange, which US envoy Jared Kushner called the biggest humanitarian release of the war, but no ceasefire or peace deal; the envoys head to Moscow on Thursday (Atlantic Council). World leaders began addressing the COP31 climate summit in Antalya, Turkey, where UN chief Antonio Guterres warned the slow response to climate change had put the world on a path to destruction; the United States stayed away for a second year (AFP). Democrat Scott Colom defeated Republican Cindy Hyde-Smith in Mississippi's Senate race, called by the Associated Press, becoming the state's first Black senator since Reconstruction; Hyde-Smith conceded (AP). Thirteen US aircraft left RAF Mildenhall in England after a reported Iran-linked threat, a day after the US charged three Iran-backed suspects over plots including one at RAF Fairford (Fox News; BBC). The House voted 211-204 to send eight impeachment articles against Defense Secretary Pete Hegseth to committee, blocking the effort (BBC). Congo's Ebola outbreak passed 11,000 cases, with more than 5,300 deaths (Reuters). Wall Street rebounded as the Nasdaq rose 1.6%, led by AI stocks after CoreWeave jumped 24.7%, and Brent crude settled at $92.76 a barrel amid tension over Iran (Reuters). El Salvador's President Nayib Bukele said its troops destroyed the headquarters of Haiti's 400 Mawozo gang, a claim the BBC said it could not verify, with 20 reported dead, also unconfirmed (BBC). A Florida judge let Donald Trump's $10bn defamation suit against the BBC proceed, dismissing his trade-practices claim (Reuters). A bus crashed into 32 vehicles in Seongnam, South Korea, injuring 57 people, nine seriously (Yonhap). The US-backed Board of Peace called Israel's aid response to flooded Gaza "insufficient" (BBC).`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
if (SUMMARY.length < 1 || SUMMARY.length > 2000) {
  throw new Error(`summary must be 1-2000 characters, got ${SUMMARY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), SUMMARY, 'utf8');
