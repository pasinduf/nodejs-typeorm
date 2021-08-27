import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("item")
export class Item{
  
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Name:string;

    @Column()
    Description:string;

    @Column()
    UnitPrice:number;

    @Column()
    QtyAvailable:number;

    @Column()
    IsActive:boolean;
}