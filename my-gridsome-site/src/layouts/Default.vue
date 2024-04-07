<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* Reset body styles */
body {
  margin: 0;
  padding: 0;
}

/* Container layout */
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px; /* Adjusted padding */
}

/* Header styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

/* Navigation links */
.nav__link {
  margin-left: 20px;
}
</style>
