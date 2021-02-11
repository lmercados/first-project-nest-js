import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity('user_details')
export class UserDetails extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;
  @Column({ type: 'varchar', nullable: false })
  lastname: string;
  @Column({ type: 'varchar', default: 'ACTIVE', nullable: false, length: 8 })
  status: string;
  @Column({ type: 'timestamp', name: 'create_at' })
  createtAt: Date;
  @Column({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}
