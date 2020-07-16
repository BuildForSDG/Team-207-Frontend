class User {

    user_id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    token: string;

    constructor(user_id: string, first_name: string, last_name: string, username: string, email: string, password: string, token:string) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.token = token;
    }
}
export { User }
