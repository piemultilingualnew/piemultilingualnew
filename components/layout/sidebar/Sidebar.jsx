import styles from './sidebar.module.scss'
import { useState } from 'react'

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    }

  return (
        <button className={styles.sideButton} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
         </button>
  )
}

export default Sidebar