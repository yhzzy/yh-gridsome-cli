<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header-detail">
          <h1 class="journal-title-detail">
            {{ $page.post.title }}
          </h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">
                Categories
              </span>
              <span v-for="category in $page.post.categories" :key="category.id" class="category category-detail">
                {{ category.name }}
              </span>
            </div>
            <div class="journal-date">
              <span class="label">
                Year
              </span>
              <div>
                {{ $page.post.year | date('YYYY') }}
              </div>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="mdToHtml($page.post.content)"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: strapiGallary (id: $id) {
    id
    title
    content
    year
    categories {
      id
      name
      slug
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'ProjectPage',
  metaInfo () {
    return {
      title: this.$page.post.title,
    }
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown.replace(/\(\/uploads/, `\(${this.GRIDSOME_API_URL}\/uploads`))
    }
  }
}
</script>

<style scope>
.journal:hover {
	background: transparent;
}
.category-detail {
  margin-right: 0;
}
.category-detail:after {
	content: ","
}
</style>
