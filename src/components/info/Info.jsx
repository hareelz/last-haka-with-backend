import React from "react";
import "../info/Info.css";
import { Carousel } from "react-bootstrap";

const Info = () => {
  return (
    <div>
      <div className="main_info_block">
        <div className="info_block__content">
          <h1 className="info_block_title">
            Нанимайте онлайн лучших фрилансеров для любой работы
          </h1>
          <ul className="info_block__list">
            <li className="info_block__list-item">
              Один из крупнейших в мире рынок фриланса
            </li>
            <li className="info_block__list-item">
              Любая работа, которую вы только можете себе представить
            </li>
            <li className="info_blockk__list-item">
              Экономьте до 90% и получайте бесплатно ценовые предложения
            </li>
            <li className="info_block__list-item">
              Платите только тогда, когда вы на 100% довольны результатом
            </li>
          </ul>
          <div className="info_block__block_btn">
            <button style={{}} className="info_block__left-btn">
              Нанять фрилансера
            </button>
            <button className="info_block__right-btn">
              Зарабатывайте фрилансом
            </button>
          </div>
        </div>
        <span className="line1"></span>
        <div className="info_block__block-desc">
          <div className="block-desc__top">
            <h2 className="block-desc_top__title">Нужно что-то сделать?</h2>
            <ul className="block-desc_top__desc-list">
              <li className="block-desc_top__desc-list-item">
                <h3>Опубликуйте работу</h3>
                Опубликовать работу – это бесплатно и несложно. Просто введите
                название, описание и бюджет, и конкурентные заявки начнут
                поступать через считанные минуты.
              </li>
              <li className="block-desc_top__desc-list-item">
                <h3>Выберите фрилансеров</h3>
                Не бывает слишком большой или слишком мелкой работы. Для нас нет
                слишком сложной работы. Мы справимся с любой!
              </li>
              <li className="block-desc_top__desc-list-item">
                <h3>Платите безопасно</h3>
                Оплачивайте работу только тогда, когда она выполнена и вы на
                100% удовлетворены качеством, используя нашу систему
                промежуточных платежей.
              </li>
            </ul>
          </div>
          <span className="line2"></span>

          <div className="block-desc__bottom">
            <h2 className="block-desc_bottom__title">Каковы преимущества?</h2>
            <ul className="block-desc_bottom__desc-list">
              <li className="block-desc_bottom__desc-list-item">
                <h3>Просматривайте портфолио</h3>
                Находите профессионалов, которым вы можете доверять,
                просматривая образцы их предыдущей работы и отзывы в их профиле.
              </li>
              <li className="block-desc_bottom__desc-list-item">
                <h3>Быстрые заявки</h3>
                Быстро получайте ценовые предложения от наших талантливых
                фрилансеров без каких-либо обязательств с вашей стороны. 80%
                проектов принимаются в течение 60 секунд.
              </li>
              <li className="block-desc_bottom__desc-list-item">
                <h3>Отслеживайте прогресс</h3>
                Где бы вы ни находились, оставайтесь в курсе событий. Всегда
                знайте, чем занимаются ваши фрилансеры.
              </li>
            </ul>
          </div>
          <span className="line3"></span>
        </div>

        <div className="block_pictures">
          <h3 className="block_pictures__title">
            Реализуйте свои идеи вместе с нами
          </h3>
          <div className="block_picture_1">
            <img
              className="picture_laptop"
              src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/seo-expert-v2.jpg"
              alt=""
            />
            <div className="pictures_group_1">
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/shopify-website-v2.jpg"
                alt=""
              />
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/wordpress-website-v2.jpg"
                alt=""
              />
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/interior-3d-model-v2.jpg"
                alt=""
              />
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/packaging-design-v2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="block_picture_2">
            <div className="pictures_group_2">
              <img
                className="picture_item_2"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/mobile-app-v2.jpg"
                alt=""
              />
              <img
                className="picture_item_2"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/product-3d-modelling-v2.jpg"
                alt=""
              />
              <img
                className="picture_item_2"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/character-illustration-v2.jpg"
                alt=""
              />
              <img
                className="picture_item_2"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/album-cover-v2.jpg"
                alt=""
              />
            </div>
            <img
              className="picture_book"
              src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/book-cover-design-v2.jpg"
              alt=""
            />
          </div>
          <div className="block_picture_3">
            <img
              className="picture_laptop"
              src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/ai-generated-art-v2.jpg"
              alt=""
            />
            <div className="pictures_group_1">
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/video-production-v2.jpg"
                alt=""
              />
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/ai-generated-image-v3.png"
                alt=""
              />
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/ai-generated-illustration-v3.png"
                alt=""
              />
              <img
                className="picture_item_1"
                src="https://www.f-cdn.com/assets/main/en/assets/home/crowd-favorites/v2/architectural-design-v2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <video
          className="main_info_block_video"
          autoPlay
          playsInline
          muted
          loop
          src="https://www.f-cdn.com/assets/main/en/assets/home/video/house-v3.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Info;
