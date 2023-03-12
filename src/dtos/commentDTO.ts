import { CommentModel } from "../types";

export type GetPostInputDTO = CommentModel[]

export interface CreateCommentInputDTO {
    token: string | undefined
}

export interface EditCommenttInputDTO {
    idToEdit:string,
    token: string | undefined,
    name: unknown
}

export interface DeleteCommentInputDTO{
    idToDelete:string,
    token: string | undefined,
    name: unknown
}

export interface LikeOrDislikeCommentInputDTO{
    idToLikeOrDislike: string,
    token: string | undefined,
    like: unknown
}