# 🚀 Guía de Configuración - Boom Digital Agency

Guía paso a paso para configurar y desplegar el proyecto Boom Digital Agency.

## 📋 Prerrequisitos

- **Node.js** 16.0 o superior
- **Cuenta Google** para Firebase
- **Git** para control de versiones

## 🔧 Configuración Paso a Paso

### 1. Configuración Inicial del Proyecto

```bash
# Clonar o descargar el proyecto
cd boom-digital-agency

# Instalar dependencias
npm install

# Verificar instalación
npm run dev
```

El servidor de desarrollo debería iniciar en `http://localhost:3000`

### 2. Configuración Firebase

#### Paso 2.1: Crear Proyecto Firebase
1. Ir a [Firebase Console](https://console.firebase.google.com)
2. Click "Crear proyecto"
3. Nombre: `boom-digital-agency`
4. Deshabilitar Google Analytics (opcional)
5. Click "Crear proyecto"

#### Paso 2.2: Configurar Authentication
1. En Firebase Console → Authentication
2. Click "Comenzar"
3. Ir a pestaña "Sign-in method"
4. Habilitar "Correo electrónico/contraseña"
5. Guardar cambios

#### Paso 2.3: Configurar Firestore
1. En Firebase Console → Firestore Database
2. Click "Crear base de datos"
3. Modo "Modo de prueba" (puedes cambiar después)
4. Elegir ubicación (us-east1 recomendado)
5. Click "Listo"

#### Paso 2.4: Obtener Configuración
1. En Firebase Console → Configuración del proyecto
2. Ir a "Tus apps" → "Web"
3. Registrar app: `boom-digital-agency-web`
4. Copiar configuración

### 3. Configurar Credenciales Firebase

Editar archivo `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "tu-api-key-aqui",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-project-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id"
};
```

### 4. Configurar Usuario CEO

#### Paso 4.1: Agregar Usuario CEO
1. Firebase Console → Authentication → Users
2. Click "Agregar usuario"
3. Email: `boomdigitaleeuu@gmail.com`
4. Contraseña: [crear contraseña segura]
5. Click "Agregar usuario"

#### Paso 4.2: Configurar Reglas de Seguridad

En Firebase Console → Firestore Database → Reglas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura pública del contenido del sitio
    match /website/content {
      allow read: if true;
      allow write: if request.auth != null && 
                   request.auth.token.email == "boomdigitaleeuu@gmail.com";
    }
    
    // Analytics - lectura pública, escritura solo para CEO
    match /analytics/{document} {
      allow read: if request.auth != null && 
                   request.auth.token.email == "boomdigitaleeuu@gmail.com";
      allow write: if true; // Para tracking automático
    }
  }
}
```

### 5. Configuración de Dominio (Opcional)

#### Para Custom Domain:
1. Firebase Console → Hosting
2. Click "Agregar dominio personalizado"
3. Seguir instrucciones para verificar propiedad

#### Para Subdominio Firebase:
- Tu sitio estará en: `https://tu-proyecto.web.app`

### 6. Configuración de Entorno (Opcional)

Crear archivo `.env` en la raíz:

```env
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-project-id
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=tu-app-id
```

Y modificar `src/firebase.js` para usar variables de entorno:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## 🚀 Deployment

### Opción 1: Firebase Hosting (Recomendado)

```bash
# Instalar CLI de Firebase
npm install -g firebase-tools

# Login
firebase login

# Inicializar proyecto
firebase init

# Seleccionar:
# - Hosting
# - Usar proyecto existente
# - Directorio público: dist
# - Single-page app: Yes
# - No sobreescribir index.html

# Construir y desplegar
npm run build
firebase deploy
```

### Opción 2: Vercel

1. Conectar repositorio GitHub a Vercel
2. Configurar:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Opción 3: Netlify

1. Arrastrar carpeta `dist` a Netlify
2. O conectar repositorio GitHub

## 🔍 Verificación Post-Deployment

### 1. Verificar Sitio Web
- Navegar a tu dominio
- Verificar que todas las secciones carguen
- Probar responsive design

### 2. Verificar Panel CEO
1. Click en "Panel CEO" en el footer
2. Login con `boomdigitaleeuu@gmail.com`
3. Verificar que todas las funciones funcionen:
   - Edición de contenido
   - Cambio de colores
   - Visualización de analytics
   - Exportación de datos

### 3. Verificar Firebase
1. Firebase Console → Authentication → Users
   - Verificar que el usuario CEO existe
2. Firebase Console → Firestore → Data
   - Verificar que se creó la colección `website/content`

## 🛠️ Solución de Problemas Comunes

### Error: "Firebase App named '[DEFAULT]' already exists"
- Solución: Reiniciar el servidor de desarrollo

### Error: "Permission denied" en Firestore
- Solución: Verificar reglas de seguridad en Firebase Console

### Error: Authentication failed
- Solución: Verificar que el usuario CEO existe en Authentication

### El sitio no carga en producción
- Solución: Verificar que `npm run build` se ejecutó correctamente

### Panel CEO no se abre
- Solución: Verificar que Firebase está configurado correctamente

## 📈 Próximos Pasos

### 1. Personalizar Contenido
- Usar Panel CEO para modificar textos
- Cambiar colores según branding
- Agregar testimonios reales

### 2. Configurar Analytics Avanzado
- Integrar Google Analytics
- Configurar eventos personalizados
- Monitorear conversiones

### 3. Optimizar Performance
- Comprimir imágenes
- Implementar CDN
- Optimizar bundle size

### 4. Seguridad Adicional
- Configurar HTTPS
- Implementar rate limiting
- Monitorear logs de seguridad

## 📞 Soporte

Si encuentras problemas:
1. Revisar esta guía
2. Verificar configuración Firebase
3. Revisar consola del navegador para errores
4. Contactar: boomdigitaleeuu@gmail.com

---

**¡Listo! Tu sitio Boom Digital Agency está funcionando 🎉**
