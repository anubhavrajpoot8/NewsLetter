import { Organization } from 'src/organizations/entities/organization.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity('subscribers')
export class Subscriber {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @ManyToOne(() => Organization, organization => organization.subscribers, { onDelete: 'CASCADE' })
    organization: Organization;

    @Column({ type: 'jsonb', nullable: true })
    customFields: any;

    @Column({ type: 'text', nullable: true })
    gpgPublicKey: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
