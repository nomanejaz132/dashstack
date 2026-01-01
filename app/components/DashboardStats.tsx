import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const stats = [
  {
    label: 'Total User',
    value: '40,689',
    change: '8.5%',
    trend: 'up',
    trendText: 'Up from yesterday',
    icon: '/User.svg',
    iconBg: 'bg-[#8280FF]/20',
    iconColor: 'text-purple-600',
    chartColor: 'text-green-500', 
  },
  {
    label: 'Total Order',
    value: '10293',
    change: '1.3%',
    trend: 'up',
    trendText: 'Up from past week',
    icon: '/Orders.svg',
    iconBg: 'bg-[#FEC53D]/20',
    iconColor: 'text-yellow-600',
    chartColor: 'text-green-500',
  },
  {
    label: 'Total Sales',
    value: '$89,000',
    change: '4.3%',
    trend: 'down',
    trendText: 'Down from yesterday',
    icon: '/Sales.svg',
    iconBg: 'bg-[#00C898]/20',
    iconColor: 'text-green-600',
    chartColor: 'text-red-500',
  },
  {
    label: 'Total Pending',
    value: '2040',
    change: '1.8%',
    trend: 'up',
    trendText: 'Up from yesterday',
    icon: '/Pending.svg',
    iconBg: 'bg-[#FF8C00]/20',
    iconColor: 'text-orange-600',
    chartColor: 'text-green-500',
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none shadow-none drop-shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]">
            <CardContent className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                    </div>
                    <div className={`p-3.5 rounded-3xl ${stat.iconBg}`}>
                        <Image src={stat.icon} alt={stat.label} width={30} height={30} className="h-7.5 w-7.5" />
                    </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                    <span className={`flex items-center font-medium ${stat.chartColor}`}>
                        {stat.trend === 'up' ? (
                            <Image src="/TrendingUpIcon.svg" alt="Trending Up" width={16} height={16} className="mr-1 h-4 w-4" />
                        ) : (
                            <Image src="/TrendingDownIcon.svg" alt="Trending Down" width={16} height={16} className="mr-1 h-4 w-4" />
                        )}
                        {stat.change}
                    </span>
                    <span className="ml-2 text-muted-foreground">{stat.trendText}</span>
                </div>
            </CardContent>
        </Card>
      ))}
    </div>
  );
}
