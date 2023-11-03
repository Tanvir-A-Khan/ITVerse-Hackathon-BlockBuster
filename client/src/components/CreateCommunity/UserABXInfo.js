import React from "react";
import useUserABXInfo from "../../hooks/useUserABXInfo";

const UserABXInfo = () => {
  const { value } = useUserABXInfo();

  return (
    <div className="p-8">
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-900">User Details</h3>
        <dl className="mt-2">
          <dt className="text-sm font-medium text-gray-500">Total ABX</dt>
          <dd className="text-sm text-gray-900">{value} ABX</dd>
        </dl>
      </div>
    </div>
  );
};

export default UserABXInfo;
