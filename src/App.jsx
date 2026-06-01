import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import { Button } from "./components/ui/button";
import LandingPage from "./pages/LandingPage";
import OnBoarding from "./pages/OnBoarding";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import MyJob from "./pages/MyJob";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <OnBoarding /> },
      { path: "/jobs", element: <JobListing /> },
      { path: "/job/:id", element: <Job /> },
      { path: "/postjob", element: <PostJob /> },
      { path: "/savedjob", element: <SavedJobs /> },
      { path: "/myjobs", element: <MyJob /> },

     
     
     
     
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
