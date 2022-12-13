
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill='none'
      viewBox="0 0 24 24"
      stroke='currentColor'
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} color='red' />} className="accord__tab">
        <AccordionHeader onClick={() => handleOpen(1)} 
        className="border border-[#C1C5C5] px-6 loycy-regular loycy-400 text-[18px] text-[#283234]"
        >
          LAND FLOW STATION UPGRADE, 10 FLOW STATIONS (ADDAX-PO –4024-36237) – DIRECT MAJOR CONTRACTS –ON GOING
        </AccordionHeader>
        <AccordionBody className="loycy-regular loycy-400 text-lg">
          <ul>
            <li>Upgrading of flow station instrument system </li>
            <li>Installation of fire loop system </li>
            <li>Incorporation of ESD systems in the flow station</li>
            <li>Installation of flow station utility lines</li>
            <li>Installation of blow down system for flow station</li>
            <li>Procurement of instruments and construction</li>
          </ul>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="accord__tab">
      <AccordionHeader onClick={() => handleOpen(2)} 
        className="border border-[#C1C5C5] px-6 loycy-regular loycy-400 text-[18px] text-[#283234]"
        >
          LAND FLOW STATION UPGRADE, 10 FLOW STATIONS (ADDAX-PO –4024-36237) – DIRECT MAJOR CONTRACTS –ON GOING
        </AccordionHeader>
        <AccordionBody className="loycy-regular loycy-400 text-lg">
          <ul>
            <li>Upgrading of flow station instrument system </li>
            <li>Installation of fire loop system </li>
            <li>Incorporation of ESD systems in the flow station</li>
            <li>Installation of flow station utility lines</li>
            <li>Installation of blow down system for flow station</li>
            <li>Procurement of instruments and construction</li>
          </ul>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="accord__tab">
      <AccordionHeader onClick={() => handleOpen(3)} 
        className="border border-[#C1C5C5] px-6 loycy-regular loycy-400 text-[18px] text-[#283234]"
        >
          LAND FLOW STATION UPGRADE, 10 FLOW STATIONS (ADDAX-PO –4024-36237) – DIRECT MAJOR CONTRACTS –ON GOING
        </AccordionHeader>
        <AccordionBody className="loycy-regular loycy-400 text-lg">
          <ul>
            <li>Upgrading of flow station instrument system </li>
            <li>Installation of fire loop system </li>
            <li>Incorporation of ESD systems in the flow station</li>
            <li>Installation of flow station utility lines</li>
            <li>Installation of blow down system for flow station</li>
            <li>Procurement of instruments and construction</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}