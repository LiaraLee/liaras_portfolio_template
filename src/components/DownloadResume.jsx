import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href="https://drive.google.com/file/d/1_bDQpC8l887QpNw59hI3Iaoav6MuVlEa/view?usp=sharing" download="Liara Lee Tite Resume" className="flex items-center">
      <p className="mr-2">Liara Lee Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume