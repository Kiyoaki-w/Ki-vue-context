# Ki-vue-context
A customizable context menu component built for Vue2, supporting fontawesome icons, auto right/bottom boundary detection.

## Demo
![demo](https://github.com/Kiyoaki-w/Ki-vue-context/blob/master/demo.gif)

A built demo has been provided in the directory `/demo`. Use any static website server to check it.

```bash
$ cd ./demo
# live-server for an example
$ live-server
```

## Install
```bash
$ npm i @kiyoaki_w/vue-context
```

## Usage Example

### Global Registration
```javascript
// main.js
import Vue from 'vue'
import kiContext from '@kiyoaki_w/vue-context'
Vue.use(kiContext)
```

### Import fontawesome icons
Import fontawesome and all the icons you need in `main.js`.
```javascript
// main.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight, faArrowLeft, faArrowUp, faArrowDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
```

### Use it in your Vue project
```html
<template>
  <div id="app" @click="hideContextMenu()" @contextmenu.prevent="showContextMenu($event)">
    ...
    <ki-context 
      ref="kiContext"
      minWidth='1em'
      maxWidth='15em'
      backgroundColor='#fbfbfb'
      fontSize='15px'
      textColor='#35495e'
      iconColor='#41b883'
      borderRadius='0.1'
    />
    ...
  </div>
</template>

<script>
export default {
  methods: {
    showContextMenu (event){
      let items = [
        {
          icon: "arrow-up",
          text: 'Default',
          click: () => {
            alert('Option0!')
          }
        },
        {
          icon: 'arrow-right',
          text: 'With divider',
          divider: true,
          click: () => {
            alert('Option2!')
          }
        },
        {
          icon: 'arrow-down',
          text: 'Disabled',
          disabled: true,
          click: () => {
            alert('Option3!')
          }
        },
      ];
      this.$refs.kiContext.show(event, items);
    },
    hideContextMenu (){
      this.$refs.kiContext.hide();
    }
  }
}
</script>
```

## Props
| prop    | type  | required | default | example from demo |
|---------|-------|----------|---------|-------------------|
| minWidth | String | No | 10em | 10em |
| maxWidth | String | No | 18em | 15em |
| backgroundColor | String | No | #ffffff | #fbfbfb |
| fontSize | String | No | inherit | 15px |
| textColor | String | No | inherit | #35495e |
| iconColor | String | No | inherit | #41b883 |
| borderRadius | String | No | null | 0.1em |

## Items
The array `items` defining the context menu consists of several `item`. The properties of `item` is listed here.

| prop    | type  | required |
|---------|-------|----------|
| text | String | Yes |
| icon | String | No |
| click | function | No |
| divider | boolean | No |
| disabled | boolean | No |


