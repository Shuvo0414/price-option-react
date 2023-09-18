import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarksData = [
    {
      student: "Student 1",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 92,
    },
    {
      student: "Student 2",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 90,
    },
    {
      student: "Student 3",
      mathMarks: 78,
      physicsMarks: 76,
      chemistryMarks: 84,
    },
    {
      student: "Student 4",
      mathMarks: 88,
      physicsMarks: 82,
      chemistryMarks: 91,
    },
    {
      student: "Student 5",
      mathMarks: 76,
      physicsMarks: 70,
      chemistryMarks: 78,
    },
    {
      student: "Student 6",
      mathMarks: 95,
      physicsMarks: 89,
      chemistryMarks: 96,
    },
    {
      student: "Student 7",
      mathMarks: 89,
      physicsMarks: 84,
      chemistryMarks: 88,
    },
    {
      student: "Student 8",
      mathMarks: 72,
      physicsMarks: 66,
      chemistryMarks: 74,
    },
    {
      student: "Student 9",
      mathMarks: 94,
      physicsMarks: 90,
      chemistryMarks: 93,
    },
    {
      student: "Student 10",
      mathMarks: 82,
      physicsMarks: 79,
      chemistryMarks: 85,
    },
  ];

  return (
    <div>
      <LChart width={900} height={400} data={studentMarksData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={"mathMarks"} stroke="blue"></Line>
        <Line dataKey={"physicsMarks"} stroke="black"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
