import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="francisstephan.05@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9003502687" Image={FiPhone} />
      <SingleInfo text="Chennai, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
