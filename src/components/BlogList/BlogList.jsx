import { Loading } from "notiflix";
import { useGetAllQuery } from "../../redux/posts/postApi";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment/moment";

const BlogList = () => {
  const { data: posts, isFetching } = useGetAllQuery();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (posts !== undefined) {
      setBlogs(posts.response);
    }
  }, [posts]);

  return (
    <>
      {!isFetching && Loading.remove()}
      <div>
        <ul style={{ padding: 0 }}>
          {[...blogs]
            .reverse()
            .map(
              ({ text, files, authorName, authorAbout, edited, createdAt }) => {
                return (
                  <ListItem key={uuidv4()} id={uuidv4()}>
                    <ItemWrapper>
                      <ItemTitle>{authorName}</ItemTitle>
                      <p
                        style={{
                          margin: 0,
                          marginLeft: "10px",
                          fontSize: "30px",
                        }}
                      >
                        ·
                      </p>
                      <ItemTime>{moment(createdAt).format("llll")}</ItemTime>
                      {edited && <ItemEdited>edited</ItemEdited>}
                    </ItemWrapper>
                    {authorAbout !== "No information" && (
                      <ItemAbout>{authorAbout}</ItemAbout>
                    )}

                    <ItemText>{text}</ItemText>
                    {files &&
                      files.map((path) => {
                        return (
                          <>
                            <ItemImage key={uuidv4()} src={path} alt="files" />
                          </>
                        );
                      })}
                  </ListItem>
                );
              }
            )}
        </ul>
      </div>
      {!isFetching && Loading.circle()}
    </>
  );
};

const ListItem = styled.li`
  list-style: none;
  width: 1240px;
  margin-top: 40px;

  &:first-child {
    margin-top: 10px;
  }
`;

const ItemTitle = styled.h4`
  font-size: 22px;
  margin: 0;
  font-weight: 600;
`;

const ItemTime = styled.p`
  margin: 0;
  margin-right: 16px;
  margin-left: 10px;
  font-weight: 500;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemEdited = styled.p`
  margin: 0;
  opacity: 0.4;
  font-size: 15px;
`;

const ItemAbout = styled.h5`
  margin: 0;
  margin-top: 5px;
  font-weight: 500;
  font-size: 16px;
`;

const ItemText = styled.p`
  font-size: 26px;
  font-weight: 400;
  margin: 18px 0;
`;

const ItemImage = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 10px;
  border-radius: 10px;
`;

export default BlogList;
