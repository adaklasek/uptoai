---
aliases: [web-qa]
name: web-qa
description: Kritické hodnocení demo webu Uptoai, skóre a feedback pro přepracování. Použij při kontrole každého demo webu před tím, než ho uvidí Adam.
---

# QA demo webu

Hodnotíš jako art director a obchodník zároveň. Buď přísný: průměrný web dostane 5, ne 8. Adam uvidí web až po tvém schválení, takže každá chyba, kterou pustíš, jde za tebou.

## 1. Prohlídka
- Screenshoty celé stránky přes Playwright: desktop 1440 px a mobil 390 px.
  ```
  pip install playwright --break-system-packages && python -m playwright install chromium
  ```
  Skript: otevři URL, počkej na `networkidle`, odscrolluj postupně dolů (kvůli lazy load a animacím), udělej `full_page` screenshot. Prohlédni si je.
- Když Playwright nejde nainstalovat, hodnoť ze zdrojového kódu a do Běhy zapiš "bez vizuální kontroly". Takový web nikdy nedostane víc než 7.
- Načti zdrojový kód a projdi checklist F ze skillu [[demo-web-standards]].
- Porovnej každý údaj na webu s `web_dossier`.

## 2. Stopky (jakákoli = nejvýš 4 body celkem)
- emoji kdekoli
- údaj, který není v dossieru nebo s ním nesedí (telefon, cena, recenze, jméno)
- chybí povinná funkce z dossieru (např. rezervace)
- placeholder nebo zakázaná fráze
- stopa Lovable nebo jiného generátoru
- rozbité rozložení na mobilu
- AI patos nebo nepodložené přívlastky (demo-web-standards A9, A10)
- chybí WhatsApp tlačítko, i když firma WhatsApp nebo mobil má
- chybí odkaz na sociální síť, kterou dossier uvádí
- vlastnoručně kreslené amatérské logo nebo ikona

## 3. Rubrika (každá 1 až 10)
1. **První dojem (váha 2):** vypadá jako dílo dobrého studia? Je jasné, co firma dělá a kde, do 5 sekund?
2. **Originalita (váha 2):** odpovídá web tomuto klientovi, nebo by šel přelepit na jakoukoli firmu z oboru? Generický = max 5.
3. **Prodejní síla (váha 2):** konkrétní nadpis, důkazy (hodnocení, recenze), jasné CTA, rezervace po ruce.
4. **Obsah a přesnost:** dost informací, vše pravdivé, ceny, hodiny, patička.
5. **Fotky:** fotky klienta, kvalita, množství, konzistence.
6. **Typografie a barvy:** fonty podle oboru, kontrast, hierarchie.
7. **Mobil:** čitelnost, tlačítka, rychlost.
8. **Živost a efekty** (váha 2 u premium): hero slideshow z fotek klienta, 3D prvek z oboru, plynulost, nepřeplácanost, fallback. Statický web bez pohybu dostane max 6.
9. **AI a SEO:** JSON-LD, FAQ, title, description, faktický odstavec o firmě.

Celkové skóre = vážený průměr, zaokrouhlený na celá čísla. Projde od 8 a bez stopek.

## 4. Feedback
- Číslovaný seznam, nejdůležitější první, max 12 bodů.
- Každý bod: **kde** (sekce), **co je špatně**, **jak to opravit** konkrétně (text, foto, barva, efekt). Ne "zlepšit design", ale "Hero: tmavá fotka zaniká, použij fotku 3 z dossieru (interiér s oknem) a zesvětli overlay na 30 %".
- Na konec 1 větu: co je na webu nejlepší a nesmí se při přepracování ztratit.
