interface DataUsage {
  Active_Sessions: number;
  Concurrent_Sessions: number;
  Request_Limit_Daily: number;
  Session_Cap: number;
  Session_Time_Limit: number;
  Total_Requests_Today: number;
  Total_Sessions_Today: number;
  ret_msg: string | null;
}

export type GetDataUsage = DataUsage;