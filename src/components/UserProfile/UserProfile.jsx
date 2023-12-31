import styled from "styled-components";
import { useCurrentUserQuery } from "../../redux/auth/authApi";
import { Loading } from "notiflix";
import { IoEarthOutline } from "react-icons/io5";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { data: user, isFetching } = useCurrentUserQuery();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user !== undefined) {
      setData(user.user);
    }
  }, [user]);

  return (
    <>
      {!isFetching && Loading.remove()}
      <Wrapper>
        <LeftSection>
          <UserCard>
            {data && (
              <>
                <UserPhoto src={data.avatarURL} alt="" />
                <UserName>{data.name}</UserName>
                <UserParagraph>{data.about}</UserParagraph>
                <UserParagraph>{data.location}</UserParagraph>
                <EditButton to="/profile_edit" exact="true">
                  Edit Profile
                </EditButton>
              </>
            )}
          </UserCard>
          <UserSocial>
            {user && (
              <>
                <UserMedias>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <IoEarthOutline
                      style={{
                        marginRight: "10px",
                      }}
                    />
                    Website:
                  </span>{" "}
                  <UserLink href={data.website} target="_blank">
                    {data.website}
                  </UserLink>
                </UserMedias>
                <UserMedias>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <AiOutlineGithub style={{ marginRight: "10px" }} />
                    GitHub:
                  </span>{" "}
                  <UserLink href={data.github} target="_blank">
                    {data.github}
                  </UserLink>
                </UserMedias>
                <UserMedias>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <AiOutlineLinkedin style={{ marginRight: "10px" }} />
                    Linkedin:
                  </span>{" "}
                  <UserLink href={data.linkedin} target="_blank">
                    {data.linkedin}
                  </UserLink>
                </UserMedias>
                <UserMedias>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <AiOutlineFacebook style={{ marginRight: "10px" }} />
                    Facebook:
                  </span>{" "}
                  <UserLink href={data.facebook} target="_blank">
                    {data.facebook}
                  </UserLink>
                </UserMedias>
                <UserMedias>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <FiTwitter style={{ marginRight: "10px" }} />
                    Twitter:
                  </span>{" "}
                  <UserLink href={data.twitter} target="_blank">
                    {data.twitter}
                  </UserLink>
                </UserMedias>
                <UserMedias>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <FaTelegram style={{ marginRight: "10px" }} />
                    Telegram:
                  </span>{" "}
                  <UserLink href={data.telegram} target="_blank">
                    {data.telegram}
                  </UserLink>
                </UserMedias>
              </>
            )}
          </UserSocial>
        </LeftSection>
        <RightSection>
          <UserInfo>
            {user && (
              <>
                <UserBioParagraph>
                  <span>Bio:</span> {data.bio}
                </UserBioParagraph>
                <UserBioParagraph>
                  <span>Email:</span> {data.email}
                </UserBioParagraph>
                <UserBioParagraph>
                  <span>Phone:</span> {data.phone}
                </UserBioParagraph>
                <UserBioParagraph>
                  <span>Subscription:</span> {data.subscription}
                </UserBioParagraph>
              </>
            )}
          </UserInfo>
          <UserLanguages></UserLanguages>
        </RightSection>
      </Wrapper>
      {isFetching && Loading.circle()}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftSection = styled.div``;

const RightSection = styled.div``;

const UserCard = styled.div`
  background-color: white;
  color: #333333;
  width: 450px;
  height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  padding-bottom: 45px;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const UserPhoto = styled.img`
  width: 200px;
  border-radius: 50%;
`;

const UserName = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`;

const UserParagraph = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const UserSocial = styled.div`
  background-color: white;
  width: 650px;
  border-radius: 5px;
  color: #333333;
`;

const UserMedias = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 15.5px 25px;
  margin: 0;
  font-weight: 500;
  border-bottom: 1px solid rgb(51 51 51 / 20%);

  &:last-child {
    border: 0;
  }
`;

const UserLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const UserInfo = styled.div`
  background-color: white;
  width: 730px;
  height: 490px;
  position: absolute;
  right: 354px;
  border-radius: 5px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserBioParagraph = styled.p`
  margin: 0;
  font-size: 20px;
  padding: 20px;
  font-weight: 500;
  width: 690px;
  word-break: break-all;

  border-bottom: 1px solid rgb(51 51 51 / 20%);

  &:last-child {
    border: 0;
  }
`;

const UserLanguages = styled.div``;

const EditButton = styled(NavLink)`
  font-family: inherit;
  position: relative;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background-color: rgb(254, 183, 55);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: rgb(228, 164, 49);
  }

  &:focus {
    top: 1px;
    background-color: rgb(228, 164, 49);s
  }
`;

export default UserProfile;
