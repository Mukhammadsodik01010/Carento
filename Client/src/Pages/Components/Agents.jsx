import React from 'react'
import ArrowUpRight from "../../assets/Agents/IconA.svg";
import Instagram from "../../assets/Agents/InstagramA.svg";
import FaceBook from "../../assets/Agents/FacebookA.svg";
import Twitter from "../../assets/Agents/twitterA.svg";
import YouTube from "../../assets/Agents/youtubeA.svg";
import Agent from '../../assets/Agents/Agent.jpg'
import Agent1 from "../../assets/Agents/Agent1.jpg";
import Agent2 from "../../assets/Agents/Agent2.jpg";
import Agent3 from "../../assets/Agents/Agent3.avif";
import Agent5 from "../../assets/Agents/Agent5.jpg";
import Agent6 from "../../assets/Agents/Agent6.jpg";
import Agent7 from "../../assets/Agents/Agent7.jpg";
import Agent8 from "../../assets/Agents/Agent8.jpg";



import {
  AgentsH1,
  AgentsP,
  AgentsWrapper,
  AgentsChildTop,
  AgentsChildBottom,
  AgentsChildTopImg,
  IconsWrapper,
  AgentsBottomImahes,
  AgentsProfilesDiv,
  AgentName,
  AgentPosition,
  AgentsChild,
} from "../../Styles/AgentsStyles";

const AgentsComp = () => {
  return (
    <div className="ContainerMini">
      <AgentsP>Awesome Teams</AgentsP>
      <AgentsH1>Meet Our Agents</AgentsH1>
      <AgentsWrapper>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent} alt="Agent" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Cody Fisher</AgentName>
            <AgentPosition>CFO (Chief Financial Officer)</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent1} alt="Agent1" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Eleanor Pena</AgentName>
            <AgentPosition>CSenior Car Rental Consultant</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent2} alt="Agent2" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Marvin McKinney</AgentName>
            <AgentPosition>Fleet Manager</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent3} alt="Agent3" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Leslie Alexander</AgentName>
            <AgentPosition>Customer Experience Lead</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent8} alt="Agent8" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Kristin Watson</AgentName>
            <AgentPosition>Operations Coordinator</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent5} alt="Agent5" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Jacob Jones</AgentName>
            <AgentPosition>Regional Sales Manager</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent6} alt="Agent6" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Dianne Russell</AgentName>
            <AgentPosition>Logistics & Dispatch Officer</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
        <AgentsChild>
          <AgentsChildTop>
            <AgentsChildTopImg src={Agent7} alt="Agent7" />
          </AgentsChildTop>
          <AgentsChildBottom>
            <AgentName>Ronald Richards</AgentName>
            <AgentPosition>Vehicle Maintenance Supervisor</AgentPosition>
            <AgentsBottomImahes>
              <AgentsProfilesDiv>
                <IconsWrapper>
                  <img src={Instagram} alt="Instagram" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={FaceBook} alt="FaceBook" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={Twitter} alt="Twitter" />
                </IconsWrapper>
                <IconsWrapper>
                  <img src={YouTube} alt="YouTube" />
                </IconsWrapper>
              </AgentsProfilesDiv>
              <IconsWrapper>
                <img src={ArrowUpRight} alt="ArrowUpRight" />
              </IconsWrapper>
            </AgentsBottomImahes>
          </AgentsChildBottom>
        </AgentsChild>
      </AgentsWrapper>
    </div>
  );
}

export default AgentsComp
