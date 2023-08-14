import styles from "./diplo.module.css";

const DiploAi = ({title, paragraph, checkLisItems, onButton1Click, onButton2Click, button1Text, button2Text}) => {
  return (
    <div className={styles["diplo__main"]}>
      <h2 className={styles["diplo__title"]}>{title}</h2>
      <p className={styles["diplo__paragraph"]}>{paragraph}</p>
      
      <div className={styles["diplo__checklist"]}>
        {checkLisItems.map((item, index) => (
          <div key={item} className={styles["diplo__checkitem"]}>
            <span className={styles["diplo__checkitem-elipse"]}>A</span>
            <label htmlFor={`checklistItem-${index}`} className={styles["diplo__checkitem-label"]}>{item}</label>
            <span>100+</span>
            <input type="checkbox" id={`checklistItem-${index}`} className={styles["diplo__checkitem-input"]} name="checklistItem"/>
            {index !== checkLisItems.length - 1 && <hr className={styles["diplo__hr"]}/>}
          </div>
        ))}
      </div>

      <div className={styles["diplo__btn-actions"]}>
          <button onClick={onButton1Click} className={styles["btn-action"]}>{button1Text}</button>
          <button onClick={onButton2Click} className={styles["btn-action"]}>{button2Text}</button>
      </div>
    </div>
  )
}

export default DiploAi;