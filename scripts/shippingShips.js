import { getShippingShips, getHaulingShips } from "./database.js"
let ships = getHaulingShips()

export const ShipsList = () => {
    const ships = getShippingShips()
   

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-type="ship" data-haulerId=${ship.haulerId} data-name="${ship.name}">${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {

            // Get the haulerId value of the shipping ship clicked
            const shipId = itemClicked.dataset.haulerid
            // Define a default object for the found hauler
            let haulingShip = {name: "incorrect"}
            let currentShip = ""
            
            // Iterate the array of hauler objects
            for (const ship of ships) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(shipId) === ship.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = ship.name
                    currentShip = itemClicked.dataset.name
                }
            }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${currentShip} is being hauled by ${haulingShip}`)
            
            
        }
    }
)