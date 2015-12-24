

function loadMap(){
	loader.load("obj/clockFrame.js", 

			function(geometry) {

				dial1 = new THREE.Mesh(geometry, frameMaterial);
				dial1.castShadow = false;
				dial1.receiveShadow = true;
				clock.add(dial1);
				
		});
}