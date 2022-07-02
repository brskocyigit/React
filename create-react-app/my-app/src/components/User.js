import PropTypes from 'prop-types'

function User (props){

    if (!props.isLoggedIn){
        return <div>
            Giriş yapmadınız.
        </div>
    }
    
    return (
        <>
        <h1>
            {                
                `${props.name} ${props.surname} (${props.age})`          
            } 
        </h1>

        {props.address.title} {props.address.zip}
        <br/>
        <br/>

           {props.friends.map((friend)=>(
            <div key={friend.id}>
                {friend.id}-{friend.name}
            </div>
           ))}
        
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age:PropTypes.oneOfType(
        [
            PropTypes.number,
            PropTypes.string
        ]
    ).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn : false,
}

export default User