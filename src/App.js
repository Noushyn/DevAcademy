import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosBug } from "react-icons/io";
import { BrowserRouter, Routes , Route } from "react-router";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import AddArticle from "./pages/addArticle/AddArticle";
import Article from "./pages/article/article";
import EditArticle from "./pages/editArticle/editArticle";
import Articles from "./pages/articles/Articles";
import Courses from "./pages/courses/Courses";




function App(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-article" element={<AddArticle />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/edit-article/:articleId" element={<EditArticle />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/courses" element={<Courses />} />
            
        </Routes>
        </BrowserRouter>

    )
}

export default App;