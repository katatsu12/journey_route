import { Controller } from "@hotwired/stimulus"
import * as THREE from "three"
import { OrbitControls } from "https://ga.jspm.io/npm:three@0.152.2/examples/jsm/controls/OrbitControls.js"

export default class extends Controller {
	connect() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight)
		document.body.appendChild(this.renderer.domElement);

		this.geometry = new THREE.BoxGeometry();
		this.material = new THREE.MeshStandardMaterial({ color: 0x00ffff, wireframe: false });
		this.leftCube = this.createCube(-2, 0, 0);
		this.rightCube = this.createCube(2, 0, 0);

		this.pointLight = new THREE.PointLight(0xffffff);
		this.pointLight.position.set(0, 0, 4);

		this.lightHelper = new THREE.PointLightHelper(this.pointLight);
		this.gridHelper = new THREE.GridHelper(100, 100);

		// this.scene.add(this.lightHelper)
		this.scene.add(
			this.lightHelper,
			this.gridHelper,
			this.leftCube,
			this.rightCube,
			this.pointLight
		)

		const backgroundTexture = new THREE.TextureLoader().load("/assets/space.jpg");
		// this.scene.background = backgroundTexture

		this.camera.position.z = 5;
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);

		this.animate();
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this));

		this.leftCube.rotation.x += 0.003;
		this.leftCube.rotation.y += 0.003;
		this.rightCube.rotation.x += 0.006;
		this.rightCube.rotation.y += 0.006;
		
		this.controls.update();

		this.renderer.render(this.scene, this.camera);
	}

	createCube(x, y, z) {
		const cube = new THREE.Mesh(this.geometry, this.material);
		cube.position.set(x, y, z);

		return cube;
	}
}
