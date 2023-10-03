import Header from "../components/Header"
import Footer from "../components/Footer";
import Content from "../components/Content";
import CourseElement from "../json/CourseElement.json";
import BannerAndDesc from "../json/BannerAndDesc.json";

function Home() {
    return (
        <div>
            <Header />
            <Content CourseElement={CourseElement} BannerAndDesc={BannerAndDesc} />
            {/* <div className="main-container">
                <div className="container">
                    <div className="banner mb-30">
                        <SuggestedItem
                            course_title={Course_data.banner_title}
                            course_img={Course_data.banner_img}
                        />
                        <div className="imgBox border-r">
                            <img src={Course_data.banner_img} alt="banner" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="left mb-30">
                            <div className="head-title border-r ">
                                Vegetables
                            </div>
                            <div className="photo-grid">
                                <ul>
                                    {
                                        Course_data.map((course) => {
                                            return (
                                                <SuggestedItem
                                                    key={course.suggested_item.id}
                                                    course_title={course.suggested_item.course_title}
                                                    course_img={course.suggested_item.course_img}
                                                />
                                            )
                                        })
                                    }
                                    <li>
                                        <div className="imgBox border-r">

                                            <img src="images/vegetable01.jpg" alt="Vegetables" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="imgBox border-r">
                                            <img src="images/vegetable02.jpg" alt="Vegetables" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="imgBox border-r">
                                            <img src="images/vegetable03.jpg" alt="Vegetables" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right mb-30">
                            <div className="head-title border-r ">
                                Contact
                            </div>
                            <div className="card">
                                <p>For any questions or suggestions about Vegetables, Vegetables Club or your
                                    online order you can contact Vegetables Customer Service by phone, email
                                    or post and we’ll be happy to help.</p>
                                <p>{Course_data.description}
                                </p>
                                <hr />
                                <p className="lineH-2">E-mail : Vegetables@aaabbccc.com<br />
                                    PHONE : +886-123-456-789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <Content /> */}
            <Footer />
        </div>
    );
}

export default Home;