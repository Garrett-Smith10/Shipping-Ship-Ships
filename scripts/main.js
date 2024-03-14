import { DockList } from "./Docks.js"
import { HaulersList } from "./Haulers.js"
import { ShipsList } from "./shippingShips.js"



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
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
`

mainContainer.innerHTML = applicationHTML