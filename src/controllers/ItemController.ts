import { Request, Response } from "express";
import{Item} from '../entities/item';
import{ItemRepository} from '../repository/item-repository';
import{BaseResponse} from '../base-response';
 
export let getItems =async (req: Request, res: Response) => {
  let itemRepo:ItemRepository=new ItemRepository();
  let baseResponse:BaseResponse=new BaseResponse();

  try{
    let items= await itemRepo.getItems();
    baseResponse.isSuccess=true;
    baseResponse.results=items;
  }catch(e){
    baseResponse.isSuccess=false;
    baseResponse.results=e;
  }
  res.send(baseResponse);
};


export let getItemById= async (req:Request,res:Response)=>{
   let itemRepo:ItemRepository=new ItemRepository();
   let baseResponse:BaseResponse=new BaseResponse();
  try{
    let item=await itemRepo.getItemById(req.params.Id);
    if(item !=null){
      console.log(item);
      baseResponse.isSuccess=true;
      baseResponse.results=item;
    }else{
      baseResponse.isSuccess=false;
      baseResponse.message="No Available Item";
    }
    
  }catch(e){
    baseResponse.isSuccess=false;
    baseResponse.results=e;
  }
  res.send(baseResponse);
}

export let postItem= async(req:Request,res:Response)=>{
  
  let itemRepo:ItemRepository=new ItemRepository();
  let baseResponse:BaseResponse=new BaseResponse();
  let item:Item=new Item();
  item.Name=req.body.Name;
  item.Description=req.body.Description;
  item.QtyAvailable=req.body.QtyAvailable;
  item.UnitPrice=req.body.UnitPrice;
  item.IsActive=true;
  
  try{
    let newItem=await itemRepo.saveItem(item);
    baseResponse.isSuccess=true;
    baseResponse.results=newItem;
  }catch(e){
    baseResponse.isSuccess=false;
    baseResponse.results=e;
  }
  res.send(baseResponse);
};

export let putItem=async (req:Request,res:Response)=>{

  let itemRepo:ItemRepository=new ItemRepository();
  let baseResponse:BaseResponse=new BaseResponse();
  var id=req.params.Id;

  try{
    let item:Item= await itemRepo.getItemById(id);
    if(item!=null){
      item.Name=req.body.Name;
      item.Description=req.body.Description;
      item.QtyAvailable=req.body.QtyAvailable;
      item.UnitPrice=req.body.UnitPrice;
      let newItem= await itemRepo.updateItem(item);
      baseResponse.isSuccess=true;
      baseResponse.results=newItem;
    }else{
      baseResponse.isSuccess=false;
    }
    
  }catch(e){
    baseResponse.isSuccess=false;
    baseResponse.results=e;
  }
  res.send(baseResponse);
};


export let deleteItem=async (req:Request,res:Response)=>{
  var id=req.params.Id;
  let itemRepo:ItemRepository=new ItemRepository();
  let baseResponse:BaseResponse=new BaseResponse();

  try{
    let item:Item=await itemRepo.getItemById(id);
    if(item !=null){
      //  console.log(item);
      item.IsActive=false;
      await itemRepo.updateItem(item);
      baseResponse.isSuccess=true;
    }else{
      baseResponse.isSuccess=false;
    }
  }catch(e){
    baseResponse.isSuccess=false;
    baseResponse.results=e;
  }
  res.send(baseResponse);
  
};  