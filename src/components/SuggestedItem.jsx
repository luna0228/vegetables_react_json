

export default function SuggestedItem({ course_title, course_img }) {
    return (

        <div className="imgBox border-r">
            <img src={course_img} alt={course_title} />
        </div>

    );

}

