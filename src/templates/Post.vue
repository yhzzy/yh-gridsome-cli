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
                Author
              </span>
              <span class="author-name">
                {{ $page.post.admin_user.lastname }} {{ $page.post.admin_user.firstname }}
              </span>
            </div>
            <div class="journal-date">
              <span class="label">
                Date
              </span>
              <div>
                {{ $page.post.created_at | date('DD.MMM YYYY') }}
              </div>
            </div>
            <div class="journal-time">
              <span class="label">
                Time
              </span>
              <span >
                1 min read
              </span>
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
  post: strapiPost (id: $id) {
    id
    title
    content
    admin_user {
      lastname
      firstname
    }
    created_at
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'PostPage',
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
</style>
