---
aliases: [web-research]
name: web-research
description: Sběr všech veřejných údajů o firmě a sepsání dossieru pro stavbu demo webu Uptoai. Použij před stavbou každého demo webu.
---

# Web research a dossier

Web je tak dobrý, jak dobré jsou podklady. Tvým výstupem je dossier, podle kterého jde postavit web **bez jediné vymyšlené věty**.

## 1. Zdroje (v tomto pořadí)
1. **Starý web firmy:** úvod, služby, ceník, o nás, kontakt, galerie, rezervace. Max 6 načtení stránek.
2. **Google Maps profil** (vyhledej "název firmy město"): hodnocení, počet recenzí, 3 až 5 nejlepších recenzí doslovně se jménem autora, otevírací doba, adresa, telefon, fotky.
3. **Facebook, Instagram, TikTok:** povinně dohledej, jestli profil existuje (vyhledej `"název firmy" instagram`, `site:instagram.com název město`, odkazy v patičce starého webu, Google profil). Zapiš přesné URL. Když profil nenajdeš, napiš do dossieru "Sociální sítě: nenalezeny (hledáno: ...)". Z profilu: bio, fotky prací, styl, co zákazníci chválí.
   **WhatsApp:** zjisti, jestli firma uvádí WhatsApp. Když ne, ale má mobilní číslo, zapiš ho jako kandidáta pro WhatsApp tlačítko.
4. **Firmy.cz, Zlaté stránky, Bookio, Reservio, Noona:** ceník a rezervační odkaz.
5. **ARES:** IČO, oficiální název, sídlo.

Každý údaj v dossieru má za sebou zdroj v závorce, např. `(Google Maps)`. Údaj bez zdroje do dossieru nepatří.

## 2. Fotky klienta
- Vypiš URL **všech** použitelných fotek z webu, Facebooku, Instagramu a Google Maps. U každé: co na ní je, rozměr, kvalita (dobrá, slabá).
- Minimum pro web: 6 fotek. Když klient nemá 6 dobrých fotek, doplň z Unsplash a u každé napiš přesný vyhledávací dotaz (např. "balayage hair salon interior warm light"). Fotky klienta mají vždy přednost.
- Logo: URL, pokud existuje.

## 3. Tier
- **premium:** beauty (kosmetika, kadeřnictví s cenami nad 1 000 Kč, nehty, estetická medicína), advokáti a notáři, architekti, reality, wellness, zubaři s estetickou stomatologií, firmy s hodnocením 4,7+ a stylovým Instagramem. Zkrátka klienti, kteří dbají na estetiku a mají rozpočet.
- **standard:** autoservisy, řemeslníci, malé salony s nízkými cenami, lokální služby. Cíl je být vidět online a mít silnou landing page.
- Při pochybnosti rozhodni podle cen a vizuálu klienta. Rozhodnutí zdůvodni jednou větou.

## 4. Rezervace a funkce
- Má starý web rezervaci, objednávkový formulář, e-shop? Kterým systémem (odkaz)?
- Nový web musí mít **každou funkci, kterou měl starý**, plus to, co budeme klientovi nabízet. Zapiš seznam "Povinné funkce".

## 5. Šablona dossieru (pole web_dossier)
```
# [Oficiální název] ([město])
Tier: premium | standard (důvod)

## Fakta
- Obor a specializace:
- Adresa: (zdroj)
- Telefon: (zdroj)
- E-mail: (zdroj)
- Otevírací doba: (zdroj)
- IČO:
- Sociální sítě: (URL)
- Hodnocení: 4,8 z 5, 127 recenzí (Google Maps)

## Služby a ceny
- Služba: cena (zdroj)

## Lidé
- Jméno, role (zdroj)

## Recenze (doslovně, max 5)
- "..." Jméno, (zdroj)

## Co je na firmě jedinečné
3 věty: čím se liší od konkurence ve městě. Jen z podkladů.

## Pro koho
Kdo jsou zákazníci, co řeší, proč přichází.

## Povinné funkce
- Rezervace přes [systém, odkaz] / vlastní rezervační formulář / ...

## Fotky
1. URL, popis, kvalita
...

## Vizuální směr
- Nálada (3 slova), barvy (hex, odvozené z loga a fotek klienta), fonty (nadpis + text), co nedělat.
- Premium: návrh hlavního motion efektu (viz demo-web-standards, sekce Premium).

## Build prompt
Hotové zadání pro Web Buildera: struktura sekcí s konkrétními texty v češtině (hero nadpis, podnadpis, CTA, texty sekcí), použité fotky pro každou sekci a hlavní efekt. Texty piš jako zkušený copywriter: konkrétně, prodejně, bez frází.
```

## 6. Zakázané fráze v textech
"Objevte krásu", "komplexní řešení", "na míru", "inovativní", "Neváhejte nás kontaktovat", "dopřejte si", "Vaše spokojenost je naší prioritou", "profesionální přístup", "široká nabídka". Místo nich konkrétní fakt z podkladů.
