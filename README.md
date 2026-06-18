# VerbQuest 🦜

Aplicación web PWA para practicar los **68 verbos irregulares** del libro *English File Pre-Intermediate*. Diseñada para estudiantes de inglés que quieren repasar de forma interactiva.

## 🔗 Demo en vivo

👉 [Ver VerbQuest](https://mxdanico.github.io/verbquest)

---

## ✨ Funcionalidades

| Función | Descripción |
|---|---|
| 📖 Lista de verbos | 68 verbos con traducción y pronunciación IPA |
| 🔍 Búsqueda | Filtra por nombre, traducción o forma verbal |
| 🎮 Quiz interactivo | 4 modos de juego configurables |
| ⚡ Past Simple | Practica solo el pasado simple |
| 🎓 Past Participle | Practica solo el participio |
| 🔥 Modo Ambos | Mezcla Past Simple y Past Participle |
| 💀 Modo Survival | 3 vidas, sin segunda oportunidad |
| 💡 Sistema de pistas | Primera letra como ayuda (-5 pts) |
| 🔥 Rachas | Bonificación por respuestas consecutivas |
| 🌙 Tema oscuro/claro | Cambia según tu preferencia |
| 🔊 Efectos de sonido | Feedback auditivo en cada respuesta |
| 📱 Instalable (PWA) | Funciona como app nativa en el móvil |
| ✈️ Modo offline | Funciona sin conexión tras la primera visita |
| 📤 Compartir | Envía tus resultados por WhatsApp con imagen |

---

## 🗂️ Estructura del proyecto

```
verbquest/
│
├── index.html               ← Página principal
├── manifest.json            ← Configuración PWA
├── README.md                ← Este archivo
│
├── assets/
│   ├── css/
│   │   └── style.css        ← Estilos
│   ├── js/
│   │   └── script.js        ← Lógica de la app
│   └── icons/
│       ├── favicon.png      ← Icono pestaña navegador
│       ├── icon-192.png     ← Icono app Android
│       └── icon-512.png     ← Icono app splash screen
│
└── .github/
    └── workflows/
        └── deploy.yml       ← Deploy automático
```

---

## 🚀 Cómo usar

### Ver en GitHub Pages
1. Sube el repositorio a GitHub
2. Ve a **Settings → Pages**
3. En *Branch* selecciona `main` y carpeta `/ (root)`
4. Guarda — en unos minutos estará publicado

### Instalar como app en el móvil
- **Android (Chrome):** Abre la web → menú ⋮ → *Agregar a pantalla de inicio*
- **iPhone (Safari):** Abre la web → botón compartir → *Agregar a pantalla de inicio*

---

## 🛠️ Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — variables, animaciones, diseño responsive
- **JavaScript vanilla** — sin dependencias externas
- **Web Audio API** — efectos de sonido generados en tiempo real
- **Service Worker** — caché para modo offline
- **PWA** — instalable como app nativa

---

## 📄 Licencia

Proyecto educativo de uso personal. Los verbos y estructura corresponden al libro *English File Pre-Intermediate* de Oxford University Press.

