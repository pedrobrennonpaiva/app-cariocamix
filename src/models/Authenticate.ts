
export class AuthenticateModel {

    constructor(username?: string, password?: string) {
        this.username = username ?? this.username;
        this.password = password ?? this.password;
    }

    username: string = '';

    password: string = '';
}
