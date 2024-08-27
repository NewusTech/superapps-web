import ArticleScreen from "@/components/pages/articles";
import { articles } from "@/constants/main";
import React from "react";

export default function ArticlePage() {
  return (
    <section className="w-full flex flex-col pb-36 md:pb-96">
      <div className="w-full flex flex-col items-center gap-y-8 pt-32">
        <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[28px]">
          Artikel Dari Rama Tranz
        </h2>

        <div className="flex flex-col md:grid grid-cols-3 gap-x-4 gap-y-10 px-10 md:px-20">
          {articles &&
            articles?.map((item: any, i: number) => {
              return <ArticleScreen key={i} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
}
