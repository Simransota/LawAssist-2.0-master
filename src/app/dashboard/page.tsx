
"use client"
import React from 'react';
import  Layout  from './layout'
import { Button } from '../components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabsdashboard';
import ThemeSwitch from '../components/theme-switch';
import { UserNav } from '../components/user-nav';
import { RecentSales } from '../components/ui/recent-sales';
import { CaseOverview } from '../components/overview';
import  Calendar  from '../components/ui/calender';


const topNav = [
  {
    title: 'Case Overview',
    href: '/dashboard/overview',
    isActive: true,
  },
  {
    title: 'Calendar',
    href: '/dashboard/calendar',
    isActive: true,
  },
  {
    title: 'Tasks',
    href: '/dashboard/tasks',
    isActive: false,
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    isActive: false,
  },
];

 function Dashboard() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <div className='ml-auto flex items-center space-x-4'>
          <UserNav />
          <ThemeSwitch /> {/* Assuming ThemeSwitch is for theme toggling */}
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight text-white'>Lawyer Dashboard</h1>
          <div className='flex items-center space-x-2'>
            <Button className='bg-white'>Download Report</Button>
          </div>
        </div>
        <Tabs orientation='vertical' defaultValue='overview' className='space-y-4'>
          <div className='w-full overflow-x-auto pb-2 text-white'>
            <TabsList>
              <TabsTrigger value='overview'>Case Overview</TabsTrigger>
              <TabsTrigger value='calendar'>Calendar</TabsTrigger>
              {/* <TabsTrigger value='tasks'>Tasks</TabsTrigger>
              <TabsTrigger value='notifications'>Notifications</TabsTrigger> */}
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-white'>Active Cases</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold text-white'>12</div>
                  <p className='text-xs text-muted-foreground text-white'>Cases currently active</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-white'>Pending Tasks</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                    <circle cx='9' cy='7' r='4' />
                    <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold text-white'>45</div>
                  <p className='text-xs text-muted-foreground text-white'>Tasks pending completion</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-white'>Upcoming Deadlines</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <rect width='20' height='14' x='2' y='5' rx='2' />
                    <path d='M2 10h20' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold text-white'>7</div>
                  <p className='text-xs text-muted-foreground text-white'>Deadlines approaching this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium text-white'>Recent Consultations</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold text-white'>+15</div>
                  <p className='text-xs text-muted-foreground text-white'>Consultations in the past month</p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4 text-white'>
                <CardHeader>
                  <CardTitle>Case Overview</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <CaseOverview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3 text-white'>
                <CardHeader>
                  <CardTitle>Recent Cases</CardTitle>
                  <CardDescription>You handled 15 cases this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='calendar' className='space-y-4'>
            <div className='p-4'>
              <Calendar /> {/* Using the Schedule-X calendar */}
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  );
}

export default Dashboard  ;

