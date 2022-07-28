export class Users {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    address: string; 


constructor(id: number, username: string, password: string, name: string, email: string, address: string ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.email = email;
    this.address = address; 
}
}