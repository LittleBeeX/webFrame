<template>
  <div id="app">
		<keep-alive>
			<router-view/>
		</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
	body{
		min-width: 100vh;
		min-height: 100vh;
	}
</style>

