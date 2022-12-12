import { FaThinkPeaks } from "react-icons/fa";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { MdOutlineBloodtype, MdOutlineSpaceDashboard, MdOutlineContactPhone } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { TfiGallery } from "react-icons/tfi";
import { TbZoomQuestion } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";



const sidebarRowsData = [
    {id: 1, rowName: "Dashboard", routeTo: "/dashboard", Icon: MdOutlineSpaceDashboard},
    {id: 2, rowName: "Blood Groups", routeTo: "/manage-blood-groups", Icon: MdOutlineBloodtype, pages: 
        [
            {id: 1, rowName: "Add Blood Group", routeTo: "/create-blood-group"},
            {id: 2, rowName: "Manage Blood Group", routeTo: "/manage-blood-groups"}
        ]
    },
    {id: 3, rowName: "Donors", routeTo: "/donors", Icon: HiOutlineUserGroup},
    {id: 4, rowName: "Messages", routeTo: "/manage-messages", Icon: AiOutlineMessage},
    {id: 5, rowName: "Blood Requirers", routeTo: "/manage-blood-requirers", Icon: BiDonateBlood},
    {id: 6, rowName: "Subscribers", routeTo: "/subscribers", Icon: HiOutlineUserGroup},
    {id: 7, rowName: "Home Page", Icon: AiOutlineHome, pages: 
    [
        {id: 1, rowName: "Manage Sliders", routeTo: "/cms-manage-sliders"},
        {id: 2, rowName: "Create Slider", routeTo: "/cms-create-slider"},
        {id: 4, rowName: "Blood Group Info", routeTo: "/cms-blood-group-info"},
        {id: 15, rowName: "Helpful Info", routeTo: "/cms-helpful-info"},
        {id: 5, rowName: "Our Initative", routeTo: "/cms-initiative"},
        {id: 6, rowName: "Our Value", routeTo: "/cms-value"}
    ]
    },
    {id: 8, rowName: "About Page", Icon: FaThinkPeaks, pages: 
    [
        {id: 1, rowName: "Achievements Section", routeTo: "/cms-achievements-section"},
        {id: 2, rowName: "Donor Review Section", routeTo: "/cms-donor-reviews-section"},
        {id: 3, rowName: "Volunteer Section", routeTo: "/cms-volunteer-section"},
        {id: 4, rowName: "About Us", routeTo: "/cms-who-we-are"},
        {id: 5, rowName: "Hero Image", routeTo: "/cms-about-us-hero-image"},
        {id: 6, rowName: "Create Donor Review", routeTo: "/cms-create-donor-review"},
        {id: 7, rowName: "Create Volunteer", routeTo: "/cms-create-volunteer"},
        {id: 8, rowName: "Manage Volunteers", routeTo: "/cms-volunteers"},
        {id: 9, rowName: "Donor Reviews", routeTo: "/cms-donor-reviews"}
    ]},
    {id: 9, rowName: "Gallery Page", Icon: TfiGallery, pages: 
    [
        {id: 1, rowName: "Gallery Section", routeTo: "/cms-gallery-section"},
        {id: 2, rowName: "Create Gallery", routeTo: "/cms-create-gallery"},
        {id: 3, rowName: "Manage Galleries", routeTo: "/cms-manage-galleries"},
        {id: 4, rowName: "Hero Image", routeTo: "/cms-gallery-hero-image"},
    ]
    },
    {id: 10, rowName: "Faq Page", Icon: TbZoomQuestion, pages: 
    [
        {id: 1, rowName: "Faq Section", routeTo: "/cms-faq-section"},
        {id: 2, rowName: "Sponsor Section", routeTo: "/cms-sponsor-section"},
        {id: 3, rowName: "Create Faq", routeTo: "/cms-create-faq"},
        {id: 4, rowName: "Create Sponsor", routeTo: "/cms-create-sponsor"},
        {id: 5, rowName: "Hero Image", routeTo: "/cms-faq-hero-image"},
        {id: 6, rowName: "Manage Faqs", routeTo: "/cms-manage-faqs"},
        {id: 7, rowName: "Manage Sponsors", routeTo: "/cms-manage-sponsors"}
    ]
    },
    {id: 11, rowName: "Contact Page", Icon: MdOutlineContactPhone, pages: 
    [
        {id: 1, rowName: "Hero Image", routeTo: "/cms-contact-us-hero-image"},
        {id: 2, rowName: "Contact Info Section", routeTo: "/cms-contact-us-info-section"},
    ]
    },
]
export default sidebarRowsData
