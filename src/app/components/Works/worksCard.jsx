"use client";

import { WorksDate } from "../../data/WorksDate";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const WorksCard = ({ work }) => {
  const [currentIndex, setCurrentIndex] = useState(
    WorksDate.findIndex((item) => item.id === work.id),
  );

  const currentWork = WorksDate[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? WorksDate.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === WorksDate.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="max-w-72 w-full mx-auto bg-normal rounded-xl flex flex-col items-center text-p-white shadow-lg transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500">
          <div className="relative w-full flex justify-center">
            <Image
              className="w-64 h-52 object-cover my-3 mb-2 rounded-xl border-2 border-more-light"
              src={work.thumb}
              width={256}
              height={200}
              alt={work.title}
              priority
            />
            <div className="absolute right-4 bottom-3 flex gap-1.5">
              {work.logos.slice(0, 3).map((logo, index) => {
                return (
                  <Image
                    key={index}
                    src={logo.src}
                    title={logo.title}
                    width={30}
                    height={30}
                    alt=""
                    className="bg-p-white rounded p-0.5"
                  />
                );
              })}
            </div>
          </div>
          <p className="font-bebas text-base h-[26px] leading-[26px] text-center overflow-hidden whitespace-nowrap text-ellipsis w-full px-4 pb-2">
            {work.title}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {currentWork.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 画像 */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            {currentWork.url ? (
              // URLがある場合：リンク付き画像
              <a
                href={currentWork.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative group"
              >
                <Image
                  src={currentWork.thumb}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={currentWork.title}
                  priority
                />
                {/* ホバー時のオーバーレイ */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ) : (
              // URLがない場合：通常の画像
              <Image
                src={currentWork.thumb}
                fill
                className="object-cover"
                alt={currentWork.title}
                priority
              />
            )}
          </div>

          {/* ロゴ */}
          <div className="flex gap-3 justify-center flex-wrap">
            {currentWork.logos?.map((logo, index) => {
              // GitHubアイコン用（linkがある場合）
              if (logo.link) {
                return (
                  <a
                    key={index}
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 group/logo"
                  >
                    <div className="w-12 h-12 relative bg-p-white rounded-lg p-2 shadow-sm group-hover/logo:shadow-md transition-all group-hover/logo:scale-110">
                      <Image
                        src={logo.src}
                        fill
                        className="object-contain p-1"
                        alt={logo.title}
                      />
                    </div>
                    <span className="text-xs text-p-white font-heebo">
                      {logo.title}
                    </span>
                  </a>
                );
              }

              // 通常のロゴ（linkがない場合）
              return (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 relative bg-p-white rounded-lg p-2 shadow-sm">
                    <Image
                      src={logo.src}
                      fill
                      className="object-contain p-1"
                      alt={logo.title}
                    />
                  </div>
                  <span className="text-xs text-p-white font-heebo">
                    {logo.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 概要 */}
          <section className="space-y-2">
            <h3 className="text-lg font-semibold border-b pb-2 text-p-white">
              概要
            </h3>
            <p className="text-p-white leading-relaxed whitespace-pre-line">
              {currentWork.detail.about}
            </p>
          </section>

          {/* 改善点 */}
          <section className="space-y-2">
            <h3 className="text-lg font-semibold border-b pb-2 text-p-white">
              改善点
            </h3>
            <ul className="space-y-2">
              {currentWork.detail.improvements.map((improvement, index) => (
                <li
                  key={index}
                  className="text-p-white flex gap-2 before:content-['•'] before:text-p-white before:font-bold"
                >
                  {improvement}
                </li>
              ))}
            </ul>
          </section>

          {/* ナビゲーションボタン */}
          <div className="flex justify-between items-center pt-4 border-t">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors font-medium"
            >
              ← 前の作品
            </button>
            <span className="text-sm text-p-white">
              {currentIndex + 1} / {WorksDate.length}
            </span>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors font-medium"
            >
              次の作品 →
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorksCard;
