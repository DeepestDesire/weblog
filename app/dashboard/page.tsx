import { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamSwitcher from './components/team-switcher';
import { UserNav } from './components/user-nav';
import { Search } from './components/search';
import { RecentSales } from './components/recent-sales';
import { Overview } from './components/overview';
import { MainNav } from './components/main-nav';
import { CalendarDateRangePicker } from './components/date-range-picker';
import { Separator } from '@radix-ui/react-select';
import { WeChatUploadComponent } from './components/weChat-upload-component';
import TaskPage from './tasks/page';
import { PodcastEmptyPlaceholder } from './components/podcast-empty-placeholder';
import StoreProvider from '../StoreProvider';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default function DashboardPage() {
  return (
    <StoreProvider>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <h2 className="text-3xl font-bold tracking-tight">能级跃迁</h2>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">总览</TabsTrigger>
              <TabsTrigger value="analytics">导入</TabsTrigger>
              <TabsTrigger value="weChat">导入微信</TabsTrigger>
              <TabsTrigger value="reports">预览数据</TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Overview></Overview>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">New Episodes</h2>
                  <p className="text-sm text-muted-foreground ">Your favorite podcasts. Updated daily.</p>
                </div>
              </div>
              <Separator className="my-4" />
              <PodcastEmptyPlaceholder />
            </TabsContent>
            <TabsContent value="weChat" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">New Episodes</h2>
                  <p className="text-sm text-muted-foreground ">Your favorite podcasts. Updated daily.</p>
                </div>
              </div>
              <Separator className="my-4" />
              <WeChatUploadComponent />
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <TaskPage />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </StoreProvider>
  );
}
