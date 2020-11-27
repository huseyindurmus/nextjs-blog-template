
import styles from './header.module.css'
import {Logo} from "../icons";
import SocialButton from "./social-button";
function Header(){
return <div className={styles.Header}>
   <div className={styles.Logo}><Logo/></div>
   <SocialButton/>
</div>
}

export default Header
