/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = ({videoId}) => {
  return (
    <div className='play-video'>
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>Best Youtube Channenl</h3>
        <div className='play-video-info'>
          <p>1525 Views &bull; 2 days ago</p>
          <div>
            <span><img src={like} alt='' /> 125</span>
            <span><img src={dislike} alt='' /> 2</span>
            <span><img src={share} alt='' /> Share</span>
            <span><img src={save} alt='' /> Save</span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={jack} alt='' />
          <div>
            <p>GreatStack</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Cahnnel that makes learning easy</p>
            <p>subscribe This Channel</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Sparrow <span>! day ago</span></h3>
                <p>A global network providing essentials about full stack development</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>244</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
            <div className="comment">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Sparrow <span>! day ago</span></h3>
                <p>A global network providing essentials about full stack development</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>244</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
            <div className="comment">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Sparrow <span>! day ago</span></h3>
                <p>A global network providing essentials about full stack development</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>244</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
            <div className="comment">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Sparrow <span>! day ago</span></h3>
                <p>A global network providing essentials about full stack development</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>244</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
            <div className="comment">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Sparrow <span>! day ago</span></h3>
                <p>A global network providing essentials about full stack development</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>244</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
            <div className="comment">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Sparrow <span>! day ago</span></h3>
                <p>A global network providing essentials about full stack development</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>244</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
            <div className="comment">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Sparrow <span>! day ago</span></h3>
                <p>A global network providing essentials about full stack development</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>244</span>
                  <img src={dislike} alt='' />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo