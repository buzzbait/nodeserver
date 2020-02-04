import {Entity,BaseEntity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity()
export class Demotran extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
}