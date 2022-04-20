<script>
	import { Color, VSMShadowMap } from 'three'
	import { Canvas, PerspectiveCamera, AmbientLight, SpotLight } from 'svelte-cubed'
	import SvelteLogo from '@components/svgs/SvelteLogo.svelte'

	// let w = 1
	// let h = 1
	// let y = 0
</script>

<!-- 
<svelte:window bind:scrollY={y} bind:innerWidth={w} bind:innerHeight={h} /> -->

<Canvas background={new Color('hsl(198, 45%, 10%)')} shadows={VSMShadowMap} antialias>
	<SvelteLogo />
	<PerspectiveCamera fov={65} zoom={1} position={[0, 0, 3]} />
	<AmbientLight intensity={0.5} />
	<SpotLight
		angle={0.8}
		penumbra={0.5}
		position={[8, 0, 2]}
		intensity={0.5}
		shadow={{
			radius: 20,
			bias: -0.001,
			mapSize: [2048, 2048]
		}}
	/>
	<SpotLight
		angle={0.8}
		penumbra={0.5}
		position={[2, 0, 10]}
		intensity={0.5}
		shadow={{
			radius: 20,
			bias: -0.001,
			mapSize: [2048, 2048]
		}}
	/>
</Canvas>
