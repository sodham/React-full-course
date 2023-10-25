const Profile = (props) => {
    const { title, thumbnailUrl, url} = props;
    return( <article className="profile-card">
        < img src={thumbnailUrl} alt="some thing" />
        <h2 className="title">{title}</h2>
<a href={url} className="button">Deatils</a>
    </article>
    );
};

export default Profile;