import React from 'react'
import './Trainding.css'
import image1 from '../../Images/traindingimage1.webp'
import image2 from '../../Images/traindingimage2.webp'
import image3 from '../../Images/traindingimage3.webp'
import image4 from '../../Images/traindingimage4.webp'

const TraindingCollection = () => {
    return (
        <>
            <section>
                <div className="traindingcollection">
                    <div className="traingindheading">
                        <p>trending collections</p>
                    </div>
                    <div className="traindingbox">
                        <div className="traindingimage">
                            <img src={image1} alt="" />
                            <div className="traingtext">
                                <p>BREATHABLE SOCKS COLLECTION</p>
                            </div>
                        </div>
                        <div className="traindingimage">
                            <img src={image2} alt="" />
                            <div className="traingtext">
                                <p>ANKLE LENGTH SOCKS COLLECTION</p>
                            </div>
                        </div>
                        <div className="traindingimage">
                            <img src={image3} alt="" />
                            <div className="traingtext">
                                <p>NO-SHOW SOCKS COLLECTION</p>
                            </div>
                        </div>
                        <div className="traindingimage">
                            <img src={image4} alt="" />
                            <div className="traingtext">
                                <p>END OF SEASON SALE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TraindingCollection