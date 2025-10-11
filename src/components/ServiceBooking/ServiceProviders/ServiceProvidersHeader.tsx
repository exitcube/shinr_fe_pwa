import Image from "next/image";
import React from "react";

interface ServiceProvidersHeaderProps {
    onBack: () => void;
}

const ServiceProvidersHeader: React.FC<ServiceProvidersHeaderProps> = ({onBack}) => {
    return (
        <div className="bg-gray-100 font-poppins flex items-center relative h-10">
            <Image
                className="absolute left-0"
                src="/assets/icons/backButton.svg"
                alt="icon"
                width={40}
                height={40}
                onClick={onBack}
            />
            <h1 className="text-[16px] font-normal text-[#101010] mx-auto">
                Service Providers
            </h1>
        </div>
    );
};

export default ServiceProvidersHeader;
