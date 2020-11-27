import {Arrow} from "../icons";
import styles from './button.module.css'
function Button(){
    return(
        <button className={styles.Button}>
            <p>Read Full</p>
            <Arrow/>
        </button>
    )
}

export default Button