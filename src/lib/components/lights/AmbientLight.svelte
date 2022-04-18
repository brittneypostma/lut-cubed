<script>
	import { AmbientLight } from 'svelte-cubed'
	export let color = 'white'
	export let intensity = 1
</script>

<AmbientLight {color} {intensity} />
