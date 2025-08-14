# @opendex-origon/icons

<div align="center">

![npm version](https://img.shields.io/npm/v/@opendex-origon/icons.svg)
![npm downloads](https://img.shields.io/npm/dm/@opendex-origon/icons.svg)
![npm license](https://img.shields.io/npm/l/@opendex-origon/icons.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)

**Biblioteca profesional de iconos SVG para React con tipado TypeScript completo**

*Desarrollado por Opendex Corporation*

[📖 Documentación](#documentación) • [🚀 Instalación](#instalación) • [💡 Ejemplos](#ejemplos) • [🔧 Desarrollo](#desarrollo)

</div>

---

## ✨ Características

- 🎨 **+10,000 iconos** organizados en categorías temáticas
- 📦 **Tipado TypeScript** completo con IntelliSense
- ⚡ **Build optimizado** (ESM + CJS) para máxima compatibilidad
- 🎯 **Tamaños flexibles** (números, strings, unidades CSS)
- 🌈 **Colores personalizables** con soporte para CSS variables
- 🔧 **Props nativos** de SVG (className, aria-label, etc.)
- 📱 **Responsive** y accesible por defecto
- 🚀 **Tree-shaking** automático para bundles optimizados

## 🚀 Instalación

```bash
npm install @opendex-origon/icons
```

```bash
yarn add @opendex-origon/icons
```

```bash
pnpm add @opendex-origon/icons
```

## 💡 Uso Básico

```tsx
import { User, Check, X, Settings } from '@opendex-origon/icons';

function App() {
  return (
    <div>
      {/* Tamaño con número (píxeles) */}
      <User size={24} />
      
      {/* Tamaño con string (unidades CSS) */}
      <Check size="1.5rem" color="green" />
      
      {/* Color personalizado */}
      <X size={32} color="red" />
      
      {/* Con className para estilos */}
      <Settings size={20} className="icon-spin" />
    </div>
  );
}
```

## 🎨 Categorías de Iconos

### UI Basics
```tsx
import { 
  Check, X, Plus, Minus, 
  Search, Filter, Sort, Menu 
} from '@opendex-origon/icons';
```

### Arrows
```tsx
import { 
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight 
} from '@opendex-origon/icons';
```

### Business & Finance
```tsx
import { 
  Dollar, Euro, Bitcoin, Chart,
  Wallet, CreditCard, Bank, Calculator 
} from '@opendex-origon/icons';
```

### Devices & Hardware
```tsx
import { 
  Phone, Laptop, Tablet, Desktop,
  Camera, Headphones, Keyboard, Mouse 
} from '@opendex-origon/icons';
```

### Communication
```tsx
import { 
  Email, Message, Phone, Video,
  Share, Link, Download, Upload 
} from '@opendex-origon/icons';
```

## 🔧 Props Disponibles

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Tamaño del icono (px, rem, em, etc.) |
| `color` | `string` | `currentColor` | Color del trazo |
| `strokeWidth` | `number` | `2` | Grosor del trazo |
| `fill` | `string` | `none` | Color de relleno |
| `className` | `string` | - | Clases CSS adicionales |
| `style` | `CSSProperties` | - | Estilos inline |
| `onClick` | `function` | - | Evento click |
| `...svgProps` | - | - | Todos los props nativos de SVG |

## 🎯 Ejemplos Avanzados

### Iconos con Estados
```tsx
import { Check, X, Loading } from '@opendex-origon/icons';

function StatusIcon({ status }) {
  switch (status) {
    case 'success':
      return <Check size={20} color="green" />;
    case 'error':
      return <X size={20} color="red" />;
    case 'loading':
      return <Loading size={20} className="animate-spin" />;
    default:
      return null;
  }
}
```

### Iconos Responsivos
```tsx
import { Menu, Close } from '@opendex-origon/icons';

function MobileMenu({ isOpen, onToggle }) {
  return (
    <button onClick={onToggle}>
      {isOpen ? (
        <Close size="1.5rem" />
      ) : (
        <Menu size="1.5rem" />
      )}
    </button>
  );
}
```

### Iconos con Temas
```tsx
import { Sun, Moon } from '@opendex-origon/icons';

function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle}>
      {theme === 'dark' ? (
        <Sun size={24} color="yellow" />
      ) : (
        <Moon size={24} color="blue" />
      )}
    </button>
  );
}
```

### Iconos con Animaciones
```tsx
import { Heart, Star } from '@opendex-origon/icons';

function AnimatedIcons() {
  return (
    <div>
      <Heart 
        size={24} 
        className="hover:scale-110 transition-transform" 
      />
      <Star 
        size={24} 
        className="animate-pulse" 
      />
    </div>
  );
}
```

## 📦 Importaciones Optimizadas

### Importación por Categoría
```tsx
// Importa todos los iconos de una categoría
import * as Arrows from '@opendex-origon/icons/Arrows';
import * as Business from '@opendex-origon/icons/Business';

// Uso
<Arrows.ArrowUp size={24} />
<Business.Dollar size={24} />
```

### Importación Individual (Recomendado)
```tsx
// Solo importa lo que necesitas (tree-shaking)
import { ArrowUp, Dollar } from '@opendex-origon/icons';
```

## 🎨 Personalización con CSS

```css
/* Estilos globales para iconos */
.opendex-icon {
  transition: all 0.2s ease;
}

.opendex-icon:hover {
  transform: scale(1.1);
}

/* Iconos con colores temáticos */
.icon-primary {
  color: var(--primary-color);
}

.icon-secondary {
  color: var(--secondary-color);
}

/* Animaciones personalizadas */
.icon-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## 🔧 Desarrollo

### Clonar el Repositorio
```bash
git clone https://github.com/opendex-origon/opendex-icons.git
cd opendex-icons
npm install
```

### Scripts Disponibles
```bash
npm run dev          # Desarrollo con watch
npm run build        # Build de producción
npm run generate     # Generar iconos desde SVG
npm run test         # Ejecutar tests
npm run lint         # Linting
npm run type-check   # Verificar tipos TypeScript
```

### Generar Nuevos Iconos
1. Coloca tus archivos SVG en `assets/svg/[categoria]/`
2. Ejecuta `npm run generate`
3. Los iconos se generarán automáticamente en `src/icons/`

## 📊 Estadísticas

- **Total de iconos**: +10,000
- **Categorías**: 25+
- **Estilos**: 5 (Light, Regular, Filled, Duotone, Duotone Line)
- **Tamaño del bundle**: ~5MB (comprimido)
- **Compatibilidad**: React 16.8+, TypeScript 4.0+

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la **Opendex Icons License v1.0** - ver el archivo [LICENSE](LICENSE) para más detalles.

**Uso permitido:**
- ✅ Aplicaciones que se integren con servicios de Opendex
- ✅ Proyectos internos de Opendex Corporation
- ✅ Demostraciones y ejemplos

**Uso restringido:**
- ❌ Aplicaciones comerciales no relacionadas con Opendex
- ❌ Redistribución sin autorización

Para usos comerciales fuera del alcance permitido, contacta a [licensing@opendex.com](mailto:licensing@opendex.com).

## 🆘 Soporte

- 📧 **Email**: support@opendex.com
- 💬 **Discord**: [Opendex Community](https://discord.gg/opendex)
- 📖 **Documentación**: [docs.opendex.com/icons](https://docs.opendex.com/icons)
- 🐛 **Issues**: [GitHub Issues](https://github.com/opendex-origon/opendex-icons/issues)

## 🙏 Agradecimientos

- Iconos diseñados por el equipo de Opendex Corporation
- Inspirado en las mejores prácticas de bibliotecas de iconos
- Construido con TypeScript y React

---

<div align="center">

**Hecho con ❤️ por [Opendex Corporation](https://opendex.com)**

[![Opendex](https://img.shields.io/badge/Opendex-Corporation-blue?logo=opendex)](https://opendex.com)

</div>


