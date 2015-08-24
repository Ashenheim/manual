Sass (Syntactically Awesome Style Sheets) is een pre-processor voor het genereren van CSS. Het is te schrijven in twee manieren. In Sass en SCSS. Sass gebruikt indents, en SCSS is meer als CSS met brackets om begin en eindes weer te geven en is het makelijks om op te pakken. In het bedrijf wordt er voornamelijk met SCSS gewerkt vanwege dat het herkenbaarder is en sneller op te pakken en flexiebeler is om te schrijven.

Het voordeel van Sass is dat je sneller CSS mee kan schrijven vanwege dat je geen css classes hoeft te typen of kleurcodes moet onthouden.

### Voorbeelden

Als een waarde meerdere keren gebruikt worden, kan je deze opslaan als een variabel. Een variabel begint altijd met `$` en kan het beste zonder hoofdletters, speciale tekens of spaties geschreven (spaties kunnen vervangen worden met '-').

```scss
$color-red: #F10000;
$spacing: 20px;

#parent {
    background: $color-red;
    padding: $spacing;
}

#parent .child {
    background: #fff;
    color: $color-red;
}
```

```css
#element {
    background: #f10000;
    padding: 20px;
}
#parent .child {
    background: #fff;
    color: #f10000;
}
```

Bovenstaande voorbeeld kan je verbeteren.
