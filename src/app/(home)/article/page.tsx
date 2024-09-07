"use client";

import PaginationComponent from "@/components/elements/paginations";
import ArticleScreen from "@/components/pages/articles";
import { getAllArticles } from "@/services/api";
import { ArticleBlogInterface } from "@/types/interface";
import React, { useEffect, useState } from "react";

export default function ArticlePage() {
  const limit = 9;
  const itemsPerPage = 9;
  const [articles, setArticles] = useState<ArticleBlogInterface[]>();
  const [displayedArticles, setDisplayedArticles] = useState<
    ArticleBlogInterface[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchArticles = async (limit: number) => {
    try {
      const response = await getAllArticles(limit);

      setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles(limit);
  }, [limit]);

  useEffect(() => {
    if (articles) {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setDisplayedArticles(articles.slice(start, end));
    }
  }, [articles, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalItems = articles ? articles?.length : 0;
  const totalPages = Math.ceil(articles ? totalItems / itemsPerPage : 0);

  return (
    <section className="w-full flex flex-col pb-36 md:pb-96">
      <div className="w-full flex flex-col items-center gap-y-8 pt-32">
        <h2 className="text-neutral-700 font-semibold text-[26px] md:text-[28px]">
          Artikel Dari Rama Tranz
        </h2>

        <div className="flex flex-col md:grid grid-cols-3 gap-x-4 gap-y-10 px-5 md:px-20">
          {articles &&
            displayedArticles?.map((item: any, i: number) => {
              return <ArticleScreen key={i} item={item} />;
            })}
        </div>

        <PaginationComponent
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
