<script>
	import {
		MeshLambertMaterial,
		TextureLoader,
		EquirectangularReflectionMapping,
		sRGBEncoding,
		ExtrudeGeometry,
		PlaneGeometry,
		Shape
	} from 'three'
	import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
	import { Mesh, onFrame } from 'svelte-cubed'
	const loader = new TextureLoader()
	const shape = new SVGLoader().load('./gem.svg', ({ paths }) => {
		paths[0].toShapes(false)
	})
	const geometry = new ExtrudeGeometry(shape, {
		curveSegments: 24,
		depth: 2,
		bevelEnabled: true,
		bevelOffset: 0,
		bevelSegments: 4,
		bevelSize: 1,
		bevelThickness: 1
	})
	geometry.center()
	const mesh = new MeshLambertMaterial({
		reflectivity: 0.4,
		color: 'hsl(175, 100%, 34%)',
		map: loader.load('https://s3.amazonaws.com/duhaime/blog/tsne-webgl/assets/cat.jpg')
	})
	let r = 0
	onFrame(() => {
		r -= 0.005
	})
</script>

<Mesh
	{geometry}
	material={mesh}
	position={[0, 0.4, 0]}
	rotation={[0, r, 0]}
	scale={0.3}
	castShadow
/>
