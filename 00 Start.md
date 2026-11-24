# Uptoai: řídicí centrum (Obsidian)

Tohle je domovská stránka vaultu. Všechno, co tu změníš, se do 5 minut samo uloží do repa a agenti to použijí při dalším běhu.

## Co kde je
- `CLAUDE.md`: pravidla agentury a registr agentů. Čte ho COO agent i Agent Runner při každém běhu.
- `agenti/`: jeden soubor na agenta. Hlavička říká, kdy se spouští, co bere a co vrací. Tělo je jeho pracovní postup. **Tohle je místo, kde agenty měníš.**
- `skilly/`: návody, podle kterých agenti pracují (styl e-mailů, standardy webů, doplňování dat). Jeden skill může používat víc agentů.
- `docs/`: strategie, briefy, předávky sezení.

## Jak spolu vylepšujeme agenty
1. **Uvidíš špatný výstup** (e-mail, web, data v Airtable).
2. **Otevři soubor agenta** v `agenti/` nebo jeho skill ve `skilly/`.
3. **Oprav pravidlo, ne výstup.** Napiš konkrétně, co se má dít jinak, ideálně s příkladem dobře a špatně. Příklad: "V e-mailu vždy 10 minut hovoru, nikdy 15."
4. **Zapiš to do sekce Změny** dole v souboru: datum, co a proč.
5. Hotovo. Do 5 minut se změna pushne a agent ji použije při dalším běhu.

Když si nevíš rady, napiš mi do chatu "uprav agenta X, aby..." a já soubor upravím sám. Změnu pak uvidíš i tady.

## Pravidla úprav
- Do souborů nikdy nepiš hesla, tokeny ani API klíče.
- Hlavičku agenta (mezi `---`) měň opatrně. `stav: vypnuto` agenta zastaví.
- Velké změny procesu (nový status, nový krok v pipeline) napiš mně nebo COO agentovi, ať se promítnou i do Airtable a n8n.

## Agenti v novém systému
- [[agenti/lead-analyst|Lead Analyst]]: první agent spouštěný událostí (nový lead).
- Ostatní agenti zatím běží podle registru v `CLAUDE.md` a budou se sem postupně přesouvat.
