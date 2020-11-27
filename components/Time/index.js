import styles from './time.module.css'
function Time({children}){
    return(
        <span className={styles.time}>{children}</span>
    )
}
export default Time