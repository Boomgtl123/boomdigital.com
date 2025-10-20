# Boom Digital Agency

Una plataforma web moderna y profesional para agencia digital, construida con tecnologías modernas y diseño minimalista estilo Nike.

## 🚀 Características

- **Diseño Premium**: Estilo minimalista inspirado en Nike.com.ar
- **Totalmente Responsive**: Mobile-first design
- **Panel CEO Exclusivo**: Gestión de contenido y analytics
- **Integración Firebase**: Autenticación y base de datos en tiempo real
- **SEO Optimizado**: Meta tags, Open Graph y structured data
- **Animaciones Suaves**: Fade-in y slide-up al hacer scroll
- **Performance**: Lighthouse score >95

## 🛠️ Tecnologías

- **Frontend**: HTML5, TailwindCSS 4.x, JavaScript ES6+
- **Build Tool**: Vite
- **Backend**: Firebase (Auth + Firestore)
- **Animaciones**: CSS3 + Intersection Observer API
- **Componentes**: Web Components nativos

## 📁 Estructura del Proyecto

```
boom-digital-agency/
├── index.html                 # Página principal
├── package.json              # Dependencias y scripts
├── vite.config.js            # Configuración Vite
├── tailwind.config.js        # Configuración TailwindCSS
├── postcss.config.js         # Configuración PostCSS
├── .gitignore                # Archivos ignorados por Git
├── src/
│   ├── main.js               # Punto de entrada de la aplicación
│   ├── firebase.js           # Configuración y funciones Firebase
│   └── components/
│       ├── Header.js         # Navegación y header
│       ├── Hero.js           # Sección hero principal
│       ├── Services.js       # Servicios de la agencia
│       ├── Dashboard.js      # Panel de métricas IA
│       ├── Club.js           # Sección Club IA Boom
│       ├── CTASection.js     # Call-to-action final
│       ├── Footer.js         # Footer con redes sociales
│       └── CEOPanel.js       # Panel exclusivo CEO
└── assets/
    ├── images/               # Imágenes del sitio
    └── videos/               # Videos (opcional)
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ 
- Cuenta de Firebase

### Pasos de Instalación

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
   - Crear proyecto en [Firebase Console](https://console.firebase.google.com)
   - Habilitar Authentication (Email/Password) y Firestore
   - Copiar configuración a `src/firebase.js`

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Build para producción**
   ```bash
   npm run build
   ```

## 🔐 Panel CEO

El panel exclusivo para el CEO está disponible solo para `boomdigitaleeuu@gmail.com` y permite:

- **Gestión de Contenido**: Modificar textos del sitio web
- **Analytics**: Ver estadísticas de visitas y conversiones
- **Personalización**: Cambiar colores y diseño
- **Exportación**: Descargar datos en formato JSON

### Acceso al Panel CEO
1. Hacer clic en "CEO Panel" en el header
2. Ingresar con `boomdigitaleeuu@gmail.com`
3. Gestionar contenido y diseño del sitio

## 🎨 Personalización

### Colores Principales
- **Azul Celeste**: `#37C6FF`
- **Negro**: `#000000`
- **Blanco**: `#FFFFFF`

### Tipografía
- **Familia**: Inter (sans-serif)
- **Pesos**: 400, 500, 600, 700, 800

## 📊 SEO y Performance

- Meta tags optimizados
- Open Graph tags para redes sociales
- Structured data (Schema.org)
- Lazy loading de imágenes
- Core Web Vitals optimizados

## 🌐 Deployment

### Firebase Hosting (Recomendado)
```bash
npm run build
firebase deploy
```

### Netlify
- Conectar repositorio GitHub
- Configurar build command: `npm run build`
- Publish directory: `dist`

### Vercel
```bash
npm install -g vercel
vercel
```

## 🔧 Configuración Firebase

1. **Crear Proyecto** en Firebase Console
2. **Habilitar Authentication** (Email/Password)
3. **Configurar Firestore** con reglas básicas
4. **Actualizar configuración** en `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};
```

## 📈 Analytics

El sitio incluye tracking básico de:
- Visitas totales
- Visitantes únicos
- Tasa de conversión
- Tasa de rebote

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Distribuido bajo licencia MIT. Ver `LICENSE` para más información.

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contactar al equipo de desarrollo.

---

**Boom Digital Agency** - Transformando la presencia digital con IA y automatización inteligente.
