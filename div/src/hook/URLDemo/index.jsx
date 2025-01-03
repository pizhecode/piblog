import style from './URLDemo.module.scss'
const TitleDemo = (props) => {
    return (
        <>
           <a href={props.url} target='_blank' rel='noopener noreferrer' className={style.URLDemo}>
                <span>{props.name}</span>
            </a>
        </>
    )
}
export default TitleDemo;