/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input, Modal, Select } from "antd";

const TeacherAddModalComp = ({ addModal, addCloseModal, addTeacher }) => {
    const [teacher, setTeacher] = useState({
        firstname: "",
        lastname: "",
        group: "",
      });
      const handleChange = (e) => {
        setTeacher({
          ...teacher,
          [e.target.id]: e.target.value.trim(),
        });
      };

      const handleAdd = (e) => {
        e.preventDefault();
        addCloseModal();
        addTeacher(teacher);
        setTeacher({
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
            value={teacher.firstname}
            placeholder="Firstname"
            size="large"
            onChange={handleChange}
          />
          <Input
            id="lastname"
            value={teacher.lastname}
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
              value={teacher.group}
              onChange={(value) => setTeacher({ ...teacher, group: value })}
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
            <label htmlFor="level">Level: </label>
            <Select
            id="level"
              style={{
                width: 200,
              }}
              size="large"
              value={teacher.level}
              onChange={(value) => setTeacher({ ...teacher, level: value })}
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
  )
}

export default TeacherAddModalComp