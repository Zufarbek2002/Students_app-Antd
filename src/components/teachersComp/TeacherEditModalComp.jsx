/* eslint-disable react/prop-types */
import { Input, Modal, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const TeacherEditModalComp = ({ editModal, editCloseModal, studentData }) => {
  const [id, setId] = useState(null);
  const [student, setStudent] = useState({
    id: null,
    firstname: "",
    lastname: "",
    group: "",
    level: "",
  });
  useEffect(() => {
    setStudent({
      id: studentData.id,
      firstname: studentData.firstname,
      lastname: studentData.lastname,
      group: studentData.group,
      level: studentData.level,
    });
    setId(studentData.id);
  }, [studentData]);
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.id]: e.target.value,
    });
  };
  const editStudent = async () => {
    await axios.put(`http://localhost:3000/teachers/${id}`, student);
    editCloseModal();
  };
  return (
    <>
      <Modal
        title="Edit Modal"
        open={editModal}
        onOk={editStudent}
        onCancel={editCloseModal}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: 20,
          }}
        >
          <Input
            id="firstname"
            value={student.firstname}
            placeholder="Firstname"
            size="large"
            onChange={handleChange}
          />
          <Input
            id="lastname"
            value={student.lastname}
            placeholder="Lastname"
            size="large"
            onChange={handleChange}
          />
          <div>
            <label htmlFor="select">Group: </label>
            <Select
              id="select"
              style={{
                width: 200,
              }}
              size="large"
              value={student.group}
              onChange={(value) => setStudent({ ...student, group: value })}
              options={[
                {
                  value: "React N34",
                  label: "React N34",
                },
                {
                  value: "React N35",
                  label: "React N35",
                },
                {
                  value: "React N45",
                  label: "React N45",
                },
              ]}
            />
          </div>
          <div>
            <label>Level: </label>
            <Select
              style={{
                width: 200,
              }}
              size="large"
              value={student.level}
              onChange={(value) => setStudent({ ...student, level: value })}
              options={[
                {
                  value: "Senior",
                  label: "Senior",
                },
                {
                  value: "Middle",
                  label: "Middle",
                },
                {
                  value: "Junior",
                  label: "Junior",
                },
              ]}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TeacherEditModalComp;
