
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css';
import Header from "./Common/header";
import Footer from "./Common/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/styles.css';
import '../src/assets/css/responsive.css';
import "@fontsource/inter";

const Home = React.lazy(() => import("./Pages/home"));
const About = React.lazy(() => import("./Pages/about-us"));
const Contact = React.lazy(() => import("./Pages/contact"));
const Privacypolicy = React.lazy(() => import("./Pages/privacy-policy"));
const Codeofconduct = React.lazy(() => import("./Pages/code-of-conduct"));
const Termsconditions = React.lazy(() => import("./Pages/terms-and-conditions"));
const Test = React.lazy(() => import("./Pages/test"));
const Project = React.lazy(() => import("./Pages/project"));
const Project_view = React.lazy(() => import("./Pages/Project/project-view-page"));
const Industries = React.lazy(() => import("./Pages/industries/industries"));
const Press = React.lazy(() => import("./Pages/press"));
const Pressview = React.lazy(() => import("./Pages/Press/press-view-page"));
const Blog = React.lazy(() => import("./Pages/blog"));
const Blog_view = React.lazy(() => import("./Pages/blog/blog-view-page"));
const Tesst2 = React.lazy(() => import("./Pages/test2"));
const Tesst3 = React.lazy(() => import("./Pages/test3"));

function App() {
  return (   
       <Routes >
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<React.Suspense fallback={<>...</>}><About /></React.Suspense>} />
         <Route path="contact"  element={<React.Suspense fallback={<>...</>}> <Contact /></React.Suspense>}/>
         <Route path="privacy-policy" element={<React.Suspense fallback={<>...</>}><Privacypolicy /></React.Suspense>} />
         <Route path="code-of-conduct" element={<React.Suspense fallback={<>...</>}><Codeofconduct /></React.Suspense>} />
         <Route path="terms-and-conditions" element={<React.Suspense fallback={<>...</>}><Termsconditions /></React.Suspense>} />
         <Route path="project" element={<React.Suspense fallback={<>...</>}><Project /></React.Suspense>} />
         <Route path="industries/:slug" element={<React.Suspense fallback={<>...</>}><Industries /></React.Suspense>} />
         <Route path="project/:id" element={<React.Suspense fallback={<>...</>}><Project_view /></React.Suspense>} />
         <Route path="press" element={<React.Suspense fallback={<>...</>}><Press /></React.Suspense>} />
         <Route path="press/:slug" element={<React.Suspense fallback={<>...</>}><Pressview /></React.Suspense>} />
         <Route path="blog" element={<React.Suspense fallback={<>...</>}><Blog /></React.Suspense>} />
         <Route path="blog/:slug" element={<React.Suspense fallback={<>...</>}><Blog_view /></React.Suspense>} />
         <Route path="*" element={<Home />} />
         <Route path="test-vidoe" element={<React.Suspense fallback={<>...</>}><Test /></React.Suspense>} />
         <Route path="test2" element={<React.Suspense fallback={<>...</>}><Tesst2 /></React.Suspense>} />
         <Route path="test3" element={<React.Suspense fallback={<>...</>}><Tesst3 /></React.Suspense>} />
       </Route>
     </Routes>
  );
}

export default App;
 
function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}