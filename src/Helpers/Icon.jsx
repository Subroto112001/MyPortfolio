import { CiFacebook, CiMail, CiTwitter, CiYoutube } from "react-icons/ci";
import { IoLogoInstagram, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

export const swiperIcon = {
  prev: <IoMdArrowBack />,
  next: <IoMdArrowForward />,
};


export const contactIcon = [
  {
    id: 1,
    icon: <CiMail />,
  },
  {
    id: 2,
    icon: <CiFacebook />,
  },
  {
    id: 3,
    icon: <IoLogoInstagram />,
  },
  {
    id: 4,
    icon: <CiTwitter />,
  },
  {
    id: 5,
    icon: <CiYoutube />,
  },
];