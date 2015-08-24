### Normal links

```markdown
[Title for link](http://gotosite.com)
```

```markup
<a href="http://gotosite.com">Title for link</a>
```

### Images

```markdown
![image alt](/image.jpg)
```

```markup
<img src="/image.jpg" alt="image alt">
```

### Referenties

Er kan ook referenties van links gemaakt worden, makelijker voor het bijhouden van links en afbeelding locaties.

---

```markdown
##### [Lorem ipsum dolor sit amet][google]

![kitty][image]

Consectetur adipisicing elit. [Voluptas][node.js] error fugiat velit mollitia ratione eaque alias tenetur vel non vitae maxime, ut qui culpa reprehenderit, sed quibusdam esse aut provident?



[google]: http://google.com
[node.js]: https://nodejs.org
[image]: /articles/markdown/images/kitty.jpg
```

```markup
<h5 id="loremipsumdolorsitametgoogle"><a href="http://google.com">Lorem ipsum dolor sit amet</a></h5>

<p><img src="/articles/markdown/images/kitty.jpg" alt="kitty"></p>

<p>Consectetur adipisicing elit. <a href="https://nodejs.org">Voluptas</a> error fugiat velit mollitia ratione eaque alias tenetur vel non vitae maxime, ut qui culpa reprehenderit, sed quibusdam esse aut provident?</p>
```
