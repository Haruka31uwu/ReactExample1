import { LEVELS } from "./levels.enum";

export class Task{

    name='';
    descripcion='';
    iscompleted=false;
    level=LEVELS.NORMAL;
    constructor(name,descripcion,iscompleted,level){
        this.name=name;
        this.descripcion=descripcion;
        this.iscompleted=iscompleted;
        this.level=level;
    }

}