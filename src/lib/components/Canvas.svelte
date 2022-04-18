<script lang="ts">
	import { Canvas } from 'svelte-cubed'
	import { Color } from 'three'
	export let background: string = ''
</script>

<Canvas background={new Color(`${background}`)}>
	<slot />
</Canvas>
