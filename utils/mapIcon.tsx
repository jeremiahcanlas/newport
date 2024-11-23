import { IoGlobeOutline, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';

const mapIcon = (name: string) => {
  switch (name) {
    case 'email':
      return SiGmail;
    case 'website':
      return IoGlobeOutline;
    case 'github':
      return IoLogoGithub;
    case 'linkedin':
      return IoLogoLinkedin;
    default:
      break;
  }
};

export default mapIcon;
