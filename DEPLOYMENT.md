# Tegnspill – Guide til publishing

Publiser appen med **GitHub**, **Vercel** og **Supabase**. Appen blir tilgjengelig som en installerbar mobil-app (PWA).

---

## 1. GitHub – Last opp koden

### 1.1 Start Git og last opp til GitHub

```powershell
cd "c:\Users\oskar\Desktop\Lars app"

# Initialiser repository
git init

# Legg til og commit
git add .
git commit -m "Initial commit – Tegnspill PWA"

# Opprett repository på github.com (New repository, f.eks. "tegnspill")
# Bytt ut DIN-BRUKER og DITT-REPO med dine verdier
git remote add origin https://github.com/DIN-BRUKER/DITT-REPO.git
git branch -M main
git push -u origin main
```

---

## 2. Supabase – Leaderboard database

### 2.1 Opprett Supabase-prosjekt

1. Gå til [supabase.com](https://supabase.com) og logg inn
2. **New Project** → velg organisasjon, navn (f.eks. "tegnspill"), passord
3. Vent til prosjektet er klart

### 2.2 Lag tabellen for scores

1. I Supabase Dashboard: **SQL Editor** → **New query**
2. Lim inn innholdet fra `supabase-setup.sql` og klikk **Run**
3. Bekreft at tabellen `scores` er opprettet under **Table Editor**

### 2.3 Hent API-nøkler

1. **Settings** (⚙️) → **API**
2. Noter:
   - **Project URL** (f.eks. `https://xxxxxxxx.supabase.co`)
   - **anon public** key (lang nøkkel under "Project API keys")

### 2.4 Legg inn nøklene i prosjektet

Åpne `config.js` og erstatt `null` med verdiene dine:

```javascript
const CONFIG = {
  SUPABASE_URL: 'https://xxxxxxxx.supabase.co',   // Din Project URL
  SUPABASE_ANON_KEY: 'eyJhbGci...',             // Din anon key
  LEADERBOARD_LIMIT: 20
};
```

**Viktig:** Anon-nøkkelen er ment å være offentlig. Database-tilgang styres av Row Level Security (RLS).

---

## 3. Vercel – Deploy på nettet

### 3.1 Koble til GitHub

1. Gå til [vercel.com](https://vercel.com) og logg inn (gjerne med GitHub)
2. **Add New** → **Project**
3. Importer GitHub-repositoryet ditt
4. La Vercel oppdage at det er et statisk prosjekt (ingen build-commands nødvendig)
5. Klikk **Deploy**

### 3.2 Ferdig

Etter noen sekunder får du en URL som `https://tegnspill-xxx.vercel.app`. Appen er nå live.

### 3.3 (Valgfritt) Egen domene

I Vercel-prosjektet: **Settings** → **Domains** → legg til eget domene (f.eks. `tegnspill.no`).

---

## 4. Mobil – Last ned som app (PWA)

Tegnspill er allerede satt opp som PWA. For å installere på mobil:

### Android (Chrome)

1. Åpne appen i Chrome (f.eks. `https://din-app.vercel.app/spill.html`)
2. Trykk **⋮** → **Installer app** / **Legg til på hjemskjerm**
3. Bekreft – ikonet vises på hjemskjermen

### iPhone/iPad (Safari)

1. Åpne appen i Safari
2. Trykk **Deling** (firkant med pil)
3. Velg **Legg til på Hjem-skjerm**
4. Navngi og bekrefte

### Offline

Appen fungerer også uten internett etter første lasting (service worker cacher ressurser).

---

## Oppsummering

| Steg | Verktøy   | Resultat                          |
|------|-----------|-----------------------------------|
| 1    | GitHub    | Kode i versjonskontroll           |
| 2    | Supabase  | Global leaderboard                |
| 3    | Vercel    | Live URL på nettet                |
| 4    | PWA       | Installerbar på mobil + offline   |

---

## Feilsøking

- **Leaderboard tomt:** Sjekk at Supabase URL og anon key er riktig i `config.js`, og at du har kjørt `supabase-setup.sql`
- **Installer-knappen vises ikke:** PWA-installasjon krever HTTPS (Vercel gir det automatisk) og at brukeren ikke allerede har installert
- **CORS-feil:** Supabase har vanligvis RLS riktig satt – sjekk at policies i `supabase-setup.sql` er kjørt
