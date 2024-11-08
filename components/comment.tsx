import React from "react";
// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CommentProps = {
  id: number;
  username: string;
  comment: string;
  avatar: string;
  createdAt: string;
};

export default function Comment({
  // id,
  username,
  comment,
  avatar,
  createdAt,
}: CommentProps) {
  return (
    <div>
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p>{comment}</p>
      <small>
        {username} {createdAt}
      </small>
    </div>
  );
}
