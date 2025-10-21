# Assets - Boom Digital Agency

Esta carpeta contiene todos los recursos multimedia del proyecto.

## Estructura Recomendada

```
assets/
├── images/
│   ├── logo.png                    # Logo principal de la agencia
│   ├── favicon.ico                 # Favicon del sitio
│   ├── og-image.jpg                # Imagen para Open Graph
│   ├── verificado.png              # Badge de verificación para CEO
│   ├── hero/
│   │   ├── hero-bg.jpg             # Imagen de fondo del hero
│   │   └── hero-illustration.svg   # Ilustración del hero
│   ├── services/
│   │   ├── service-1.svg           # Icono Asistente IA
│   │   ├── service-2.svg           # Icono Bots Omnicanal
│   │   ├── service-3.svg           # Icono Campañas Garantizadas
│   │   └── service-4.svg           # Icono Growth Simulator
│   ├── dashboard/
│   │   ├── metrics-chart.svg       # Gráfico de métricas
│   │   └── analytics-icon.svg      # Icono de analytics
│   └── testimonials/
│       ├── testimonial-1.jpg       # Foto testimonio 1
│       ├── testimonial-2.jpg       # Foto testimonio 2
│       └── testimonial-3.jpg       # Foto testimonio 3
└── videos/
    ├── hero-video.mp4              # Video de fondo opcional
    └── demo-video.mp4              # Video demostrativo
```

## Especificaciones Técnicas

### Imágenes
- **Formatos**: PNG, JPG, SVG, WebP
- **Resolución**: Mínimo 1920x1080 para imágenes de fondo
- **Optimización**: Comprimir para web
- **Peso máximo**: 500KB por imagen

### Videos
- **Formatos**: MP4, WebM
- **Duración**: Máximo 30 segundos para videos de fondo
- **Compresión**: H.264 para compatibilidad
- **Peso máximo**: 5MB por video

### Iconos
- **Formatos**: SVG preferido, PNG para compatibilidad
- **Tamaño**: 24x24px a 64x64px
- **Estilo**: Coherente con la identidad visual

## Guías de Uso

### Logo
- Usar siempre en alta resolución
- Mantener proporciones originales
- Versiones: color, blanco y negro

### Imágenes de Servicios
- Ilustraciones vectoriales preferidas
- Estilo minimalista y profesional
- Coherencia en paleta de colores

### Imágenes de Testimonios
- Fotos de perfil profesional
- Tamaño consistente: 80x80px
- Formato circular o cuadrado

## Optimización

### Para Desarrollo
```bash
# Instalar herramientas de optimización
npm install -g imagemin-cli

# Optimizar imágenes
imagemin assets/images/* --out-dir=dist/assets/images
```

### Para Producción
- Usar formatos WebP cuando sea posible
- Implementar lazy loading
- Usar CDN para assets estáticos

## Notas Importantes

1. **Derechos de Autor**: Asegurar que todas las imágenes tengan licencia comercial
2. **Accesibilidad**: Incluir textos alternativos para todas las imágenes
3. **Performance**: Optimizar tamaño y formato para carga rápida
4. **Responsive**: Proporcionar múltiples resoluciones cuando sea necesario

## Recursos Sugeridos

- **Iconos**: [Heroicons](https://heroicons.com/), [Feather Icons](https://feathericons.com/)
- **Ilustraciones**: [Undraw](https://undraw.co/), [Freepik](https://www.freepik.com/)
- **Fotos**: [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/)
