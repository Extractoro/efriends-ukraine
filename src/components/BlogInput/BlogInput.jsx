import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiImage } from "react-icons/bi";
import { useAddPostMutation } from "../../redux/posts/postApi";
import { Notify } from "notiflix";

const BlogInput = () => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const [addPost] = useAddPostMutation();
  const ref = useRef(null);
  const textAreaRef = useRef(null);

  const reset = () => {
    setText("");
    setFiles([]);
  };

  const useAutosizeTextArea = (textAreaRef, value) => {
    useEffect(() => {
      if (textAreaRef) {
        textAreaRef.style.height = "0px";
        const scrollHeight = textAreaRef.scrollHeight;

        textAreaRef.style.height = scrollHeight + "px";
      }
    }, [textAreaRef, value]);
  };

  useAutosizeTextArea(textAreaRef.current, text);

  useEffect(() => {
    const handleChangeImage = (event) => {
      const fileList = event.target.files;
      const arr = [...fileList];

      // for (let i = 0; i < arr.length; i++) {
      //   formData.append("files", arr[i]);
      // }

      setFiles(arr);
    };

    const element = ref.current;

    element.addEventListener("change", handleChangeImage);

    return () => {
      element.removeEventListener("change", handleChangeImage);
    };
  }, []);

  const handleChange = (e) => {
    const val = e.target?.value;
    setText(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }

      formData.append("text", text);

      // for (var [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      addPost(formData).unwrap();
      reset();
      Notify.success("Post created!");
    } catch (error) {
      Notify.failure(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div
          style={{
            position: "relative",
            width: "inherit",
          }}
        >
          <Input
            type="name"
            name="text"
            onChange={handleChange}
            placeholder="Напишить щось цікаве"
            ref={textAreaRef}
            value={text}
            required
          />

          <div>
            <FileBtn htmlFor="upload" ref={ref}>
              <BiImage fontSize={22} />
              <input
                type="file"
                ref={ref}
                multiple
                max={12}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  position: "absolute",
                  outline: "none",
                  background: "transparent",
                  border: "none",
                  opacity: 0,
                }}
              />
            </FileBtn>

            <p
              style={{
                position: "absolute",
                margin: 0,
                marginLeft: "65px",
                bottom: "23px",
                fontSize: "14px",
              }}
            >
              Maximum 12 photo
            </p>
          </div>

          <SubmitBtn type="submit">Submit</SubmitBtn>
        </div>
      </Form>
    </>
  );
};

const Form = styled.form`
  font-family: "Ubuntu", arial;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
`;

const Input = styled.textarea`
  position: relative;
  font-family: "Ubuntu", arial;
  font-size: 20px;
  padding: 10px 10px 50px 15px;
  width: 100%;
  resize: none;
  box-sizing: border-box;
  border: 1px solid #feb737;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  margin-top: 4px;
  background: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: hidden;

  &:focus,
  &:hover {
    border: 1px solid #e4a431;
  }

  &::placeholder {
    color: black;
    position: absolute;
    top: 15px;
    left: 15px;
  }
`;

const FileBtn = styled.label`
  position: absolute;
  bottom: 13px;
  left: 15px;
  display: flex;
  margin-right: 20px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background-color: rgb(254, 183, 55);
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  align-items: center;
  justify-content: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.75);
    background-color: #e4a431;
  }

  &:hover {
    background-color: #e4a431;
    bottom: 14px;
  }
`;

const SubmitBtn = styled.button`
  position: absolute;
  bottom: 12px;
  right: 10px;
  display: flex;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background-color: rgb(254, 183, 55);
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  align-items: center;
  justify-content: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.75);
    background-color: #e4a431;
  }

  &:hover {
    background-color: #e4a431;
    bottom: 11px;
  }
`;

export default BlogInput;
