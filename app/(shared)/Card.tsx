import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean; // Verify if the text is long
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" href="/">
        <div className={`relative w-auto mb-3  ${imageHeight}`}>image</div>
      </Link>

      <div className="basis-full">
        <Link className="basis-full hover:opacity-70" href="/">
          <h4 className={`font-bold hover:text-accent-green
            ${isSmallCard? "text-base" : "text-lg"}
            ${isSmallCard? "line-clamp-2" : ""}
          `}>Title</h4>
        </Link>
      </div>

        <div className={`${isSmallCard ? "my-2" : "flex my-3" } gap-3`}>
            {/* if the card is not small the Author and Date will be on the same line */}

            <h5 className="font-semibold text-xs">Author</h5>
            <h6 className="text-wh-300 text-xs">Date</h6>
        </div>
        <p className={`text-wh-100 ${isLongForm? "line-clamp-5" : "line-clamp-3" }`}>
            snippet
        </p>
    </div>
  );
};

export default Card;
