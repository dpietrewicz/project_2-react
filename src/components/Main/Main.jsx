import styles from "./Main.module.css";

const Main = () => {
    return (
        <main className={styles.container}>
            <h2 className={styles.mainTitle}>Nasi specjaliści</h2>
            <div className={styles.mainPerson}>
                <div className={styles.mainPersonPhotoFirst}></div>
                <div className={styles.mainPersonInfoFirst}>
                    <h3>Imię Nazwisko [dział]</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolore voluptates repellat hic modi saepe tempore
                        nulla voluptatum nesciunt? Dolorem quos ipsam dolorum
                        deleniti nostrum nisi cupiditate vero minima corrupti!
                        Nihil!
                    </p>
                </div>
            </div>
            <div className={styles.mainPerson}>
                <div className={styles.mainPersonInfoSecond}>
                    <h3>Imię Nazwisko [dział]</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis atque sit natus repellendus aut iusto placeat,
                        veritatis asperiores voluptatem nemo. Dolorem enim
                        perferendis minima, distinctio quasi at deserunt quae
                        natus. lor
                    </p>
                </div>
                <div className={styles.mainPersonPhotoSecond}></div>
            </div>
        </main>
    );
};

export default Main;
