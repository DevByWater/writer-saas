<template>
  <div>
    <h1>{{ componentName }}</h1>
    <h2>{{ routeName }}</h2>
    <router-link to="/">Go back home</router-link>
    <quill></quill>
  </div>
</template>

<script>
import quill from './QuillComponent'

export default {
  data () {
    return {
      componentName: 'Editor',
      routeName: '/editor'
    }
  },
  components: {
    quill
  }
}
</script>

