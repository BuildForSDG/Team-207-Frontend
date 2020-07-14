class User {

    constructor(id: string, first_name: string, last_name: string, username: string, email: string, password: string, token: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.token = token;
    }

    "id": string;
    "first_name": string;
    "last_name": string;
    "username": string;
    "email": string;
    "password": string;
    "token": string;
}
export { User }
