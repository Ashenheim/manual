
### Gulp/node package starter tutorial

1. Installeer node.js tool [https://nodejs.org/][node] grote groene instal knop op de home
2. Ga naar de map van het project waar je gulp op wilt gebruiken.
3. `Shift + right-click` in de map en kies open command window here.
4. Als je al een package.json hebt zoals in dit voorbeeld ga dan naar stap 8, anders ga je verder en skip je 8
typ achter `path/to/project npm init` > `enter` om node package manager te activeren
5. Daarna kan je de verschillende variabelen zoals titel enz invullen.
6. Als je akkoord bent druk dan enter en dan wordt er een package.json aan je folder toegevoegd.(Bovenstaande waardes kan je daarin nog aanpassen).
7. Hierna typ je bijvoorbeeld `npm install gulp --save-dev` om gulp aan de dev dependencies toe te voegen (of `--save` voor gewone dependancies )
8. in het geval je een `package.json` van een derde/collega hebt ontvangen. Sla dan stap 4 > 7 over en typ achter `path/to/project npm install` > enter om de vooraf ingevulde dependencies te installeren 
9. Door bovenstaande 2 manieren word een map “node_modules” aan je folder toegevoegd.
10. Als je de package.json uit het voorbeeld hebt gebruikt typ je achter `path/to/project gulp` om de server, watch en sass compiler te starten.


[node]: https://nodejs.org/
