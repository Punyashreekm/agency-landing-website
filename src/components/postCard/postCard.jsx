import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const postCord = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/28273897/pexels-photo-28273897/free-photo-of-red-countryside-house-window.jpeg"
                        alt=""
                        fill

                        className={styles.img}
                    />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default postCord