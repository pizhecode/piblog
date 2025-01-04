import style from './PizheButton.module.scss'
const TitleDemo = (props) => {
    return (
        <>
            <div className={style.PizheButton}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {props.name}
            </div>
        </>
    )
}
export default TitleDemo;