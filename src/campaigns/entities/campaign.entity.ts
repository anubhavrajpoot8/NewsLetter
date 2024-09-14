import { List } from 'src/lists/entities/list.entity';
import { Organization } from 'src/organizations/entities/organization.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';


@Entity('campaigns')
export class Campaign {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    subject: string;

    @Column({ type: 'text' })
    content: string;

    @ManyToOne(() => List, list => list.campaigns, { onDelete: 'CASCADE' })
    list: List;

    @ManyToOne(() => Organization, organization => organization.campaigns, { onDelete: 'CASCADE' })
    organization: Organization;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    clickStats: any;
}
