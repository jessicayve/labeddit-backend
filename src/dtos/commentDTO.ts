import { CommentModel } from "../types"

export interface GetCommentInputDTO {
    
    token: string | undefined
}

export interface GetCommentsInputDTO {
    
    token: string | undefined
}

export type GetCommentOutputDTO = CommentModel[]

export interface CreateCommentInputDTO {
    postId: string,
    token: string | undefined,
    content: unknown
}

export interface CreateCommentOutputDTO {
    message: string,
    content: string
}

export interface LikeDislikeCommentInputDTO {
    idToLikeOrDislike: string,
    token: string | undefined,
    like: unknown
}