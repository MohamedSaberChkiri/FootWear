export default function TextTitle(props:{
    preTitle : string,
    Title : string,
    description : string
}){
    return(
        <div className="w-full flex w-full h-fit text-center flex-col items-center justify-around pt-20 gap-6">


            <p className="text-[15px]">{props.preTitle}</p>
            <h1 className="text-6xl font-bold">{props.Title}</h1>
            <p className="w-[350px] sm:w-[600px]">{props.description}</p>


        </div>
    )
}