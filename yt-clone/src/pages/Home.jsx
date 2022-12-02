import styled from 'styled-components';
import NavBar from '../components/nav-bar/nav-bar.component';
import VideoCard from '../components/VideoCard';
import Sidebar from '../layouts/sidebar';

const Wrapper = styled.div`
  .fb-r {
    display: flex;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <Sidebar/>
      <h1>Recommended</h1>
      <div className="fb-r">
        <VideoCard
          title={'MI Fallout'}
          uploader={'ethanhunt'}
          viewCount={0}
          time={new Date('November 29, 2022')}
        />
        <VideoCard
          title={'Mad Max Sandstorm'}
          uploader={'madmax'}
          viewCount={0}
          time={new Date('November 29, 2022')}
        />
        <VideoCard
          title={'Ready Player One'}
          uploader={'johnwick'}
          viewCount={0}
          time={new Date('November 29, 2022')}
        />
        <VideoCard
          title={'The adventures of TinTin'}
          uploader={'tintin'}
          viewCount={0}
          time={new Date('November 29, 2022')}
        />
      </div>
    </Wrapper>
  );
};

export default Home;
