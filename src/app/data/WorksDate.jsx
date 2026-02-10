export const WorksDate = [
  {
    id: 1,
    slug: "portfolio",
    title: "Portfolio",
    thumb: "/works/portfolio/thumb.svg",
    logos: [
      { src: "/logos/nextjs.svg", title: "Next.js" },
      { src: "/logos/tailwind.svg", title: "tailwind" },
      { src: "/logos/shadcn.svg", title: "shadcn" },
      {
        src: "/logos/github.svg",
        title: "GitHub",
        link: "https://github.com/arata-1496/portfolio",
      },
    ],
    detail: {
      about: `ポートフォリオ。
      構想からデザイン、実装まで一から制作しました。
      海や波をイメージしてシンプルかつリッチに感じるように心がけました。
      shadcnやtailwindなどコンポーネントを学習し取り入れてみました。
      UIコンポーネントをカスタムするのにかなり苦戦しました。
      また、レスポンシブデザインを意識して作成しましたが、レイアウト崩れを何度も起こしこちらもかなり苦戦しました。`,
      improvements: [
        "スクロールも管理してアニメーションを追加したかった",
        "問い合わせフォームもデータベースを使用して実装したかった。",
      ],
    },
  },
  {
    slug: "bbs-app",
    title: "掲示板アプリ",
    thumb: "/works/bbs/thumb.png",
    logos: [
      { src: "/logos/nextjs.svg", title: "Next.js" },
      { src: "/logos/typescript.svg", title: "TypeScript" },
      { src: "/logos/supabase.svg", title: "supabase" },
      { src: "/logos/tailwind.svg", title: "tailwind" },
      {
        src: "/logos/github.svg",
        title: "GitHub",
        link: "https://github.com/arata-1496/next-bbs-app",
      },
    ],
    url: "https://next-bbs-i6bfwpum5-arata-ishiguros-projects.vercel.app",
    detail: {
      about: `画像とコメントを載せることができる掲示板アプリ。
      supabaseでデータベースも使用し、写真も保存できるようにしました。
      また、Auth機能を搭載し悪意あるコメント防止を行いました`,
      improvements: [
        "シンプルすぎて記録専用になってしまった。",
        "データの保存など長期目線での開発ができていなかった。",
      ],
    },
  },
  {
    id: 3,
    slug: "jyanken-app",
    title: "じゃんけんアプリ",
    thumb: "/works/jyanken/thumb.png",
    logos: [
      { src: "/logos/nextjs.svg", title: "Next.js" },
      { src: "/logos/shadcn.svg", title: "shadcn" },
      { src: "/logos/tailwind.svg", title: "tailwind" },
      {
        src: "/logos/github.svg",
        title: "GitHub",
        link: "https://github.com/arata-1496/jyanken-next",
      },
    ],
    url: "https://jyanken-next.vercel.app/",
    detail: {
      about: `じゃんけんアプリ。
      以前授業で生のJavaScriptで制作したじゃんけんゲームをNext.jsでやってみたくて制作してみました。
      選んだ手によって結果をどう出すのかをかなり悩み、結果的にクエリを使用しました。
      ランダム生成した数字の結果によってクエリを作成してページ遷移するように設計しました。
      3歳の姪っ子に遊んでもらえるように子供向けにしました。
      また背景もループするようにしてみました。`,
      improvements: [
        "クエリで結果を渡しているので、urlを変えれば結果を自分で変更できてしまう。zustandなどで管理したほうが良かったかもしれない。",
        "複数人で遊べるように名前で登録して記録できるようにしたい。",
        "連勝記録やアニメーションをいれたい。",
        "連勝途中でボスが出るなどのギミックをつけるのもあり。",
      ],
    },
  },
  {
    id: 4,
    slug: "milk-app",
    title: "ミルク記録アプリ",
    thumb: "/works/milk/thumb.png",
    logos: [
      { src: "/logos/react.svg", title: "React" },
      { src: "/logos/github.svg", title: "GitHub" },
    ],
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
    id: 5,
    slug: "（ダミー）todo-app",
    title: "Todoアプリ",
    thumb: "/works/todo/thumb.jpg",
    logos: [
      { src: "/logos/react.svg", title: "React" },
      { src: "/logos/nextjs.svg", title: "Next.js" },
    ],
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
    id: 6,
    slug: "abc-app",
    title: "ABCアプリ",
    thumb: "/works/abc/thumb.jpg",
    logos: [
      { src: "/logos/nextjs.svg", title: "Next.js" },
      { src: "/logos/nextjs.svg", title: "Next.js" },
    ],
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
];
