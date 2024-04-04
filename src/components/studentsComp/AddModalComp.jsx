/* eslint-disable react/prop-types */
import { Input, Modal, Select } from "antd";
import { useState } from "react";

const AddModalComp = ({ addModal, addCloseModal, addStudent }) => {
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    group: "",
  });
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addCloseModal();
    addStudent(student);
    setStudent({
      firstname: "",
      lastname: "",
      group: "",
    });
  };
  return (
    <>
      <Modal
        title="Add Modal"
        open={addModal}
        onOk={handleAdd}
        onCancel={addCloseModal}
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
        </div>
      </Modal>
    </>
  );
};

export default AddModalComp;
