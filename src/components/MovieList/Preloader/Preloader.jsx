import React from "react";

import styles from "./preloader.scss";

const Preloader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.preloader}>
        <div className={styles.picture}>
          <div className={`${styles.child} ${styles.bounce1}`} />
          <div className={`${styles.child} ${styles.bounce2}`} />
          <div className={styles.child} />
        </div>
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  );
};

export default Preloader;
