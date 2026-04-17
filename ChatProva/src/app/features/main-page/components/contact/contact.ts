export interface IContact {
    email: string,
    phone: string
    // aqui seria mensagem tambem (?
}

export interface IUpdateContactDto {
    Contact: IContact,
    UserToken?: string
}

export interface ContactDto {
    email: string,
    phone: string
}