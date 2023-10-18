import React, { useCallback } from "react";
import ReactFlow, {
  // addEdge,
  // MiniMap,
  Controls,
  // Background,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";
import {
  nodes as initialNodes,
  edges as initialEdges
} from "./nodes";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

// const onConnectStart = () => false;

const onNodeDoubleClick = (event, node) => {
  window.open("AcademicLiveCare.pdf", "_blank");
};

const downloadPDF = (event, node) => {
  const link = document.createElement("a");

  // log the current path
  console.log(window.location.pathname);

  link.href = "AcademicLiveCare.pdf";
  link.download = "AcademicLiveCare.pdf";

  link.href = node.fileName
  link.download = node.fileName

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Flowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
      // onConnect={onConnect}
      // onConnectStart={onConnectStart}
      onNodeDoubleClick={downloadPDF}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
    >
      <Controls />
    </ReactFlow>
  );
};

export default Flowchart;
