import style from './TitleDemo.module.scss'
const TitleDemo = (props) => {
    return (
        <div className={`${style.Title} m0auto tac`}>
            <div className={style.TitleDemo}>
                {props.title}
            </div>
        </div>
    )
}
export default TitleDemo;