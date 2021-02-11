import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { User } from '../user/user.entity';
@Entity('roles')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;
  @Column({ type: 'text', nullable: false })
  description: string;
  @ManyToMany((type) => User, (user) => user.Roles)
  @JoinTable({ name: 'user_roles' })
  users: User[];
  @Column({ type: 'varchar', default: 'ACTIVE', nullable: false, length: 8 })
  status: string;
  @Column({ type: 'text', name: 'create_at' })
  createtAt: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}
