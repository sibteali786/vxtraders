import { Card } from "@/components/ui/card";

export function TradesTimeline() {
  return (
    <div className="relative pr-default">
      {/* Timeline line */}
      <div className="absolute left-5 top-[50px] bottom-[40px] w-0.5 bg-white opacity-50" />

      <div className="space-y-6 pl-12">
        {/* First event */}
        <div className="relative">
          {/* Circle Indicator */}
          <div className="absolute left-[-32px] top-[40px] w-3 h-3 rounded-full bg-white" />

          <Card className="p-3 bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-purple-300">Opened</p>
                <p className="text-sm text-gray-400">7 days ago</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-300">$56,234</p>
                <p className="text-sm text-gray-400">10x</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Second event */}
        <div className="relative">
          {/* Circle Indicator */}
          <div className="absolute left-[-32px] top-[30px] w-3 h-3 rounded-full bg-white" />

          <Card className="p-3 rounded-lg border border-gray-600">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-white">Closed</p>
                <p className="text-sm text-gray-400">3 days ago</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-300">$23,252</p>
                <p className="text-sm text-red-500">-10%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Third event */}
        <div className="relative">
          {/* Circle Indicator */}
          <div className="absolute left-[-32px] top-[30px] w-3 h-3 rounded-full bg-white" />

          <Card className="p-3 rounded-lg border border-gray-600">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-white">Closed</p>
                <p className="text-sm text-gray-400">June 02, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-300">$23,252</p>
                <p className="text-sm text-green-500">+50%</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="relative">
          {/* Circle Indicator */}
          <div className="absolute left-[-32px] top-[30px] w-3 h-3 rounded-full bg-white" />

          <Card className="p-3 rounded-lg border border-gray-600">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-white">Closed</p>
                <p className="text-sm text-gray-400">June 02, 2024</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-purple-300">$23,252</p>
                <p className="text-sm text-green-500">+50%</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
