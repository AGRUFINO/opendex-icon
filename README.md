### @origon/icons

Colección de iconos SVG para React con tipado TypeScript y build ESM/CJS.

#### Instalación

```bash
npm install @origon/icons
```

#### Uso básico

```tsx
import { Check, X } from '@origon/icons';

export default function Example() {
  return (
    <div>
      <Check size={32} color="#111" />
      <X size="1.5rem" color="tomato" />
    </div>
  );
}
```

- **size**: número o string (p. ej. 24, "1.5rem").
- **color**: color del trazo. Por defecto `currentColor`.
- Se admiten todos los props de `SVGSVGElement` (por ejemplo `className`, `aria-label`, etc.).

#### Generar iconos desde SVG (con categorías)

Coloca tus SVG en `assets/svg/` y ejecuta:

```bash
npm run generate
```

Soporta subcarpetas (categorías). Ejemplo:

```
assets/svg/
  arrows/
    chevron-left.svg
    chevron-right.svg
  system/
    check.svg
    x.svg
```

El generador creará:

```
src/icons/
  Arrows/
    ChevronLeft.tsx
    ChevronRight.tsx
    index.ts  # export * as Arrows
  System/
    Check.tsx
    X.tsx
    index.ts  # export * as System
  index.ts    # reexporta iconos y namespaces
```

Uso:

```tsx
import { System } from '@origon/icons/icons';
// o importación directa
import ChevronLeft from '@origon/icons/icons/Arrows/ChevronLeft';
```

#### Desarrollo y build

```bash
npm run dev    # build en watch
npm run build  # build de producción (ESM y CJS + d.ts)
```

#### Publicación

1. Asegúrate de tener `npm login` con acceso al scope `@origon`.
2. Sube de versión en `package.json`.
3. `npm publish --access public`.

#### Licencia

Opendex Icons License v1.0 (source-available, uso restringido a apps que se integren con servicios de Opendex). Para usos fuera de ese alcance, solicita licencia comercial en licensing@opendex.com.


