# Portafolio — Santiago Burgos

Portafolio personal de una sola página, hecho con HTML y CSS puros (sin frameworks ni dependencias). Es la base sobre la que iré construyendo el resto: por ahora sirve como presentación y como escaparate de los proyectos que vaya terminando.

## Secciones

- **Inicio** — presentación breve.
- **Sobre mí** — formación (DAW) y herramientas con las que trabajo (Linux y Git).
- **Proyectos** — proyectos terminados, con enlace a la demo y al código.
- **Contacto** — correo electrónico.

## Proyectos

### [App del Tiempo](https://sburgos28.github.io/app-tiempo/)

Aplicación web para consultar el tiempo de una ciudad. Muestra temperatura, humedad y probabilidad de lluvia, con iconos y un fondo que cambia entre día y noche.

- **Demo:** https://sburgos28.github.io/app-tiempo/
- **Código:** https://github.com/sburgos28/app-tiempo
- **Tecnologías:** HTML, CSS, JavaScript y OpenWeatherMap API.

## Tecnologías

- HTML5 semántico (`header`, `nav`, `main`, `section`, `footer`).
- CSS3: variables de color personalizadas, Flexbox, Grid y `scroll-behavior: smooth` para la navegación por anclas.
- JavaScript para el cambio de modo claro/oscuro.
- Sin frameworks, build ni gestor de paquetes.

## Estructura

```
portfolio/
├── index.html    # Toda la página
├── style.css     # Estilos
├── script.js     # Cambio de modo claro/oscuro
├── img/          # Capturas de los proyectos
└── README.md
```

## Cómo verlo en local

No necesita servidor ni instalación: abre `index.html` directamente en el navegador.

Si prefieres servirlo en local:

```bash
python3 -m http.server 8000
```

Y visita http://localhost:8000.

## Personalización

Los colores están centralizados en las variables de `:root` al principio de `style.css`, así que se cambian en un único sitio y se aplican a toda la página:

```css
:root {
    --bg: #111827;       /* Fondo */
    --surface: #1f2937;  /* Superficies (pie) */
    --text: #e5e7eb;     /* Texto principal */
    --muted: #9ca3af;    /* Texto secundario */
    --accent: #93c5fd;   /* Enlaces y títulos */
    --border: #1f2937;   /* Separadores */
}
```

## Pendiente

- Enlazar un perfil de GitHub y LinkedIn en el pie.
- Añadir una captura de pantalla del resultado en este README.
- Seguir añadiendo proyectos a la sección de proyectos.

## Contacto

Santiago Burgos — [@sburgos28](https://github.com/sburgos28)
