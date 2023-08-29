import data from "../../data/db.json"
import style from "./Card.module.css"
const Balls = () => {
    return (
        <div className={style.balls}>
            {
                data.Balles.map((el) => (
                    <div style={{ backgroundColor: el }} key={el} />
                ))
            }
        </div>
    )
}

export default Balls