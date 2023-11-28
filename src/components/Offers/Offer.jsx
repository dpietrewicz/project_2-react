import React from "react";
import styles from "./Offers.module.css";

const Offer = ({ offer }) => {
    return (
        <>
            <div className={styles.box} key={Math.random()}>
                <p>{offer.name}</p>
                {offer.isNew && (
                    <>
                        <p className={styles.newOffer}>(nowość)</p>
                        <div className={styles.dot}></div>
                    </>
                )}
            </div>
        </>
    );
};

export default Offer;
