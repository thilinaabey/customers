import React from 'react'

import styles from '../style'


const Works = () => {
  return (
    <section id='Works' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What We Had <br className='sm:block hidden'/>Done For Our Customers</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Skip the trip to the frame shop or post office. We make it simple to frame from home, 
          or to send items in to be expertly framed in our studio.
          </p>  
        </div>
      </div>
      
    </section>
  )
}

export default Works
