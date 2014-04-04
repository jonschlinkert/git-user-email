# {%= name %} {%= badge("fury") %}

> {%= description %}

## Install
{%= include("install", {save: '--save'}) %}

## Usage

```js
var email = require('git-user-email');
console.log(email);
//=> jon@sellside.com
```

## Author
{%= contrib("jon") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}