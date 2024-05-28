export const Notadmin = () => {
    return (
        <div>
            <nav>
                <div className="menu" style={{marginTop:"30px"}}>
                    <p className="website_name">You not the <span style={{color:"red"}}>ADMIN</span> of Safeboxes !</p>
                </div>
            </nav>
            <section className="wrapper">
                <div className="container">
                    <div id="scene"  className="scene" data-hover-only="false">
                        <div className="circle" data-depth="1.2" />
                        <div className="one" data-depth="0.9">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <div className="two" data-depth="0.60">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <div className="three" data-depth="0.40">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <p className="p404" data-depth="0.50" color="#ed1b24"></p>
                        <p className="p404" data-depth="0.10" style={{color:"white"}}>404 !</p>
                    </div>
                    <div className="text">
                        <article>
                            <p>Oops! not found data on serser !</p>
                            <button>plase change account</button>
                        </article>
                    </div>
                </div>
            </section >
        </div >
    );
}