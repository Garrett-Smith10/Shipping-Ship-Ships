import { getDocks } from "./database.js"

const docks = getDocks()

export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li>${dock}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}