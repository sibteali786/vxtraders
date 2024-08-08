import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "../ui/card";
import { Channel } from "@vxtraders/shared";

const ChannelCard: React.FC<Channel> = ({ name, email }) => {
  return (
    <Card className="flex items-center p-4 mb-4">
      <Avatar className="mr-4">
        <AvatarImage src="/avatar.png" alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-muted-foreground">@{email}</p>
      </div>
    </Card>
  );
};

export default ChannelCard;
