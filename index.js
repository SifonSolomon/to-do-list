const button = document.getElementById("button")
const inputField = document.getElementById("inputfield")
const container = document.getElementById("container")

button.addEventListener("click", () => {
    const paragrapgh = document.createElement("p")
    paragrapgh.innerText = inputField.value
    container.appendChild(paragrapgh)
    inputField.value=""
    paragrapgh.addEventListener("click",() => {
        paragrapgh.style.textDecoration = "line-through"
    })
    paragrapgh.addEventListener("dblclick", () => {
        container.removeChild(paragrapgh)
    })
})