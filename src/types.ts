export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type TUserDB = {
    id: string,
    name: string,
    email:string,
    password: string
}

export type TPostDB = {
    id: string,
    creator_id:string,
    content:string,
    likes:number,
    dislikes:number,
    comments:number,
    created_at:string,
    updated_at:string
}