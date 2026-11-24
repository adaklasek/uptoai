# Předávka sezení 24.11.2026 (chat s Adamem o agentech)

## Co je hotové
- Registr agentů v `CLAUDE.md` vyplněný podle skutečného stavu v n8n, Make a Claude naplánovaných úlohách (commit `43e79aa`).
- Nový skill `.claude/skills/uptoai-agent-builder/SKILL.md`: postup stavby a úprav agentů, karta agenta, týdenní 1:1. Používej ho při každé práci na agentech.
- ClickUp úkol "Registr agentů" uzavřený.
- Adam si v connectorech nastavuje Always allow pro bezpečné nástroje (dřív ho brzdilo opakované schvalování).

## Otevřené body (čekají na Adamovo "ano")
1. Vypnout zastaralé, ale pořád zapnuté věci: n8n `cOEBh1jIYPL8SUI7` (Analyst, stará pole), n8n `dx76QKy76Na3OyiQ` (Drafter v2, překryv s Mail agentem v2), Make `10052185` (COO-Leads), Claude úloha `trig_01HE5UQk9vppsj7re9ATDgRd` (Web-Demo-Builder, Telegram).
2. Ověřit uzly n8n Sender `yRA3kCuQauHtzRME`: musí číst `Status = schvaleno`, ne `pipeline_status`, a zapisovat `sent`, ne `odeslano`.
3. Sloučit CEO ClickUp Orchestrace (`trig_01R4DTsgUFuqQ5cGtfdqoU1N`) a Hodinovou kontrolu Backlogu (`trig_01Xjo3RPbSUuvvtAHpfqMxKs`).
4. Ester Email Check běží naprázdno, chybí napojení ester@uptoai.cz.
5. Hunter (Make `10030268`) bere cíle z Google Sheets, přepnout na Airtable.
6. Zjistit od Adama účel n8n agentů Zadávač a Kontrolor.

## Pro údržbu CLAUDE.md
Pod novým registrem zůstala stará tabulka agentů a starý pipeline flow s Telegramem. Jsou neaktuální, nahradit odkazem na registr.
