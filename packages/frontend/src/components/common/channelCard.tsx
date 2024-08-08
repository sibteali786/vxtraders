import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "../ui/card";
import { Channel } from "@vxtraders/shared";

const ChannelCard = (props: { channel: Channel }) => {
  return (
    <Card className="flex items-center p-4 mb-4">
      <Avatar className="mr-4">
        <AvatarImage src={props.channel.avatar} alt={props.channel.name} />
        <AvatarFallback>{props.channel.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-semibold text-lg">{props.channel.name}</p>
        <p className="text-sm text-muted-foreground">@{props.channel.handle}</p>
      </div>
    </Card>
  );
};

export default ChannelCard;
