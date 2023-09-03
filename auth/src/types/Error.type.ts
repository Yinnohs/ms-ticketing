export type CommonErrorStructure = {
    message:string,
    field?:string
}

export interface ErrorResponse{
    reason?:string
    statusCode:number
    serializeError(): CommonErrorStructure[]
}