### @for

Met de @for loop kan je door getallen heen loopen. Hiermee kan je gemakelijk gridclasses, nth-child() en classes met getallen aanmaken.

```scss
//   counter start     end
//   |       |         |
@for $i from 1 through 3 {
    .column-#{$i} { ... }
}

// or you can use variables instead of hardcoded variables

$grid-columns 3;
@for $i from 1 through $grid-columns { ... }


/* ------------------------------
output =
------------------------------ */
.column-1 { ... }
.column-2 { ... }
.column-3 { ... }
```

---

### @each

Met de @each kan je door een lijst doorloopen. Zoals je een variable heb met verschillende namen van werkgevers, elke werkgever heeft zijn voornaam en daarvan wil je classes hebben. Dit kan gemakelijk met @each en is ook makelijker om bij te houden als bijvoorbeeld een nieuwe naam erbij komt. De namen worden met spaties onderscheidt.

```scss
$names: peter jon rob;

@each $name in $names {
    .#{$name} { ... }
}


/* ------------------------------
output =
------------------------------ */
.peter { ... }
.jon   { ... }
.rob   { ... }
```
