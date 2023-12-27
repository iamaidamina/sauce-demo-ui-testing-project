export class User { 

    //variables
    private _name: string;
    private _password: string;
   
    
    //constructor
    constructor(userName: string,password: string) { 

        this._name= userName;
        this._password = password;
    }
    //methods

    public get password() { 
        
        return this._password;

    }
    public get name() { 
        
        return this._name;

    }


}

export default User;