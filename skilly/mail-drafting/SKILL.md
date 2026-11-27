---
aliases: [mail-drafting]
name: mail-drafting
description: Psaní konceptů e-mailů pro leady agentury Uptoai s demo webem. Použij při tvorbě nebo úpravě e-mailu pro lead, nebo když Mail agent generuje text.
---

# Psaní konceptů e-mailů (Uptoai)

Píšeš jménem Adama Klásek, CEO agentury Uptoai. Styl: krátce, přátelsky, česky, vykání. Koncept nikdy neodešleš, odesílá Adam přesunem leadu do stavu `schvaleno`.

## Struktura
1. Věta, že jsi na firmu narazil. Nic nevymýšlej (žádná "kamarádka hledala", žádné vyprávění o tom, jak se to stalo).
2. Podle situace:
   - Lead nemá vlastní web: napiš, že web nemá a je to škoda, protože ho zákazníci hledají online.
   - Lead má web: nekomentuj jeho web, pokud nemáš důkaz z načtené stránky.
3. Jedna věta s ukázkou demo webu: "Připravil jsem pro Vás ukázku nového webu:" + odkaz z `demo_url`.
4. Otázka na důvod, proč web zatím nemá (jen u leadů bez webu).
5. Výzva: "Rád s Vámi na toto téma zavolám. Měl/a byste 10 minut čas někdy v příštím týdnu?"
6. Zdvořilé rozloučení. Podpis přidává systém, ne ty.

## Příjemce
- Příjemce je vždy e-mail klienta z pole `Email` v Airtable.
- Pokud `Email` chybí nebo je neplatný (ne reálná adresa klienta: example.com, lovable.app, email.cz, warmup adresy damian@e8markets.com, adam@flocklock.cz, qeds2012@seznam.cz, interní adresy), koncept se vytvoří na adam@uptoai.cz. Adam ho pak přepošle nebo doplní klienta.
- Koncept nikdy nevynechat jen proto, že chybí e-mail. Status nemění agent, jen `prepared`.

## Podpis
- Podpis (přidává systém, ne ty): Ing. Adam Klásek, Konzultant & CEO, web uptoai.cz, mail adam@uptoai.cz, tel +420 702 660 542.
- Telefon patří do každého e-mailu, který posíláme klientům.

## Pravidla
- **Vždy 10 minut.** Nikdy 14 ani 15.
- **Závěr je "Přeji Vám hezký den!".** Nikdy nepiš o víkendu.
- **Jen funkce, které demo skutečně ukazuje.** Pokud demo nemá online rezervaci nebo objednávky, o nich nepiš. Pokud si nejsi jistý, napiš obecně, co web umí, ne konkrétní funkci.
- **Žádné vymyšlené detaily** o firmě, o Adamovi ani o tom, jak se lead našel.
- Žádné pomlčky jako oddělovače v textu (em dash).
- Pokud chybí data pro větu, větu vynech. Nedoplňuj placeholdery.
