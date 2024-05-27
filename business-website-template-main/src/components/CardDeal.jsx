import React from 'react'
import { gallery01} from '../assets'
import Button from './Button'
import styles, { layout } from '../style'
import gallwry02 from '../assets/gallery01.jpeg'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better Frames <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor,
          purus in mattis at sed integer faucibus.
          Aliquet quis aliquet eget mauris tortor.ç 
          Aliquet ultrices ac, ametau.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={gallwry02}
          alt='woman looks into galley'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
