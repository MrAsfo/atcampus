
import Navbar from './components/navbar/Navbar';
import SocialBox from './components/SocialBox/SocialBox';
import styles from './page.module.css'

function page() {
  const socialBoxInfo1={
    caption: "I love this campus",
    img: ['1', '2', '3', '4']
  }
  const socialBoxInfo2={
    caption: "I love this campus",
    img: ['1', '2', '3']
  }
  const socialBoxInfo3={
    caption: "I love this campus",
    img: ['1', '2']
  }
  const socialBoxInfo4={
    caption: "I love this campus",
    img: ['1']
  }
  const socialBoxInfo5={
    caption: "I love this campus",
    img: []
  }
  return (
    <div>
      <Navbar />
      <section className={styles.timeline}>
        <SocialBox info={socialBoxInfo1}/>
        <SocialBox info={socialBoxInfo2}/>
        <SocialBox info={socialBoxInfo3}/>
        <SocialBox info={socialBoxInfo4}/>
        <SocialBox info={socialBoxInfo5}/>
        
      </section>
    </div>
  )
}

export default page
