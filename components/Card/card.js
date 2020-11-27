import React from 'react'
import cn from 'classnames'

import styles from './card.module.css'

import Tags from "../Tag";
import Time from "../Time";
import Button from "../Button";
import Photo from "../Photo";
import Article from "../Article";

function Card({tags, time, read, head, article, photoSrc, photoAlt, large=false}){
    return(
        <div className={cn(styles.card, large && styles.cardLarge)}>
            <div><Photo src={photoSrc} alt={photoAlt} large={large}/></div>
            <div className={styles.article}>
                <div className={styles.articleDetail}>
                    <Tags>{tags}</Tags>
                    <div>·</div>
                    <Time>{time}</Time>
                </div>
                <div>
                    <Article text={article} head={head} large={large}/>
                </div>
                <div className={styles.footer}>
                    <Time>{read}</Time>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Card