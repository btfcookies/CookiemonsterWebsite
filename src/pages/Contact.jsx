import ContactCard from "./ContactCard"
import githubIcon from "../assets/github-white-icon.png"
import discordIcon from "../assets/fa58bca06f5eb3f2c84ea816bf756949.png"
import emailIcon from "../assets/email-icon.svg"

function Contact() {
  return (
    <div className="page">
      <h1 className="title"> Contact Me</h1>
      <ContactCard icon={githubIcon} name="Github" username="btfcookies"/>
      <ContactCard icon={discordIcon} name="Discord" username="btf_cookies"/>
      <ContactCard icon={emailIcon} name="Email" username="lawrence@reamus.app"/>

    </div>
  )
}

export default Contact
