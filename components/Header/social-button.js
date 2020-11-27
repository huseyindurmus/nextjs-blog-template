
import Link from 'next/link'

import * as Icon from '../icons'
import styles from './header.module.css'

function SocialButton(){
    return(
        <div className={styles.Social}>
            <ul>
                <li><Link href={"https://twitter.com/huDurmus"}><a target={"_blank"}><Icon.Twitter/></a></Link></li>
                <li>·</li>
                <li><Link href={"https://dribbble.com/hdurmus/"}><a target={"_blank"}><Icon.Dribbble/></a></Link></li>
                <li>·</li>
                <li><Link href={"https://www.figma.com/@hdurmus"}><a target={"_blank"}><Icon.Figma/></a></Link></li>
                <li>·</li>
                <li><Link href={"https://github.com/kirpi"}><a target={"_blank"}><Icon.Github/></a></Link></li>
            </ul>
        </div>
    )
}

export default SocialButton