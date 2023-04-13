import style from './Loading.module.css';
import { BarLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className={style.spinner}>
            <BarLoader color='#968452' />
        </div>
    )
}

export default Loading