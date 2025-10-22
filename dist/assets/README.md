# Assets Directory

Esta carpeta contiene todos los recursos estáticos del proyecto Boom Digital Agency.

## Estructura Recomendada

```
assets/
├── images/
│   ├── logo.png              # Logo principal de la agencia
│   ├── favicon.ico           # Icono del sitio
│   ├── og-image.jpg          # Imagen para redes sociales
│   ├── verificado.png        # Icono de verificación para CEO
│   ├── hero-background.jpg   # Imagen de fondo para hero section
│   └── service-icons/        # Iconos para servicios
│       ├── ai-assistant.svg
│       ├── omnichannel.svg
│       ├── campaigns.svg
│       └── growth-simulator.svg
└── videos/
    ├── hero-video.mp4        # Video de fondo opcional
    └── demo-videos/          # Videos demostrativos
```

## Optimización de Imágenes

Para mejor performance, recomendamos:

1. **Formatos**: Usar WebP cuando sea posible, con fallback a PNG/JPG
2. **Tamaños**: 
   - Hero images: 1920x1080px (máximo)
   - Service icons: 64x64px o 128x128px
   - Logo: 200x60px (responsive)
3. **Compresión**: Optimizar todas las imágenes antes de subir

## Lazy Loading

Todas las imágenes y videos implementan lazy loading automático para mejor performance.

## Uso en el Código

```html
<!-- Imagen optimizada con lazy loading -->
<img 
  src="/assets/images/hero-background.jpg" 
  alt="Boom Digital Agency" 
  loading="lazy"
  class="w-full h-auto"
>

<!-- Video con lazy loading -->
<video 
  src="/assets/videos/hero-video.mp4" 
  autoplay muted loop 
  loading="lazy"
  class="w-full"
></video>
```

## Notas Importantes

- Mantener nombres de archivos descriptivos y en minúsculas
- No incluir espacios en nombres de archivos
- Verificar que todos los assets referenciados existan
- Optimizar para web (compresión, formatos adecuados)
