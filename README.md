# SEOFlowX

> **Next-Generation Open-Source SEO & AI Intelligence Platform**

<p center>
  <img width="800" alt="SEOFlowX Banner" src="public/seoflowx-logo.png" />
</p>

**SEOFlowX** is a powerful, pay-as-you-go alternative to Semrush and Ahrefs. Built for marketers, growth engineers, agencies, and AI coding agents, SEOFlowX gives you complete control over your search data, keyword research, rank tracking, and site audits.

---

## 🚀 Key Features & Value-Add Enhancements

- **All-In-One Search Intelligence**: Keyword research, rank tracking, domain analysis, backlink audits, SERP feature breakdowns, and AI visibility monitoring.
- **DataForSEO Google Sheets Connector Hub**: Seamlessly export search data into Google Sheets using our pre-built formula templates and direct [DataForSEO Connector Integration](https://dataforseo.com/google-sheets-connector?connector_aff=313166).
- **AI SERP & Content Outline Generator**: Instantly generate structured, rankable content briefs (H1/H2/H3 headings, target word counts, semantic terms) from live keyword data.
- **Branded White-Label Export Engine**: Download clean CSV and report exports with custom agency header blocks for client deliverables.
- **AI Agent MCP Server & Workflow Skills**: Connect SEOFlowX directly to AI clients like Claude Code, Codex, or OpenClaw using our built-in MCP server.
- **Pay-As-You-Go Efficiency**: Bring your own DataForSEO API key and pay only for what you use — no overpriced SaaS subscriptions.

---

## 🔑 DataForSEO Integration & API Setup

SEOFlowX connects directly to DataForSEO for live SERP, keyword, domain, and backlink data.

1. Create a DataForSEO account at [DataForSEO API Access](https://app.dataforseo.com/api-access?aff=313166).
2. Request your credentials by email and copy your Base64 API Key.
3. Save the key as `DATAFORSEO_API_KEY` in your environment (see [`docs/DATAFORSEO_API_KEY.md`](./docs/DATAFORSEO_API_KEY.md)).

---

## 🛠️ Self-Hosting Paths

SEOFlowX supports two flexible self-hosting deployment options:

- **Simple (Docker)**: Recommended for local development or single-machine deployment. See [`docs/SELF_HOSTING_DOCKER.md`](./docs/SELF_HOSTING_DOCKER.md).
- **Advanced (Cloudflare Workers)**: Deploy to Cloudflare's global edge network on their free/paid tier. See [`docs/SELF_HOSTING_CLOUDFLARE.md`](./docs/SELF_HOSTING_CLOUDFLARE.md).

---

## 💻 Local Development Setup

Clone your repository and install dependencies:

```powershell
git clone https://github.com/Hichamtach/SEOFlowX.git
cd SEOFlowX
pnpm install
pnpm dev
```

Open `http://localhost:3000` to launch the SEOFlowX dashboard!

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
