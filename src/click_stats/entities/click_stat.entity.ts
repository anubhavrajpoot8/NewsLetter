import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity('click_stats')
export class ClickStat {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Campaign, campaign => campaign.clickStats, { onDelete: 'CASCADE' })
    campaign: Campaign;

    @Column({ type: 'varchar', length: 255 })
    link: string;

    @Column({ type: 'integer', default: 0 })
    clickCount: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
