import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("customer")
export class Customer{
  
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Name:string;

    @Column()
    Address:string;

    @Column()
    Mobile:number;

    @Column()
    Email:string;

    @Column()
    IsActive:boolean;
}