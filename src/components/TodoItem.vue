<template>
  <p v-on:click="$emit('delete')">{{title}}</p>
</template>

<script type="text/javascript">
export default{
  props: ['title']
}
</script>
