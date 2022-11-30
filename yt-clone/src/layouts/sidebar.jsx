import { render } from "@testing-library/react";
import styled, { css } from "styled-components";
import {
    HomeIcon,
    TrendingIcon,
    SubIcon,
    LibIcon,
    HistoryIcon,
    VidIcon,
    LikeIcon,
  } from "./Icons";

const SidebarWrapper = styled.div`
  position: fixed;
  top: 55px;
  left: 0;
  height: 100vh;
  width: 240px;
  background: ${(props) => props.theme.grey};
  padding-top: 1rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  &::-webkit-scrollbar {
    width: 0;
  }
  .icon {
    display: flex;
    align-items: center;
    padding: 0.2rem 0;
    padding-left: 1.5rem;
    margin-bottom: 0.4rem;
  }
  .icon:not(.hover-disable):hover {
    background: ${(props) => props.theme.darkGrey};
    cursor: pointer;
  }
  .divider{
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 2px;
    background-color: white;
    width: 240px;
  }
  .active div {
    background: ${(props) => props.theme.darkGrey};
    cursor: pointer;
  }
  .active svg {
    fill: #fff;
  }
  .icon span {
    padding-left: 1rem;
    position: relative;
    top: 1px;
  }
  @media screen and (max-width: 1093px) {
    transform: translateX(-100%);
    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}
  }
`;

const Sidebar = () =>  {
    return(
        <SidebarWrapper open={true} theme={{
            bg: "#181818",
            primaryColor: "#FFF",
            secondaryColor: "#AAAAAA",
            grey: "#202020",
            darkGrey: "#383838",
            black: "#121212",
            red: "#CC0000",
            blue: "#3EA6FF",
            white: "#FFF",
            pink: "#F86782",
            purple: "#282A36",
            font: "Fira Sans",
          }}>
            <div className = "icon" activeClassName="active">
                <HomeIcon/>
                <span style={{color:'white'}}>Home</span>
            </div>
            <div className = "icon">
                <TrendingIcon/>
                <span style={{color:'white'}}>Trending</span>
            </div>
            <div className = "icon">
                <SubIcon/>
                <span style={{color:'white'}}> Subscritions </span>
            </div>
            <div className = "divider"></div>
            <div className = "icon">
                <LibIcon/>
                <span style={{color:'white'}}>Library</span>
            </div>
            <div className = "icon">
                <HistoryIcon/>
                <span style={{color:'white'}}>History</span>
            </div>
            <div className = "icon">
                <VidIcon/>
                <span style={{color:'white'}}>Your Videos</span>
            </div>
            <div className = "icon">
                <LikeIcon/>
                <span style={{color:'white'}}>Liked Videos</span>
            </div>
            <div className="divider"></div>
            <div className = "icon">
                <span style={{color:'white'}}>Subscriptions</span>
            </div>
        </SidebarWrapper>)
}

export default Sidebar;