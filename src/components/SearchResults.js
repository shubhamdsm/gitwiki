import { motion } from "framer-motion"

const SearchResults = ({avatar,name,location,site,gitLink,dateJoin,projects,userName}) => {
    return(
    <motion.main initial={{y:100}} animate={{y:0}} transition={{type:'spring', damping:7, stiffness:200}} className='flex mt-8 justify-center sm:flex-column  '>
            <div className='flex sm:flex-column'>
                <img src={avatar} alt='avatar' height='100px' width='200px'/>
            </div>

        <div className='bg-gray-700 rounded pl-5 pt-5 pr-5 shadow-2xl' >

            <h1 className='text-white text-3xl'>{name}</h1>

            <p className='text-white pt-2 pb-2 text-2xl'>{location}</p>

            <a target="_ blank" className='text-blue-600 text-2xl' href={site}>{site} </a>
            <br></br>
            <a href={gitLink} target="_ blank"><button type='button' className='mt-3 bg-gradient-to-r from-green-400 to-blue-500 font-bold py-2 px-4 rounded text-white hover:from-pink-500 hover:to-yellow-500 '>@{userName}</button></a>
            <p className='text-white pt-2'>Joined github on {dateJoin}</p>
            <p className='text-white pt-2 pb-2'>Since have created {projects} projects</p>
        </div>


    </motion.main>
    )
}
export default SearchResults
