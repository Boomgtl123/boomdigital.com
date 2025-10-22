# Configuración para GitHub Pages

Esta guía te ayudará a desplegar correctamente Boom Digital Agency en GitHub Pages.

## 🚀 Pasos para el Deployment

### 1. Preparar el Repositorio

```bash
# Clonar el repositorio (si no lo tienes)
git clone https://github.com/tu-usuario/boom-digital-agency.git
cd boom-digital-agency

# Verificar que todos los archivos estén presentes
ls -la
```

### 2. Configurar GitHub Pages

1. **Ve a tu repositorio en GitHub**
2. **Settings → Pages**
3. **Source**: Selecciona "GitHub Actions"
4. **Save**

### 3. Configurar Firebase (Opcional pero Recomendado)

1. **Crea un proyecto en [Firebase Console](https://console.firebase.google.com)**
2. **Habilita Authentication** (Email/Password)
3. **Habilita Firestore Database**
4. **Configura las reglas de seguridad**:

```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura pública del contenido del sitio
    match /website/content {
      allow read: if true;
      allow write: if request.auth != null && 
        request.auth.token.email == 'boomdigitaleeuu@gmail.com';
    }
    
    // Analytics - solo lectura para CEO
    match /analytics/{document} {
      allow read: if request.auth != null && 
        request.auth.token.email == 'boomdigitaleeuu@gmail.com';
      allow write: if true; // Para tracking automático
    }
  }
}
```

5. **Copia tu configuración** a `src/firebase.js`

### 4. Personalizar Contenido

Antes del primer deploy, puedes personalizar:

- **Colores**: Modifica `tailwind.config.js`
- **Contenido**: Actualiza textos en los componentes
- **SEO**: Actualiza meta tags en `index.html`

### 5. Realizar el Primer Deploy

```bash
# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "feat: Initial Boom Digital Agency deployment"

# Push a GitHub
git push origin main
```

## 🔧 Configuración Técnica

### Archivos Críticos para GitHub Pages

- **`.nojekyll`**: Desactiva el procesamiento de Jekyll
- **`_config.yml`**: Configuración específica para GitHub Pages
- **`404.html`**: Página de error personalizada
- **`vite.config.js`**: Configura `base: './'` para rutas relativas

### Estructura de Build

El workflow de GitHub Actions generará:

```
dist/
├── index.html
├── assets/
│   ├── main-[hash].js
│   ├── firebase-[hash].js
│   └── [otros assets]
└── [otros archivos estáticos]
```

## 🐛 Solución de Problemas Comunes

### Error: "Failed to load resource" (CORS)

**Solución**: 
- Verifica que `vite.config.js` tenga `base: './'`
- Asegúrate de que todas las rutas en `index.html` sean relativas
- Verifica que el archivo `.nojekyll` esté presente

### Error: "404 Not Found" en rutas

**Solución**:
- GitHub Pages sirve SPA correctamente con `404.html`
- Verifica que `404.html` redirija a `index.html`

### Estilos no se cargan

**Solución**:
- TailwindCSS se carga via CDN para compatibilidad
- Verifica la conexión a internet
- Revisa la consola del navegador para errores

### Firebase no funciona en producción

**Solución**:
- Verifica que los dominios estén autorizados en Firebase Console
- Agrega tu dominio de GitHub Pages a la lista de dominios autorizados
- Verifica las reglas de seguridad de Firestore

## 📊 Verificación del Deployment

Después del deploy, verifica:

1. **✅ El sitio carga correctamente**
2. **✅ Todas las secciones son visibles**
3. **✅ Las imágenes se cargan**
4. **✅ Las animaciones funcionan**
5. **✅ El panel CEO es accesible** (solo con email específico)
6. **✅ El sitio es responsive**
7. **✅ No hay errores en la consola**

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

```bash
# Hacer cambios
git add .
git commit -m "feat: Actualización de contenido"
git push origin main
```

GitHub Actions automáticamente reconstruirá y desplegará el sitio.

## 📞 Soporte

Si encuentras problemas:
1. Revisa los logs de GitHub Actions
2. Verifica la configuración de Firebase
3. Asegúrate de que todos los archivos críticos estén presentes
4. Consulta la documentación de [GitHub Pages](https://docs.github.com/en/pages)

---

**¡Listo!** Tu sitio Boom Digital Agency estará disponible en:
`https://tu-usuario.github.io/boom-digital-agency/`
