---
to: components/<%= name %>/index.js
---
<%
  const classify = x => h.inflection.classify(h.inflection.titleize(x)).replace(/\-/g,   '')
  const humanize = x => h.inflection.humanize(x).replace(/\-/g, ' ')
%>import Button from 'material-ui/Button'

export const <%= classify(name) %> = () => (
  <Button
    color='inherit'
    onClick={() => console.log('Clicked: <%= humanize(name) %>')}
  ><%= humanize(name) %></Button>
)

export default <%= classify(name) %>
