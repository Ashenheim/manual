Met Sass maps kan je gemakkelijker grote aantal variabelen opslaan. Die je als een "array" kan doorloopen en CSS van kan maken via een _for_ loopt.

Bijvoorbeeld:

```scss
$map: (
    'alpha',
    'bravo',
    'charlie',
    'delta',
    'echo',
);

@each $name in $map {
  .#{$name} {
      background: url(#{$name}.jpg);
    }
}
```

Output als:

```css
.alpha { background: url(alpha.jpg); }

.bravo { background: url(bravo.jpg); }

.charlie { background: url(charlie.jpg); }

.delta { background: url(delta.jpg); }

.echo { background: url(echo.jpg); }
```