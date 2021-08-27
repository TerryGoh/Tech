import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

const { Meta } = Card;

const ImageList = [
    { img: image1, txt: "Modern Design" },
    { img: image2, txt: "Clean dDsign" },
    { img: image3, txt: "Great Support" },
    { img: image4, txt: "Easy To Customise" },
    { img: image5, txt: "Unlimited Features" },
    { img: image6, txt: "Advanced Option" }
]

function AppFeature() {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>

                </div>

                <Row gutter={[16, 16]}>
                    {ImageList.map((item) => {
                        return (
                            <Col span={8}>

                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt={item.txt} src={item.img} />}
                                >
                                    <Meta title={item.txt} />
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default AppFeature;