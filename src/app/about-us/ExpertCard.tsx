// components/ExpertCard.tsx
import Image from "next/image";

const ExpertCard = ({ image }: { image: string }) => {
    return (
        <div className="bg-white rounded-lg border-4 border-[#0EC9AC] p-1">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto">
                <Image
                    src={image}
                    alt="Expert"
                    fill
                    className="rounded-md object-cover"
                />
            </div>
        </div>
    );
};

export default ExpertCard;
