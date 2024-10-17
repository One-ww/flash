import { useRequest, useSafeState } from "ahooks";
import dayjs from "dayjs";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import DisplayBar from "@/components/DisplayBar";
import Layout from "@/components/Layout";
import MyPagination from "@/components/MyPagination";
import { DB } from "@/utils/apis/dbConfig";
import { getWhereOrderPageSum } from "@/utils/apis/getWhereOrderPageSum";
import { _, db } from "@/utils/cloudBase";
import { detailPostSize, staleTime } from "@/utils/constant";

import { ArticleType } from "../constant";

const ArtDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [page, setPage] = useSafeState(1);

  const where = searchParams.get("tag")
    ? {
        tags: db.RegExp({
          regexp: `${searchParams.get("tag")}`,
          options: "i",
        }),
      }
    : {
        classes: searchParams.get("class"),
      };

  const { data, loading } = useRequest(
    () =>
      getWhereOrderPageSum({
        dbName: DB.Article,
        where: { ...where, post: _.eq(true) },
        page,
        size: detailPostSize,
        sortKey: "date",
      }),
    {
      retryCount: 3,
      refreshDeps: [page],
      cacheKey: `ArtDetail-${DB.Article}-${JSON.stringify(where)}-${page}`,
      staleTime,
    }
  );

  return (
    <Layout title={searchParams.get("tag") || searchParams.get("class") || ""}>
      {data?.articles.data.map((item: ArticleType) => (
        <DisplayBar
          key={item._id}
          content={item.title}
          right={dayjs(item.date).format("YYYY-MM-DD")}
          loading={loading}
          onClick={() =>
            navigate(`/post?title=${encodeURIComponent(item.titleEng)}`)
          }
        />
      ))}
      <MyPagination
        current={page}
        defaultPageSize={detailPostSize}
        total={data?.sum.total}
        setPage={setPage}
        autoScroll={true}
        scrollToTop={440}
      />
    </Layout>
  );
};

export default ArtDetail;
