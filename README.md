<div align="center">

# 🎓 VerbQuest

**Aprende y practica los verbos irregulares del inglés de forma interactiva**

[![Demo en vivo](https://img.shields.io/badge/🌐_Demo-mxdanico.github.io/verbquest-1e6091?style=for-the-badge)](https://mxdanico.github.io/verbquest/)
[![PWA](https://img.shields.io/badge/PWA-Instalable-5A0FC8?style=for-the-badge&logo=pwa)](https://mxdanico.github.io/verbquest/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222222?style=for-the-badge&logo=github)](https://mxdanico.github.io/verbquest/)
[![Licencia](https://img.shields.io/badge/Licencia-Educativa-green?style=for-the-badge)](./LICENSE)

</div>

---

## 📖 Descripción

**VerbQuest** es una aplicación web progresiva (PWA) diseñada para practicar los **68 verbos irregulares de English File Pre-Intermediate** de forma gamificada, rápida y efectiva.

Incluye lista de verbos con pronunciación IPA, quizzes interactivos con múltiples modos, sistema de puntos y rachas, y funciona **sin conexión a Internet** desde cualquier dispositivo.

---

## 🖼️ Capturas de pantalla

<div align="center">

### 📚 Lista de Verbos — Teoría
<img src="docs/screenshots/lista-verbos.jpg" alt="Lista de verbos irregulares con pronunciación IPA" width="280"/>

> Lista completa con infinitivo, Past Simple, Past Participle y pronunciación IPA en español.

---

### ⚙️ Configuración del Quiz
<img src="docs/screenshots/configuracion-quiz.jpg" alt="Pantalla de configuración del quiz" width="280"/>

> Elige el tipo de quiz, modo de práctica, número de preguntas y filtra por letra inicial.

---

### 🎮 Quiz — Modo Clásico
<img src="docs/screenshots/quiz-clasico.jpg" alt="Quiz modo clásico - escribe la forma verbal" width="700"/>

> Escribe la forma verbal correcta. Sistema de rachas con bonificación de puntos.

---

### 🔤 Quiz — Modo Completa la Oración
<img src="docs/screenshots/quiz-completa.jpg" alt="Quiz modo completa la oración" width="700"/>

> Identifica el verbo correcto en el contexto de una oración real.

---

### 🏆 Pantalla de Resultados
<img src="docs/screenshots/resultados.jpg" alt="Pantalla de resultados con puntuación final" width="280"/>

> Resumen con puntos, aciertos, errores y rango obtenido.

---

### 📤 Compartir Resultado
<img src="docs/screenshots/compartir.jpg" alt="Vista previa para compartir resultado en WhatsApp" width="280"/>

> Comparte tu puntuación en WhatsApp con vista previa del resultado.

</div>

---

## ✨ Características

| Funcionalidad | Descripción |
|---|---|
| 📖 **Lista de verbos** | 68 verbos irregulares con traducción y pronunciación IPA |
| 🔍 **Búsqueda** | Filtra por verbo, traducción o forma verbal |
| ✍️ **Quiz Clásico** | Escribe la forma verbal correcta |
| 📝 **Quiz Completa** | Elige el verbo correcto en una oración |
| ⚡ **Past Simple** | Modo exclusivo de pasado simple |
| 🎓 **Past Participle** | Modo exclusivo de participio pasado |
| 🔥 **Modo Combinado** | Mezcla Past Simple + Past Participle |
| 💀 **Modo Survival** | 3 vidas, sin piedad |
| 🔥 **Rachas** | Sistema de bonificaciones por respuestas consecutivas |
| 💡 **Pistas** | Primera letra disponible con penalización de puntos |
| 🌙 **Tema** | Modo claro y oscuro |
| 🔊 **Sonido** | Efectos de audio generados en tiempo real (Web Audio API) |
| 📱 **PWA** | Instalable como app nativa en móvil y escritorio |
| ✈️ **Offline** | Funciona sin conexión a Internet |
| 📤 **Compartir** | Comparte tus resultados por WhatsApp |

---

## 📱 Instalación como App

### Android (Chrome)
1. Abrir [VerbQuest](https://mxdanico.github.io/verbquest/) en Chrome
2. Pulsar el menú **⋮** (tres puntos)
3. Seleccionar **Agregar a pantalla de inicio**

### iPhone / iPad (Safari)
1. Abrir [VerbQuest](https://mxdanico.github.io/verbquest/) en Safari
2. Pulsar el botón **Compartir** (cuadro con flecha hacia arriba)
3. Seleccionar **Agregar a pantalla de inicio**

---

## 📂 Estructura del proyecto

```text
verbquest/
│
├── index.html
├── manifest.json
├── README.md
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── icons/
│       ├── favicon.png
│       ├── icon-192.png
│       └── icon-512.png
│
├── docs/
│   └── screenshots/          ← 📸 Imágenes para el README
│       ├── lista-verbos.jpg
│       ├── configuracion-quiz.jpg
│       ├── quiz-clasico.jpg
│       ├── quiz-completa.jpg
│       ├── resultados.jpg
│       └── compartir.jpg
│
└── .github/
```

---

## 🛠️ Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)

- **HTML5** — Estructura semántica
- **CSS3** — Estilos, animaciones y modo oscuro
- **JavaScript (Vanilla JS)** — Lógica de la aplicación sin frameworks
- **Web Audio API** — Efectos de sonido generados en tiempo real
- **Service Worker + Cache API** — Soporte offline (PWA)
- **GitHub Pages** — Despliegue gratuito y continuo

---

## 🚀 Despliegue

El proyecto está publicado mediante **GitHub Pages** directamente desde la rama `main`.

🔗 **URL pública:** [https://mxdanico.github.io/verbquest/](https://mxdanico.github.io/verbquest/)

---

## 📚 Fuente de contenido

Los verbos corresponden al libro **English File Pre-Intermediate** de Oxford University Press y se utilizan exclusivamente con fines educativos y de práctica personal.

---

## 📄 Licencia

Proyecto educativo y de práctica personal. Todos los derechos reservados.

© 2026 [mxdanico](https://github.com/mxdanico)
