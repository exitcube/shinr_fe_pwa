"use client";
import React, { useState } from "react";
import { ArrowLeft, Upload, ChevronDown } from "lucide-react";
import SelectModal from "./SelectModal";
import BottomSheetSelect from "../BottomSheetSelect";
import NavButton from "@/common/Buttons/NavButton";

interface AddVehicleFormProps {
  onBack: () => void;
}

const AddVehicleForm: React.FC<AddVehicleFormProps> = ({ onBack }) => {
  // const [brandsPage, setBrandsPage] = useState(1);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    vehicleType: "",
    year: "",
    fuelType: "",
    nickName: "",
  });

  const [activeModal, setActiveModal] = useState<string | null>(null);

  // const { data: bransData, isLoading: brandsLoading } = useBrandQuery(
  //   brandsPage,
  //   10
  // );
  const modelOptions = ["Sedan", "SUV", "Hatchback", "Coupe", "Wagon"];
  const fuelTypeOptions = ["Petrol", "Diesel", "Electric", "Hybrid"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModalSelect = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const handleSubmit = () => {
  //   console.log("Form submitted:", formData);
  //   // Handle form submission
  // };

  return (
    <div className="fixed inset-0 bg-[#F5F5F5] z-50 flex flex-col font-poppins">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft size={24} className="text-[#101010]" />
        </button>
        <h1 className="text-lg font-medium text-[#101010]">New Vehicle</h1>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {/* Brand */}
          <div>
            <BottomSheetSelect
              label="Brand"
              options={[
                { label: "Model A", value: "model_a" },
                { label: "Model B", value: "model_b" },
              ]}
              value={formData.brand}
              onChange={(val) =>
                setFormData((prev) => ({ ...prev, model: val }))
              }
              placeholder="Select Vehicle Brand"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Model</label>
            <button
              type="button"
              onClick={() => setActiveModal("model")}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-left focus:outline-none focus:border-[#128C7E] flex items-center justify-between"
            >
              <span
                className={formData.model ? "text-gray-900" : "text-gray-400"}
              >
                {formData.model || "Select Vehicle Model"}
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </button>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Vehicle Type
            </label>
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleInputChange}
              placeholder="Vehicle Type"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#128C7E]"
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="Enter Vehicle Year"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#128C7E]"
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Fuel Type
            </label>
            <button
              type="button"
              onClick={() => setActiveModal("fuelType")}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-left focus:outline-none focus:border-[#128C7E] flex items-center justify-between"
            >
              <span
                className={
                  formData.fuelType ? "text-gray-900" : "text-gray-400"
                }
              >
                {formData.fuelType || "Select Vehicle Fuel Type"}
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </button>
          </div>

          {/* Nick Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Nick Name
            </label>
            <input
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={handleInputChange}
              placeholder="Enter Nickname for you vehicle"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#128C7E]"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Photo Upload
            </label>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <button className="text-[#128C7E] text-sm font-medium mb-1">
                    Upload Photo
                  </button>
                  <p className="text-xs text-gray-400">
                    JPEG, PNG and JPG, Max file size 8MB
                  </p>
                </div>
                <button className="w-10 h-10 bg-[#128C7E] rounded-lg flex items-center justify-center hover:bg-[#0f7269] transition-colors">
                  <Upload size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fixed Button */}
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <NavButton title="Next" />
      </div>

      {/* Model Selection Modal */}
      <SelectModal
        isOpen={activeModal === "model"}
        onClose={() => setActiveModal(null)}
        title="Model"
        options={modelOptions}
        selectedValue={formData.model}
        onSelect={(value) => handleModalSelect("model", value)}
      />

      {/* Fuel Type Selection Modal */}
      <SelectModal
        isOpen={activeModal === "fuelType"}
        onClose={() => setActiveModal(null)}
        title="Fuel Type"
        options={fuelTypeOptions}
        selectedValue={formData.fuelType}
        onSelect={(value) => handleModalSelect("fuelType", value)}
      />
    </div>
  );
};

export default AddVehicleForm;
