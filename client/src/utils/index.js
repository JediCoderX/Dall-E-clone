import FileSaver from 'file-saver'

import { surpriseMePrompts } from '../prompts'

export function getRandomPrompt(promt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if (randomPrompt === promt) return getRandomPrompt(prompt)

    return randomPrompt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}