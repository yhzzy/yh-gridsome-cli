<template>
  <Layout>

    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>

    <g-link to="/journal/gridsome-forestry-cms/" class="journal-post">
      <div class="container journal">
        <h2 class="journal-title">
          Gridsome with Forestry CMS
        </h2>
        <p class="journal-excerpt">
          Get up and running with Forestry CMS, a git-backed headless CMS with a
          slick editing interface.
        </p>
      </div>
    </g-link>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'journal'
  }
}
</script>

<style>

</style>
