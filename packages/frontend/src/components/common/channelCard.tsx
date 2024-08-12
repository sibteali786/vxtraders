import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "../ui/card";
import { Channel } from "@vxtraders/shared";

const ChannelCard = (props: { channel: Channel }) => {
  return (
    <Card className="flex items-center py-3 px-2 mb-4  mobile-small:px-2 mobile-medium:px-4">
      <Avatar className="mr-4 w-8 h-8 mobile-medium:w-9 mobile-medium:h-9">
        <AvatarImage src={props.channel.avatar} alt={props.channel.name} />
        <AvatarFallback>{props.channel.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-semibold text-base mobile-medium:text-lg">
          {props.channel.name}
        </p>
        <p className="text-muted-foreground text-xs mobile-medium:text-sm">
          @{props.channel.handle}
        </p>
      </div>
    </Card>
  );
};

export default ChannelCard;
