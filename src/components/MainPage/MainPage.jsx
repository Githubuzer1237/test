import { Link, useNavigate } from 'react-router-dom';
import s from './MainPage.module.scss';
import React, { useState, useEffect, useRef, createContext } from 'react';


const MainPage = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); 
    
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        const username = localStorage.getItem('loggedInUsername');
        if (!username) {
            navigate('/login');
        } else {
            const user = JSON.parse(localStorage.getItem(username));
            setUserData(user);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUsername');
        navigate('/login');
    };

    return (
        <>
            {userData ? (
                <div className={s.sects}>
                    <div className={s.section}>
                        <h2>Личные чаты</h2>
                        <h3 className={s.groups}>Чат</h3>
                        <h3 className={s.groups}>Чат</h3>
                        <h3 className={s.groups}>Чат</h3>
                        <h3 className={s.groups}>Чат</h3>
                    </div>
                    <div className={s.section_2}>
                        <div className={s.main}>
                            <div className={s.profile}>
                                <img className={userData.avatar ? s.pfp : s.defoltpfp} 
                                    src={userData.avatar || 'profileimg.png'} alt="profile" />
                                <h2 className={s.username}><b>{userData.firstName} {userData.lastName}</b></h2>
                            </div>

                            <div className={s.info}>
                                <p><b>Имя: </b>{userData.firstName}</p>
                                <p><b>Фамилия:</b>{userData.lastName}</p>
                                <p><b>Возраст:</b>{userData.age ? `${userData.age} лет` : 'Не указан'}</p>
                                <p><b>Хобби:</b> {userData.hobby}</p>
                                <p><b>Образование/Работа:</b> {userData.education}</p>
                            </div>

                            <div className={s.inst}>
                                <button className={s.btn}  onClick={handleOpenModal}>🚪 Выйти</button>

                                {isModalOpen && (
                                    <div className={s.modalOverlay}>
                                        <div className={s.modal}>
                                            <h2>Предупреждение</h2>
                                            <p>Вы уверены, что хотите выйти?</p>
                                            <div className={s.modalActions}>
                                                <button className={s.confirmButton} onClick={handleLogout}>
                                                    Да
                                                </button>
                                                <button className={s.cancelButton} onClick={handleCloseModal}>
                                                    Нет
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button className={s.btn} onClick={() => navigate('/edit')}>✏️ Редактировать</button>
                                <button className={s.btn} onClick={() => navigate('/Games')}>🎮 Игры</button>
                            </div>
                        </div>
                    </div>
                    <div className={s.section}>
                        <h2>Группы</h2>
                        <h3 className={s.groups}>Группа</h3>
                        <h3 className={s.groups}>Группа</h3>
                        <h3 className={s.groups}>Группа</h3>
                        <h3 className={s.groups}>Группа</h3>
                    </div>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </>
    );
};

export default MainPage;
