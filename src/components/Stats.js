const Stats = ({projects,followers,following}) => {
    return(
        <div className='flex flex-row justify-around mt-10 mb-5  '>

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
          
            
            
        </div>
    )
}
export default Stats