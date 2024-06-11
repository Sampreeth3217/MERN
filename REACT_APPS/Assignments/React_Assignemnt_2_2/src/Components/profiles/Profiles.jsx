import './Profiles.css'

function Profiles(props){
    return(
        <div className='card'>
            <img className="CoverPic" src={props.user.image} alt="" />

            <div className="decs">
                <h2>{props.user.title}</h2>
                <p>{props.user.desc}</p>
            </div>
            <div className="date">
                <p><img className='icon' src="./author.png" alt="" />{props.user.auth}</p>
                <p><img className='icon' src="./calendar.png" alt="" />{props.user.date}</p>
            </div>

        </div>
    )
}
export default Profiles;