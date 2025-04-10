# Convivio Theme System

## Color System

The Convivio application uses a dual-color system:

1. **Convivio Brand Colors**
   - `convivio-bg`: Main background color (#f4f2e5)
   - `convivio-text`: Primary text color (#3d615a)
   - `convivio-accent`: Accent color (#8B4513)

   These colors are implemented as CSS custom properties and can be used with opacity:
   ```tsx
   className="text-convivio-accent" // Full opacity
   className="text-convivio-accent/80" // 80% opacity
   ```

2. **shadcn/ui Theme Colors**
   Used by shadcn/ui components for consistent styling:
   - `background/foreground`: Base colors
   - `primary/secondary`: Button and interactive element colors
   - `muted`: Subtle UI elements
   - `accent`: Component accents
   - `destructive`: Error states
   - `popover`: Dropdown and modal backgrounds
   - `border/ring`: Form and interactive element borders

## Usage Guidelines

1. **Brand Elements**
   - Use Convivio colors for main brand elements
   - Headers, CTAs, and brand-specific UI should use `convivio-text` and `convivio-accent`
   - Main content areas should use `convivio-bg`

2. **Components**
   - shadcn/ui components will use their theme colors by default
   - Override component colors only when necessary for brand consistency

3. **Accessibility**
   - Ensure sufficient contrast when using colors with opacity
   - Text on colored backgrounds should maintain WCAG AA compliance

## Theme Utilities

The `theme.ts` file provides utilities for working with the theme:
```typescript
import { convivioColors, withOpacity } from '@/lib/theme';

// Type-safe color access
const color = convivioColors.accent;

// Opacity utility
const colorWithOpacity = withOpacity('--convivio-accent', 0.8);
``` 