import card from "./Components/card.js"
import header from "./Components/header.js"
import footer from "./Components/footer.js"

const root = document.getElementById('root')

root.insertAdjacentHTML("beforebegin", header()) /* use insert function (takes arguments for position and component) */
root.insertAdjacentHTML("afterend", footer())

root.innerHTML = card()