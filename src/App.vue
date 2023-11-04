<script setup>


</script>

<template>

  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">

          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Navbar</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <form class="d-flex" role="search">
                    <button class="btn btn-outline-success" type="submit">login</button>
                </form>
                </div>
            </div>
            </nav>

        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <aside>
                    <router-view name="LeftSideBar"></router-view>
                </aside>
            </div>
            <div class="col-md-9">
                <div class="main-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
  </main>

</template>

<style scoped>
main {
    margin-top: 86px;
}
header {
    background: #f5f5f5;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
}

aside {
    background: #f5f5f5;
    position: -webkit-sticky;
    position: sticky;
    top: 5.5rem;
    display: block !important;
    height: calc(100vh - 5.5rem);
    padding-left: 0.25rem;
    margin-left: -0.25rem;
    overflow-y: auto;
}




</style>
