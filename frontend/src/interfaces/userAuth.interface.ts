export interface IUserAuth {
    email: string;
    password: string;
    // confirmPassword?: string;
    userName?: string;
}

export interface IRegisterUserResponse {
    user: {
        data: {
            token?: string
            message: string
            success: boolean
            userName?: string
        }

    }
}

export interface ILoginUserResponse {
    data: {
        message: string
        success: boolean
        token: string
        userName?: string
    }
    status?: number
    statusText?: string

}

export interface ILoginState {
    user: ILoginUserResponse
}

