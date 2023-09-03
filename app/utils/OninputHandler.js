import { Pop } from "./Pop.js"

export function getTextData(text) {
    try {
        // @ts-ignore
        const textData = new TextData(text)
        const obj = {}
        textData.forEach((val, key) => {
            obj[key] = val
        })
        return obj
    } catch (error) {
        console.error('[Extracting_Text_Data]', error)
        Pop.error(error)
    }
}