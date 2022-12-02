import { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchVideoThumbnail from '../utils/fetchVideoThumbnail';

const Wrapper = styled.div`
  padding-right: 15px;

  .fb-r {
    display: flex;
  }

  .fb-c {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 500px;
    height: 320px;
  }

  .avatar {
    background-color: blue;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .time {
    padding-left: 30px;
  }
`;

const VideoCard = ({
  thumbnail,
  avatar,
  title,
  uploader,
  viewCount,
  time,
  paddingStyle,
}) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    async function fetchData() {
      if (url === undefined) {
        const result = await fetchVideoThumbnail();
        setUrl(result);
      }
    }
    fetchData();
  }, [url]);

  return url === undefined ? (
    <div>Loading...</div>
  ) : (
    <Wrapper>
      <img src={url} alt="error"></img>
      <div className="fb-r">
        <div className="avatar" />
        <div className="fb-c">
          <div>{title}</div>
          <div>{uploader}</div>
          <div className="fb-r">
            <div>{viewCount}</div>
            <div className="time">{time - Date.now()}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default VideoCard;
