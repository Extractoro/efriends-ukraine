import BlogInput from "../components/BlogInput/BlogInput";
import BlogList from "../components/BlogList/BlogList";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

const BlogPage = () => {
  return (
    <>
      <Container>
        <BlogInput />
        <BlogList />
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;
