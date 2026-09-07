# Phase UI-2 UI SDK Foundation

## Summary

Phase UI-2 establishes the official MatjerHub UI SDK repository (`matjeroapps/ui-sdk`) and package (`@matjerhub/ui`). The duplicated local `packages/ui` folders previously maintained across application repositories (`seller`, `supplier`, `admin`, `platform`) have been migrated into the centralized UI SDK repository as the single source of truth. All frontend applications now consume `@matjerhub/ui` directly from the UI SDK package.

---

## Architecture Changes

```
matjeroapps/

core

ui-sdk  <-- Single source of truth for @matjerhub/ui
  │
  ├─> seller
  ├─> supplier
  ├─> admin
  ├─> platform
  └─> storefront
```

1. **Centralized UI SDK Repository**:
   - `matjeroapps/ui-sdk` owns all design tokens, base components, data components, layout primitives, application shell frames, and global styles.
2. **Eliminated Code Duplication**:
   - Removed local `packages/ui` folders from `seller`, `supplier`, `admin`, and `platform`.
3. **Clean Package API & Workspace Resolution**:
   - Exposed clean root package exports (`import { Button, Container, Stack, Grid, PageHeader, DashboardLayout } from '@matjerhub/ui'`).
   - Exposed global style token imports (`import '@matjerhub/ui/styles.css'`).

---

## Repository Impact

* **`matjeroapps/ui-sdk`**: Created repository foundation, package structure (`packages/ui`), Vitest test suite, and GitHub Actions CI workflow (`.github/workflows/ci.yml`).
* **`matjeroapps/seller`**: Removed local `packages/ui`, updated `package.json` workspaces, point `@matjerhub/ui` dependency to `ui-sdk`, updated Vite configuration aliases.
* **`matjeroapps/supplier`**: Removed local `packages/ui`, updated `package.json` workspaces, point `@matjerhub/ui` dependency to `ui-sdk`, updated Vite configuration aliases.
* **`matjeroapps/admin`**: Removed local `packages/ui`, updated `package.json` workspaces, point `@matjerhub/ui` dependency to `ui-sdk`, updated Vite configuration aliases.
* **`matjeroapps/platform`**: Removed local `packages/ui`, updated `package.json` workspaces, point `@matjerhub/ui` dependency to `ui-sdk`.

---

## Components Migrated

### Base Components
* `Button` (variants: primary, secondary, outline, ghost, danger)
* `Input` (types: text, password, search, helper/error states)
* `Select`
* `Checkbox`
* `Radio`
* `Card` (variants: default, glass, interactive)
* `Badge` (status badges)
* `Dialog` (accessible modal dialogs)
* `Drawer` (slide-over panels)
* `Tabs` (accessible tabbed views)
* `Dropdown` (menu popovers)
* `Toast` (notification toasts)
* `Alert` (feedback banners)

### Data Components
* `Table` (data grids)
* `Pagination` (page navigation controls)
* `EmptyState` (empty placeholder views)
* `Skeleton` (shimmer loading indicators)

### Layout Primitives
* `Container` (responsive width boundaries)
* `Stack` (flex direction, gap, alignment layout container)
* `Grid` (CSS grid container with dynamic columns and gap options)
* `PageHeader` (header with title, subtitle, actions slot, and breadcrumbs)

### Shell & Navigation
* `DashboardLayout` (collapsible sidebar, top nav, workspace selector, breadcrumbs, user menu, notifications area)
* Navigation configuration builders for `sellerNavigation`, `supplierNavigation`, and `adminNavigation`.

---

## Design Tokens

Centralized design tokens declared in `packages/ui/src/styles/tokens.css` using CSS variables:
* **Colors**: `--color-background`, `--color-foreground`, `--color-primary`, `--color-muted-foreground`, `--color-border`, `--color-card-bg`, etc.
* **Typography**: Font family, size scale, font weights.
* **Spacing**: 8pt grid system (`--spacing-1` through `--spacing-12`).
* **Radius**: Border radius tokens (`--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`).
* **Shadows**: Elevation shadow levels.

---

## Package API

Consumers import components directly from `@matjerhub/ui`:

```tsx
import {
  Button,
  Card,
  Container,
  Stack,
  Grid,
  PageHeader,
  DashboardLayout,
  sellerNavigation,
} from '@matjerhub/ui';
import '@matjerhub/ui/styles.css';
```

---

## Testing

* **`ui-sdk`**: 18/18 Vitest unit tests pass (`npm run test`, `npm run lint`, `npm run typecheck`, `npm run build`).
* **`seller`**: 51/51 Vitest unit tests pass, `npm run build` succeeds, Next.js storefront builds cleanly.
* **`supplier`**: 1/1 Vitest unit test passes, `npm run build` succeeds.
* **`admin`**: 46/46 Vitest unit tests pass, `npm run build` succeeds.

---

## Known Limitations

* None. Applications build and run standalone cleanly. Future published `@matjerhub/ui` npm releases will use the existing GitHub Actions CI workflow in `ui-sdk`.

---

## Final Verification Status

* **`ui-sdk`**: PASS
* **`seller`**: PASS
* **`supplier`**: PASS
* **`admin`**: PASS
* **`platform`**: PASS
