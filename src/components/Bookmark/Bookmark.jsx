

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-5 w-11/12 rounded-lg my-4">
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default Bookmark;