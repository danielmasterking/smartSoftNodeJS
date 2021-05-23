import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  categoria: string;

  @Column()
  precio: number;

  @Column()
  inventario: number;
  
}