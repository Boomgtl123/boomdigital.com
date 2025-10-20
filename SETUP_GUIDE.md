# Guía de Configuración - Boom Digital Agency

Esta guía te ayudará a configurar y desplegar el proyecto Boom Digital Agency.

## 🚀 Configuración Rápida

### 1. Instalación de Dependencias
```bash
npm install
```

### 2. Configuración Firebase

#### Paso 1: Crear Proyecto Firebase
1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Crea un nuevo proyecto llamado "boom-digital-agency"
3. Anota el **Project ID**

#### Paso 2: Configurar Authentication
1. En el menú lateral, ve a "Authentication"
2. Haz clic en "Get started"
3. Ve a la pestaña "Sign-in method"
4. Habilita "Email/Password"
5. Guarda los cambios

#### Paso 3: Configurar Firestore
1. En el menú lateral, ve a "Firestore Database"
2. Haz clic en "Create database"
3. Elige "Start in test mode" (puedes cambiar las reglas después)
4. Selecciona una ubicación cercana
5. Haz clic en "Done"

#### Paso 4: Obtener Configuración
1. Ve a Configuración del proyecto (engranaje) → Configuración del proyecto
2. En "Tus apps", haz clic en "Web" (</>)
3. Registra la app con nombre "Boom Digital Agency Web"
4. Copia la configuración que aparece

#### Paso 5: Actualizar Configuración
1. Abre `src/firebase.js`
2. Reemplaza la configuración con tus datos:

```javascript
const firebaseConfig = {
  apiKey: "tu-api-key-real",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "tu-app-id-real"
};
```

### 3. Configurar Usuario CEO
1. En Firebase Console → Authentication → Users
2. Haz clic en "Add user"
3. Email: `boomdigitaleeuu@gmail.com`
4. Establece una contraseña segura
5. Haz clic en "Add user"

### 4. Ejecutar en Desarrollo
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🔧 Configuración Avanzada

### Variables de Entorno (Opcional)
Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

### Reglas de Seguridad Firestore
Después del setup inicial, actualiza las reglas de Firestore en la consola:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /website/content {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'boomdigitaleeuu@gmail.com';
    }
    match /analytics/{document} {
      allow read: if request.auth != null && request.auth.token.email == 'boomdigitaleeuu@gmail.com';
      allow write: if true;
    }
  }
}
```

## 🌐 Deployment

### Firebase Hosting (Recomendado)

#### Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

#### Login y Configuración
```bash
firebase login
firebase init hosting
```

#### Seleccionar opciones:
- ¿Qué quieres hacer? → Hosting
- Proyecto público → `dist`
- Configurar como SPA → Sí
- Sobrescribir index.html → No

#### Build y Deploy
```bash
npm run build
firebase deploy
```

### Netlify
1. Conecta tu repositorio GitHub en Netlify
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Haz clic en "Deploy site"

### Vercel
```bash
npm install -g vercel
vercel
```

## 📊 Panel CEO

### Acceso
1. Ejecuta el proyecto en desarrollo o producción
2. Haz clic en "CEO Panel" en el header
3. Ingresa con:
   - Email: `boomdigitaleeuu@gmail.com`
   - Contraseña: [la que configuraste en Firebase]

### Funcionalidades Disponibles
- **Gestión de Contenido**: Modificar textos del Hero, Servicios, Testimonios
- **Analytics**: Ver estadísticas de visitas y conversiones
- **Personalización**: Cambiar colores del sitio
- **Exportación**: Descargar datos en JSON

## 🐛 Solución de Problemas Comunes

### Error: "vite: command not found"
```bash
npm install
```

### Error de Firebase: "Missing or insufficient permissions"
- Verifica que las reglas de Firestore estén configuradas correctamente
- Asegúrate de que el usuario CEO esté creado en Authentication

### Error: "Failed to load resource"
- Verifica la configuración de Firebase en `src/firebase.js`
- Asegúrate de que el proyecto Firebase esté activo

### El sitio no carga correctamente
```bash
npm run build
npm run preview
```

## 🔒 Consideraciones de Seguridad

- Nunca commits datos sensibles (API keys, contraseñas)
- Usa variables de entorno para configuración sensible
- Mantén las reglas de Firestore actualizadas
- Monitorea el uso de la API de Firebase

## 📞 Soporte

Si encuentras problemas durante la configuración:
1. Revisa la consola del navegador para errores
2. Verifica que todas las dependencias estén instaladas
3. Confirma que la configuración de Firebase sea correcta
4. Revisa que el usuario CEO esté creado en Authentication

---

**¡Listo!** Tu sitio Boom Digital Agency está configurado y listo para usar. 🎉
