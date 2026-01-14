import SectionTitle from "../topPage/SectionTitle";
import Image from "next/image";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <SectionTitle title="PROFILE" />
      <div className="profile-inner">
        <div className="profile-content">
          <Image
            className="profile-content__image"
            src="/works/abc/thumb.jpg" //ダミーimage
            width={382}
            height={264}
            alt=""
          />
          <div className="profile-content__text">
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
