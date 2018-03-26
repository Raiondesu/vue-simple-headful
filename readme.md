# vue-headful

[![npm](https://img.shields.io/npm/v/vue-headful.svg?style=flat-square)](https://www.npmjs.com/package/vue-headful) 
[![](https://img.shields.io/badge/very-awesome-orange.svg?style=flat-square)](https://github.com/vuejs/awesome-vue#meta-tags)
[![npm](https://img.shields.io/npm/dt/vue-headful.svg?style=flat-square)](https://www.npmjs.com/package/vue-headful) 


vue-headful allows to set the title and several meta tags of your document from any Vue.js view.
vue-headful is a tiny wrapper around [Headful](https://github.com/troxler/headful), a generic library to set meta tags with JavaScript.

-----

## Install

`npm i vue-headful`

## Table Of Contents

 - [Usage](#usage)
    - [Register the plugin](#register-the-plugin)
    - [Plugin options](#plugin-options)
    - [Headful shorthand](#headful-shorthand)
    - [Use](#use)
        - [As function](#as-function)
        - [As arrow-function](#as-arrow-function)
        - [As data](#as-component-data)
        - [As object](#as-object)
    - [Description](#description)
    - [More](#more)

-----

## Usage

### Register the plugin

```js
import Vue from 'vue';
import vueHeadful from 'vue-headful';

Vue.use(vueHeadful);

new Vue({
    // your configuration
});
```

And then [use](#use) the `headful` component option in any of your views.


### Plugin options

Optinally you can define a custom key to use with your components' options:

```js
Vue.use(vueHeadful, {
    key: 'myMetaTags' // custom key for component option
})
```

and then in some `component.vue`:

```js
export default {
    myMetaTags: {
        title: 'Yay, a title in my custom option!'
    }
}
```

### Headful shorthand

The plugin also adds a shorthand for headful in every vue instance as `$headful` (or as `$[your custom key]`).

```js
methods: {
    someMethod() {
        this.$headful({ /* your headful tags here */ });

        // or, with the custom key:
        // this.$myMetaTags({ /* your headful tags here */ });
    }
}
```

### Use

#### As function

```js
export default {
    // Supports Vue component's `this` context through an argument
    headful(vm) {
        return {
            title: 'some title',
            description: 'yay, a static description'
        }
    }
}
```

#### As arrow function

```js
export default {
    headful: vm => ({
        // Supports Vue component's `this` context through an argument
        title: 'some title of ' + vm.someString,
        description: 'yay, a static description'
    }),
    data() {
        return {
            someString: 'string'
        }
    }
}
```

#### As component data

```js
export default {
    data() {
        return {
            someString: 'string',
            headful: {
                title: 'title',
                description: 'yay, a static description'
            }
        }
    }
}
```

#### As an object

```js
export default {
    headful: {
        title: 'some title',
        description: 'yay, a static description'
    }
}
```

-----

## Description

vue-headful is only a wrapper around [Headful](https://github.com/troxler/headful) and by itself does not do that much.
vue-headful supports all the [head properties that are supported by Headful](https://github.com/troxler/headful#documentation).
You can find a non-complete list of head properties in the following example:

```js
headful() {
    return {
        title: ""
        description: ""
        keywords: ""
        image: ""
        lang: ""
        ogLocale: ""
        url: ""
    }
}
```

If there are any other head properties or attributes you want to set, you can use `html` (for arbitrary elements in the whole document) or `head` (for elements within `<head>`) as follows.
The selectors can be any valid CSS selector.

```js

headful() {
    return {
        html: {
            body: { id: 'aPageId' },
            h1: { 'data-foo': 'bar' },
        },
        head: {
            'meta[charset]': { charset: 'utf-8' },
        }
    }
}
```

```html
<!-- Results in: -->
<head>
    <meta charset="utf-8">
</head>
<body id="aPageId">
<h1 data-foo="bar"></h1>
```

If you want to **remove a previously defined property**, you can set it to `undefined` as in the example below:

```js
headful() {
    return {
        title: undefined
    }
}
/* Results in:
<title></title>
<meta itemprop="name">
<meta property="og:title">
<meta name="twitter:title">
*/
```

**IMPORTANT**

Note that neither Headful nor vue-headful add missing HTML elements, they only add attribute values.
So it is important that you add everything that you want to have populated in your HTML first.
For example, to specify the title and description you have to prepare the HTML as follows.

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta itemprop="name">
    <meta property="og:title">
    <meta name="twitter:title">
    <meta name="description"/>
    <meta itemprop="description">
    <meta property="og:description">
    <meta name="twitter:description">
</head>
<body>
<!-- ... -->
</body>
</html>
```

vue-headful also supports dynamic properties and adds watchers to everything.
That means you can also set head properties asynchronously, for example after an API request.

```html
<script>
    export default {
        headful() {
            return {
                title: 'Dynamic title',
            };
        },
        mounted() {
            // dummy async operation to show watcher on properties
            setTimeout(() => {
                this.headful.title = 'Dynamic async title';
            }, 3000);
        },
    };
</script>
```

Also see the non-complete list of meta tags and other head properties you can define using vue-headful:

* `<html lang>`
* `<title>`
* `<meta name="description">`
* `<meta itemprop="description">`
* `<meta property="og:description">`
* `<meta name="twitter:description">`
* `<meta name="keywords">`
* `<meta itemprop="image">`
* `<meta property="og:image">`
* `<meta name="twitter:image">`
* `<meta property="og:locale">`
* `<link rel="canonical">`
* `<meta property="og:url">`
* `<meta name="twitter:url">`

## More

For more information on everything you can put into `<head>`, have a look at <https://gethead.info/>.
