import { DockList } from "./Docks.js"
import { HaulersList } from "./Haulers.js"
import { ShipsList } from "./shippingShips.js"
import { Assignments } from "./Assignments.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2 class="header">Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2 class="header">Hauling Ships</h2>
        ${HaulersList()}
    </section>
    <section class="detail--column list details__cities">
        <h2 class="header">Ships</h2>
        ${ShipsList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`

mainContainer.innerHTML = applicationHTML