import React from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

import { deals } from "@/lib/data/deals";

export function DealsTable() {
  return (
    <Card className="shadow-none border-none drop-shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] w-full overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-4 desktop:p-6">
        <CardTitle className="text-lg font-bold">Deals Details</CardTitle>
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
      <CardContent className="p-0 desktop:p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[#F1F4F9]">
              <TableRow className="border-none hover:bg-transparent">
                <TableHead className="font-semibold desktop:rounded-l-xl text-gray-900 dark:text-gray-100 min-w-[150px]">Product Name</TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100 min-w-[120px]">Location</TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100 min-w-[150px]">Date - Time</TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100 min-w-[80px]">Piece</TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100 min-w-[100px]">Amount</TableHead>
                <TableHead className="font-semibold desktop:rounded-r-xl text-gray-900 dark:text-gray-100 min-w-[100px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="mt-6">
              {deals.map((deal, index) => (
                <TableRow key={index} className="border-b-[0.5px] border-[#979797]/40 hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                  <TableCell className="font-medium flex items-center gap-3">
                    <Avatar className="h-9 w-9 rounded-lg">
                          <AvatarImage src={deal.image} alt={deal.product} />
                          <AvatarFallback>AW</AvatarFallback>
                    </Avatar>
                    {deal.product}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{deal.location}</TableCell>
                  <TableCell className="text-muted-foreground">{deal.date}</TableCell>
                  <TableCell className="text-muted-foreground">{deal.piece}</TableCell>
                  <TableCell className="font-semibold">{deal.amount}</TableCell>
                  <TableCell>
                    <Badge className={`rounded-full px-4 py-1 text-white hover:bg-opacity-90 border-none ${deal.statusColor}`}>
                      {deal.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
