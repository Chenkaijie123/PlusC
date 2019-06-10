import {father} from "./father"
class Index extends father{
    constructor(){
        super();
        console.log(father)
        console.log(window)
    }
}

new Index();