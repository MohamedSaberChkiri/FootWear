import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';



export default function StoryView(){
    return (
        <div className="relative w-full min-h-[40vh] h-fit p-4 flex flex-wrap items-center justify-center sm:gap-12 mx-auto mt-[10vh] storydiv">

            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            <div className="flex flex-col text-center gap-4 sm:text-right text-white z-20">
                <p className="font-bold ">BEHIND THE DESIGN</p>
                <p className="font-bold sm:text-5xl text-xl ">DEAR RUNNING, THIS SHOES IS <br />DEDICATED TO YOU</p>
            </div>

            <div className="hover:border-b-2 cursor-pointer text-white z-20">
                
                <Dialog >
                    <DialogTrigger>
                    <PlayCircleIcon className='text-white cursor-pointer text-6xl'/> 
                         WATCH OUR STORY
                    </DialogTrigger>
                    <DialogContent className='w-fit h-fit sm:p-4 flex items-center justify-center sm:w-[560px] sm:h-[315px] w-[90%] p-0 h-[250px]'>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/sbv9AwKVKEo?si=ctAMK0i6H4XxZuJc"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </DialogContent>
                    </Dialog>

              
            </div>
        </div>
    )
}
