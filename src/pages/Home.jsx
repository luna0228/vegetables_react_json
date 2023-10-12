import Header from "../components/Header"
import Footer from "../components/Footer";
import Content from "../components/Content";
// import CourseElement from "../json/CourseElement.json";
// import BannerAndDesc from "../json/BannerAndDesc.json";
import CourseElements from "../json/CourseElements.json";

function Home() {
    return (
        <div>
            <Header />
            <Content CourseElements={CourseElements} />
            {/* <Content CourseElement={CourseElement} BannerAndDesc={BannerAndDesc} /> */}
            <Footer />
        </div>
    );
}

export default Home;