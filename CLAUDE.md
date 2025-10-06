# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + TypeScript + Vite application with shadcn/ui components, React Hook Form, Zod validation, and React Router.

## Development Commands

- **Start dev server**: `npm run dev` (runs Vite with HMR)
- **Build**: `npm run build` (runs TypeScript compiler + Vite build)
- **Lint**: `npm run lint` (ESLint with TypeScript support)
- **Preview production build**: `npm run preview`

## Architecture

### Routing Structure

The application uses React Router with a nested routing pattern defined in `src/main.tsx`:

- Root route (`/`) → `RootRoute` → `Home` component
- Custom challenge route (`/custom-challenge`) → `CustomChallengeRoute` → `CustomChallenge` component
- Both routes have dedicated wrapper components (`RootRoute`, `CustomChallengeRoute`) that render `<Outlet />` for their children

### shadcn/ui Integration

This project uses shadcn/ui components (configured in `components.json`):
- **Style**: new-york
- **Path alias**: `@/` maps to `src/` (configured in `vite.config.ts`)
- **UI components location**: `src/components/ui/`
- **Utility function**: `cn()` in `src/lib/utils.ts` for Tailwind class merging

### Form Handling Pattern

Forms use React Hook Form + Zod for validation:
```typescript
// Define schema
const FormSchema = z.object({
  field: z.string().min(2, { message: "..." })
})

// Initialize form
const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
  defaultValues: { ... }
})

// Handle submission
function onSubmit(data: z.infer<typeof FormSchema>) {
  toast({ ... }) // Use shadcn toast for user feedback
}
```

### Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (button, form, input, label, toast, etc.)
│   ├── hooks/       # Custom hooks (use-toast)
│   ├── Home.tsx     # Home page component
│   └── CustomChallenge.tsx  # Challenge form component
├── lib/
│   └── utils.ts     # Utility functions (cn for className merging)
├── routes/
│   ├── RootRoute.tsx
│   └── CustomChallengeRoute.tsx
├── utils/
│   └── constants.ts # App constants
└── main.tsx         # Router configuration and app entry point
```

### Styling

- **Tailwind CSS** with custom configuration
- **CSS Variables** enabled for theming (defined in `index.css`)
- Base color: gray
- Use `cn()` utility for conditional/merged class names
