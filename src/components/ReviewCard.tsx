import Rating from "@mui/material/Rating"


export default function ReviewCard(props:{
    image : string,
    name : string,
    country :string, 
    description : string,
    rating: number

}){
    return (
        <div className="flex flex-col items-center justify-center gap-2 w-[300px] h-[450px] px-[10px] shadow-xl">
            <img src={props.image} alt="profile" className="w-[90px] h-[90px] rounded-[50%] object-cover object-top" />
            <div className="font-bold text-xl">{props.name}</div>
            <div>{props.country}</div>
            <div><Rating name="read-only" value={props.rating} readOnly /></div>
            <div className="text-center">{props.description}</div>
        </div>
    )
}