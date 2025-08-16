// src/page/Registration.jsx
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const RegistrationPage = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      teamName: "",
      instituteName: "",
      members: [{ name: "", rollNo: "", branch: "", year: "", mobile: "", email: "" }],
      transactionNo: "",
      receiptFile: null
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members"
  });

  const onSubmit = (data) => {
   const processedData = {
    ...data,
    receiptFile: data.receiptFile?.[0]?.name || null  // show file name instead of File object
  };

  console.log("Submitted Form Data:", processedData);
  alert("Form submitted! Check console.");
  };

  const years = ["1st", "2nd", "3rd", "4th"];
  const branches = ["CSE", "IT", "ECE", "ECE(IoT)", "EE", "ME", "CE", "CHE", "B.PHARMA", "BBA"];

  // Hardcoded bank details
  const bankDetails = {
    accountNo: "99999555951834",
    accountName: "AMAN JAISWAL",
    ifsc: "SBIN0002578"
  };

  return (
    <div className="relative w-screen min-h-screen flex justify-center items-start pt-16 px-4 md:px-0">
      <img
        src="/bg2.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        draggable="false"
      />
      <div className="absolute inset-0 bg-black/50 -z-10 backdrop-blur-sm" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-black/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-4xl flex flex-col gap-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-6">
          Team Registration
        </h1>

        {/* Team & Institute */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("teamName", { required: "Team Name is required" })}
            placeholder="Team Name"
            className={`px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
              errors.teamName ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
            }`}
          />
          <input
            {...register("instituteName", { required: "Institute Name is required" })}
            placeholder="Institute Name"
            className={`px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
              errors.instituteName ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
            }`}
          />
        </div>

        {/* Players */}
        {fields.map((field, index) => (
          <div key={field.id} className="bg-black/30 p-4 rounded-xl flex flex-col gap-3">
            <h2 className="text-yellow-400 font-semibold text-lg">Member {index + 1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register(`members.${index}.name`, {
                  required: "Name is required",
                  pattern: { value: /^[A-Za-z ]+$/, message: "Only alphabets allowed" }
                })}
                placeholder="Name"
                className={`px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
                  errors.members?.[index]?.name ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
                }`}
              />

              <input
                {...register(`members.${index}.rollNo`, {
                  pattern: { value: /^[A-Za-z0-9]+$/, message: "Only alphanumeric allowed" }
                })}
                placeholder="Roll No"
                className={`px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
                  errors.members?.[index]?.rollNo ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
                }`}
              />

              <select
                {...register(`members.${index}.branch`, { required: "Branch is required" })}
                className={`px-4 py-2 rounded-lg bg-black/40 text-white focus:outline-none focus:ring-2 ${
                  errors.members?.[index]?.branch ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
                }`}
              >
                <option value="" disabled>Select Branch</option>
                {branches.map((branch, idx) => (
                  <option key={idx} value={branch} className="bg-black/70 text-white hover:bg-yellow-500 hover:text-black">
                    {branch}
                  </option>
                ))}
              </select>

              <select
                {...register(`members.${index}.year`, { required: "Year is required" })}
                className={`px-4 py-2 rounded-lg bg-black/40 text-white focus:outline-none focus:ring-2 ${
                  errors.members?.[index]?.year ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
                }`}
              >
                <option value="" disabled>Select Year</option>
                {years.map((year, idx) => (
                  <option key={idx} value={year} className="bg-black/70 text-white hover:bg-yellow-500 hover:text-black">{year}</option>
                ))}
              </select>

              <input
                {...register(`members.${index}.mobile`, {
                  required: "Mobile number is required",
                  pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
                })}
                placeholder="Mobile No"
                className={`px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
                  errors.members?.[index]?.mobile ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
                }`}
              />

              <input
                {...register(`members.${index}.email`, {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" }
                })}
                placeholder="Email ID"
                className={`px-4 py-2 rounded-lg bg-black/40 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
                  errors.members?.[index]?.email ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
                }`}
              />
            </div>

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="self-end text-red-500 hover:text-red-400 font-semibold mt-2"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        {fields.length < 5 && (
          <button
            type="button"
            onClick={() => append({ name: "", rollNo: "", branch: "", year: "", mobile: "", email: "" })}
            className="self-start px-6 py-3 bg-yellow-500 hover:bg-yellow-400 rounded-lg font-semibold transition-colors"
          >
            Add Player
          </button>
        )}

        {/* Bank Details Display */}
        <div className="bg-black/30 p-4 rounded-xl flex flex-col gap-3 mt-6">
          <h2 className="text-yellow-400 font-semibold text-lg">Bank Details (For Payment)</h2>
          <p className="text-white">Account Number: {bankDetails.accountNo}</p>
          <p className="text-white">Account Name: {bankDetails.accountName}</p>
          <p className="text-white">IFSC Code: {bankDetails.ifsc}</p>
<div className="flex flex-col mt-5 gap-5">
     <input
            {...register("transactionNo", { required: "Transaction number required" })}
            placeholder="Transaction Id"
            className={`px-4 py-2 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
              errors.transactionNo ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
            }`}
          />
<h2 className="text-white mt-5">Uplaod ScreenShot of payment</h2>
          <input
            type="file"
            {...register("receiptFile", { required: "Receipt file required" })}
            className={`px-4 py-2 rounded-lg bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
              errors.receiptFile ? "focus:ring-red-500 border-2 border-red-500" : "focus:ring-yellow-400"
            }`}
          />
</div>
     
        </div>

        <button
          type="submit"
          className="self-end px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:from-orange-600 hover:to-yellow-500 transition-transform hover:scale-105 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
