AFRAME.registerComponent("fish", {

    init : function(){

        for(const i = 1; i <= 20; i++){

            const id = `fish${i}`

            const posX = Math.floor(Math.random() * 3000 + -1000)
            const posY = Math.floor(Math.random() * 2 + -1)
            const posZ = Math.floor(Math.random() * 3000 + -1000)

            const position = {x : posX, y : posY, z : posZ}

            this.fishes(id,position)
        }

    },

    fishes:(id,position) => {

        const terrainEl = document.querySelector("#terrain")
        const fishEl = document.createElement("a-entity")

        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position",position)
        fishEl.setAttribute("scale",{x : 500, y : 500, z : 500})
        fishEl.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fishEl.setAttribute("animation-mixer",{})

        terrainEl.appendChild(fishEl)

    }

})
