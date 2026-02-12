# Tegnspill – Symbol-Sortereren

En progressiv webapp (PWA) der du sorterer kinesiske, egyptiske og samiske symboler til riktig kulturtradisjon.

## Spillmodi

- **Sprint** (spill.html): Symboler dukker opp, tap riktig kultur før tiden går ut. Hastighet øker med nivå.
- **Klassisk** (spill-classic.html): Dra-og-slipp symboler til riktig kolonne.

## Publishing (GitHub + Vercel + Supabase + mobil)

Se **[DEPLOYMENT.md](DEPLOYMENT.md)** for steg-for-steg guide til å publisere appen og gjøre den installerbar på mobil.

## Installasjon på mobil

1. Åpne spill.html i Chrome/Safari på mobilen
2. Velg «Legg til på hjemskjerm» / «Installer app»
3. Appen fungerer offline

## Utvikling

```bash
# Start lokal server (PWA krever HTTPS eller localhost)
npx serve .
# Eller: python -m http.server 8000
```

## Global leaderboard

Konfigurer Supabase i `config.js` (SUPABASE_URL + SUPABASE_ANON_KEY) og kjør `supabase-setup.sql` i Supabase SQL Editor. Se DEPLOYMENT.md.

## PWA-ikoner

Ikonene genereres automatisk. Hvis de mangler:

```bash
npm install pureimage
node create-icons.js
```
