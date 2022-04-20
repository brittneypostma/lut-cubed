<script lang="ts">
	import Canvas from '@components/Canvas.svelte'
	import Mesh from '@components/Mesh.svelte'
	import PerspectiveCamera from '@components/PerspectiveCamera.svelte'
	import Orbit from '@components/Orbit.svelte'
	import AmbientLight from '@components/lights/AmbientLight.svelte'
	import DirectionalLight from '@components/lights/DirectionalLight.svelte'
	import { BoxGeometry, MeshStandardMaterial } from 'three'
</script>

<div class="controls">
	<button>Refresh</button>
</div>

<Canvas antialias background="hsl(198, 45%, 10%)">
	<Mesh
		scale={[1, 1, 1]}
		geometry={new BoxGeometry()}
		material={new MeshStandardMaterial({
			color: 'hsl(175, 100%, 34%)'
		})}
	/>
	<PerspectiveCamera position={[1, 1, 3]} />
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
