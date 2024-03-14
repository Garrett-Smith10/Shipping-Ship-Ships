import { getHaulingShips, getShippingShips } from "./database.js"


export const HaulersList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="hauler" data-id=${hauler.id}>${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        
        if (itemClicked.dataset.type === "hauler") {

            
            const haulerId = itemClicked.dataset.id

           
            let shipCounter = 0

            
            const shippingShips = getShippingShips()

            for (const ship of shippingShips) {
                if (parseInt(haulerId) === ship.haulerId) {
                    shipCounter++
                }   
            }
            window.alert(`this hauler is carrying ${shipCounter} shipping ships`)
        }
    }
)