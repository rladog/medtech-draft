const Textbox = ({textObj}) => {
    return (
    <div className="home-textbox">
        <h1 className="home-textbox-heading">
            {textObj.heading}
        </h1>
        <p className="home-textbox-body">
            {textObj.body}
        </p>
    </div>
    );
}

export default Textbox;