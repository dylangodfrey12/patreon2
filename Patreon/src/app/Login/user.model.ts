export interface ILogin {
    username: string,
    password: string
}

export interface IUserAccount {
    id?: number,
    firstName: string,
    lastName: string,
    location?: {
        address: string,
        city: string,
        country: string
    },
    sessions?: ISession[]
}

export interface ISession {
    id: number,
    name: string,
    duration: number,
    level: string
}