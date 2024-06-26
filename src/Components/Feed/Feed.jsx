import './Feed.css';
// import thumbnail1 from '../../assets/thumbnail1.png';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../Data';
import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        
        try {
            const response = await fetch(videoList_url);
            if (!response.ok) {
                console.error('Response:', response); // Log the full response for debugging
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result); // Log the entire result to check the structure
            if (result.items) {
                setData(result.items);
            } else {
                setError('No items found in the response');
            }
        } catch (error) {
            console.error('Fetching data failed:', error);
            setError(error.message);
        }
    }, [category]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="feed">
            {data.length === 0 ? (
                <div>Loading...</div>
            ) : (
                data.map((item, index) => {
                    return (
                        <Link key={index} to={`/video/${item.id}`} className='card'>
                            <img src={item.snippet.thumbnails.medium.url} alt='thumbnail' />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{item.statistics.viewCount} views &bull; {new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
                        </Link>
                    );
                })
            )}
        </div>
    );
}

Feed.propTypes = {
    category: PropTypes.string.isRequired,
};

export default Feed;
