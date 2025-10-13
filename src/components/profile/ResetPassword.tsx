"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Check, X } from "lucide-react";

interface ResetPasswordProps {
  onBack: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    currentPassword: "qwerty@123",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [validations, setValidations] = useState({
    hasUppercase: false,
    hasNumber: false,
    hasMinLength: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate new password
    if (name === "newPassword") {
      setValidations({
        hasUppercase: /[A-Z]/.test(value),
        hasNumber: /[0-9]/.test(value),
        hasMinLength: value.length >= 8,
      });
    }
  };

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSaveChanges = () => {
    console.log("Save changes:", formData);
    // Handle password reset logic
  };

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
        <h1 className="text-lg font-medium text-[#101010]">Reset Password</h1>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.current ? "text" : "password"}
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#101010] focus:outline-none focus:border-[#128C7E] pr-12"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("current")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.current ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#101010] placeholder-gray-400 focus:outline-none focus:border-[#128C7E] pr-12"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("new")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.new ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPasswords.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#101010] placeholder-gray-400 focus:outline-none focus:border-[#128C7E] pr-12"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirm")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPasswords.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2">
              {validations.hasUppercase ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <X size={16} className="text-gray-400" />
              )}
              <span className={`text-xs ${validations.hasUppercase ? "text-green-500" : "text-gray-500"}`}>
                At least 1 uppercase.
              </span>
            </div>
            <div className="flex items-center gap-2">
              {validations.hasNumber ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <X size={16} className="text-gray-400" />
              )}
              <span className={`text-xs ${validations.hasNumber ? "text-green-500" : "text-gray-500"}`}>
                At least 1 number.
              </span>
            </div>
            <div className="flex items-center gap-2">
              {validations.hasMinLength ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <X size={16} className="text-gray-400" />
              )}
              <span className={`text-xs ${validations.hasMinLength ? "text-green-500" : "text-gray-500"}`}>
                At least 8 character.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fixed Button */}
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <button
          onClick={handleSaveChanges}
          className="w-full bg-[#128C7E] text-white py-3 rounded-full font-medium text-sm hover:bg-[#0f7269] transition-colors flex items-center justify-between px-6"
        >
          <span>Save Changes</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
