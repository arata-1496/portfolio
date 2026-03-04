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
      about: `デザインから実装まで一から制作した就職用ポートフォリオサイトです。
      海・波をコンセプトにSVGアニメーションや独自カラーパレットでブランドイメージを統一しました。
      Next.js App RouterにTailwind CSS・shadcn/uiを組み合わせ、
      UIコンポーネントのカスタマイズや複数環境（自宅・学校）でのGit運用も経験しました。
      レスポンシブ対応では、実機確認を繰り返しながらレイアウト崩れを一つひとつ解消しました。`,
      improvements: [
        "スクロール位置に連動したフェードインアニメーションを実装できなかった。Intersection Observer APIを活用してUXをさらに向上させたい。",
        "お問い合わせフォームはUIのみで、送信データをデータベースに保存する機能まで実装できなかった。SupabaseやFirebaseと組み合わせた実装に挑戦したい。",
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
      about: `小学校低学年向けの海の生き物クイズ＆図鑑アプリです。
      Supabaseで認証・データ管理を行い、正解数に応じて図鑑に登録される
      生き物のレアリティが変化するゲーム性を取り入れました。
      文字入力が難しい子供でも楽しめるよう音声認識APIも実装しており、
      アクセシビリティを意識した設計にしました。
      PWA対応により、ホーム画面に追加してアプリのように利用できます。`,
      improvements: [
        "クイズで同じ生き物が連続して出題される場合があった。出題確率をユーザーの回答履歴に基づいて動的に調整するロジックを加えれば、より学習効果の高い体験を提供できると考えている。",
        "ユーザー退会・削除機能が未実装で、個人情報の観点から不十分だった。本番運用を想定した場合に必須の機能として追加したい。",
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
      about: `画像とコメントを投稿できるSNS型掲示板アプリです。
      Supabaseのストレージ機能で画像ファイルをクラウド保存し、
      Auth機能でログイン認証を実装することで不正投稿を防止する仕組みを構築しました。
      TypeScriptを用いて型安全な実装を意識しました。`,
      improvements: [
        "投稿・閲覧のみのシンプルな機能にとどまり、ユーザー同士のインタラクション（いいね・コメント返信など）がなく、コミュニティとして機能しにくかった。",
        "データの増加に伴うパフォーマンス劣化（ページネーション・無限スクロールなど）を考慮した設計ができておらず、長期運用を見据えた開発経験に課題が残った。",
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
      3歳の姪のために制作した子供向けじゃんけんゲームです。
      純粋なJavaScriptで作成した既存ロジックをNext.jsで再実装しました。
      勝敗の判定結果をURLクエリパラメータで管理しページ遷移する設計を採用し、
      背景画像をCSSでループ再生するなどビジュアル面も工夫しました。`,
      improvements: [
        "クエリパラメータで結果を渡しているためURLを直接書き換えると結果を改ざんできてしまう。ZustandなどのStateで管理することでセキュリティを向上させたい。",
        "現在は1人用のため、名前登録による複数プレイヤー対応や連勝記録機能を追加し、家族で楽しめるアプリに発展させたい。",
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
      about: `育児中の保護者向けに、赤ちゃんへのミルク授乳を記録・管理するアプリです。
      3時間おきの深夜授乳でも片手でワンタップ記録できるUXを最優先に設計しました。
      前回授乳からの経過時間・次回授乳の目安時刻をリアルタイムで表示し、
      寝不足の親でも直感的に使えるシンプルなインターフェースにしました。`,
      improvements: [
        "記録はブラウザのローカルのみで保存されるため、スマートフォンを変えるとデータが引き継げない。SupabaseやFirebaseでクラウド保存に対応すれば実用性が大きく上がると感じた。",
        "授乳量の統計グラフや月齢に応じた適正量との比較など、データ活用の面でも発展させたい。",
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
      about: `現在地の天気情報とUnsplash APIを組み合わせた天気付き時計アプリです。
      位置情報から取得した天気をキーワードに、Unsplash APIで関連する
      風景写真を自動取得して背景に表示します。
      天気に応じて背景が切り替わるため、数字だけでなく視覚的に
      現在の天候を直感的に把握できるUIを実現しました。`,
      improvements: [
        "Unsplashへの検索ワードが大まかなため、天気に直結しない写真が表示されることがあった。天気コード（晴れ・雨・雪など）ごとに専用のキーワードセットを用意することで精度を改善できると考えている。",
        "写真が静止画のみで動きがなく、雨のアニメーションや雲の流れなどCSSアニメーションを加えてよりリッチな表現にしたかった。",
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
      about: `都市名を入力すると天気予報APIからその日の天気を取得して表示するアプリです。
      外部APIとの非同期通信・エラーハンドリング・Reactのステート管理を
      実践的に学ぶことを目的として制作しました。`,
      improvements: [
        "現状は今日の天気のみ表示で、3〜5日先の週間予報まで表示できるとより実用的だった。",
        "エラー表示（都市名が見つからない場合など）のUIが簡素で、ユーザーへのフィードバックが不十分だった。次回は丁寧なバリデーション設計をしたい。",
      ],
    },
  },
];
