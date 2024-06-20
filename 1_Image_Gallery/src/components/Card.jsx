const Card = ({src, tags, views, likes, downloads, user}) => {
  return (
    <div className="w-[24%] overflow-hidden rounded shadow-lg mb-12">
        <img src={src} alt="image"
        className="w-full h-[60%]" />
        <div className="px-6 py-4">
            <p className="font-bold text-purple-500 text-xl mb-2">
                Photo by {user}
            </p>
            <ul>
                <li>
                    <strong>
                    Views: 
                    </strong>
                    {views}
                </li>
                <li>
                    <strong>
                    Downloads: 
                    </strong>
                    {downloads}
                </li>
                <li>
                    <strong>
                    Likes: 
                    </strong>
                    {likes}
                </li>
            </ul>
        </div>

        <div className="px-6 py-4">
            {tags.split(",").map((tag)=>(
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mb-3 text-sm font-semibold text-gray-700 mr-2"
                key={tag}>
                #{tag}
                </span>
            ))}
        </div>
    </div>
  )
}

export default Card
