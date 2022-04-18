<script>
	import { DirectionalLight } from 'svelte-cubed'
	export let position = [3, 5, -4]
	export let intensity = 1
</script>

<DirectionalLight {position} {intensity} />
