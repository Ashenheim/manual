Wat voorbeelden voor commando's in de command-prompt die meest gebruikt worden met NPM. Om bijvoorbeeld pakketten te installeren, verwijderen, op te slaan in het package.json en zelfs om hulp.

- `npm init`

  Maakt de bestand _package.json_ aan, je wordt hier door wat stappen heengeleid. Dit bestand is voor het opslaan van de benodigheden zodat anderen het kunnen makelijk kan installeren.

- `npm install`

  Installeert alles wat in het _package.json_ staat beschreven.

- `npm install` `gulp gulp-sass gulp-prefixer`

  installeert _gulp_, _gulp-sass_ en _gulp-prefixer_. Er kan meerdere pakketten in één keer installeren door alles met spaties te scheiden.


### Opties

Met de commando's kan je op het eind ook opties gebruiken.

- `--save-dev` **&** `--save`

  Slaat _gulp_ op in _package.json_ zodat het door andere makelijk weer gedownload kan worden met `npm install`. De `--save` en `--save-dev` op het eind slaat het op in __package.json_. Gebruik `--save-dev` voor development componenten en `--save` voor distributie componenten.
