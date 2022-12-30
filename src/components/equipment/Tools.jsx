import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { BullDozer } from ".";


const WorkDone = () => {
    const data = [
        {
            label: "Bulldozer",
            value: "bulldozer",
            desc: <BullDozer />,
        },
        {
            label: "Pipelines",
            value: "pipelines",
            desc: <BullDozer />,
        },

        {
            label: "Tanks",
            value: "tanks",
            desc: <BullDozer />,
        },

        {
            label: "Inspection",
            value: "inspection",
            desc: <BullDozer />,
        },

        {
            label: "Onshore",
            value: "onshore",
            desc: <BullDozer />,
    
        },

        {
            label: "Offshore",
            value: "offshore",
            desc: <BullDozer/>,

        },
    ];

    return (
       <>
             <div className="px-8 lg:px-36 pt-10 pb-20">
            <Tabs id="custom-animation" value="maintenance">
                <TabsHeader className="bg-transparent p-8 tab-now-now">
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                   
                >
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
       </>
    );
}

export default WorkDone