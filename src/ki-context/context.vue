<template>
  <div class="container">
    <ul class="menu" 
      :style="{ 
        minWidth: minWidth,
        maxWidth: maxWidth,
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        borderRadius: borderRadius
      }" 
      v-show="menuShow"
    >
      <li class="item"
        v-for="i in items" 
        @click="i.click"
        :style="{
          borderBottom: i.divider,
          cursor: i.cursor,
        }"
      >
        <font-awesome-icon class="item-icon" v-if="i.icon" :style="{color: i.iconColor}" :icon="i.icon" />
        <font-awesome-icon class="item-icon" v-else :style="{opacity: '0'}" icon="arrow-down" />
        <span class="item-text" :style="{color: i.textColor}">{{i.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    // props on 'menu'
    'minWidth', 'maxWidth', 'backgroundColor', 'fontSize', 'borderRadius',
    // props on 'item'
    'iconColor', 'textColor'
  ],
  data() {
    return {
      menuShow: false,
      items: [],
    }
  },
  methods: {
    parseFuncs (items){
      for (let i in items) {
        items[i].iconColor = this.iconColor;
        items[i].textColor = this.textColor;
        // with no click function
        if (typeof items[i].click != 'function') {
          items[i].click = () => null; // assign null function
        }
        // disabled
        if (items[i].disabled) {
          items[i].click = () => null;
          items[i].cursor = 'not-allowed';
          items[i].iconColor = '#9b9b9b';
          items[i].textColor = '#9b9b9b';
        }
        // with divider
        if (items[i].divider) {
          items[i].divider = '1px solid #ebebeb';
        }
      }
      return items;
    },

    show (event, items){
      this.items = this.parseFuncs(items);
      this.$nextTick(() => {
        let menu = document.getElementsByClassName('menu');
        menu = menu[0];
        let menuHeight = menu.offsetHeight;
        let menuWidth = menu.offsetWidth;

        // get menu size on the very first context event
        if (menuHeight < 1 || menuWidth < 1) {
          menu.style.display = 'block';
          menuHeight = menu.offsetHeight;
          menuWidth = menu.offsetWidth;
        }

        // compute menu position
        if((menuWidth + event.pageX) >= window.innerWidth) {
          menu.style.left = (event.pageX - menuWidth) + "px";
        } 
        else {
          menu.style.left = event.pageX + "px";
        }
        if((menuHeight + event.pageY) >= window.innerHeight) {
          menu.style.top = (event.pageY - menuHeight) + "px";
        } 
        else {
          menu.style.top = event.pageY + "px";
        }
        this.menuShow = true;
      })
    },

    hide (){
      this.menuShow = false;
    }
  }
}
</script>

<style scoped>
.container{
  z-index: auto  
}
.container .menu{
  position: absolute;
  display: inline-block;
  min-width: 10em;
  max-width: 18em;
  white-space: nowrap;
  overflow: hidden;
  margin: .2em;
  padding: .1em .1em;
  font-family: Roboto, Tahoma, sans-serif;
  font-size: inherit;
  list-style-type: none;
  border: 1px solid #cccccc;
  box-shadow: 2px 2px 2px rgba(20, 22, 26, .5);
  text-align: start;
  vertical-align: middle;
  background-color: white;
}
.container .menu .item{
  padding: .25em 0;
}
.container .menu .item:hover{
  padding: .25em 0;
  background-color: rgba(0, 116, 232, 0.2);
  cursor: context-menu;
}
.container .menu .item-icon{
  padding: 0 4px;
  width: 20px;
  font-size: 0.90em;
  text-align: center;
}
.container .menu .item-text{
  font-weight: 500;
  display: inline-block;
}
</style>
