import { useRequest } from "ahooks";
import React from "react";
import { useSearchParams } from "react-router-dom";

import Layout from "@/components/Layout";
import MarkDown from "@/components/MarkDown";
import { DB } from "@/utils/apis/dbConfig";
import { getWhereData } from "@/utils/apis/getWhereData";
import { _ } from "@/utils/cloudBase";
import { staleTime } from "@/utils/constant";

import CopyRight from "./CopyRight";
import styles from "./index.scss";
import Navbar from "./Navbar";
import PostTags from "./PostTags";

const Post: React.FC = () => {
  const [searchParams] = useSearchParams();

  const params = searchParams.get("title");
  const { data, loading } = useRequest(getWhereData, {
    defaultParams: [
      DB.Article,
      { titleEng: _.eq(params ? params : ""), post: _.eq(true) },
    ],
    retryCount: 3,
    cacheKey: `Post-${DB.Article}-${params}`,
    staleTime,
  });

  return (
    <Layout
      title={data?.data[0].title}
      loading={loading}
      classes={data?.data[0].classes}
      date={data?.data[0].date}
      isPost={true}
      rows={14}
    >
      <MarkDown content={data?.data[0].content} className={styles.mb} />
      <PostTags tags={data?.data[0].tags} />
      <CopyRight
        title={data?.data[0].title}
        titleEng={data?.data[0].titleEng}
      />
      {/* <Comment titleEng={params ? params : ""} title={data?.data[0].title} /> */}
      <Navbar content={data?.data[0].content} />
    </Layout>
  );
};

export default Post;
