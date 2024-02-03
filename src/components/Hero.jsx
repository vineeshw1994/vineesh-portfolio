import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTwitter,FaLinkedin } from 'react-icons/fa';

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I m <span className='text-[#915EFF]'>Vineesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am full stack web applications <br className='sm:block hidden' />
            Developer...
          </p>
          <div className="mt-6 text-3xl">
          <a className="text-blue-600">vineeshw1994@gmail.com</a>
          <p>7598570568</p>
          </div>
        </div>
       
      </div>

      <div className="fixed right-4 bottom-16 flex flex-col gap-4 z-50">
        <a href="https://github.com/vineeshw1994" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub size={28} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaInstagram size={28} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaTwitter size={28} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
