import { Field, ObjectType } from '@nestjs/graphql';
import { Column, ManyToOne, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Author } from '../author/author.entity';
import { Post } from './post.entity';

@ObjectType({ description: 'Like Post Model' })
@Entity()
export class BookmarkPost {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Author)
  author: Author;

  @ManyToOne(() => Post)
  post: Post;

  @Field(() => Boolean)
  @Column()
  isBookmarked: boolean;
}
