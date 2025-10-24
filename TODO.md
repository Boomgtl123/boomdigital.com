# Plan para Solucionar Errores de Consola

## Problemas Identificados
- ✅ Assets faltantes: verificado.png, logo.png, banner.MOV (404 errors)
- ✅ Variable de entorno faltante: VITE_CHATBOT_API_KEY (causa 401 en API DeepSeek)
- ✅ Inconsistencia en nombres de variables de API entre vite.config.js y ChatBot.js

## Plan de Solución

### 1. Crear Directorios de Assets Faltantes
- [x] Crear carpeta `assets/images/`
- [x] Crear carpeta `assets/videos/`
- [x] Agregar placeholders para assets faltantes o actualizar código para manejar assets faltantes

### 2. Corregir Variables de Entorno
- [x] Decidir nombre consistente para API key (VITE_DEEPSEEK_API_KEY vs VITE_CHATBOT_API_KEY)
- [x] Actualizar vite.config.js y ChatBot.js para usar el mismo nombre
- [x] Guiar al usuario para configurar .env correctamente

### 3. Probar las Correcciones
- [x] Ejecutar servidor de desarrollo
- [x] Verificar que no hay errores 404
- [ ] Verificar que API funciona con key correcta
- [ ] Confirmar que analytics funciona en desarrollo

## Pasos de Implementación
1. ✅ Crear directorios de assets
2. ✅ Agregar assets placeholder o actualizar referencias
3. ✅ Unificar nombre de variable de API
4. ✅ Probar cambios
