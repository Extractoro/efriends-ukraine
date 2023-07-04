import { TabContext, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import {
  fetchAll,
  fetchBusiness,
  fetchEntertainment,
  fetchHealth,
  fetchScience,
  fetchSports,
  fetchTechnology,
} from "../../redux/news/newsApi";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { Loading } from "notiflix";

const NewsTypes = () => {
  const [value, setValue] = useState("1");
  const [newsAll, setNewsAll] = useState([]);
  const [newsEntertainment, setNewsEntertainment] = useState([]);
  const [newsHealth, setNewsHealth] = useState([]);
  const [newsSports, setNewsSports] = useState([]);
  const [newsScience, setNewsScience] = useState([]);
  const [newsBusiness, setNewsBusiness] = useState([]);
  const [newsTechnology, setNewsTechnology] = useState([]);

  useEffect(() => {
    Loading.circle();
    fetchAll().then((res) => {
      setNewsAll(res.articles);
    });
    Loading.remove();
  }, []);

  const handleChange = (event, newValue) => {
    switch (newValue) {
      // case "1":
      //   fetchAll().then((res) => {
      //     setNewsAll(res.articles);
      //   });
      //   break;
      case "2":
        if (newsEntertainment.length === 0) {
          Loading.circle();
          fetchEntertainment().then((res) => {
            setNewsEntertainment(res.articles);
          });
          Loading.remove();
        }

        break;
      case "3":
        if (newsHealth.length === 0) {
          Loading.circle();
          fetchHealth().then((res) => {
            setNewsHealth(res.articles);
          });
          Loading.remove();
        }
        break;
      case "4":
        if (newsSports.length === 0) {
          Loading.circle();
          fetchSports().then((res) => {
            setNewsSports(res.articles);
          });
          Loading.remove();
        }
        break;
      case "5":
        if (newsScience.length === 0) {
          Loading.circle();
          fetchScience().then((res) => {
            setNewsScience(res.articles);
          });
          Loading.remove();
        }
        break;
      case "6":
        if (newsBusiness.length === 0) {
          Loading.circle();
          fetchBusiness().then((res) => {
            setNewsBusiness(res.articles);
          });
          Loading.remove();
        }
        break;
      case "7":
        if (newsTechnology.length === 0) {
          Loading.circle();
          fetchTechnology().then((res) => {
            setNewsTechnology(res.articles);
          });
          Loading.remove();
        }
        break;
      default:
        break;
    }
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Усі" value="1" />
          <Tab label="Розваги" value="2" />
          <Tab label="Здоров'я" value="3" />
          <Tab label="Спорт" value="4" />
          <Tab label="Наука" value="5" />
          <Tab label="Бізнес" value="6" />
          <Tab label="Технології" value="7" />
        </Tabs>
      </Box>
      <TabPanel value="1" sx={{ padding: "0" }}>
        <List>
          {newsAll.map(({ title, description, url, urlToImage }) => {
            return (
              <Item key={uuidv4()}>
                <Image
                  src={
                    urlToImage
                      ? urlToImage
                      : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                  }
                  alt={urlToImage}
                />
                <Title>{title}</Title>
                <Description>
                  {description
                    ? description.length > "50" &&
                      `${description.slice(0, 200)}...`
                    : "No description"}
                </Description>
                <Button href={url} target="_blank" rel="noreferrer">
                  Read more
                </Button>
              </Item>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value="2" sx={{ padding: "0" }}>
        <List>
          {newsEntertainment.map(({ title, description, url, urlToImage }) => {
            return (
              <Item key={uuidv4()}>
                <Image
                  src={
                    urlToImage
                      ? urlToImage
                      : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                  }
                  alt={urlToImage}
                />
                <Title>{title}</Title>
                <Description>
                  {description
                    ? description.length > "50" &&
                      `${description.slice(0, 200)}...`
                    : "No description"}
                </Description>
                <Button href={url} target="_blank" rel="noreferrer">
                  Read more
                </Button>
              </Item>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value="3" sx={{ padding: "0" }}>
        <List>
          {newsHealth.map(({ title, description, url, urlToImage }) => {
            return (
              <Item key={uuidv4()}>
                <Image
                  src={
                    urlToImage
                      ? urlToImage
                      : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                  }
                  alt={urlToImage}
                />
                <Title>{title}</Title>
                <Description>
                  {description
                    ? description.length > "50" &&
                      `${description.slice(0, 200)}...`
                    : "No description"}
                </Description>
                <Button href={url} target="_blank" rel="noreferrer">
                  Read more
                </Button>
              </Item>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value="4" sx={{ padding: "0" }}>
        <List>
          {newsSports.map(({ title, description, url, urlToImage }) => {
            return (
              <Item key={uuidv4()}>
                <Image
                  src={
                    urlToImage
                      ? urlToImage
                      : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                  }
                  alt={urlToImage}
                />
                <Title>{title}</Title>
                <Description>
                  {description
                    ? description.length > "50" &&
                      `${description.slice(0, 200)}...`
                    : "No description"}
                </Description>
                <Button href={url} target="_blank" rel="noreferrer">
                  Read more
                </Button>
              </Item>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value="5" sx={{ padding: "0" }}>
        <List>
          {newsScience.map(({ title, description, url, urlToImage }) => {
            return (
              <Item key={uuidv4()}>
                <Image
                  src={
                    urlToImage
                      ? urlToImage
                      : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                  }
                  alt={urlToImage}
                />
                <Title>{title}</Title>
                <Description>
                  {description
                    ? description.length > "50" &&
                      `${description.slice(0, 200)}...`
                    : "No description"}
                </Description>
                <Button href={url} target="_blank" rel="noreferrer">
                  Read more
                </Button>
              </Item>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value="6" sx={{ padding: "0" }}>
        <List>
          {newsBusiness.map(({ title, description, url, urlToImage }) => {
            return (
              <Item key={uuidv4()}>
                <Image
                  src={
                    urlToImage
                      ? urlToImage
                      : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                  }
                  alt={urlToImage}
                />
                <Title>{title}</Title>
                <Description>
                  {description
                    ? description.length > "50" &&
                      `${description.slice(0, 200)}...`
                    : "No description"}
                </Description>
                <Button href={url} target="_blank" rel="noreferrer">
                  Read more
                </Button>
              </Item>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel value="7" sx={{ padding: "0" }}>
        <List>
          {newsTechnology.map(({ title, description, url, urlToImage }) => {
            return (
              <Item key={uuidv4()}>
                <Image
                  src={
                    urlToImage
                      ? urlToImage
                      : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
                  }
                  alt={urlToImage}
                />
                <Title>{title}</Title>
                <Description>
                  {description
                    ? description.length > "50" &&
                      `${description.slice(0, 200)}...`
                    : "No description"}
                </Description>
                <Button href={url} target="_blank" rel="noreferrer">
                  Read more
                </Button>
              </Item>
            );
          })}
        </List>
      </TabPanel>
    </TabContext>
  );
};

const List = styled.ul`
  font-family: "Ubuntu", arial;
  display: grid;
  list-style: none;
  grid-template-columns: auto auto auto;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 365px;
  height: 470px;
  background-color: #73727d;
  border-radius: 15px;
  margin-bottom: 30px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 7px 1px rgb(0 0 0 / 15%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);

    background-color: #5f5e67;
  }
`;

const Image = styled.img`
  width: 320px;
  margin-top: 20px;
  border-radius: 15px;
  height: 180px;
`;

const Title = styled.p`
  font-family: inherit;
  font-weight: 500;
  width: 320px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: white;
`;

const Description = styled.p`
  font-size: 15px;
  width: 320px;
  margin: 0;
  color: white;
`;

const Button = styled.a`
  font-family: inherit;
  position: absolute;
  bottom: 20px;
  text-decoration: none;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  font-size: 19px;
  font-weight: 700;
  color: white;
  background-color: #feb737;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: #e4a431;
  }

  &:hover {
    background-color: #e4a431;
  }
`;

export default NewsTypes;
