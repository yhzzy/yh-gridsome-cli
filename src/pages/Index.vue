<template>
  <Layout>

    <div class="container">
      <div class="hero">
        <h1 class="hero-title">
          {{ $page.homepage.title }}
        </h1>
        <h2 class="hero-subtitle">
          {{ $page.homepage.sub_title }}
        </h2>
      </div>
      <div class="projects">
        <div v-for="gallary in $page.gallaries.edges" :key="gallary.node.id"  class="project">
          <g-link :to="`/projects/${gallary.node.id}`" class="project-link">
            <img :alt="gallary.node.title" :src="`${GRIDSOME_API_URL}${gallary.node.img.url}`">
            <noscript>
              <img src="/src/assets/images/mike-dorner-173502-unsplash.2665e34.16e7958f24c375d7bd7b08073b4ce000.jpg"
              class="thumbnail g-image g-image--loaded" width="2560" alt="Banana">
            </noscript>
            <h3 class="project-title">
              {{ gallary.node.title }}
            </h3>
            <div class="categories">
              <span v-for="category in gallary.node.categories" :key="category.id" class="category">
                {{ category.name }}
              </span>
            </div>
          </g-link>
        </div>
      </div>
    </div>

    <div>
      <div class="latest-journals-heading container">
        <span class="label">
          Latest and greatest
        </span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link v-for="edge in $page.posts.edges" :key="edge.node.id" :to="`/journal-detail/${edge.node.id}`" class="journal">
            <h3 class="journal-title">
              {{ edge.node.title }}
            </h3>
          </g-link>
        </div>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query {
  homepage: strapiHomepage (id: 1) {
    title
    sub_title
  }
  posts: allStrapiPost (limit: 4, page: 1) @paginate {
    edges {
      node {
        id
        title
        intro
      }
    }
  }
  gallaries: allStrapiGallary {
    edges {
      node {
        id
        title
        year
        img {
          url
        }
        categories {
          id
          name
        }
      }
    }
  }
}
</page-query>


<script>
export default {
  name: 'Index',
  metaInfo: {
    title: 'Index'
  }
}
</script>

<style>

</style>
