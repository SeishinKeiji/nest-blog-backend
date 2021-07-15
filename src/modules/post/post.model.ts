import { Field, Int, ObjectType } from '@nestjs/graphql';
import { tags } from 'src/interface/tags.interface';
import { Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType({ description: 'Post model' })
@Schema()
export class Post {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field()
  @Prop()
  title: string;

  @Field()
  @Prop()
  content: string;

  @Field(() => [tags], { defaultValue: [tags['no-category']] })
  @Prop()
  tags: tags[];

  @Field(() => Int)
  @Prop()
  likes: number;
}

export type PostDocument = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);
