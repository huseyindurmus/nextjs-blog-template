import styles from './tag.module.css'
function Tags({children}){
    return(
        <span className={styles.tags}>{children}</span>
    )
}

export default Tags