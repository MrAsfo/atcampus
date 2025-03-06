import Image from 'next/image'
import styles from './SocialBox.module.css'
import Avatar from '@mui/material/Avatar';

function SocialBox(props) {
    const { caption, img } = props.info;
    return (
        <div className={styles.container}>
            <section className={styles.profile}>
                <div>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
                <div>
                    <h3>Al Nahian Ark</h3>
                    <p>Fresher • 1 minute ago</p>
                </div>
            </section>
            <section className={styles.caption}>
                {caption}
            </section>
            <section className={styles.img}>

                <div className={
                    img.length === 4 ? (styles.imgContainer4) :
                        img.length === 2 ? (styles.imgContainer4) :
                            img.length === 3 ? (styles.imgContainer3) :
                                img.length === 1 ? (styles.imgContainer1)
                                    : styles.imgContainer0}>
                    {
                        img.map((p, i) => <div key={i}>
                            <Image
                                src="/photo.jpg" // External image URL
                                alt="Description of the image"  // Alt text for accessibility
                                width={200}
                                height={100}
                                // Set the height (in pixels)
                                quality={75} // Optional: Set image quality (between 1 and 100)
                             layout='responsive'// Optional: Choose layout (intrinsic, responsive, etc.)
                            />
                        </div>)
                    }

                </div>

            </section>
            <section className={styles.social}>
                <li>Like</li>
                <li>Comment</li>
                <li>Share</li>
            </section>
        </div>
    )
}

export default SocialBox
