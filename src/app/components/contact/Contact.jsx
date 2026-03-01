import SectionTitle from "../topPage/SectionTitle";
import ScrollReveal from "../ScrollReveal";
import { Button } from "@/app/components/ui/button";
import { Mail, SquareArrowOutUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="mt-32 md:mt-40 lg:mt-48 w-full min-h-[60vh] relative">
      <SectionTitle title="CONTACT" align="left" />

      <div className="max-w-7xl mx-auto pt-32 md:pt-40 lg:pt-48 px-4 md:px-8">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-8 text-center">
          {/* メッセージ：下からスライドイン */}
          <ScrollReveal animation="slide-up" threshold={0.2}>
            <div className="space-y-4">
              <p className="font-noto text-base md:text-lg text-more-deep leading-relaxed">
                ご質問・ご依頼など、
                <br className="md:hidden" />
                お気軽にお問い合わせください
              </p>
            </div>
          </ScrollReveal>

          {/* ボタン：少し遅延させてフェードイン */}
          <ScrollReveal animation="slide-up" delay={200} threshold={0.2}>
            {/* Google Formへのボタン */}
            <a
              href="https://forms.gle/BiityrYFCW4PTpEj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="
                  bg-deep
                  hover:bg-normal
                  text-p-white
                  font-heebo
                  text-lg
                  px-12
                  py-6
                  h-auto
                  rounded-xl
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <Mail className="mr-2 h-5 w-5" />
                お問い合わせフォーム
              </Button>
            </a>
          </ScrollReveal>

          {/* 補足テキスト */}
          <ScrollReveal animation="fade-in" delay={400} threshold={0.2}>
            <a
              href="https://forms.gle/BiityrYFCW4PTpEj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-normal transition-colors"
            >
              <SquareArrowOutUpRight className="h-4 w-4" />
              <p className="font-noto">別タブでGoogle Formが開きます</p>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
