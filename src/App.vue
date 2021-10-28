<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

ul {
  padding: 0px;
}

li {
  list-style: none;
}

a {
  color: black;
  font-weight: 700;
  font-size: 14px;
}
a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}

p {font-size: 12px}
</style>
