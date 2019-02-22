<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',
    data: function () {
      return {
        msg: 'Hello World!'
      }
    }
  })
</script>
