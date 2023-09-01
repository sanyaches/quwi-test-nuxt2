<script>
export default {
  name: 'IndexPage',
  middleware: 'authCheck',
  created() {
    this.$router.push('/home')
  }
}
</script>

<template>
  <div />
</template>
