import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
    async findOne(id: string) {
        const messages = await this.readMessagesJSON()
        return messages[id]
    }

    async findAll() {
        const messages = await this.readMessagesJSON()
        return messages
    }

    async create(content: string) {
        const messages = await this.readMessagesJSON()

        const id = Math.floor(Math.random() * 999)
        messages[id] = { id, content }

        await writeFile('messages.json', JSON.stringify(messages))
    }

    async readMessagesJSON() {
        const contents = await readFile('messages.json', 'utf-8')
        return JSON.parse(contents)
    }
}