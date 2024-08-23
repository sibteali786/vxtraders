import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Channel } from "@vxtraders/shared";
import { BaseCard } from "./baseCard";

const ChannelCard = (props: { channel: Channel }) => {
  return (
    <BaseCard variant="default" size="medium">
      <Avatar className="mr-4 w-8 h-8 mobile-medium:w-9 mobile-medium:h-9">
        <AvatarImage src={props.channel.avatar} alt={props.channel.name} />
        <AvatarFallback>{props.channel.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-semibold text-sm mobile-medium:text-base">{props.channel.name}</p>
        <p className="text-muted-foreground text-xs mobile-medium:text-sm">
          @{props.channel.handle}
        </p>
      </div>
    </BaseCard>
  );
};

export default ChannelCard;
