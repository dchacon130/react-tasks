const Footer = () => {

    function year () {
        const year = new Date();
        return year.getFullYear();
    }

    return(
        <div className="footer">
            <em>Task list | Made with love {year()}</em>
        </div>
    )
}

export default Footer;