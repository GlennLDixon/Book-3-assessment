import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrity = null

    for (const star of celebrityArray) {
        if (star.id === kidObject.celebrityId) {
            celebrity = star
        }
    }

    return celebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kids, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStarr.name}, a ${kidsStar.Sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

