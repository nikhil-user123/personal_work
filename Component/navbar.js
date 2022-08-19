import Link from"next/link";
import styles from '../styles/index.module.css';
 const Navbar=()=>{ 
        return( 
                <> 
                <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}> 
                    <Link href="/" className={styles.text} >Astract</Link>
                </li>
                <li className={styles.li}> 
                    <p>|</p>
                </li>
                <li className={styles.li}> 
                    <Link href="/" className={styles.text} >HelpCenter</Link>
                </li>    
                </ul>
                <button  className={styles.button_sign}>Sign in</button>
           </nav>
    </> 
 ); 
 }; 
  
 export default Navbar;