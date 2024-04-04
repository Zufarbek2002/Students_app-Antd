import { Typography } from "antd";
import TeachersSearchComp from "../components/teachersComp/TeachersSearchComp";
import axios from "axios";
import { useEffect, useState } from "react";
import TeachersList from "../components/teachersComp/TeachersList";
import TeacherAddModalComp from "../components/teachersComp/TeacherAddModalComp";
import TeacherEditModalComp from "../components/teachersComp/TeacherEditModalComp";

const { Title } = Typography;

const Teachers = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data);
  const [studentData, setStudentData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const fetchApi = async () => {
    const res = await axios.get("http://localhost:3000/teachers");
    const data = await res.data;
    setData(data);
  };
  const addOpenModal = () => {
    setAddModal(true);
  };
  const addCloseModal = () => {
    setAddModal(false);
  };
  const editOpenModal = () => {
    setEditModal(true);
  };
  const editCloseModal = () => {
    setEditModal(false);
  };
  const addTeacher = (teacher) => {
    if (
      teacher.firstname.length >= 2 &&
      teacher.lastname.length >= 2 &&
      teacher.group !== "" &&
      teacher.level !== ""
    ) {
      axios.post("http://localhost:3000/teachers", teacher);
    }
  };
  const handleEdit = async (id) => {
    const res = await axios(`http://localhost:3000/teachers/${id}`);
    setStudentData(res.data);
    editOpenModal();
  };
  useEffect(() => {
    fetchApi();
  }, []);
  useEffect(() => {
    fetchApi();
  }, [addModal, editModal]);
  useEffect(() => {
    setFiltered(data);
  }, [data]);
  return (
    <div>
      <Title level={3} style={{ textAlign: "center" }}>
        Teachers list
      </Title>
      <TeachersSearchComp
        addOpenModal={addOpenModal}
        data={data}
        setFiltered={setFiltered}
      />
      <TeachersList
        filtered={filtered}
        setFiltered={setFiltered}
        handleEdit={handleEdit}
      />
      <TeacherAddModalComp
        addModal={addModal}
        addCloseModal={addCloseModal}
        addTeacher={addTeacher}
      />
      <TeacherEditModalComp
        editModal={editModal}
        editCloseModal={editCloseModal}
        studentData={studentData}
      />
    </div>
  );
};

export default Teachers;
