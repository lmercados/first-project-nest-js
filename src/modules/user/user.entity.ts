import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  JoinTable,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Role } from '../roles/role.entity';
import { UserDetails } from './user.details.entity';
@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', unique: true, nullable: false, length: 25 })
  username: string;
  @Column({ type: 'varchar', nullable: false })
  email: string;
  @Column({ type: 'varchar', nullable: false })
  password: string;
  @OneToOne((type) => UserDetails, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'detail_id' })
  details: UserDetails;
  @ManyToMany((type) => Role, (role) => role.users)
  @JoinTable({ name: 'user_roles' })
  Roles: Role[];
  @Column({ type: 'varchar', default: 'ACTIVE', nullable: false, length: 8 })
  status: string;
  @Column({ type: 'timestamp', name: 'create_at' })
  createtAt: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}
