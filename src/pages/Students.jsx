import { Typography } from "antd";
import SearchComp from "../components/studentsComp/SearchComp";
import StudentsList from "../components/studentsComp/StudentsList";
import axios from "axios";
import { useEffect, useState } from "react";
import AddModalComp from "../components/studentsComp/AddModalComp";
import EditModalComp from "../components/studentsComp/EditModalComp";

const { Title } = Typography;
const Students = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data);
  const [studentData, setStudentData] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const fetchApi = async () => {
    const res = await axios.get("http://localhost:3000/students");
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
  const addStudent = (student) => {
    if (
      student.firstname.length >= 2 &&
      student.lastname.length >= 2 &&
      student.group !== ""
    ) {
      axios.post("http://localhost:3000/students", student);
    }
  };
  const handleEdit = async (id) => {
    const res = await axios(`http://localhost:3000/students/${id}`);
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
        Students list
      </Title>
      <SearchComp
        addOpenModal={addOpenModal}
        data={data}
        setFiltered={setFiltered}
      />
      <StudentsList
        filtered={filtered}
        setFiltered={setFiltered}
        handleEdit={handleEdit}
      />
      <AddModalComp
        addModal={addModal}
        addCloseModal={addCloseModal}
        addStudent={addStudent}
      />
      <EditModalComp
            editModal={editModal}
            editCloseModal={editCloseModal}
            studentData={studentData}
          />
    </div>
  );
};

export default Students;
