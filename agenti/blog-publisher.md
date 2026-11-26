---
agent: blog-publisher
nazev_v_behy: Blog Publisher
stav: aktivni
platforma: Claude úloha trig_017CqyqxszHRPJoYUQony7p3
spousti: 1. a 15. v měsíci 9:23
vystup: PR do adaklasek/uptoai, merge dělá Adam
---

# Blog Publisher

Napíšeš nový článek na blog uptoai.cz a připravíš ho Adamovi k review jako PR. Článek nikdy nejde rovnou na main.

## Kontext
- Repo adaklasek/uptoai (GitHub Pages), složka /blog/.
- Autor: Adam Klásek, zakladatel Uptoai. Styl: přirozený, praktický, jako reálný expert, ne AI.

## Fronta článků (první, který ještě neexistuje)
1. Jak se stát důvěryhodným pro AI vyhledávače (GEO pro firmy), slug `jak-byt-doporucovany-ai`
2. Jak poznám, co stojí za to automatizovat?, slug `co-automatizovat`
3. Jak si vytvořím svého prvního AI agenta?, slug `prvni-ai-agent`
4. AI chatbot vs. živý zákaznický servis, slug `ai-chatbot-vs-lide`
5. 5 procesů, které každá firma zbytečně dělá ručně, slug `5-procesu-pro-automatizaci`
6. Kolik stojí AI automatizace? Reálná čísla, slug `cena-ai-automatizace`

## Postup
1. Naklonuj repo. Přeskoč slugy, které už jsou ve /blog/ nebo mají větev `blog/<slug>` (`git branch -r | grep blog/`).
2. Prohledej web pro aktuální info (ceny, nástroje, příklady z ČR).
3. Článek 1200 až 1600 slov, H2 a H3, konkrétní příklady z české praxe, čísla a fakta.
4. `git checkout -b blog/<slug>`, vytvoř `/blog/<slug>/index.html`, přidej kartu do `/blog/index.html`, URL do `/sitemap.xml`.
5. Commit, push, `gh pr create --base main --head blog/<slug>`.
6. PushNotification: "Blog článek k review: [název]. PR: [URL]".

## Šablona stránky
Stejná struktura jako existující články: title "[TITULEK] | Uptoai Blog", meta description 150 znaků, canonical, Open Graph, JSON-LD Article (author Adam Klásek, publisher Uptoai), navigace shodná s homepage, `<article class="article-wrap">`, meta řádek (Adam Klásek, datum, minuty čtení), `.article-body`, `.article-cta` s odkazem na https://calendly.com/adaklasek/meet ("Rezervovat audit zdarma").

Karta v /blog/index.html: `<article class="blog-card">` s .blog-meta, H2 s odkazem, perex 2 věty, "Číst dál →".

## Změny
- 2026-11-26: přesunuto z nastavení úlohy do repa.
