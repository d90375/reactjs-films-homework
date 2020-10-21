import React from "react";
import styles from "./Footer.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <span>FILMS</span>
      </div>
      <div className={styles.copyright}>
        <span>Copyright © 2018 d90375</span>
      </div>
    </footer>
  );
};

export default Footer;
