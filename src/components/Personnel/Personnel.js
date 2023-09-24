import directorPhoto from "../../images/finboss.png";

function Personnel() {
  return (
    <section className="personnel">
      <button className="personnel__button">&lsaquo;</button>
      <div className="personnel__wrapper">
        <h2 className="personnel__title">Евдокимова Майя</h2>
        <p className="personnel__subtitle">Генеральный директор</p>
        <p className="personnel__text">
          Цель нашей работы обеспечить высочайший сервис нашим клиентам.
          Дать возможность бизнесу сосредоточиться на&nbsp;своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и&nbsp;отчётности нам.
        </p>
      </div>
      <img className="personnel__img" src={directorPhoto} alt="Фото Генерального директора"/>
      <button className="personnel__button personnel__button_active">&rsaquo;</button>
      {/* <div className="personnel__btnwrapper">
        <button className="personnel__button">&lsaquo;</button>
        <button className="personnel__button">&rsaquo;</button>
      </div> */}
    </section>
  )
}

export default Personnel;