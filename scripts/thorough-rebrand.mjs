import fs from "fs";
import path from "path";

const DIRS = ["docs", "web", "src", "release-notes", ".agents", "scripts"];

function processFile(filePath) {
  const ext = path.extname(filePath);
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
      ".txt",
      ".webmanifest",
    ].includes(ext)
  ) {
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let updated = content
        .replaceAll("seoflowx.com", "seoflowx.com")
        .replaceAll("seoflowx-landing", "seoflowx-landing")
        .replaceAll("seoflowx-waitlist", "seoflowx-waitlist")
        .replaceAll(
          "SEOFLOWX_TELEMETRY_DISABLED",
          "SEOFLOWX_TELEMETRY_DISABLED",
        )
        .replaceAll("seoFlowXAnalyticsLoaded", "seoFlowXAnalyticsLoaded")
        .replaceAll("seoFlowXOAuthProvider", "seoFlowXOAuthProvider")
        .replaceAll("SeoFlowXOAuthEnv", "SeoFlowXOAuthEnv")
        .replaceAll(
          "createSeoFlowXOAuthProvider",
          "createSeoFlowXOAuthProvider",
        )
        .replaceAll(
          "handleSelfHostedSeoFlowXMcpRequest",
          "handleSelfHostedSeoFlowXMcpRequest",
        )
        .replaceAll(
          "handleAuthenticatedSeoFlowXMcpRequest",
          "handleAuthenticatedSeoFlowXMcpRequest",
        )
        .replaceAll("registerSeoFlowXMcpTools", "registerSeoFlowXMcpTools")
        .replaceAll("createSeoFlowXMcpServer", "createSeoFlowXMcpServer")
        .replaceAll("seoflowx", "seoflowx")
        .replaceAll("SEOFlowX", "SEOFlowX")
        .replaceAll("SEOFlowX", "SEOFlowX");
      if (updated !== content) {
        fs.writeFileSync(filePath, updated, "utf8");
        console.log(`Rebranded: ${filePath}`);
      }
    } catch (e) {}
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (
        !["node_modules", ".git", "dist", ".tanstack-start"].includes(
          entry.name,
        )
      ) {
        processDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      processFile(fullPath);
    }
  }
}

console.log("Starting thorough SEOFlowX text rebrand...");
DIRS.forEach((d) => processDirectory(path.resolve(d)));
processFile(path.resolve("wrangler.jsonc"));
console.log("Thorough rebrand complete!");
