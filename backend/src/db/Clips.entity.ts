//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Clips')
export class ClipsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Title: string;

  @Column('text', { nullable: true })
  URL: string;

  @Column('text', { nullable: true })
  Analysis: string;
}