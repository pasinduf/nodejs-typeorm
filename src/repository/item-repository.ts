import{Item} from '../entities/item';
import{getManager} from "typeorm";

export class ItemRepository{

    getItems(){
        return getManager().getRepository(Item).find();
    }

    getItemById(id:number){
        return getManager().getRepository(Item).findOne(id);
    }

    saveItem(item:Item){
        return getManager().getRepository(Item).save(item);
    }

    updateItem(item:Item){
        return getManager().getRepository(Item).save(item);
    }

    deleteItem(id:number){
        return getManager().getRepository(Item).delete(id);
    }
}