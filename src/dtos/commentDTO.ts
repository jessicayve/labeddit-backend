import { CommentModel } from "../types";


export interface GetCommentInputDTO{
    token: string | undefined
}

export type GetCommentOutputDTO = CommentModel[]

export interface CreateCommentInputDTO {
    token: string | undefined
}

export interface EditCommentInputDTO {
    idToEdit:string,
    token: string | undefined,
    content: unknown
}

export interface DeleteCommentInputDTO{
    idToDelete:string,
    token: string | undefined,
    
}

export interface LikeDislikeCommentInputDTO{
    idToLikeOrDislike: string,
    token: string | undefined,
    like: unknown
}