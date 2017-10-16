<template>
  <div>
    <h1>{{ componentName }}</h1>
    <h2>{{ routeName }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      componentName: 'Editor',
      routeName: '/editor'
    }
  }
}
</script>

