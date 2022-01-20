import Image from "next/image";

export default function Card({result}) {
    const BASE_URL = "https://image.tmbd.org/t/p/original";
    return (
        <div>
            <Image src={BASE_URL + result.backdrop_path} height={100} width={200}/>
        </div>
    )
}
