import os

DIRS = ["docs", "web", "src", "release-notes", ".agents", "specs", "runbooks", "public", "badseo"]
FILES = ["Dockerfile.selfhost", "compose.yaml", "alchemy.run.ts", "alchemy.preview-access.run.ts", "alchemy.access.ts", "wrangler.jsonc", ".env.production.example"]

def replace_in_file(file_path):
    if not os.path.exists(file_path):
        return
    ext = os.path.splitext(file_path)[1]
    if ext in [".md", ".mdx", ".ts", ".tsx", ".json", ".jsonc", ".html", ".js", ".mjs", ".txt", ".webmanifest", ".css", ".yaml", ".yml", ""]:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            updated = content.replace("openseo.so", "seoflowx.com")
            updated = updated.replace("OPENSEO_TELEMETRY_DISABLED", "SEOFLOWX_TELEMETRY_DISABLED")
            updated = updated.replace("openSeoFactSheet", "seoFlowXFactSheet")
            updated = updated.replace("openSeoAuth", "seoFlowXAuth")
            updated = updated.replace("openseo-dark", "seoflowx-dark")
            updated = updated.replace("openseo", "seoflowx")
            updated = updated.replace("OpenSEO", "SEOFlowX")
            updated = updated.replace("Open SEO", "SEOFlowX")
            if updated != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(updated)
                print(f"Rebranded: {file_path}")
        except Exception as e:
            pass

for root_dir in DIRS:
    for root, dirs, files in os.walk(root_dir):
        if "node_modules" in dirs: dirs.remove("node_modules")
        if ".git" in dirs: dirs.remove(".git")
        for file in files:
            replace_in_file(os.path.join(root, file))

for file in FILES:
    replace_in_file(file)

print("Final rebrand pass completed!")
