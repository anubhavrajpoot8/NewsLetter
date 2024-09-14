import { Organization } from 'src/organizations/entities/organization.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

export type UserRole = 'Superadmin' | 'Admin' | 'User';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    passwordHash: string;

    @ManyToOne(() => Organization, organization => organization.users, { nullable: true, onDelete: 'SET NULL' })
    organization: Organization;

    @Column({ type: 'enum', enum: ['Superadmin', 'Admin', 'User'] })
    role: UserRole;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
