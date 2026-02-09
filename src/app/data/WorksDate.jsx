export const WorksDate = [
  {
    id: 1,
    slug: "portfolio",
    title: "Portfolio",
    thumb: "/works/portfolio/thumb.svg",
    logos: [
      "/logos/javascript.svg",
      "/logos/react.svg",
      "/logos/nextjs.svg",
      "/logos/shadcn.svg",
    ],
    detail: {
      about: `ポートフォリオ。
      構想からデザイン、実装まで一から制作しました。
      海や波をイメージしてシンプルかつリッチに感じるように心がけました。
      shadcnやtailwindなどコンポーネントを使用しより仕事に`,
      improvements: ["", "動く画像を入れてよりリッチにしたかった"],
    },
  },
  {
    id: 2,
    slug: "jyanken-app",
    title: "じゃんけんアプリ",
    thumb: "/works/jyanken/thumb.jpg",
    logos: ["/logos/javascript.svg"],
    detail: {
      about: `じゃんけんアプリ。
      昨日の天気と比べて変化を見たい人に向けて作成しました。
      また背景が現在の天気を反映して変化するため視覚的に天気を認識しやすくなっています。`,
      improvements: [
        "画像のレパートリーが少なく、より天気の詳細に関わる画像にすればよかった。",
        "動く画像を入れてよりリッチにしたかった",
      ],
    },
  },
  {
    id: 3,
    slug: "todo-app",
    title: "Todoアプリ",
    thumb: "/works/todo/thumb.jpg",
    logos: ["/logos/react.svg", "/logos/nextjs.svg"],
    detail: {
      about: `Todoアプリ。
      昨日の天気と比べて変化を見たい人に向けて作成しました。
      また背景が現在の天気を反映して変化するため視覚的に天気を認識しやすくなっています。`,
      improvements: [
        "画像のレパートリーが少なく、より天気の詳細に関わる画像にすればよかった。",
        "動く画像を入れてよりリッチにしたかった",
      ],
    },
  },
  {
    id: 4,
    slug: "abc-app",
    title: "ABCアプリ",
    thumb: "/works/abc/thumb.jpg",
    logos: ["/logos/github.svg", "/logos/typescript.svg"],
    detail: {
      about: `ABCアプリ。
      昨日の天気と比べて変化を見たい人に向けて作成しました。
      また背景が現在の天気を反映して変化するため視覚的に天気を認識しやすくなっています。`,
      improvements: [
        "画像のレパートリーが少なく、より天気の詳細に関わる画像にすればよかった。",
        "動く画像を入れてよりリッチにしたかった",
      ],
    },
  },
  {
    id: 5,
    slug: "milk-app",
    title: "ミルク記録アプリ",
    thumb: "/works/milk/thumb.png",
    logos: ["/logos/react.svg", "/logos/github.svg"],
    detail: {
      about: `赤ちゃんが飲んだミルクの量を計算し記録するアプリ。
      ３時間おきのミルクで日々記録が億劫になってしまうパパママに向けたアプリです。
      夜中でもボタンひとつで記録できるように設計しました。
      どのくらい時間が空いたのか、次のミルクは何時なのかなど親に寄り添ったシンプルなアプリにしました。`,
      improvements: [
        "シンプルすぎて記録専用になってしまった。",
        "データの保存など長期目線での開発ができていなかった。",
      ],
    },
  },
  {
    id: 6,
    slug: "bbs-app",
    title: "掲示板アプリ",
    thumb: "/works/bbs/thumb.png",
    logos: [
      "/logos/nextjs.svg",
      "/logos/typescript.svg",
      "/logos/supabase.svg",
      "/logos/tailwind.svg",
      "/logos/github.svg",
    ],
    url: "https://next-bbs-i6bfwpum5-arata-ishiguros-projects.vercel.app",
    detail: {
      about: `画像とコメントを載せることができる掲示板アプリ。
      supabaseを使用しAuth機能を搭載。またデータベースも使用している。`,
      improvements: [
        "シンプルすぎて記録専用になってしまった。",
        "データの保存など長期目線での開発ができていなかった。",
      ],
    },
  },
];
