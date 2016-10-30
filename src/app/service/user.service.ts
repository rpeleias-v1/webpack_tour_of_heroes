import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

    public isLoggedIn:boolean = true;
    public user = {name: 'Rodrigo Peleias'};
}