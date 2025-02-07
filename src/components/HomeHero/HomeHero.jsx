import s from './HomeHero.module.scss'
import Slider from '../Slider/Slider.jsx';
import React, { useState, useEffect, useRef, createContext } from 'react';
import Clouds from "../Clouds/Clouds.jsx";
import AnimatedSpan from '../AnimatedSpan/AnimatedSpan.jsx'
import { motion } from 'framer-motion';

const HomeHero = () => {
  const tooltipRef = useRef(null);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const triggerHeight = 200;
        if (window.scrollY > triggerHeight) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        const navHeight = document.querySelector(".nav_nav")?.offsetHeight || 0;
    
        let currentSection = "";
    
        sections.forEach((section) => {
          const top = section.offsetTop - navHeight - 180;
          const bottom = top + section.offsetHeight;
          const scrollY = window.scrollY;
    
          if (scrollY >= top && scrollY <= bottom) {
            currentSection = section.id;
          }
        });

        setActiveSection(currentSection);
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleClick = (e, id) => {
      e.preventDefault();
      const section = document.getElementById(id);
      const navHeight = document.querySelector(".nav_nav")?.offsetHeight || 0;
    
      if (section) {
        window.scrollTo({
          top: section.offsetTop - navHeight - 180,
          behavior: "smooth",
        });
      }
    };

    useEffect(() => {
      const handleMouseMove = (event) => {
        const tooltip = tooltipRef.current;
        if (!tooltip) return;
  
        const tooltipRect = tooltip.getBoundingClientRect();
        const positionX = ((event.clientX - tooltipRect.left) / tooltipRect.width) * 100;
        const positionY = ((event.clientY - tooltipRect.top) / tooltipRect.height) * 100;
  
        tooltip.style.setProperty("--position-x", `${positionX}%`);
        tooltip.style.setProperty("--position-y", `${positionY}%`);
      };
  
      const tooltip = tooltipRef.current;
      if (tooltip) {
        tooltip.addEventListener("mousemove", handleMouseMove);
      }
  
      return () => {
        if (tooltip) {
          tooltip.removeEventListener("mousemove", handleMouseMove);
        }
      };
    }, []);
  return (
    <>
        {showNav && (

            <nav className={s.nav_nav}>
                <ul>
                    {["section-О нас", "section-Наши преимущество", "section-Чем мы отличаемся", "section-Почему выбирают нас", "section-Новости"].map(
                        (sectionId) => (
                        <li key={sectionId}>
                            <a
                                href={`#${sectionId}`}
                                className={activeSection === sectionId ? "active_nav" : ""}
                                onClick={(e) => handleClick(e, sectionId)}
                              >
                            {`${sectionId.split("-")[1]}`}
                            </a>
                        </li>
                        )
                    )}
                </ul>
        </nav>
      )}

      <section className={s.welcome_section}>
        <Clouds />
      </section>

        <section className={s.active} id="section-О нас">
                <div className={s.home_wrapper}>
                    <h2 className={s.home_title}>О нас</h2>
                    <p className={s.home_text}>Мы создали эту платформу для тех, кто стремится к знаниям,
                        уверенности и новым достижениям. Здесь вы найдёте всё, что нужно для учебы, общения 
                        и поддержки на пути к поступлению в колледжи, университеты и другие учебные заведения. 
                        Наш проект — это место, где мечты превращаются в планы, а планы — в реальность!
                    </p>
                </div>
                <img className={s.home_img} src="/hi.svg" alt="" />
        </section>
        <section className={s.services} id="section-Наши преимущество">
            <Slider />
        </section>
        <section className={s.why_us} id="section-Чем мы отличаемся">
            <h1 className={s.why_us_title}>Чем мы отличаемся?</h1>
            <div className={s.content}>
                <div className={s.item}>
                    <h2 className={s.item_title}>Общение и взаимопомощь</h2>
                    <p className={s.item_text}>Мы не просто платформа для информации — мы место,
                         где каждый может делиться своим опытом и вдохновляться историей других.</p>
                </div>
                <div className={s.item}>
                    <h2 className={s.item_title}>Гибкость в обучении</h2>
                    <p className={s.item_text}>Вы сами выбираете, как учиться: участвовать в онлайн-занятиях,
                         проходить тесты или смотреть записи уроков.</p>
                </div>
                <div className={s.item}>
                    <h2 className={s.item_title}>Развитие навыков</h2>
                    <p className={s.item_text}>Помимо поступления, мы помогаем развивать навыки, которые пригодятся в учёбе и жизни: 
                        умение работать в команде, 
                        выступать публично, решать проблемы и управлять своим временем.</p>
                </div>
            </div>
            <div className={s.image}>
                <img src="/Enot.png" alt="" />
            </div>
        </section>
        <section className={s.our_users}>
            <h1 className={s.our_users_title} id="section-Почему выбирают нас">Почему выбирают нас?</h1>
            <div className={s.content_our}>
                <div className={s.item}>
                    <img className={s.item_img} src="/chart.png" alt="График" />
                    <h2 className={s.item_text_desc}>Доступность 24/7</h2>
                    <p className={s.item_text_decor}>Мы всегда на связи! Вы можете задавать вопросы
                    , получать поддержку и находить ответы тогда, когда это вам удобно.</p>
                </div>
                <div className={s.item}>
                    <img className={s.item_img} src="/laptop.png" alt="Ноутбук" />
                    <h2 className={s.item_text_desc}>Лучшие наставники</h2>
                    <p className={s.item_text_decor}>Опытные специалисты помогут разобраться в сложных темах,
                    составить учебный план и даже подготовить вас к важным экзаменам.</p>
                </div>
                <div className={s.item}>
                    <img className={s.item_img} src="/house.png" alt="" />
                    <h2 className={s.item_text_desc}>Безопасное и доброжелательное пространство</h2>
                    <p className={s.item_text_decor}>Мы следим за тем, чтобы общение на платформе было комфортным.
                    Здесь вы можете быть собой, делиться идеями и мнениями без страха быть осуждённым.</p>
                </div>
            </div>
        </section>
        <section className={s.news} id="section-Новости">
            <div className={s.card}>
                <div className={s.image_box}>
                    <img src="/Earth.jpg" alt="" />
                  </div>
                  <div className={s.content_news}>
                    <h2 className={s.news_card}>Последние новости</h2>
                    <br />
                    <p className={s.news_card_text}>Мы создали проекта SDCT расшифруется как Student chat. 
                      Вскоре мы еще создадим сайт где вы можете узнавать,как же можно поступить в институты, колледжи, вузы и лицеи. И это все абсолютно бесплатно!
                      Так же если вы уже поступили и хотите помочь другим с этим,то спешим вас обрадовать вы можете сделать это именно у нас, вы можете вскоре создавать свои группы, еще можете так же проводить свои уроки.
                      Например: английский, немецкий или математику. 
                      Но если вы не сможете найти ту информацию которая вам нужна, то не спешите уходить от нас.
                      У нас для этого есть учителя которые могут помочь вам с поступлением или с подготовкой предстоящими экзаменами.
                      Помимо все этого, вы на сайте сможете найти себе много новых друзей с других стран и городов.
                      Узнавать последние новости про свои учреждение и наших обновлениях в дальнейшем.
                      Так что подписывайтесь на нас и следите за последними новостями!</p>
                    </div>
                  </div>
        </section>


    </>
  )
}
export default HomeHero;
