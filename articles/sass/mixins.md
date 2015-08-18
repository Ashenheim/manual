Mixins zijn functies die het makelijker maakt om herhadelijke patronen op te slaan als een enkele functie en die te gebruiken in het project.

Je begint een mixin met `@mixin` en gebruikt een mixin met `@include`.

```scss
@mixin [name] {
    // ...
}

@function [name];
```

Bijvoorbeeld kan je een mixin schrijven dat prefixes toevoegt:

---

```scss
@mixin transform($val) {
    -webkit-transform: $val;
    transform: $val;
}

// usage
.class {
    @include transform(translateX(100px));
}
```