import { createFileRoute } from "@tanstack/react-router";

const DATAFORSEO_GOOGLE_SHEETS_CONNECTOR_URL =
  "https://dataforseo.com/google-sheets-connector?connector_aff=313166";

export const Route = createFileRoute("/_app/help/google-sheets-connector")({
  component: GoogleSheetsConnectorHubPage,
});

function GoogleSheetsConnectorHubPage() {
  return (
    <div className="px-4 py-4 md:px-6 md:py-6 pb-24 md:pb-8 overflow-auto">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header Hero */}
        <div className="card bg-gradient-to-r from-primary/10 via-base-100 to-base-100 border border-primary/20 shadow-sm">
          <div className="card-body gap-3">
            <div className="flex items-center gap-2">
              <span className="badge badge-primary badge-sm font-semibold uppercase tracking-wider">
                SEOFlowX Extension
              </span>
            </div>
            <h1 className="text-3xl font-bold text-base-content">
              DataForSEO Google Sheets Connector Hub
            </h1>
            <p className="text-base text-base-content/80">
              Export live search volume, keyword difficulty, backlinks, and SERP
              data directly into Google Sheets without writing complex code.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                className="btn btn-primary"
                href={DATAFORSEO_GOOGLE_SHEETS_CONNECTOR_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get Google Sheets Connector
              </a>
              <a
                className="btn btn-outline"
                href="https://dataforseo.com/?aff=313166"
                target="_blank"
                rel="noreferrer"
              >
                DataForSEO Portal
              </a>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body gap-2">
              <h3 className="font-semibold text-base">
                Instant Keyword Volume
              </h3>
              <p className="text-xs text-base-content/70">
                Pull monthly search volume, CPC, and competition scores for
                thousands of keywords straight into cell ranges.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body gap-2">
              <h3 className="font-semibold text-base">Live SERP Rankings</h3>
              <p className="text-xs text-base-content/70">
                Track real-time rankings and SERP features (featured snippets,
                AI Overviews, People Also Ask) directly in Sheets.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body gap-2">
              <h3 className="font-semibold text-base">
                Automated Client Audits
              </h3>
              <p className="text-xs text-base-content/70">
                Create recurring automated SEO reports for client dashboards
                that auto-refresh on a weekly schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Steps */}
        <div className="card bg-base-100 border border-base-300">
          <div className="card-body gap-4">
            <h2 className="card-title text-lg">Installation & Setup Guide</h2>
            <ol className="list-decimal pl-5 text-sm space-y-3 text-base-content/80">
              <li>
                Open the{" "}
                <a
                  className="link link-primary font-medium"
                  href={DATAFORSEO_GOOGLE_SHEETS_CONNECTOR_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  DataForSEO Google Sheets Connector Page
                </a>{" "}
                and click <strong>Install Extension</strong>.
              </li>
              <li>
                Open any Google Sheet, navigate to <code>Extensions</code> -&gt;{" "}
                <code>DataForSEO Connector</code> -&gt; <code>Settings</code>.
              </li>
              <li>
                Enter your DataForSEO API Credentials (Base64 key or Login +
                Password).
              </li>
              <li>
                Use pre-built custom functions such as{" "}
                <code>=DATAFORSEO_KEYWORDS_FOR_KEYWORDS("seo software")</code>{" "}
                directly in cell formulas.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
