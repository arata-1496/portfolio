import SectionTitle from "../topPage/SectionTitle";
import Image from "next/image";

const Profile = () => {
  return (
    <section className="mt-32 md:mt-40 lg:mt-48 w-full min-h-full relative">
      <SectionTitle title="PROFILE" />
      <div className="max-w-7xl mx-auto pt-24 md:pt-32 lg:pt-40 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <Image
            className="w-full md:w-[382px] h-auto md:h-[264px] bg-[#c1d4d9] rounded-[10px] object-cover"
            src="/works/abc/thumb.jpg" //ダミーimage
            width={382}
            height={264}
            alt=""
          />
          <div className="w-full md:max-w-sm flex flex-col justify-center gap-6 text-center font-noto text-base leading-loose tracking-wide text-more-deep">
            <p>
              エンジニア志望
              <br />
              前職はドルフィントレーナー
              <br />
              長年手書きで作成していた「飼育日誌」を
              <br />
              手軽にデータ入力できないかと考え
              <br />
              webアプリに興味が湧く
              <br />
            </p>
            <p>
              様々なアプリを作成するうちに
              <br />
              より多くの人に貢献したい
              <br />
              という思いが強くなり
              <br />
              IT業界への転職を決意
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
