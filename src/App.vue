<template>
  <div id="app" @click="hideContextMenu()" @contextmenu.prevent="showContextMenu($event)">
    <div style="margin-top: -200px">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1 style="display: block">Ki-vue-context-menu</h1>
    </div>
    <!-- <ki-context 
      ref="mymenu"
    /> -->
    <ki-context 
      ref="mymenu"
      minWidth='1em'
      maxWidth='15em'
      backgroundColor='#fbfbfb'
      fontSize='15px'
      textColor='#35495e'
      iconColor='#41b883'
      borderRadius='0.1em'
    />
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      items: [
        {
          icon: "arrow-up",
          text: 'Default',
          click: () => {
            alert('Option0!')
          }
        },
        {
          text: 'No icon'
        },
        {
          text: 'No click function'
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
        {
          icon: 'arrow-left',
          text: 'Long long long long long long long long text',
          click: () => {
            alert('option4!')
          }
        },
      ]
    }
  },
  methods: {
    showContextMenu (event){
      this.$refs.mymenu.show(event, this.items);
    },
    hideContextMenu (){
      this.$refs.mymenu.hide();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
