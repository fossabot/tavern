---
to: _templates/<%= name %>/<%= action || 'new' %>/index.ejs.t
---
---
to: app/<%= name %>.js
---
const <%= name %> = ```
Hello!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen
```

console.log(<%= name %>)


