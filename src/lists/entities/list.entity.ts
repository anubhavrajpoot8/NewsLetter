import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { Organization } from 'src/organizations/entities/organization.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';


@Entity('lists')
export class List {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @ManyToOne(() => Organization, organization => organization.lists, { onDelete: 'CASCADE' })
    organization: Organization;

    @Column({ type: 'jsonb', nullable: true })
    customFields: any;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(() => Campaign, campaign => campaign.list)
    campaigns: Campaign[];
}
