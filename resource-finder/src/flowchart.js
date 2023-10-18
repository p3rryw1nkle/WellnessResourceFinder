import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";
import fileDownload from 'js-file-download';
import axios from 'axios';

import {
  nodes as initialNodes,
  edges as initialEdges
} from "./nodes";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const onConnectStart = () => false;

const onNodeDoubleClick = (event, node) => {
  window.open("../pdfs/AcademicLiveCare.pdf", "_blank");
};

const downloadPDF = () => {
  const link = document.createElement("a");

  // log the current path
  console.log(window.location.pathname);

  link.href = "./resource-finder/src/pdfs/AcademicLiveCare.pdf";
  link.download = "AcademicLiveCare.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Flowchart = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      // onNodesChange={onNodesChange}
      // onEdgesChange={onEdgesChange}
    //   onConnect={onConnect}
      // onConnectStart={onConnectStart}
      onNodeDoubleClick={downloadPDF}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
    >
      {/* <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      /> */}
      <Controls />
      {/* <Background color="#aaa" gap={16} /> */}
    </ReactFlow>
  );
};

export default Flowchart;
