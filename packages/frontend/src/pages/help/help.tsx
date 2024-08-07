import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";

export function Help() {
  return (
    <div className="py-4 space-y-4 px-default">
      <h1 className="text-3xl font-bold">Get help</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="bg-transparent text-left">What is Vx Traders and how does it work?</AccordionTrigger>
          <AccordionContent>
            Vx Traders is a platform designed for cryptocurrency traders to share their trading activities, strategies, and performance. Users can post their portfolios and individual trading positions to integrated Telegram channels, showcase their skills, and engage with their followers. The platform provides detailed analytics, leaderboards, and a verification system to ensure transparency and credibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="bg-transparent text-left">How do I integrate my Telegram channel with Vx Traders?</AccordionTrigger>
          <AccordionContent>
            To integrate your Telegram channel with Vx Traders, you need to add the Vx bot as an admin with post creation access. Once the bot is added, the system will query the list of all admins so that any admin can post trades or portfolios into the channel. Detailed instructions are available in the "Channel Integrations" section of the settings page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="bg-transparent text-left">How can I post my portfolio or trading positions to my Telegram channel?</AccordionTrigger>
          <AccordionContent>
            Navigate to your portfolio or trading position page and click the post button. You will be taken to a page where you can select the desired channel and view a preview of the message and image that will be posted. The system auto-generates the image and message, ensuring consistency and professionalism. Simply finalize the post by clicking the submit button.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="bg-transparent text-left">What is the Vx bot standalone mode and how does it benefit me?</AccordionTrigger>
          <AccordionContent>
            The Vx bot standalone mode allows you to post deep-links to your portfolios and trading positions in any channel, providing followers with a detailed view of your trading activities without navigating away from the intended content. The standalone pages are optimized for user engagement, including a call to action to explore the full application.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="bg-transparent text-left">How does the automated posting of top trades work?</AccordionTrigger>
          <AccordionContent>
            Each time a trading position is closed, the Vx bot evaluates it to determine if it is the most profitable within the last 24 hours, 7 days, 30 days, or 90 days. If it qualifies as a top trade, the bot automatically posts the details to the Vx channel, including an image and a message highlighting the trade's success. This feature ensures that the community is regularly updated with the most impressive trades.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
