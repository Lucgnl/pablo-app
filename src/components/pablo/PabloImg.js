import classes from './PabloImg.module.css'
function PabloImg(props)
{
    console.log('hello')
    return(
        <section>
            <div className={classes.content}><img src={props.src}/></div>
        </section>
    )
}

export default PabloImg