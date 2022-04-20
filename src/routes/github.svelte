<script lang="ts">
	import Canvas from '@components/Canvas.svelte'
	import Mesh from '@components/Mesh.svelte'
	import PerspectiveCamera from '@components/PerspectiveCamera.svelte'
	import Orbit from '@components/Orbit.svelte'
	import AmbientLight from '@components/lights/AmbientLight.svelte'
	import DirectionalLight from '@components/lights/DirectionalLight.svelte'
	import { BoxGeometry, MeshStandardMaterial } from 'three'
	import { spring } from 'svelte/motion'

	let rows = 7
	let depth = 52
	let hue = Math.round(Math.random() * 360) //175
	let lightness = 34
	let color = `hsl(${hue}, 100%, ${lightness}%)`

	let contributions = spring(getContributions())

	function refresh() {
		$contributions = getContributions()
		hue = Math.round(Math.random() * 360)
	}

	function getContributions() {
		return new Array(rows * depth).fill(0).map((value) => {
			return Math.round(Math.random() * 10)
		})
	}
</script>

<div class="controls">
	<button on:click={refresh}>Refresh</button>
</div>

<Canvas antialias alpha background="hsl(198, 45%, 10%)">
	{#each $contributions as contribution, index}
		<Mesh
			scale={[1, contribution, 1]}
			geometry={new BoxGeometry()}
			material={new MeshStandardMaterial({
				color: `hsl(${hue}, 100%, ${contribution * 8}%)`
			})}
			position={[Math.floor(index / rows), contribution / 2, index % rows]}
		/>
	{/each}
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
