import styles from "./Specialists.module.css";

const Specialists = () => {
    return (
        <section className={styles.specialists} id="specialists">
            <div className={styles.specialistsContainer}>
                <h2 className={styles.specialistsSubtitle}>Nasi specjaliści</h2>
                <div className={styles.specialist}>
                    <div className={styles.specialistFirst}>
                        <div
                            className={styles.specialistImage}
                            style={{
                                backgroundImage: "url(/assets/Specialist.jpeg)",
                            }}
                        ></div>
                        <div className={styles.specialistInfoWrapper}>
                            <p className={styles.specialistName}>
                                John Black [IT]
                            </p>
                            <p className={styles.specialistDescription}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Dolore voluptates repellat hic
                                modi saepe tempore nulla voluptatum nesciunt?
                                Dolorem quos ipsam dolorum deleniti nostrum nisi
                                cupiditate vero minima corrupti! Nihil!
                            </p>
                        </div>
                    </div>

                    <div className={styles.specialistSecond}>
                        <div
                            className={styles.specialistImage}
                            style={{
                                backgroundImage: "url(/assets/Specialist2.jpg)",
                            }}
                        ></div>
                        <div className={styles.specialistInfoWrapper}>
                            <p className={styles.specialistName}>
                                Sara Smith [Marketing]
                            </p>
                            <p className={styles.specialistDescription}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officiis atque sit natus
                                repellendus aut iusto placeat, veritatis
                                asperiores voluptatem nemo. Dolorem enim
                                perferendis minima, distinctio quasi at deserunt
                                quae natus. lor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specialists;
