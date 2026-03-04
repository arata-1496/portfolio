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
    id: 2,
    slug: "sea-book",
    title: "うみの生き物図鑑",
    thumb: "/works/sea-book/thumb.png",
    logos: [
      { src: "/logos/nextjs.svg", title: "Next.js" },
      { src: "/logos/supabase.svg", title: "supabase" },
      { src: "/logos/tailwind.svg", title: "tailwind" },
      { src: "/logos/shadcn.svg", title: "shadcn" },
      {
        src: "/logos/github.svg",
        title: "GitHub",
        link: "https://github.com/arata-1496/sea-book",
      },
    ],
    url: "https://sea-book.vercel.app/",
    detail: {
      about: `海の生き物クイズ図鑑アプリ。
      構想からデザイン、実装まで一から制作しました。
      低学年のこども向け。
      ログイン機能や回答数によって図鑑の生き物が変化するレアリティを導入し飽き対策もしました。
      音声認証APIも取り入れ、入力できない子供でも楽しめる設計にしました。
      DBからデータ抽出するフック作成にかなり苦戦しました。
      いつでも子供に楽しんでもらえるようPWAも実装しました。`,
      improvements: [
        "生き物が連続で出ることがあり、確率を変動できるようにすればよかった。",
        "ユーザーの削除機能もつけれればよりよかった。",
      ],
    },
  },

  {
    id: 3,
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
    id: 4,
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
    id: 5,
    slug: "milk-app",
    title: "ミルク記録アプリ",
    thumb: "/works/milk/thumb.png",
    logos: [
      { src: "/logos/react.svg", title: "React" },
      {
        src: "/logos/github.svg",
        title: "GitHub",
        link: "https://github.com/arata-1496/milk-todo",
      },
    ],
    url: "https://milk-todo.vercel.app/",
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
    slug: "weather-clock",
    title: "weather-clock",
    thumb: "/works/weather/thumb.png",
    logos: [
      { src: "/logos/react.svg", title: "React" },
      {
        src: "/logos/github.svg",
        title: "GitHub",
        link: "https://github.com/arata-1496/weather-unsplash-app",
      },
    ],
    url: "https://weather-unsplash-app.vercel.app/",
    detail: {
      about: `現在地の天気入り時計。
      現在地の情報から、unsplashAPIを使用し、現在の天気に近い画像を取得し表示しています。
      また背景が現在の天気を反映して変化するため視覚的に天気を認識しやすくなっています。`,
      improvements: [
        "画像のレパートリーが少なく、より天気の詳細に関わる画像にすればよかった。",
        "動く画像を入れてよりリッチにしたかった",
      ],
    },
  },
  {
    id: 7,
    slug: "react-weather",
    title: "お天気アプリ",
    thumb: "/works/react-weather/thumb.png",
    logos: [
      { src: "/logos/react.svg", title: "React" },
      {
        src: "/logos/github.svg",
        title: "GitHub",
        link: "https://github.com/arata-1496/react-weather",
      },
    ],
    url: "https://react-weather-flame-pi.vercel.app/",
    detail: {
      about: `お天気アプリ。
      調べたい都市を入力し、その日の天気をAPIで取得する。
      APIの取得練習で制作しました。`,
      improvements: ["text", "text"],
    },
  },
];
