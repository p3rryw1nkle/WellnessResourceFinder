import React from "react";
import { MarkerType, Position } from 'reactflow';


// create a style class for 'question' nodes
export const questionNodeStyle = {
  background: "#81c9e6",
  color: "#333",
  border: "1px solid #222138",
  width: 180
};

// create a style class for 'answer' nodes
export const answerNodeStyle = {
  background: "#E6e281",
  color: "#333",
  border: "1px solid #222138",
  width: 180
};

// create a style class for 'resource' nodes
export const resourceNodeStyle = {
  background: "#81e691",
  color: "#333",
  border: "1px solid #222138",
  width: 180
};

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "What do you need help with?"
    },
    position: { x: 250, y: 0 },
    interactive: false,
    style: questionNodeStyle
  },
  {
    id: "2",
    data: {
      label: "Mental Health"
    },
    position: { x: -100, y: 100 },
    interactive: false,
    style: answerNodeStyle
  },
  {
    id: "3",
    data: {
      label: "Academic/Career Advising"
    },
    position: { x: 100, y: 100 },
    style: {
      background: "#D6D5E6",
      color: "#333",
      border: "1px solid #222138",
      width: 180
    },
    interactive: false,
    style: answerNodeStyle
  },
  {
    id: "4",
    position: { x: 300, y: 100 },
    data: {
      label: "Physical Wellness"
    },
    interactive: false,
    style: answerNodeStyle
  },
  {
    id: "5",
    data: {
      label: "Finding Community"
    },
    position: { x: 500, y: 100 },
    interactive: false,
    style: answerNodeStyle
  },
  {
    id: '6',
    type: 'resource',
    data: {
      label: 'Academic Live Care',
    },
    className: 'circle',
    fileName: 'AcademicLiveCare.pdf',
    style: resourceNodeStyle,
    position: { x: 400, y: 200 },
  },
  {
    id: '7',
    type: 'resource',
    data: {
      label: 'Counseling Center',
    },
    className: 'circle',
    fileName: 'CounselingCenter.pdf',
    style: resourceNodeStyle,
    position: { x: 150, y: 200 },
  },
//   {
//     id: "6",
//     type: "output",
//     data: {
//       label: (
//         <>
//           An <strong>output node</strong>
//         </>
//       )
//     },
//     position: { x: 100, y: 480 }
//   },
//   {
//     id: "7",
//     type: "output",
//     data: { label: "Another output node" },
//     position: { x: 400, y: 450 }
//   }
];

export const edges = [
  { id: "e1-2", 
    source: "1", 
    target: "2", 
    // label: "this is an edge label" 
  },
  { id: "e1-3", source: "1", target: "3" },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    animated: false,
    // label: "animated edge",
    interactive: false,
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    // label: "edge with arrow head",
    // markerEnd: {
    //   type: MarkerType.ArrowClosed
    // },
    interactive: false,
  },
//   {
//     id: "e5-6",
//     source: "5",
//     target: "6",
//     type: "smoothstep",
//     label: "smooth step edge"
//   },
//   {
//     id: "e5-7",
//     source: "5",
//     target: "7",
//     type: "step",
//     style: { stroke: "#f6ab6c" },
//     label: "a step edge",
//     animated: true,
//     labelStyle: { fill: "#f6ab6c", fontWeight: 700 }
//   }
];