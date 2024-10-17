import React, { useState } from "react";

import ImgView from "@/components/ImgView";
import Layout from "@/components/Layout";
import sayData from "@/data/sayData/sayData.json";

import { Title } from "../titleConfig";
import SayPop from "./SayPop";

interface SayType {
  _id?: string;
  content?: string;
  date?: number;
  imgs?: string[];
}

const Say: React.FC = () => {
  const newData = sayData.data;

  const [url, setUrl] = useState("");
  const [showPreView, setShowPreView] = useState(false);

  const handlePreView = (url: string) => {
    setShowPreView(true);
    setUrl(url);
  };

  return (
    <Layout title={Title.Say}>
      {newData?.data.map(({ _id, content, date, imgs }: SayType) => (
        <SayPop
          key={_id}
          content={content}
          date={date}
          imgs={imgs}
          handlePreView={handlePreView}
        />
      ))}

      <ImgView
        viewUrl={url}
        isViewShow={showPreView}
        onClick={() => setShowPreView(false)}
      />
    </Layout>
  );
};

export default Say;
