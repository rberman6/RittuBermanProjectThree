// this component will be stateless

const Header = () => {
    return (
        <header id="scrollUp">
            <h1 className="mainHeading">Premiere Peek</h1> 
            <div className="rightToLeft">
                <h2 className="tagline"><span><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.4 204" width="9px" height="9px"><polygon points="176.7 202.6 109.6 168.6 43.3 204 54.8 130.6 0 78.9 75 67.3 107.5 0 141.4 66.6 216.4 76.2 163 129.2 176.7 202.6" fill="#100630" /></svg></span>Stay Ahead with New Movies!<span> <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.4 204" width="9px" height="9px"><polygon points="176.7 202.6 109.6 168.6 43.3 204 54.8 130.6 0 78.9 75 67.3 107.5 0 141.4 66.6 216.4 76.2 163 129.2 176.7 202.6" fill="#100630" /></svg></span></h2>
            </div>
        </header>
    )
};

export default Header;