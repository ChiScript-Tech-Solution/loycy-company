import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";
import { cranes, equipment, excavator, fork, lowbed, others, rollers } from "../../data/Data";
import Equipment from "./bulldozer";



const WorkDone = () => {
    const data = [
        {
            label: "Bulldozer",
            value: "bulldozer",
            desc: <Equipment data={equipment} />,
        },
        {
            label: "Excavator",
            value: "excavator",
            desc: <Equipment data={excavator} />,
        },

        {
            label: "Cranes",
            value: "cranes",
            desc: <Equipment data={cranes} />,
        },

        {
            label: "Rollers",
            value: "rollers",
            desc: <Equipment data={rollers} />,
        },

        {
            label: "Fork Lifts",
            value: "forkLifts",
            desc: <Equipment data={fork} />,

        },

        {
            label: "Low Beds",
            value: "lowbeds",
            desc: <Equipment data={lowbed} />,

        },

        {
            label: "Others",
            value: "others",
            desc: <Equipment data={others}/>,

        },
    ];

    return (
        <>
            <div className="px-8 lg:px-36 pt-10 pb-20">
                <Tabs id="custom-animation" value="bulldozer">
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