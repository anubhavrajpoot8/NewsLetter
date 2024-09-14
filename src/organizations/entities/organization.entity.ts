import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { List } from 'src/lists/entities/list.entity';
import { Subscriber } from 'src/subscribers/entities/subscriber.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';


@Entity('organizations')
export class Organization {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToMany(() => User, user => user.organization)
    users: User[];

    @OneToMany(() => Subscriber, subscriber => subscriber.organization)
    subscribers: Subscriber[];

    @OneToMany(() => List, list => list.organization)
    lists: List[];

    @OneToMany(() => Campaign, campaign => campaign.organization)
    campaigns: Campaign[];
}
