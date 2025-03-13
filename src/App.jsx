import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import UsingAbstract from "./Components/UsingAbstract";
import ManageYourAccount from "./Components/ManageYourAccount";
import ManageOrganizationsTeamsandProjects from "./Components/ManageOrganizationsTeamsandProjects";
import ManageBilling from "./Components/ManageBilling"
import AuthenticateToAbstract from "./Components/AuthenticateToAbstract"
import './App.css'
import AbstractSupport from "./AbstractSupport";
import SignInPage from "./Components/SignInPage";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="signinpage" element={<SignInPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="usingabstract" element={<UsingAbstract />} />
          <Route path="manageyouraccount" element={<ManageYourAccount />} />
          <Route path="manageorganizationsteamsandprojects" element={<ManageOrganizationsTeamsandProjects />} />
          <Route path="managebilling" element={<ManageBilling />} />
          <Route path="authenticatetoabstract" element={<AuthenticateToAbstract />} />
          <Route path="abstractsupport" element={<AbstractSupport />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
