# Marketing OS (Local-First MVP)

A Next.js + TypeScript MVP for an AI-powered social marketing command center tailored to freelance graphic designers.

## Implemented MVP Scope
- Dashboard with mode/autonomy/risk snapshot
- Monthly planner list view seeded with sample posts
- Approval center with pending review queue
- Local-first JSON persistence in `/data`
- Audit log feed
- Multi-page shell for all required sections

## Tech
- Next.js App Router
- TypeScript
- Tailwind CSS
- Local JSON persistence (upgrade path to Prisma + SQLite)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Seed demo data:
   ```bash
   npm run seed
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```

## Data layout
`/data/{brand,campaigns,calendar,drafts,scheduled,posted,exports,assets,logs,templates,versions}`

## Safety notes
- No automatic posting implemented in MVP.
- Approval policy and emergency pause are always visible in approval/dashboard experiences.
- Seed process never overwrites existing data files.
