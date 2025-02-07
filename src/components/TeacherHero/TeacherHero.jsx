import React, { useState, useEffect, useRef, createContext } from 'react';
import s from './TeacherHero.module.scss';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeacherHero = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Все');
  const languages = [
    { id: 'all', name: 'Все' },
    { id: 'russian', name: 'Русский' },
    { id: 'english', name: 'Английский' },
    { id: 'german', name: 'Немецкий' },
    { id: 'french', name: 'Французский' },
  ];

  const teachers = [
    { id: 1, name: 'Иван Иванов', language: 'Русский' },
    { id: 2, name: 'John Smith', language: 'Английский' },
    { id: 3, name: 'Hans Müller', language: 'Немецкий' },
    { id: 4, name: 'Jean Dupont', language: 'Французский' },
    { id: 5, name: 'Анна Петрова', language: 'Русский' },
    { id: 6, name: 'Emma Johnson', language: 'Английский' },
  ];

  const handleLanguageClick = (e, language) => {
    e.preventDefault();
    setSelectedLanguage(language.name);
  };

  const filteredTeachers =
    selectedLanguage === 'Все'
      ? teachers
      : teachers.filter((teacher) => teacher.language === selectedLanguage);

  return (
    <section className={s.teacher}>
      <div className={s.container__main}>
        <div className={s.teacher__wrapper}>
          <div className={s.teacher__languages}>
            <h2>Учителя</h2>
            {languages.map((language) => (
              <a
                key={language.id}
                href="#"
                className={`${s.language__link} ${
                  selectedLanguage === language.name ? s.active : ''
                }`}
                onClick={(e) => handleLanguageClick(e, language)}
              >
                {language.name}
              </a>
            ))}
          </div>
          <div className={s.teacher__cards}>
            {filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} name={teacher.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherHero;
