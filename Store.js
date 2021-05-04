import {Subject} from './subject';

export class Store extends Subject{
    constructor(){
        super()
        this.store={}
    }
    update(data={}){
        this.store=Object.assign(this.store,data);
        this.notify(this.store);
    }
    get(){
        return this.store;
    }
}