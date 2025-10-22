# Boom Digital Agency 🚀

Una plataforma web moderna y profesional para agencias digitales, construida con tecnologías de vanguardia y optimizada para GitHub Pages.

## ✨ Características

- **Diseño Minimalista**: Estilo profesional inspirado en Nike.com.ar
- **Totalmente Responsive**: Mobile-first design
- **Panel CEO Exclusivo**: Gestión de contenido en tiempo real
- **Chatbot IA**: Asistente virtual con DeepSeek API
- **Integración Firebase**: Autenticación y base de datos en tiempo real
- **SEO Optimizado**: Meta tags, Open Graph y structured data
- **Animaciones Suaves**: Fade-in y slide-up al hacer scroll
- **Performance**: Lighthouse score >95

## 🛠️ Tecnologías

- **Frontend**: HTML5, TailwindCSS 4.x, JavaScript ES6+
- **Backend**: Firebase (Auth + Firestore)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 16+ 
- Cuenta de Firebase

### Configuración Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/boom-digital-agency.git
cd boom-digital-agency
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com)
   - Habilita Authentication (Email/Password) y Firestore
   - Copia tu configuración a `src/firebase.js`

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

### Configuración para GitHub Pages

1. **Preparar para deploy**
```bash
npm run build
```

2. **Subir a GitHub**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

3. **Configurar GitHub Pages**
   - Ve a Settings → Pages
   - Source: "GitHub Actions"
   - El workflow automático desplegará tu sitio

> **Nota importante**: El proyecto está configurado para usar TailwindCSS via CDN para máxima compatibilidad con GitHub Pages. Se han corregido todas las rutas para evitar errores 404.

## 📁 Estructura del Proyecto

```
boom-digital-agency/
├── index.html                 # Página principal
├── package.json              # Dependencias y scripts
├── vite.config.js            # Configuración de Vite
├── tailwind.config.js        # Configuración de TailwindCSS
├── _config.yml               # Configuración GitHub Pages
├── .nojekyll                 # Desactiva Jekyll processing
├── src/
│   ├── main.js               # Punto de entrada de la aplicación
│   ├── firebase.js           # Configuración y funciones Firebase
│   └── components/
│       ├── Header.js         # Navegación y autenticación
│       ├── Hero.js           # Sección principal
│       ├── Services.js       # Servicios de la agencia
│       ├── Dashboard.js      # Panel de métricas IA
│       ├── Club.js           # Testimonios y beneficios
│       ├── Footer.js         # Pie de página
│       ├── AuthModal.js      # Modal de autenticación
│       ├── CEOPanel.js       # Panel exclusivo para CEO
│       └── ChatBot.js        # Chatbot con DeepSeek API
└── assets/
    ├── images/               # Imágenes optimizadas
    └── videos/               # Videos (lazy loading)
```

## 🔐 Panel CEO

Acceso exclusivo para `boomdigitaleeuu@gmail.com` con capacidad de:
- Modificar banners y textos del website
- Actualizar anuncios y colores
- Ver estadísticas de la landing page
- Descargar reportes de analytics

## 🤖 Chatbot IA

Asistente virtual integrado con DeepSeek API que responde preguntas profesionalmente en español:
- **API**: DeepSeek con clave integrada
- **Funcionalidad**: Respuestas en tiempo real
- **Interfaz**: Flotante y no intrusiva
- **Seguridad**: API key protegida en el código

## 🌐 SEO y Performance

- **Meta Tags Optimizados**: Title, description, Open Graph
- **Structured Data**: Schema.org para mejor posicionamiento
- **Lazy Loading**: Imágenes y videos cargan bajo demanda
- **Core Web Vitals**: Optimizado para LCP, FID, CLS

## 📊 Analytics

El sitio incluye tracking básico de:
- Visitas por página
- Tiempo en sitio
- Dispositivos y navegadores

## 🔧 Personalización

### Colores (TailwindCSS)
```javascript
primary: {
  blue: '#37C6FF',    // Azul celeste principal
  black: '#000000',   // Negro para contraste
  white: '#FFFFFF',   // Fondo blanco
}
```

### Contenido Dinámico
Todo el contenido del sitio puede ser modificado desde el panel CEO a través de Firebase Firestore.

## 🐛 Solución de Problemas

### Error CORS en GitHub Pages
- Verifica que todas las rutas sean relativas (`./src/main.js`)
- Asegúrate de que el archivo `.nojekyll` esté presente

### Firebase no funciona
- Revisa que la configuración en `src/firebase.js` sea correcta
- Verifica que Authentication y Firestore estén habilitados

### Chatbot no responde
- Verifica la conexión a internet
- Confirma que la API key de DeepSeek sea válida

### Estilos no se cargan
- TailwindCSS se carga via CDN para compatibilidad con GitHub Pages
- Se han suprimido warnings de la consola para mejor experiencia
- Verifica la conexión a internet

## ✅ Estado del Deployment

El proyecto está **completamente funcional** y listo para GitHub Pages:

- ✅ Todas las rutas corregidas (relativas en lugar de absolutas)
- ✅ TailwindCSS via CDN sin warnings
- ✅ GitHub Actions configurado
- ✅ Panel CEO funcional
- ✅ ChatBot integrado
- ✅ SEO optimizado

**URL de deployment**: `https://[username].github.io/boom-digital-agency/`

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Boom Digital Agency** - Transformando presencia digital con inteligencia artificial 🚀
