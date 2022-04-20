<script lang="ts">
	import { spring } from 'svelte/motion'
	import Canvas from '@components/Canvas.svelte'
	import Mesh from '@components/Mesh.svelte'
	import PerspectiveCamera from '@components/PerspectiveCamera.svelte'
	import Orbit from '@components/Orbit.svelte'
	import AmbientLight from '@components/lights/AmbientLight.svelte'
	import DirectionalLight from '@components/lights/DirectionalLight.svelte'
	import { BoxGeometry, MeshPhysicalMaterial } from 'three'
	import { onFrame } from 'svelte-cubed'
	let width: number = 1
	let height: number = 1
	let depth: number = 1

	let spin = 1

	let isActive = false
	let xPos = spring(0)
	$: $xPos = isActive ? 10 : 0

	// onFrame(() => {
	// 	spin += 0.01
	// })
</script>

<div class="controls">
	<label>
		Width:
		<input type="range" min={0.1} max={3} step={0.1} bind:value={width} />
	</label>
	<label>
		Height:
		<input type="range" min={0.1} max={3} step={0.1} bind:value={height} />
	</label>
	<label>
		Depth:
		<input type="range" min={0.1} max={3} step={0.1} bind:value={depth} />
	</label>
</div>

<!-- <svelte:window on:click={() => console.log('click')} /> -->
<svelte:window on:click={() => (isActive = !isActive)} />

<Canvas antialias background="gray">
	<Mesh
		position={[$xPos, 0, 0]}
		rotation={[0, spin, 0]}
		scale={[width, height, depth]}
		geometry={new BoxGeometry()}
		material={new MeshPhysicalMaterial({
			color: '#049ef4',
			emissive: 'black',
			reflectivity: 0.5,
			roughness: 1,
			fog: true
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

	label {
		display: flex;
		align-items: center;
	}
</style>
