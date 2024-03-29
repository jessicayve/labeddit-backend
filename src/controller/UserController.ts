import {Request, Response} from "express"
import { UserBusiness } from "../business/UserBusiness"
import { GetUsersInput, LoginInputDTO, SignupInputDTO, SignupOutputDTO } from "../dtos/userDTO"
import { BaseError } from "../errors/BaseError"

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public getUsers = async (req: Request, res: Response)=>{
        try {

            const input: GetUsersInput = {
               q: req.query.q
            }
            const output = await this.userBusiness.getUsers(input)

            res.status(200).send(output)

        } catch (error) {
            if(error instanceof BaseError){
                res.status(error.statusCode).send(error.message)
            }else{
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public signup = async (req: Request, res: Response)=>{
        try {

            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const output = await this.userBusiness.signup(input)

            res.status(201).send(output)

        } catch (error) {
            if(error instanceof BaseError){
                res.status(error.statusCode).send(error.message)
            }else{
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public login = async (req: Request, res: Response)=>{
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }
            const output = await this.userBusiness.login(input)

            res.status(200).send(output)

        } catch (error) {
            if(error instanceof BaseError){
                res.status(error.statusCode).send(error.message)
            }else{
                res.status(500).send("Erro inesperado")
            }
        }
    }
}