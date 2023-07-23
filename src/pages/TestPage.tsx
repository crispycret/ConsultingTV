import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"



export const TestPage = ({to='/'}) => {

    const navigate = useNavigate()

    const onClick = () => {
        console.log("Navigate to -> ", to)
        navigate(to)
    }

    return (
        <div>
        <h1>Test Page</h1>
            <Button variant="contained" color="primary" className='my-5' onClick={() => onClick()}> go to {to} </Button>
        </div>
    )

}