---
to: pages/<%= name %>/index.scss
---
.pageTitle {
  /* Random color */
  color: <%= '#'+Math.floor(Math.random()*16777215).toString(16) %>;
}
