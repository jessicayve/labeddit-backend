export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface TokenPayload{
    id:string,
    name:string,
    role:USER_ROLES
}

export type UserDB = {
    id: string,
    name: string,
    email:string,
    password: string,
    role:string,
    created_at:string,
    updated_at:string
}

export type UserModel = {
    id: string,
    name: string,
    email:string,
    password: string,
    role:string,
    createdAt:string,
    updatedAt:string
}

export type PostDB = {
    id: string,
    creator_id:string,
    content:string,
    likes:number,
    dislikes:number,
    comments:number,
    created_at:string,
    updated_at:string
}

export type PostModel = {
    id: string,
    creatorId:string,
    content:string,
    likes:number,
    dislikes:number,
    comments:number,
    createdAt:string,
    updatedAt:string
}

export type CommentDB = {
    id: string,
    creator_id: string,
    post_id:string,
    content: string,
    likes: number, 
    dislikes: number,
    created_at: string, 
    updated_at: string
}

export type CommentModel = {
    id: string,
    creatorId: string,
    postId:string,
    content: string,
    likes: number, 
    dislikes: number,
    createdAt: string, 
    updatedAt: string
}
