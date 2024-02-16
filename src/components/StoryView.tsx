import PlayCircleIcon from '@mui/icons-material/PlayCircle';



export default function StoryView(){
    return (
        <div className="relative w-full min-h-[40vh] h-fit p-4 flex flex-wrap items-center justify-center sm:gap-12 mx-auto mt-[10vh] storydiv">

            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            <div className="flex flex-col text-center gap-4 sm:text-right text-white z-20">
                <p className="font-bold ">BEHIND THE DESIGN</p>
                <p className="font-bold sm:text-5xl text-xl ">DEAR RUNNING, THIS SHOES IS <br />DEDICATED TO YOU</p>
            </div>

            <div className="hover:border-b-2 cursor-pointer text-white z-20">
                <PlayCircleIcon className='text-white cursor-pointer text-6xl'/> WATCH OUR STORY
            </div>
        </div>
    )
}
