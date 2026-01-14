"use client";

const handleSubmit = (e) => {
  e.preventDefault();
  alert("送信しました！（ダミーです）");
};
import SectionTitle from "../topPage/SectionTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <SectionTitle title="CONTACT" align="left" />
      <div className="contact-inner">
        <p className="contact-text">
          お問い合わせは下記のフォームからお願い致します
          <br />
          ※すべての項目は必須項目です。
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="contact-form__email">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>
          <div className="contact-form__message">
            <label htmlFor="message">Message</label>
            <textarea id="message" required />
          </div>
          <button type="submit">送信</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
