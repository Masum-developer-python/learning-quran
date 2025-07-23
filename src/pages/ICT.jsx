import React, { useState } from "react";

const ICT = () => {
  const [Unit, setUnit] = useState("");
  const [Topic, setTopic] = useState("");
  const [inputBase, setInputBase] = useState(10);
  const [tergetedBase, setTergetedBase] = useState(2);
  const [input, setInput] = useState(0);
  return (
    <div className="p-4 w-[100%]">
      <h1>Information and Communication Technology (ICT)</h1>
      <p>
        ICT refers to the integration of telecommunications, computers, and
        software to enable users to access, store, transmit, and manipulate
        information.
      </p>
      <div className="mt-4">
        <select
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => {
            const Topic = e.target.value;
            console.log(` topic: ${Topic}`);
            setUnit(e.target.value);
            // Handle the  topic here
          }}
        >
          <option value="">Select a topic</option>
          <option value="introduction">Introduction</option>
          <option value="networking">Networking</option>
          <option value="numbersystem">Number System</option>
          <option value="web-development">Web Development</option>
          <option value="programming">Programming</option>
          <option value="databases">Databases</option>
        </select>
        {Unit === "numbersystem" && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Input base:
            </label>
            <select
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setInputBase(e.target.value);
                console.log(` base: ${e.target.value}`);
              }}
            >
              <option value="10">ডেসিমাল</option>
              <option value="2">বাইনারি</option>
              <option value="8">অক্টাল</option>
              <option value="16">হেক্সাডেসিমাল</option>
            </select>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter a number"
              onChange={(e) => {
                setInput(e.target.value);
                console.log(`Input number: ${e.target.value}`);
                // Handle the input number here
              }}
            />
            <br />
            <label className="block text-sm font-medium text-gray-700">
              Select target base:
            </label>
            <select
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setTergetedBase(e.target.value);
                console.log(` base: ${e.target.value}`);
              }}
            >
              <option value="2">বাইনারি</option>
              <option value="8">অক্টাল</option>
              <option value="16">হেক্সাডেসিমাল</option>
            </select>
            <br />
            <div className="mt-4">
              <br />
              {tergetedBase && input && inputBase === 10 && (
                <div>
                  {(() => {
                    let tempInput = input;
                    let stepsNumber = [];
                    let reminders = [];
                    console.log(tempInput);

                    while (tempInput > 0) {
                      reminders.push(tempInput % tergetedBase);
                      console.log(reminders);
                      tempInput = Math.floor(tempInput / tergetedBase);
                      stepsNumber.push(tempInput);
                      console.log(tempInput);
                    }
                    return (
                      <div>
                        <h3 className="text-lg font-semibold">Steps:</h3>
                        <table className="border-collapse font-bangla mx-auto">
                          <tr className="w-full ">
                            <td className="font-semibold text-right ">
                              <div className=" inline-block">
                                {tergetedBase}
                              </div>
                              <div className=" inline-block border-l border-b border-gray-900">
                                &nbsp;{input}
                              </div>
                            </td>
                            <td className="font-semibold text-right inline-block">
                              &nbsp;
                            </td>
                            <td className="font-semibold pl-2">^</td>
                          </tr>
                          {stepsNumber.map((step, index) => (
                            <tr key={index} className="w-full">
                              <td className="font-semibold text-right ">
                                {index < stepsNumber.length - 1 && (
                                  <div className=" inline-block">
                                    {tergetedBase}
                                  </div>
                                )}

                                <div
                                  className={`inline-block ${
                                    index < stepsNumber.length - 1
                                      ? "border-l border-b border-gray-900"
                                      : ""
                                  }`}
                                >
                                  &nbsp;{step}
                                </div>
                              </td>
                              <td className="font-semibold text-right">
                                <div
                                  className={`inline-block ${
                                    index < stepsNumber.length - 1
                                      ? "border-b border-gray-900"
                                      : ""
                                  }`}
                                >
                                  - {reminders[index]}
                                </div>
                              </td>
                              <td>
                                <div className="inline-block border-r border-gray-900 ml-2">
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    );
                  })()}
                </div>
              )}
              <p className="text-6xl">
                {tergetedBase && (
                  <>
                    {input || "0"}
                    <sub>{inputBase}</sub> -
                    {` ${parseInt(input, inputBase)
                      .toString(tergetedBase)
                      .toUpperCase()}`}{" "}
                    <sub>{tergetedBase}</sub>
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ICT;
