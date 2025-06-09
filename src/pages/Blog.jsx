

const Blog = ({selectedColor, diacritics}) =>{
    return(
        <div>
            <p className={`${selectedColor.backgroundColor}
            ${selectedColor.textColor} text-8xl font-bangla`}>
               {diacritics} blog Coming Soon!
            </p>
        </div>

    );
}

export default Blog;