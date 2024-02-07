import ReviewCard from "./ReviewCard";

const reviewsData = [
    {
        id: 1,
        image: "image1.jpg",
        name: "Mohamed",
        country: "Germany",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec semper magna. Phasellus lobortis est vel velit scelerisque. Proin at magna a urna tristique luctus.",
        rating: 5
    },
    {
        id: 2,
        image: "image2.jpg",
        name: "Anna",
        country: "France",
        description: "Suspendisse potenti. Integer consequat elit id enim rhoncus laoreet. Ut convallis hendrerit justo, a consequat ex congue nec. Sed vel justo vehicula, tempor eros vel, sagittis eros. ",
        rating: 4
    },
    {
        id: 3,
        image: "image3.jpg",
        name: "John",
        country: "USA",
        description: "Fusce id justo vel felis consectetur dignissim. Integer ullamcorper accumsan velit, vitae gravida libero. Vivamus faucibus justo et ligula mollis, sed varius turpis consequat.",
        rating: 4
    },
    {
        id: 4,
        image: "image4.jpg",
        name: "Emma",
        country: "Canada",
        description: "Pellentesque dictum tortor nec leo eleifend, ut consequat enim faucibus. Cras sollicitudin sem vitae quam hendrerit, nec molestie velit ullamcorper.",
        rating: 5
    }
];

const Reviews = () => {
    return (
        <div className="flex flex-col flex-wrap items-center justify-around mx-auto w-full bg-zinc-200 gap-6 py-[10vh] ">
           
            <div className="flex gap-6 flex-wrap items-center justify-around"> {reviewsData.map(review => (
                <ReviewCard
                    key={review.id}
                    image=""
                    name={review.name}
                    country={review.country}
                    description={review.description}
                    rating={review.rating}
                />
            ))}</div>
           
        </div>
    );
};

export default Reviews;
