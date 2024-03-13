import { getHaulingShips } from "./database.js"


export const HaulersList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li>${hauler}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}