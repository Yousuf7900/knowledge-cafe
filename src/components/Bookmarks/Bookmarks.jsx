import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 h-full bg-gray-100 rounded-lg pl-7 pb-6 pt-7 my-6">
            <h1 className="font-bold text-2xl">Bookmarked Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map( bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;