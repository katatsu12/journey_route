import { Controller } from "@hotwired/stimulus"
import * as THREE from "three";

export default class extends Controller {
	connect() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight)
		document.body.appendChild(this.renderer.domElement);

		this.geometry = new THREE.BoxGeometry();
		this.material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: false });
		this.leftCube = this.createCube(-2, 0, 2);
		this.rightCube = this.createCube(2, 0, -4);

		this.scene.add(this.leftCube)
		this.scene.add(this.rightCube)
		
		const backgroundTexture = new THREE.TextureLoader().load("/assets/space.jpg");
		this.scene.background = backgroundTexture

		this.camera.position.z = 5;
		this.animate();
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this));

		addEventListener("mousemove", (event) => {
			// this.originCube.rotation.x += event.screenX / 100;
			// this.originCube.rotation.y += event.screenY / 100;
			// console.log(event)

			this.rightCube.rotation.x += event.screenX * 0.22222222;
			this.rightCube.rotation.y += event.screenY * 0.22222222;
		});

		this.renderer.render(this.scene, this.camera);
	}

	createCube(x, y, z) {
		const cube = new THREE.Mesh(this.geometry, this.material);
		cube.position.set(x, y, z);

		return cube;
	}
}
