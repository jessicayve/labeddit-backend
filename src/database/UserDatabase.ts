import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    
    public getAllUsers = async (): Promise<UserDB[]> => {
        const result: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
        return result
    }

    public insert = async (userDB: UserDB) =>{
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
    }

    public findByEmail = async (email: string): Promise<UserDB | undefined> =>{
        const result: UserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({email})

    return result[0]
    }
}