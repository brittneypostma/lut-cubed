<script>
	import { PerspectiveCamera } from 'svelte-cubed'
	export let position = [1, 1, 3]
</script>

<PerspectiveCamera {position} />
