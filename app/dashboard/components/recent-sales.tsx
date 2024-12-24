import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SourceDataType } from './utils';

export function RecentSales({ data }: { data: SourceDataType }) {
  return (
    <div className="space-y-8">
      {data.map((item: any, index: number) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />a<AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.counterParty}</p>
            <p className="text-sm text-muted-foreground">{item.name}</p>
          </div>
          <div className="ml-auto font-medium">￥{item.amountCNY}</div>
        </div>
      ))}
    </div>
  );
}
