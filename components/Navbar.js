import { urlObjectKeys } from "next/dist/shared/lib/utils"
import requests from "../utils/requests"

export default function Navbar() {
    return (
        <div>
            {Object.entries(requests).map(([key, {title, url}]) => (
                <h1 key={key}>{title}</h1>
            )) }
        </div>
    )
}
