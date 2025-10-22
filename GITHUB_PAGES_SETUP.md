# Configuración para GitHub Pages - Boom Digital Agency

## ✅ Correcciones Implementadas para GitHub Pages

### Problemas Resueltos:
1. **Errores 404 en assets**: Se reemplazaron rutas absolutas HTTPS por rutas relativas
2. **Errores MIME type**: Se eliminó la importación de CSS local y se usa TailwindCSS CDN
3. **Compatibilidad con GitHub Pages**: Configuración optimizada para hosting estático

### Cambios Principales:

#### 1. Archivo `index.html`
- **Antes**: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">`
- **Ahora**: `<script src="https://cdn.tailwindcss.com"></script>` + estilos personalizados inline
- **Rutas**: Cambiadas de absolutas a relativas (`./src/main.js`)

#### 2. Archivo `src/main.js`
- **Eliminado**: Importación de `./style.css`
- **Mantenido**: Funcionalidad completa de componentes y animaciones

#### 3. Configuración Build
- **vite.config.js**: Configurado para GitHub Pages con `base: './'`
- **GitHub Actions**: Workflow automático para deploy

## 🚀 Pasos para Deploy en GitHub Pages

### 1. Configurar el Repositorio
```bash
# Subir a GitHub
git remote add origin https://github.com/tu-usuario/boom-digital-agency.git
git branch -M main
git push -u origin main
```

### 2. Configurar GitHub Pages
1. Ir a **Settings** > **Pages**
2. En **Source**, seleccionar **GitHub Actions**
3. El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente

### 3. Configurar Firebase (Opcional)
1. Reemplazar configuración en `src/firebase.js`
2. Agregar variables de entorno si es necesario

## 📁 Estructura Final para GitHub Pages

```
boom-digital-agency/
├── .github/workflows/deploy.yml    # CI/CD para GitHub Pages
├── index.html                      # Página principal con CDN
├── vite.config.js                  # Configuración build
├── src/
│   ├── main.js                     # Sin import CSS
│   ├── firebase.js                 # Config Firebase
│   └── components/                 # Todos los componentes
└── assets/                         # Imágenes y recursos
```

## 🔧 Comandos de Desarrollo

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview build
npm run preview
```

## ✅ Verificación

El sitio ahora debería funcionar correctamente en:
- **Local**: `http://localhost:3000`
- **GitHub Pages**: `https://tu-usuario.github.io/boom-digital-agency`

## 🛠️ Solución de Problemas

### Si hay errores 404:
- Verificar que todas las rutas sean relativas (`./` o sin `/` al inicio)
- Confirmar que `vite.config.js` tenga `base: './'`

### Si no cargan estilos:
- Verificar que TailwindCSS CDN esté cargado
- Revisar la consola del navegador

### Si no funcionan los componentes:
- Verificar que `main.js` esté cargado correctamente
- Revisar que los componentes estén en la carpeta correcta

## 📞 Soporte

Para problemas específicos de GitHub Pages, consultar la [documentación oficial](https://docs.github.com/en/pages).
