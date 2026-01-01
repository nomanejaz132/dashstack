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
  const [tooltipPos, setTooltipPos] = React.useState<{ x: number, y: number } | null>(null);

  return (
    <Card className="shadow-none border-none drop-shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] w-full overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-4 desktop:p-6">
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
      <CardContent className="pl-0 pb-4">
        <div className="h-[250px] desktop:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={salesData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              onMouseMove={(state) => {
                if (state.activeCoordinate) {
                  setTooltipPos({
                    x: state.activeCoordinate.x,
                    y: state.activeCoordinate.y
                  });
                } else {
                  setTooltipPos(null);
                }
              }}
              onMouseLeave={() => setTooltipPos(null)}
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
                position={tooltipPos ? { x: tooltipPos.x, y: tooltipPos.y - 40 } : undefined}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="relative -translate-x-1/2 bg-[#4880FF] text-white text-[12px] font-bold px-3 py-1 rounded-[2px] shadow-sm select-none after:absolute after:left-1/2 after:-bottom-1 after:h-2 after:w-2 after:-translate-x-1/2 after:rotate-45 after:bg-[#4880FF] after:content-['']">
                        {`${(payload[0].value * 1234.56).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
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
                stroke="#4880FF"
                strokeWidth={2}
                dot={{ r: 4, fill: "#4880FF", strokeWidth: 0 }}
                activeDot={{ r: 6, fill: "#4880FF", strokeWidth: 0 }}
              />
              {/* This is a visual hack to match the screenshot's specific tooltip style if needed, but Recharts tooltip is default enough */}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
