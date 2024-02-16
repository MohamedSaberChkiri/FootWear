export default function TextTitle(props:{
    preTitle : string,
    Title : string,
    description : string
}){
    return(
        <div className="w-full flex w-full h-fit text-center flex-col items-center justify-around pt-20 gap-6">


            <p className="sm:text-[15px] text-[13px]">{props.preTitle}</p>
            <h1 className="sm:text-6xl text-4xl font-bold">{props.Title}</h1>
            <p className="w-[350px] sm:w-[600px]">{props.description}</p>


        </div>
    )
}