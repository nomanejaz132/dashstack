"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart
} from 'recharts';

const data = [
  { name: '5k', value: 20 },
  { name: '10k', value: 45 },
  { name: '15k', value: 30 },
  { name: '20k', value: 50 }, // Spike
  { name: '22k', value: 85, active: true }, // Peak
  { name: '25k', value: 40 },
  { name: '30k', value: 55 },
  { name: '35k', value: 58 },
  { name: '35k', value: 25 }, // Dip
  { name: '40k', value: 32 },
  { name: '40k', value: 28 }, 
  { name: '45k', value: 70 },
  { name: '45k', value: 60 },
  { name: '50k', value: 65 },
  { name: '55k', value: 55 },
  { name: '55k', value: 58 },
  { name: '60k', value: 45 },
  { name: '65k', value: 55 },
  { name: '70k', value: 50 },
];

export function SalesChart() {
  return (
    <Card className="col-span-4 shadow-none border-none drop-shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">Sales Details</CardTitle>
        <Select defaultValue="october">
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="october">October</SelectItem>
            <SelectItem value="november">November</SelectItem>
            <SelectItem value="december">December</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4379EE" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#4379EE" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                cursor={{ stroke: '#DFE0EB', strokeWidth: 1, strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#4880FF] text-white text-[12px] font-bold px-3 py-1 rounded-md shadow-sm">
                        {`${payload[0].value}%`}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area type="linear" dataKey="value" stroke="none" fill="url(#colorValue)" />
              <Line
                type="linear"
                dataKey="value"
                stroke="#4379EE"
                strokeWidth={2}
                dot={{ r: 4, fill: "#4379EE", strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
              {/* This is a visual hack to match the screenshot's specific tooltip style if needed, but Recharts tooltip is default enough */}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
