import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import bcrypt from 'bcryptjs';

export interface IUser  {
  username: string;
  password: string;
};
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  telefono: number;

  @Column()
  identificacion: number;

  @Column()
  direccion: string;

  static async encrypPassword (password: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  static async validatePassword  (password: string, passwordBd: string ) {
    return await bcrypt.compare(password, passwordBd);
  }

  
}