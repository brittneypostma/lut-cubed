<script>
	import Canvas from '@components/Canvas.svelte'
	import Mesh from '@components/Mesh.svelte'
	import PC from '@components/PC.svelte'
	import Orbit from '@components/Orbit.svelte'
	import { BoxGeometry } from 'three'
</script>

<Canvas>
	<Mesh geometry={new BoxGeometry()} />
	<PC position={[1, 1, 3]} />
	<Orbit />
</Canvas>
