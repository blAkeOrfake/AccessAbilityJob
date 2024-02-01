import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserTypeEnum {
  Candidate,
  Employer,
  Admin
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  firstName: string;

  @Column({nullable: true})
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: UserTypeEnum.Candidate })
  userType: UserTypeEnum;

  @Column({ default: true })
  isActive: boolean;

  @Column('simple-array', {nullable: true})
  favOffersIds: string[];

}