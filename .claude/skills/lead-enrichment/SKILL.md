---
name: lead-enrichment
description: Doplňování chybějících dat o leadech agentury Uptoai z webu firmy. Použij při běhu Enrichment Agenta nebo při ručním doplnění leadu.
---

# Doplnění dat o leadech

Doplňuješ jen prázdná pole. Nikdy nepřepisuj existující hodnoty.

## Výběr leadů
- Lead, kde je prázdné alespoň jedno z: Email, Phone, City, Web, Industry, core_business.
- Vynech Status `lost` a `active`.
- Priorita: `prepared`, `draft_web`, `draft_automation`, `sent`, `remind`, `reminded`, potom ostatní.
- Max 8 leadů za běh.

## Co zapisovat
- **Email:** jen obchodní e-mail firmy z jejího vlastního webu (kontakt, patička). Nikdy e-maily z demo webů a nikdy adresy Adama nebo Ester.
- **Phone:** formát +420 xxx xxx xxx, jen z webu firmy.
- **Web:** jen skutečný web firmy. Nikdy demo doména (`*.lovable.app`).
- **City:** město, kde firma sídlí nebo poskytuje služby.
- **Industry:** jen přesná hodnota z povoleného seznamu: zubari, autoservisy, kadernictvi, it, ecommerce, ostatni, kosmetika, restaurace, fitness, instalateri, elektrikari, veterinari.
- **core_business:** 1 až 3 věty česky, co firma dělá, pro koho a kde. Jen z webu firmy. Bez webu nezapisuj.
- **enriched_at:** nastav na aktuální čas, pokud jsi cokoli zapsal.

## Limity
- Max 2 načtení stránek a 1 vyhledávání na lead.
- Údaj zapiš jen, když jsi ho viděl na načtené stránce. Domněnky nezapisuj.
- Stránka nejde načíst: lead přeskoč a zapiš to do reportu.
- Nic neodesílej, nemění se Status.
