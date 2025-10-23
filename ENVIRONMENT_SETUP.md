# Configuración de Variables de Entorno

## 🔐 Seguridad de API Keys

Se han eliminado las claves API expuestas del código fuente. Ahora todas las credenciales sensibles deben configurarse mediante variables de entorno.

## Variables de Entorno Requeridas

### Firebase Configuration
```env
VITE_FIREBASE_API_KEY=tu_api_key_de_firebase
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://tu_proyecto-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
VITE_CEO_EMAIL=tu_email_ceo
```

### DeepSeek API
```env
VITE_DEEPSEEK_API_KEY=tu_api_key_de_deepseek
```

## Pasos de Configuración

1. **Crear archivo `.env`**
   ```bash
   cp .env.example .env
   ```

2. **Configurar las variables**
   - Abre el archivo `.env`
   - Reemplaza los valores de ejemplo con tus credenciales reales
   - **NUNCA** compartas este archivo o commits en Git

3. **Verificar la configuración**
   ```bash
   npm run dev
   ```

## Archivos Afectados

- `src/firebase.js` - Ahora usa `import.meta.env.VITE_FIREBASE_*`
- `src/components/InstagramDescription.js` - Ahora usa `import.meta.env.VITE_DEEPSEEK_API_KEY`

## Notas Importantes

- ✅ Las variables de entorno están excluidas de Git (ver `.gitignore`)
- ✅ Las claves API ya no están hardcodeadas en el código
- ✅ El sistema falla de manera segura si las variables no están configuradas
- ✅ Usa el prefijo `VITE_` para variables accesibles en el frontend

## Solución de Problemas

Si encuentras errores:
1. Verifica que el archivo `.env` existe
2. Confirma que todas las variables están configuradas
3. Reinicia el servidor de desarrollo después de cambios en `.env`
4. Verifica que las variables tengan el prefijo `VITE_`

## Para Producción

En entornos de producción (GitHub Pages, Vercel, Netlify):
- Configura las variables de entorno en el panel de administración
- No subas archivos `.env` al servidor de producción
