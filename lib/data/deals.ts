import type { Deal } from "@/types";

/**
 * Deals table data
 * Used in the DealsTable component to display recent transactions
 */
export const deals: Deal[] = [
  {
    product: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
    statusColor: "bg-[#00B69B]",
    image: "/images/AppleWatch.png",
  },
  {
    product: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Pending",
    statusColor: "bg-[#FCBE2D]",
    image: "/images/AppleWatch.png",
  },
  {
    product: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Rejected",
    statusColor: "bg-[#FD5454]",
    image: "/images/AppleWatch.png",
  },
];
