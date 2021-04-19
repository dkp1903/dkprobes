

1. Avoid magic numbers.

Do not do things like, 

```
a.length < 8 ? b = `hello` : b = `not hello`
```

The developer who comes after you will have no idea what 8 represents. 

Instead, do this 

```
CONST MAX_LENGTH = 8
a.length < MAX_LENGTH ? b = `hello` : b = `not hello`
```