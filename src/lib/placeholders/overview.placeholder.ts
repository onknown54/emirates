import { captaliseText } from "../helpers/common.helper";
import { StatusCardType } from "../type-definations";

export const statusCardVariiant = {
  [StatusCardType.HOTELS]: {
    url: "/hotels",
    btnClass: "bg-[#0D6EFD] text-white",
    className: "bg-[#E7F0FF] text-[#1D2433]",
    heading: `${captaliseText(StatusCardType.HOTELS)}`,
  },
  [StatusCardType.FLIGHTS]: {
    url: "/flights",
    btnClass: "bg-white text-[#0D6EFD]",
    className: "bg-[#0D6EFD] text-white",
    heading: `${captaliseText(StatusCardType.FLIGHTS)}`,
  },
  [StatusCardType.ACTIVITIES]: {
    url: "/activities",
    btnClass: "bg-[#0D6EFD]",
    className: "bg-[#000031] text-white",
    heading: `${captaliseText(StatusCardType.ACTIVITIES)}`,
  },
};
