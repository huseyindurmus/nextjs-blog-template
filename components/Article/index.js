
import cn from 'classnames'

import styles from './article.module.css'

function Article({head,text, large=false}){
    return(
        <article className={styles.article}>
            <h4 className={cn(styles.head, large && styles.headLarge)}>{head}</h4>
            <p className={cn(styles.text, !large && styles.textMini)}>{text}</p>
        </article>
    )
}

export default Article