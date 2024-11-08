import React from "react";
// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// Custom components
import Comment from "@/components/comment";

const placeholderComments = [
  {
    id: 1,
    username: "John Doe",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    avatar: "https://github.com/shadcn.png",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    username: "Jane Doe",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    avatar: "https://github.com/shadcn.png",
    createdAt: "2024-01-01",
  },
  {
    id: 3,
    username: "John Doe",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    avatar: "https://github.com/shadcn.png",
    createdAt: "2024-01-01",
  },
];

export default function CommentsFeed() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Comments</CardTitle>
        <CardDescription>Welcome to the home page</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          {placeholderComments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              username={comment.username}
              comment={comment.comment}
              avatar={comment.avatar}
              createdAt={comment.createdAt}
            />
          ))}
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-6">
        <small className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </small>
      </CardFooter>
    </Card>
  );
}
