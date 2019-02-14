<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data: function () {
      return {
        msg: 'Hello Vue!'
      }
    }
  })
</script>
