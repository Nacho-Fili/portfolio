import colors from "../colors/colors"


export default function H3(props){

    const { children } = props

    const style = {
        color: colors.light,
        paddingLeft: '20px' 
    }

    return(
        <h3 style={ style }>
            <strong>
                {children}
            </strong>
        </h3>
    )
}