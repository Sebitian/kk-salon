# Services Page Fuzzy Search Research

## Goal
Add a search bar at the top of each services page (`salon-services`, `spa-services`, `weddings-services`) that supports fuzzy matching for service names and related text.

## Current Architecture (Relevant)
- Each page renders a hero + shared `ServicesContent` component.
- Data is passed as `sections` from:
  - `components/services/salon-services-data.ts`
  - `components/services/spa-services-data.ts`
  - `components/services/weddings-services-data.ts`
- `ServicesContent` renders grouped service rows and accordions.

This is ideal for adding search once in `ServicesContent`, then reusing it across all service pages.

## What "Fuzzy Search" Should Mean Here
Expected user behavior:
- Typo tolerance (`collor` should match `color`)
- Partial matching (`balay` should match `balayage`)
- Multi-word relevance (`bridal makeup` should prioritize bridal makeup services)
- Fast response on mobile (especially iPhone)

Recommended searchable fields:
- Service name (highest priority)
- Service description (medium priority)
- Group title + section title (lower priority)

## Implementation Options

### Option A: Fuse.js (Recommended)
Use `fuse.js` for weighted fuzzy matching.

Pros:
- Strong fuzzy quality out of the box
- Configurable relevance scoring and thresholds
- Handles typos and partial tokens better than simple `includes`

Cons:
- Adds one small dependency
- Slight setup complexity vs basic filtering

Best fit for your use case.

### Option B: Manual scoring (No dependency)
Build custom matching with `includes`, token overlap, and simple edit distance.

Pros:
- No added package
- Full control

Cons:
- More code to maintain
- Usually lower result quality vs Fuse.js
- Harder to tune for mixed queries

### Option C: Server-side search endpoint
Create API route and search on server.

Pros:
- Useful at large scale or very large datasets

Cons:
- Not needed for current static in-memory service lists
- More moving parts and latency

Not recommended for this project right now.

## Recommended Technical Design

### 1) Add search UI in `ServicesContent` near the top
- Place search bar above the mapped sections.
- Include:
  - input (`Search services...`)
  - clear button (`X`)
  - optional result count (`12 results`)

### 2) Build normalized search index from `sections`
Flatten each service item into:
- `id`
- `sectionId`
- `groupTitle`
- `name`
- `description`
- `price`

### 3) Run fuzzy query and collect matching service IDs
- Use `Fuse` instance memoized with `useMemo`.
- On input change, run search and store matching IDs in a `Set`.

### 4) Filter render output by matching IDs
- Keep existing section layout.
- For each group, only render matching services.
- Hide empty groups and sections while query is active.
- If query is empty, render full unfiltered view.

### 5) Empty state and UX
- If no matches:
  - show friendly message (`No services found. Try a different keyword.`)
  - keep clear button visible

## Suggested Fuse Configuration (Starting Point)
- `keys` with weights:
  - `name` weight `0.55`
  - `description` weight `0.25`
  - `groupTitle` weight `0.12`
  - `sectionTitle` weight `0.08`
- `threshold`: `0.35` (lower = stricter)
- `ignoreLocation`: `true`
- `minMatchCharLength`: `2`

These values should work well for salon/spa terms with minor typos.

## Mobile/iPhone Considerations
- Keep search bar full-width with comfortable tap target (`>=44px` height).
- Avoid fixed-width containers that can overflow.
- Use debounced query updates (`120-180ms`) to reduce re-render churn on older iPhones.
- Keep results list in existing flow (no heavy overlay UI).

## Performance Notes
- Dataset size is moderate; client-side fuzzy search is appropriate.
- Use `useMemo` for:
  - flattened data
  - Fuse instance
  - filtered section tree
- Avoid rebuilding objects on every keystroke unless query changes.

## Accessibility Notes
- Use proper label (`label` or `aria-label`).
- Announce results count via `aria-live="polite"`.
- Ensure clear button is keyboard accessible.
- Keep visible focus styles.

## SEO Notes
- Search is interactive UI only; base page content still exists server-rendered.
- Current JSON-LD can remain unchanged.
- Do not hide all content by default; only filter after user enters a query.

## Rollout Plan
1. Add dependency: `fuse.js`
2. Add search state + index in `ServicesContent`
3. Filter sections/groups/items by result IDs
4. Add empty state + result count
5. Test on:
   - iPhone widths (375px / 390px / 430px)
   - typo and partial queries
   - zero-result case
   - no-query default behavior

## Acceptance Criteria
- Search bar appears near top of all three services pages.
- Query supports typo-tolerant fuzzy matching.
- Results update quickly and do not cause horizontal overflow on iPhone.
- Clearing query restores full services list exactly as before.
- No linter/type errors introduced.

