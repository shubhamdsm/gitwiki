import { motion } from "framer-motion"

const Stats = ({projects,followers,following}) => {
    return(
        <motion.main initial={{y:100}} animate={{y:0}} transition={{type:'spring', damping:7, stiffness:200}} className='flex flex-row justify-around mt-10 mb-5  '>

            <div className='bg-green-300 shadow-2xl rounded p-20'>
                <p className='text-white text-2xl'>Repositories</p>
                <p className='text-white text-3xl text-center'>{projects}</p>
            </div>
            <div className='max-w-md bg-blue-300 shadow-2xl rounded p-20'>
                <p className='text-white  text-2xl'>Followers</p>
                <p className='text-white text-3xl text-center'>{followers}</p>
            </div>
            <div className=' max-w-md bg-indigo-300 shadow-2xl rounded p-20'>
                <p className='text-white  text-2xl'>Following</p>
                <p className='text-white text-3xl text-center'>{following}</p>
            </div>
          
           
        
        </motion.main>
    )
}
export default Stats