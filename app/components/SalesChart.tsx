"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

import { salesData } from "@/lib/data/chart";

/**
 * SalesChart Component
 *
 * Client Component - Uses recharts library which requires client-side rendering
 * for interactive chart functionality and DOM manipulation.
 */
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
              data={salesData}
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
