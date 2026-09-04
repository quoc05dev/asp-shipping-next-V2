export type FleetListVessel = {
  vessel: string;
  built: string;
  imo: string;
  type: "Oil Tanker" | "Oil/Chemical Tanker" | "Gas Carrier" | "Bulk Carrier";
  flag: string;
  manager: string;
  sdwt: string;
};

export const fleetListUpdatedAt = "6 August 2026";

export const fleetList: FleetListVessel[] = [
  { vessel: "ASP TREASURES", built: "2016", imo: "9732242", type: "Oil Tanker", flag: "Panama", manager: "Fleet Management", sdwt: "115,063" },
  { vessel: "ASP TITAN", built: "2026", imo: "1084338", type: "Oil Tanker", flag: "Panama", manager: "Fleet Management", sdwt: "115,049" },
  { vessel: "ASP LUNA", built: "2026", imo: "1069314", type: "Oil Tanker", flag: "Panama", manager: "Fleet Management", sdwt: "115,049" },
  { vessel: "ASP JEWELS", built: "2016", imo: "9732254", type: "Oil Tanker", flag: "Panama", manager: "Fleet Management", sdwt: "114,974" },
  { vessel: "ASP AVANA", built: "2018", imo: "9783899", type: "Oil Tanker", flag: "Panama", manager: "Fleet Management", sdwt: "108,524" },
  { vessel: "EASTERN QUINCE", built: "2009", imo: "9379040", type: "Oil Tanker", flag: "Panama", manager: "Anglo-Eastern", sdwt: "41,397" },
  { vessel: "ASP MAPLE", built: "2026", imo: "1078884", type: "Oil/Chemical Tanker", flag: "Panama", manager: "Anglo-Eastern", sdwt: "49,981" },
  { vessel: "ASP CEDAR", built: "2026", imo: "1078896", type: "Oil/Chemical Tanker", flag: "Panama", manager: "Anglo-Eastern", sdwt: "49,981" },
  { vessel: "ASP RAINBOW", built: "2025", imo: "1071408", type: "Oil/Chemical Tanker", flag: "Panama", manager: "Anglo-Eastern", sdwt: "49,776" },
  { vessel: "ASP SUNSHINE", built: "2026", imo: "1071410", type: "Oil/Chemical Tanker", flag: "Panama", manager: "Anglo-Eastern", sdwt: "49,776" },
  { vessel: "ASP LILY", built: "2011", imo: "9542178", type: "Oil/Chemical Tanker", flag: "Panama", manager: "Appointed manager", sdwt: "19,991" },
  { vessel: "HAVEN", built: "2008", imo: "9474151", type: "Oil/Chemical Tanker", flag: "Panama", manager: "Appointed manager", sdwt: "13,226" },
  { vessel: "GENEVI", built: "2013", imo: "9604392", type: "Gas Carrier", flag: "Panama", manager: "Anglo-Eastern", sdwt: "54,901" },
  { vessel: "APOLLO OCEAN", built: "2010", imo: "9423322", type: "Gas Carrier", flag: "Panama", manager: "ASP (in-house)", sdwt: "49,999" },
  { vessel: "LADY ROSALIA", built: "2010", imo: "9571222", type: "Gas Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "3,939" },
  { vessel: "BRILLIANT VENUS", built: "2008", imo: "9326392", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "106,482" },
  { vessel: "FIONAN", built: "2011", imo: "9481635", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "104,990" },
  { vessel: "ASP BRAVE", built: "2010", imo: "9434606", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "57,317" },
  { vessel: "ASP FRONTIER", built: "2010", imo: "9445605", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "57,298" },
  { vessel: "ASP HOPE", built: "2010", imo: "9445629", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "57,295" },
  { vessel: "HELI", built: "2012", imo: "9609677", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "37,425" },
  { vessel: "DEBI", built: "2012", imo: "9616735", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "37,196" },
  { vessel: "BAROSSA", built: "2011", imo: "9588407", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "34,264" },
  { vessel: "GOLDEN STAR", built: "2003", imo: "9287429", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "28,428" },
  { vessel: "GOLDEN FLAME", built: "2012", imo: "9605059", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "28,361" },
  { vessel: "GOLDEN CENTURY", built: "2010", imo: "9574183", type: "Bulk Carrier", flag: "Panama", manager: "Appointed manager", sdwt: "28,196" },
];
