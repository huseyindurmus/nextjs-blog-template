import React from "react";
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({
           src
          ,alt
          ,large=false}){
    return(
        <>
            <img src={src} alt={alt} className={cn(styles.photo, large && styles.photoLarge)}/>
        </>
    )
}

export default Photo