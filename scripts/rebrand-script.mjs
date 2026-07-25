import fs from "fs";
import path from "path";

const DIRS_TO_PROCESS = [
  "docs",
  "web/content",
  "src",
  "web/src",
  "release-notes",
  ".agents",
];

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name !== "node_modules" &&
        entry.name !== ".git" &&
        entry.name !== "dist"
      ) {
        processDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (
        [
          ".md",
          ".mdx",
          ".ts",
          ".tsx",
          ".json",
          ".jsonc",
          ".html",
          ".js",
          ".mjs",
        ].includes(ext)
      ) {
        try {
          let content = fs.readFileSync(fullPath, "utf8");
          let updated = content
            .replaceAll("every-app/open-seo", "Hichamtach/SEOFlowX")
            .replaceAll("SEOFlowX", "SEOFlowX")
            .replaceAll("seoflowx.com", "seoflowx.com")
            .replaceAll("open-seo", "seoflowx");
          if (updated !== content) {
            fs.writeFileSync(fullPath, updated, "utf8");
            console.log(`Rebranded: ${fullPath}`);
          }
        } catch (e) {
          // ignore binary files or read errors
        }
      }
    }
  }
}

console.log("Starting SEOFlowX batch rebranding...");
DIRS_TO_PROCESS.forEach((dir) => processDirectory(path.resolve(dir)));
console.log("Rebranding completed successfully!");
