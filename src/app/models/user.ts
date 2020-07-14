class User {

    private id: string;
    private first_name: string;
    private last_name: string;
    private username: string;
    private email: string;
    private password: string;
    private token: string;

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
