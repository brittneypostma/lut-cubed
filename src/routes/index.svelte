<script lang="ts">
	import Canvas from '@components/Canvas.svelte'
	import Mesh from '@components/Mesh.svelte'
	import PerspectiveCamera from '@components/PerspectiveCamera.svelte'
	import Orbit from '@components/Orbit.svelte'
	import AmbientLight from '@components/lights/AmbientLight.svelte'
	import DirectionalLight from '@components/lights/DirectionalLight.svelte'
	import { BoxGeometry, MeshStandardMaterial } from 'three'
</script>

<Canvas antialias alpha background="hsl(198, 45%, 10%)">
	<PerspectiveCamera position={[100, 100, 100]} />
	<Orbit />
	<AmbientLight intensity={0.5} />
	<DirectionalLight />
</Canvas>

<style>
	.controls {
		position: absolute;
		z-index: 10;
	}
</style>
