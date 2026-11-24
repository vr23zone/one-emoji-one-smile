import { mkdirSync, writeFileSync } from "node:fs";

const HEART_HANDS: string = "🫶";

const OUTPUT_DIR: string = "/output";
const OUTPUT_FILE: string = "/output/entry.txt";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, HEART_HANDS + "\n", "utf8");

process.exit(0);
