import styled from "styled-components";
import { useCurrentUserQuery } from "../../redux/auth/authApi";
import { Loading, Notify } from "notiflix";
import { IoEarthOutline } from "react-icons/io5";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import {
  useChangeAboutMutation,
  useChangeBioMutation,
  useChangeFacebookMutation,
  useChangeGithubMutation,
  useChangeLinkedinMutation,
  useChangeLocationMutation,
  useChangeNameMutation,
  useChangePhoneMutation,
  useChangeTelegramMutation,
  useChangeTwitterMutation,
  useChangeWebsiteMutation,
} from "../../redux/user/userApi";
import { useState } from "react";

const UserEdit = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [changeName] = useChangeNameMutation();
  const [changeAbout] = useChangeAboutMutation();
  const [changeBio] = useChangeBioMutation();
  const [changeFacebook] = useChangeFacebookMutation();
  const [changeLinkedin] = useChangeLinkedinMutation();
  const [changeLocation] = useChangeLocationMutation();
  const [changePhone] = useChangePhoneMutation();
  const [changeTelegram] = useChangeTelegramMutation();
  const [changeTwitter] = useChangeTwitterMutation();
  const [changeWebsite] = useChangeWebsiteMutation();
  const [changeGithub] = useChangeGithubMutation();
  const { data: user, isFetching } = useCurrentUserQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (name.length !== 0) {
        console.log(name);
        await changeName({ name }).unwrap();
      }
      if (about.length !== 0) {
        await changeAbout({ about }).unwrap();
      }
      if (location.length !== 0) {
        await changeLocation({ location }).unwrap();
      }
      if (website.length !== 0) {
        await changeWebsite({ website }).unwrap();
      }
      if (github.length !== 0) {
        await changeGithub({ github }).unwrap();
      }
      if (linkedin.length !== 0) {
        await changeLinkedin({ linkedin }).unwrap();
      }
      if (facebook.length !== 0) {
        await changeFacebook({ facebook }).unwrap();
      }
      if (twitter.length !== 0) {
        await changeTwitter({ twitter }).unwrap();
      }
      if (telegram.length !== 0) {
        await changeTelegram({ telegram }).unwrap();
      }
      if (bio.length !== 0) {
        await changeBio({ bio }).unwrap();
      }
      if (phone.length !== 0) {
        await changePhone({ phone }).unwrap();
      }
      Notify.success(`Ваш профіль було змінено!`);
    } catch (error) {
      Notify.failure(`${error.data.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "about":
        setAbout(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "website":
        setWebsite(value);
        break;
      case "github":
        setGithub(value);
        break;
      case "linkedin":
        setLinkedin(value);
        break;
      case "facebook":
        setFacebook(value);
        break;
      case "twitter":
        setTwitter(value);
        break;
      case "telegram":
        setTelegram(value);
        break;
      case "bio":
        setBio(value);
        break;
      case "phone":
        setPhone(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      {!isFetching && Loading.remove()}
      <Container>
        <Wrapper onSubmit={handleSubmit}>
          <LeftSection>
            <UserCard>
              {user && (
                <>
                  <UserPhoto src={user.user.avatarURL} alt="" />
                  <UserName
                    type="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder={user.user.name}
                  />
                  <UserParagraph
                    type="name"
                    name="about"
                    value={about}
                    onChange={handleChange}
                    placeholder={user.user.about}
                  />
                  <UserParagraph
                    type="name"
                    name="location"
                    value={location}
                    onChange={handleChange}
                    placeholder={user.user.location}
                  />

                  <div style={{ display: "flex" }}>
                    <EditButtonCancel
                      to="/profile"
                      exact="true"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Cancel
                    </EditButtonCancel>

                    <EditButton type="submit">Save Profile</EditButton>
                  </div>
                </>
              )}
            </UserCard>
            <UserSocial>
              {user && (
                <>
                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserMedias>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <IoEarthOutline
                          style={{
                            marginRight: "10px",
                          }}
                        />
                        Website:
                      </div>

                      <UserInput
                        type="name"
                        name="website"
                        placeholder={user.user.website}
                        value={website}
                        onChange={handleChange}
                      />
                    </UserMedias>
                  </label>
                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserMedias>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AiOutlineGithub
                          style={{
                            marginRight: "10px",
                          }}
                        />
                        Github:
                      </div>

                      <UserInput
                        type="name"
                        name="github"
                        placeholder={user.user.github}
                        value={github}
                        onChange={handleChange}
                      />
                    </UserMedias>
                  </label>
                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserMedias>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AiOutlineLinkedin
                          style={{
                            marginRight: "10px",
                          }}
                        />
                        Linkedin:
                      </div>

                      <UserInput
                        type="name"
                        name="linkedin"
                        placeholder={user.user.linkedin}
                        value={linkedin}
                        onChange={handleChange}
                      />
                    </UserMedias>
                  </label>
                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserMedias>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AiOutlineFacebook
                          style={{
                            marginRight: "10px",
                          }}
                        />
                        Facebook:
                      </div>

                      <UserInput
                        type="name"
                        name="facebook"
                        placeholder={user.user.facebook}
                        value={facebook}
                        onChange={handleChange}
                      />
                    </UserMedias>
                  </label>
                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserMedias>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FiTwitter
                          style={{
                            marginRight: "10px",
                          }}
                        />
                        Twitter:
                      </div>

                      <UserInput
                        type="name"
                        name="twitter"
                        placeholder={user.user.twitter}
                        value={twitter}
                        onChange={handleChange}
                      />
                    </UserMedias>
                  </label>
                  <label>
                    <UserMedias>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <FaTelegram
                          style={{
                            marginRight: "10px",
                          }}
                        />
                        Telegram:
                      </div>

                      <UserInput
                        type="name"
                        name="telegram"
                        placeholder={user.user.telegram}
                        value={telegram}
                        onChange={handleChange}
                      />
                    </UserMedias>
                  </label>
                </>
              )}
            </UserSocial>
          </LeftSection>
          <RightSection>
            <UserInfo>
              {user && (
                <>
                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserBioParagraph>
                      Bio:
                      <UserBioInput
                        type="name"
                        name="bio"
                        placeholder={user.user.bio}
                        maxLength="600"
                        value={bio}
                        onChange={handleChange}
                      />
                    </UserBioParagraph>
                  </label>

                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserBioParagraph>
                      Email: {user.user.email}
                    </UserBioParagraph>
                  </label>

                  <label
                    style={{ borderBottom: "1px solid rgb(51 51 51 / 20%)" }}
                  >
                    <UserBioParagraph>
                      Phone:
                      <UserInput
                        type="phone"
                        name="phone"
                        placeholder={user.user.phone}
                        style={{ marginLeft: "15px" }}
                        value={phone}
                        onChange={handleChange}
                      />
                    </UserBioParagraph>
                  </label>

                  <UserBioParagraph style={{ display: "block" }}>
                    <span>Subscription: </span> {user.user.subscription}
                  </UserBioParagraph>
                </>
              )}
            </UserInfo>
            <UserLanguages></UserLanguages>
          </RightSection>
        </Wrapper>
      </Container>
      <Footer />
      {isFetching && Loading.circle()}
    </>
  );
};

const Wrapper = styled.form`
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

const UserName = styled.input`
  font-family: Ubuntu, arial;
  font-weight: 500;
  font-size: 20px;
  width: 300px;
  border: 2px solid rgb(254, 183, 55);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px;
  outline: none;
  background: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  margin-top: 20px;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    border: 2px solid #e4a431;
  }
`;

const UserParagraph = styled.input`
  font-family: Ubuntu, arial;
  font-size: 20px;
  font-weight: 500;
  width: 300px;
  border: 2px solid rgb(254, 183, 55);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px;
  outline: none;
  background: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    border: 2px solid #e4a431;
  }
`;

const UserSocial = styled.div`
  background-color: white;
  width: 650px;
  height: auto;
  border-radius: 5px;
  color: #333333;
`;

const UserMedias = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 15.5px 25px;
  margin: 0;
  font-weight: 500;
  border-bottom: 1px solid rgb(51 51 51 / 20%);
`;

const UserInput = styled.input`
  font-family: Ubuntu, arial;
  font-size: 16px;
  width: 70%;
  font-weight: 500;
  border: 2px solid rgb(254, 183, 55);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px;
  outline: none;
  background: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    border: 2px solid #e4a431;
  }
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
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 20px;
  padding: 20px;
  font-weight: 500;
  width: 690px;
  word-break: break-all;
`;

const UserBioInput = styled.textarea`
  font-family: Ubuntu, arial;
  font-size: 16px;
  width: 92%;
  resize: none;
  margin-left: 15px;
  height: 155px;
  font-weight: 500;
  border: 2px solid rgb(254, 183, 55);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px;
  outline: none;
  background: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    border: 2px solid #e4a431;
  }
`;

const UserLanguages = styled.div``;

const EditButton = styled.button`
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

  margin-top: 10px;

  &:hover {
    background-color: rgb(228, 164, 49);
  }

  &:focus {
    top: 1px;
    background-color: rgb(228, 164, 49);
  }
`;

const EditButtonCancel = styled(NavLink)`
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
  margin-right: 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  margin-top: 10px;

  &:hover {
    background-color: rgb(228, 164, 49);
  }

  &:focus {
    top: 1px;
    background-color: rgb(228, 164, 49);
  }
`;

export default UserEdit;
