import { Request, Response } from "express"
import { CommentBusiness } from "../business/CommentBusiness"
import {  GetCommentsInputDTO} from "../dtos/commentDTO"
import { BaseError } from "../errors/BaseError"
import { CreateCommentInputDTO } from "../dtos/commentDTO"
import { LikeDislikeCommentInputDTO } from "../dtos/commentDTO"
export class CommentController {
    constructor(
        private commentBusiness: CommentBusiness,
    ) { }

    public getComment = async (req: Request, res: Response) => {
        try {
            const input: GetCommentsInputDTO = {
                token: req.headers.authorization,
               
            }

            const output = await this.commentBusiness.getComment(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }

    }

    public CreateComment = async (req: Request, res: Response) => {
        try {
            const input: CreateCommentInputDTO = {
                postId: req.params.id,
                token: req.headers.authorization,
                content: req.body.content,
            }
         
            
            await this.commentBusiness.createComment(input)
            
            res.status(201).end()
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public likeDislike = async (req: Request, res: Response) => {
        try {

            const input: LikeDislikeCommentInputDTO = {
                idToLikeOrDislike: req.params.id,
                token: req.headers.authorization,
                like: req.body.like
            }
           
            await this.commentBusiness.likeOrDislikeComment(input)

            res.status(200).end()
        } catch (error) {
            console.log(error)

            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
    
}