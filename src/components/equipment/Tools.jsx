import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import BullDozer from "./bulldozer";


const WorkDone = () => {
    const data = [
        {
            label: "Bulldozer",
            value: "bulldozer",
            desc: <BullDozer />,
        },
        {
            label: "Excavator",
            value: "excavator",
            desc: <BullDozer />,
        },

        {
            label: "Cranes",
            value: "cranes",
            desc: <BullDozer />,
        },

        {
            label: "Rollers",
            value: "rollers",
            desc: <BullDozer />,
        },

        {
            label: "Fork Lifts",
            value: "forkLifts",
            desc: <BullDozer />,

        },

        {
            label: "Low Beds",
            value: "lowbeds",
            desc: <BullDozer />,

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