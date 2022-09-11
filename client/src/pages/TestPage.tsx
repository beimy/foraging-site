import React, {FC} from "react";
import MapComp from "../components/MapComp/index.tsx";
import MapMenu from "../components/MapMenu/index.tsx";

interface testProps {

};

const TestPage: FC<testProps> = ({}) => {
    return (
        <div className="flex justify-center min-h-full min-w-full">
            {/* <MapMenu /> */}
            <MapComp />
        </div>
    );
};

export default TestPage;