

const Blog = ({blog}) => {
    const {cover_img, author_img, reading_time, posted_date, author_name, hashtags} = blog;
    return (
        <div className="mb-14">
            <img className="rounded-lg" src={cover_img}></img>
            <div className="flex justify-between items-center my-8">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-5">
                        <h4>{author_name}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h1 className="font-bold text-4xl">{blog.title}</h1>
            <p className="my-5">
                {
                    hashtags.map( hash => <span><a href="#">{hash} </a></span>)
                }
            </p>
            <span><a href="#">Mark as read</a></span>
        </div>
    );
};

export default Blog;