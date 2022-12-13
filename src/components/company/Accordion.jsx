import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Icons } from "../../constant/Icons";

const Icon = ({ id, open }) => {
    return (
        <Icons.AccorArrow
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        />
    );
}


const Accor = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    return (
        <Fragment>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-2">
                <AccordionHeader onClick={() => handleOpen(1)} className={`${open === 1 ? "bg-[#01B8D7]" : "bg-[#002D6B]"} px-2 accor-text font-500 text-20`}>
                    Our Vision
                </AccordionHeader>
                <AccordionBody className="text-[18px] text-[#00040A] text-justify font-400">
                    To enhance our client’s facility integrity through the provision of conventional
                    and specialized services, while always employing acceptable safety environmental
                    and professional standards.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className={`${open === 2 ? "bg-[#002D6B]" : "bg-[#01B8D7]"} px-2 accor-text font-500 text-20`}>
                   Our Mission
                </AccordionHeader>
                <AccordionBody className="text-[18px] text-[#00040A] text-justify font-400">
                To enhance our client’s facility integrity through the provision of conventional
                    and specialized services, while always employing acceptable safety environmental
                    and professional standards.
                </AccordionBody>
            </Accordion>

        </Fragment>
    );
}

export default Accor