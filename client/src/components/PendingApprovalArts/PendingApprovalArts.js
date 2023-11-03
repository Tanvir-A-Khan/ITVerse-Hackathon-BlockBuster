import React from "react";
import { useParams } from "react-router-dom";
import PendingList from "./PendingList";

const PendingApprovalArts = () => {
  const { id } = useParams();
  return (
    <div>
      <PendingList communityId={id} />
    </div>
  );
};

export default PendingApprovalArts;
