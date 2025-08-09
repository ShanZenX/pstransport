import React from "react";

const StatisticCard = ({ item }) => (
    <div
        key={item.id}
        className="bg-white p-4 rounded-xl shadow-md flex flex-col"
    >
        <div className="flex flex-row items-center justify-start gap-3">
            <div className="bg-orange-400 p-3 rounded-lg">{item.icon}</div>
            <div>
                <h4 className="text-lg font-bold text-gray-900 m-0 leading-tight ">
                    {item.value}
                </h4>
                <p className="text-sm text-gray-500 m-0 text-start">
                    {item.label}
                </p>
            </div>
        </div>
    </div>
);

export default StatisticCard;