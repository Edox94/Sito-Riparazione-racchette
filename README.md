# Riparapadel Web

Sito statico per Riparapadel, laboratorio specializzato in riparazione, personalizzazione e grippatura di racchette da padel.

## Struttura

```txt
index.html
lavori.html
privacy.html
robots.txt
sitemap.xml
assets/styles/main.css
assets/scripts/main.js
assets/icons/favicon.svg
assets/media/brand/
assets/media/images/
```

## Come aprirlo

Apri `index.html` nel browser. Non servono Node, Vite, React, Tailwind, plugin o build.

## Contenuti

- Testi principali e sezioni della home: `index.html`
- Gallery lavori: `lavori.html`
- Informativa privacy: `privacy.html`
- Stili: `assets/styles/main.css`
- Menu mobile e lightbox immagini: `assets/scripts/main.js`
- Logo e immagini: `assets/media/brand/` e `assets/media/images/`
- Favicon: `assets/icons/favicon.svg`
- SEO tecnico: `robots.txt`, `sitemap.xml` e meta tag nelle singole pagine

## Pubblicazione

Carica questi file sullo spazio web mantenendo la stessa struttura di cartelle. La home e le altre pagine funzionano come normali file HTML statici.

La sitemap include solo le pagine pubbliche da indicizzare (`index.html` e `lavori.html`). La privacy policy resta raggiungibile dagli utenti ma marcata `noindex, follow`.
