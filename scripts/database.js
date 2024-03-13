const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id: 1, name: "Pioneering Spirit", dockId: 2 },
        {id: 2, name: "Boaty McBoatface", dockId: 3 },
        {id: 3, name: "Seawise Giant", dockId: 1 }
    ],
    shippingShips: [
        {id: 1, name: "Esso Atlantic", haulerId: 5 },
        {id: 2, name: "Prairial", haulerId: 3},
        {id: 3, name: "Palais Royal", haulerId: 1},
        {id: 4, name: "Rivoli", haulerId: 6},
        {id: 5, name: "Champs Elysee", haulerId: 4},
        {id: 6, name: "Ever Ace", haulerId: 8},
        {id: 7, name: "Nessei Maru", haulerId: 2},
        {id: 8, name: "MSC Gulsun", haulerId: 7},
        {id: 9, name: "HMM Rotterdam", haulerId: 10},
        {id: 10, name: "CMA CGM Tracadero", haulerId: 9}
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}