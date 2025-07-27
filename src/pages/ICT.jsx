import React, { useState } from "react";

const ICT = () => {
  const [Unit, setUnit] = useState("");
  const [Topic, setTopic] = useState("");
  const [inputBase, setInputBase] = useState(10);
  const [tergetedBase, setTergetedBase] = useState(2);
  const [input, setInput] = useState(0);
  const [integerPart, setIntegerPart] = useState(0);
  const [fractionalPart, setFractionalPart] = useState(0.0);
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
                let input = e.target.value;
                setInput(input);
                input.length === 0 ||
                  parseInt(input[input.length - 1], inputBase) >= 0 ||
                  input[input.length - 1] == "." ||
                  alert("Invalid digit for the selected base");
                setIntegerPart(Math.floor(e.target.value));
                setFractionalPart(
                  e.target.value.includes(".")
                    ? e.target.value.split(".")[1]
                    : 0
                );
                console.log(`Input number: ${e.target.value}`);
                // Handle the input number here
              }}
            />
            <br />
            <label className="block text-sm font-medium text-gray-700">
              Select target base:
            </label>
            <select
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm 
              p-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setTergetedBase(e.target.value);

                console.log(` base: ${e.target.value}`);
              }}
            >
              <option value="2">বাইনারি</option>
              <option value="8">অক্টাল</option>
              <option value="16">হেক্সাডেসিমাল</option>
              <option value="10">ডেসিমাল</option>
            </select>
            <br />
            <div className="mt-4">
              <p className="text-6xl">
                {tergetedBase && (
                  <>
                    {integerPart || "0"}
                    <sub>{inputBase}</sub> {" => "}
                    {` ${parseInt(integerPart, inputBase)
                      .toString(tergetedBase)
                      .toUpperCase()}`}{" "}
                    <sub>{tergetedBase}</sub>
                  </>
                )}
              </p>
              <br />
              {tergetedBase && input && inputBase == 10 && (
                <div className="mx-auto w-fit p-10">
                  {(() => {
                    let tempInput = integerPart;
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

                    let tempFractionalPart =
                      fractionalPart / 10 ** fractionalPart.length || 0;
                    let integerSteps = [];
                    let count = 0;
                    while (count < 10 && tempFractionalPart > 0) {
                      tempFractionalPart *= tergetedBase;
                      tempFractionalPart = tempFractionalPart.toFixed(6);
                      integerSteps.push(Math.floor(tempFractionalPart));

                      console.log(tempFractionalPart, integerSteps);

                      tempFractionalPart -= Math.floor(tempFractionalPart);
                      count++;
                    }
                    console.log(integerSteps);

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
                                &nbsp;{integerPart}
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
                        <p className="text-4xl text-left">
                          {integerPart || "0"}
                          <sub>{inputBase}</sub> {" => "}
                          {reminders.reverse().map((reminder, index) => (
                            <>
                              {` ${parseInt(reminder, inputBase)
                                .toString(tergetedBase)
                                .toUpperCase()}`}
                              
                            </>
                          ))}.
                          {integerSteps.map((reminder, index) => (
                            <>
                              {` ${parseInt(reminder, inputBase)
                                .toString(tergetedBase)
                                .toUpperCase()}`}
                              {index == integerSteps.length - 1 && (
                                <sub>{tergetedBase}</sub>
                              )}
                            </>
                          ))}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              )}

              {inputBase && input && tergetedBase == 10 && (
                <div className="mx-auto w-fit">
                  {(() => {
                    let msbPower = integerPart.toString().length - 1;
                    let lsbPower = fractionalPart.toString().length * -1;
                    let stepsPower = [];
                    console.log(`msbPower: ${msbPower}`);
                    console.log(`lsbPower: ${lsbPower}`);
                    while (msbPower >= lsbPower) {
                      stepsPower.push(msbPower);
                      msbPower--;
                    }
                    console.log(stepsPower);
                    let number = integerPart + fractionalPart;
                    console.log(`number: ${number}`);
                    return (
                      <>
                        <p className="text-4xl text-left">
                          {stepsPower.map((power, index) => (
                            <>
                              {number[index]} * {inputBase}
                              <sup>{power}</sup>{" "}
                              {index < stepsPower.length - 1 && " + "}
                            </>
                          ))}
                        </p>
                        <p className="text-5xl text-left">
                          ={" "}
                          {stepsPower.map((power, index) => (
                            <>
                              {number[index] * Math.pow(inputBase, power)}
                              {index < stepsPower.length - 1 && " + "}
                            </>
                          ))}
                        </p>
                        <p className="text-5xl text-left">
                          ={" "}
                          {stepsPower.reduce((acc, power, index) => {
                            return (
                              acc + number[index] * Math.pow(inputBase, power)
                            );
                          }, 0)}{" "}
                          <sub>10</sub>
                        </p>
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ICT;
