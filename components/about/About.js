
function About(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <a href={props.link}>{props.link}</a>
        </div>
    );
}

export default About;