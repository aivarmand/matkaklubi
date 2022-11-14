import Image from "next/image"
import { useTreks } from "../api"
import Navigatsioon from "../components/Navigatsioon"
import styles from "../styles/Treks.module.css"

const Matk = ({ matk }) => {
    return (
        <div className={styles.matk}>
            <div className={styles.pildiKonteiner}>
                <Image
                    alt={`${matk.title} pilt`}
                    src={`https://res.cloudinary.com/demo/image/fetch/${matk.imageUrl}`}
                    quality={100}
                    layout='fill'
                    objectFit='contain'
                    />
                </div>
            <span>{matk.title}</span><br />
            <a 
                href={`https://www.google.com/maps/@${matk.locationLatitude},${matk.locationLongitude},14z`}
                target="_blank"
            >
                {matk.locationDsecription}
            </a><br />
            <span>{matk.description}</span><br />
            <span>Matk algab {matk.startsAt}</span><br />
            <span>Matk lõppeb {matk.endsAt}</span><br />
            <span>Hind: {matk.price} €</span><br />

        </div>
    )
}

const Matkad = () => {
    const { data , error } = useTreks()
    if (error) return <div>Viga matkade laadimisel!</div>
    if (!data) return <div>Laen sisu...</div>
    return (
        <div className={styles.matkad}>
            {data.map(matk => <Matk key={matk.id} matk={matk} />)}
        </div>
    )
}

export default () => {

    return (
        <div className={styles.pais}>
            <Navigatsioon />
            <Matkad />
        </div>
    )
}