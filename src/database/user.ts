import {prisma} from "./prisma"
import {User} from "@prisma/client"

export class UserDatabaseService {
    private static _instance?: UserDatabaseService
    private db: typeof prisma.user

    private constructor() {
        this.db = prisma.user
    }

    static getInstance(): UserDatabaseService {
        if (!UserDatabaseService._instance) {
            UserDatabaseService._instance = new UserDatabaseService()
        }
        return UserDatabaseService._instance
    }

    async getAllUsers(): Promise<any> {
        return this.db.findMany()
    }
}
