<template>
  <quill-editor v-model="content" >

  </quill-editor>
</template>

<script>

export default {
  data () {
    return {
      name: 'quill',
      content: 'Welcome to Quill'
    }
  }
}
</script>
