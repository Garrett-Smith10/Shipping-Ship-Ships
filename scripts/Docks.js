import { getDocks, getHaulingShips } from "./database.js"

const docks = getDocks()



export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="docks" data-id="${dock.id}" data-name="${dock.location}"
         >${dock.location} holds ${dock.volume} tons of cargo</li>`
         
    }

    docksHTML += "</ul>"
    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "docks") {

        const dockId = itemClicked.dataset.id

        let dockLocation = ""
        let currentHauler = { name: "nothing"}

        let haulerArray = []
        
        let ships = getHaulingShips()
        
        for (const ship of ships) {
            if (parseInt(dockId) === ship.dockId) {
                dockLocation = itemClicked.dataset.name
                haulerArray.push(ship.name)
                haulerArray.sort()
                
            }
            
        }
        if (haulerArray.length > 0) {
            window.alert(`The ${dockLocation} dock is currently unloading ${haulerArray.join(", ")}`)
        } else {
            dockLocation = itemClicked.dataset.name
        window.alert(`The ${dockLocation} dock is currently unloading ${currentHauler.name}`)  
            }
        }
    }
)

//The Shanghai, China dock is currently unloading Boaty McBoatface
//The Shanghai, China dock is currently unloading nothing
//The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant

