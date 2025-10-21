# Boom Digital Agency

Una plataforma web moderna y profesional para agencia digital, construida con tecnologías modernas y diseño minimalista estilo Nike.

## 🚀 Características

- **Diseño Moderno**: Estética minimalista y profesional inspirada en Nike
- **Totalmente Responsive**: Diseño mobile-first optimizado para todos los dispositivos
- **Panel CEO Exclusivo**: Sistema de administración seguro para el CEO
- **Integración Firebase**: Autenticación y base de datos en tiempo real
- **SEO Optimizado**: Meta tags, Open Graph y structured data
- **Animaciones Suaves**: Efectos de scroll y microinteracciones
- **Performance**: Carga rápida y optimizada para Core Web Vitals

## 🛠️ Tecnologías

- **Frontend**: HTML5, TailwindCSS 4.x, JavaScript ES6+
- **Backend**: Firebase (Auth + Firestore)
- **Build Tool**: Vite
- **Hosting**: Preparado para Vercel, Netlify o Firebase Hosting

## 📁 Estructura del Proyecto

```
boom-digital-agency/
├── index.html                 # Página principal
├── package.json              # Dependencias y scripts
├── tailwind.config.js        # Configuración de TailwindCSS
├── postcss.config.js         # Configuración de PostCSS
├── vite.config.js            # Configuración de Vite
├── src/
│   ├── main.js               # Punto de entrada de la aplicación
│   ├── firebase.js           # Configuración y funciones de Firebase
│   ├── style.css             # Estilos personalizados
│   └── components/
│       ├── Header.js         # Componente de navegación
│       ├── Hero.js           # Sección hero principal
│       ├── Services.js       # Sección de servicios
│       ├── Dashboard.js      # Panel de métricas IA
│       ├── Club.js           # Sección Club IA Boom
│       ├── Footer.js         # Pie de página
│       ├── AuthModal.js      # Modal de autenticación
│       └── CEOPanel.js       # Panel exclusivo CEO
└── assets/
    ├── images/               # Imágenes del proyecto
    └── videos/               # Videos (si los hay)
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación

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
   - Habilitar Authentication (Email/Password)
   - Crear base de datos Firestore
   - Copiar configuración en `src/firebase.js`

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Construir para producción**
```bash
npm run build
```

## 🔐 Configuración Firebase

### 1. Crear Proyecto Firebase
- Ir a [Firebase Console](https://console.firebase.google.com)
- Crear nuevo proyecto "Boom Digital Agency"

### 2. Configurar Authentication
- Ir a Authentication > Sign-in method
- Habilitar "Email/Password"
- Agregar `boomdigitaleeuu@gmail.com` como usuario autorizado

### 3. Configurar Firestore
- Ir a Firestore Database > Crear base de datos
- Configurar en modo de prueba
- Las reglas de seguridad se configurarán automáticamente

### 4. Actualizar Configuración
Reemplazar en `src/firebase.js`:
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

## 🎨 Personalización

### Colores Principales
- **Azul Primario**: `#37C6FF`
- **Negro**: `#000000` 
- **Blanco**: `#FFFFFF`

### Tipografía
- **Fuente Principal**: Inter
- **Pesos**: 400, 500, 600, 700, 800

## 📊 Panel CEO

### Acceso Exclusivo
- **Email**: `boomdigitaleeuu@gmail.com`
- **Funcionalidades**:
  - Modificar banners y textos del website
  - Actualizar anuncios y colores
  - Ver estadísticas de la landing page
  - Descargar reportes

### Seguridad
- Autenticación por email específico
- Validación en tiempo real
- Sesiones seguras

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta dist a Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 📈 SEO y Performance

### Optimizaciones Incluidas
- Meta tags optimizados
- Open Graph tags
- Structured data (Schema.org)
- Lazy loading de imágenes
- Compresión de assets
- Cache headers

### Core Web Vitals
- LCP optimizado
- FID mejorado  
- CLS minimizado

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Distribuido bajo Licencia MIT. Ver `LICENSE` para más información.

## 📞 Soporte

Para soporte técnico, contactar a:
- **Email**: boomdigitaleeuu@gmail.com
- **GitHub Issues**: [Reportar problema](https://github.com/tu-usuario/boom-digital-agency/issues)

---

**Boom Digital Agency** - Transformando la presencia digital de empresas modernas 🚀
# boomdigital.com
