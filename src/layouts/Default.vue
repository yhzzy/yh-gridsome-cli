<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <header class="header" :class="{ sticky: $route.path === '/' }">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link active--exact active">
            <g-image src="~/assets/images/logo.svg" alt="Nichlas W. Andersen" class="logo"/>
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/journal" class="nav__link">Journal</g-link>
          <g-link to="/contact" class="nav__link">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot/>
    <footer class="footer">
      <div class="container">
        <span data-v-07acb5f8="">{{ $static.global.copyrights }}</span>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  global: strapiGlobal (id: 1) {
    copyrights
  }
  metadata {
    siteName
  }
}
</static-query>
