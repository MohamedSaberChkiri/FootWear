import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export default function ItemCard(props: {
  title?: string;
  subTitle?: string;
  price: number;
  image?: string;
  productId?: string;
  style?: string;
  imageStyle?: string;
}) {
  const ProductImage = props.image;
  const ProductNameOnURL = props.title?.split(" ").join("-").toLowerCase();
  return (
    <Link href={`/collections/${ProductNameOnURL}`}>
      <div
        className={cn(
          "w-[295px] h-[475px] shadow-xl flex flex-col items-start justify-around p-[35px] cursor-pointer mt-[1rem]",
          props.style
        )}
      >
        <img
          className={cn("w-[220px] h-[250px]", props.imageStyle)}
          alt="Sneaker"
          src={ProductImage}
        />
        <div>
          <div className="font-bold">{props.title}</div>
          <div>{props.subTitle}</div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="font-bold">
            ${props.price}{" "}
            <span className="text-gray-400 line-through text-[13px]">
              {" "}
              ${props.price * 2}{" "}
            </span>
          </div>
          <div>
            <FaArrowCircleRight className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </Link>
  );
}
