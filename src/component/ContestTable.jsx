import react, {useState} from "react";
import { Link } from "react-router-dom";
import { posts } from '../data'

const ContestTable = () => {
    const [ contestName, setContestName ] = useState( '' )
    const Images = [
        {
            id: 1,
            src: "../../public/images/mid1.png",
        },

        {
            id: 2,
            src: "../../public/images/mid2.png",
        },
        {
            id: 3,
            src: "../../public/images/tech1.png",
        },
        {
            id: 4,
            src: "../../public/images/tech2.png",
        },
        {
            id: 5,
            src: "../../public/images/tech3.png",
        },
        {
            id: 6,
            src: "../../public/images/tech4.png",
        },
        {
            id: 7,
            src: "../../public/images/tech5.png",
        },
        {
            id: 8,
            src: "../../public/images/tech5.png",
        },
        {
            id: 9,
            src: "../../public/images/tech5.png",
        },
        {
            id: 10,
            src: "../../public/images/tech5.png",
        },
        {
            id: 11,
            src: "../../public/images/tech5.png",
        },
    ]

   return <div className="overflow-auto rounded-lg shadow container mx-auto max-w-7xl my-8">
        <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left"></th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-center">Difficulty</th>
                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-center">length</th>
                </tr>
            </thead>
            {posts
                .filter((contest) => contest.title.toLowerCase().includes(contestName))
                .map((post) => (
                    <tbody>
                        <tr className="bg-white">
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap w-80">
                                <Link key={post.id} to={`/problems/${post.id}`}>
                                    { posts.length === 0 ? <img src={Images[post.id].src} alt="test" className=" h-28 w-60 object-cover rounded-md "/> : <img src={Images[post.id - 1].src} alt="test" className=" h-28 w-60 object-cover rounded-md"/> }
                                </Link>

                            <p className="absolute text-white text-xl bottom-4 left-4">Length: { post.length }</p>
                            </td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <Link key={post.id} to={`/problems/${post.id}`}>
                                    <div className="flex flex-col justify-between space-y-4">
                                        <div className='text-xl font-semibold'>{ post.title }</div>
                                        <div className='text-lg font-light'>{ post.date }</div>
                                    </div>
                                </Link>
                            </td>
                            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{post.diff}</span>
                            </td>
                            <td className="p-3 text-sm text-center text-gray-700 whitespace-nowrap ">{post.length}</td>
                        </tr>
                        <Link key={post.id} to={`/problems/${post.id}`}></Link>
                    </tbody>
                ))}
        </table>
    </div>
};

export default ContestTable;
