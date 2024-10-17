import React from "react";

import Layout from "@/components/Layout";
import logData from "@/data/logData/logData.json";

import { Title } from "../titleConfig";
import TimeItem from "./TimeItem";

interface Log {
  _id?: string;
  date?: number;
  logContent?: string[];
}

const Log: React.FC = () => {
  const newData = logData.data;

  return (
    <Layout title={Title.Log}>
      {newData?.data.map(({ _id, date, logContent }: Log) => (
        <TimeItem key={_id} date={date} logContent={logContent} />
      ))}
    </Layout>
  );
};

export default Log;
