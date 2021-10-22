<template>
  <Layout>

    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          {{ $page.journal.desc }}
        </h1>
      </div>
    </div>

    <g-link v-for="item in $page.posts.edges" :key="item.node.id" :to="`/journal-detail/${item.node.id}`" class="journal-post">
      <div class="container journal">
        <h2 class="journal-title-posts">
          {{ item.node.title }}
        </h2>
        <p class="journal-excerpt">
          {{ item.node.intro }}
        </p>
      </div>
    </g-link>

    <Pager
      class="pager"
      :info="$page.posts.pageInfo"
      nav-class="navigation"
      link-class="page-link page-item"
      activeLink-class="active"
    />

  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        intro
      }
    }
  }
  journal: strapiJournal (id: 1) {
    desc
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'journal'
  },
  components: {
    Pager,
  },
}
</script>

<style>

</style>
