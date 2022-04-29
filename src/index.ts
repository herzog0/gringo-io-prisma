import {getUserByName} from "./database/user"

async function main() {
    const user = await getUserByName("Gringo")
    console.log(user)
}

main().catch(console.error)
