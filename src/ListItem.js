// const ListItem = (props) => {
    const ListItem = ({id, email, name, body }) => {
        // const {id, email, name, body } = props;
        return   (<li key={id}className="comment">
        <div className="comments-header">
        <h3 className="email">{email} </h3>
        <h3>{email}</h3>
        <h3>{name}</h3>
      
        </div>
        <p>{body}</p>
        </li>
        );
    };

export default ListItem;