class User {

    public id: string;
    public first_name: string;
    public last_name: string;
    public username: string;
    public email: string;
    public password: string;
    public token: string;

    constructor(id: string, first_name: string, last_name: string, username: string, email: string, password: string, token: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.token = token;
    }
}
export { User }
