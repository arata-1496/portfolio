/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
			"./src/**/*.{js,ts,jsx,tsx}", // srcフォルダ配下をスキャン対象にする
			"./app/**/*.{js,ts,jsx,tsx}",
			"./components/**/*.{js,ts,jsx,tsx}",
		],
  theme: {
  	extend: {
			//アニメーション
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-in': 'fade-in 1.5s ease-out',
				'fade-in-3s-delay-0.5s': 'fade-in 3s ease-out 0.5s forwards',
			},
			// カスタムフォント
			fontFamily: {
				bebas: ['var(--font-bebas)'],
				noto: ['var(--font-noto)'],
				heebo: ['var(--font-heebo)'],
			},
			// カスタムフォントサイズ
			fontSize: {
				'h1': '128px',
				'h2': '96px',
				'h3': '32px',
				'p': '16px',
			},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
				//カスタムカラー
				'more-deep': '#011526',
				'deep': '#204359',
				'normal': '#5a798c',
				'light': '#6593a6',
				'more-light': '#c1d4d9',
				'p-white': '#fafafa',
				//デフォルト設定
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

