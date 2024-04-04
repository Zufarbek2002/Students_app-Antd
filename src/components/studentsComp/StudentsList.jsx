/* eslint-disable react/prop-types */
import { Button, Space, Table } from "antd";
import axios from "axios";

const StudentsList = ({ setFiltered, filtered, handleEdit }) => {
  const handleDelete = async (id) => {
    if (confirm("Are you sure delete")) {
      setFiltered(filtered.filter((student) => student.id !== id));
      await axios.delete(`http://localhost:3000/students/${id}`);
    }
  };
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Lastname",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Group",
      key: "group",
      dataIndex: "group",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" size="large" onClick={()=>handleEdit(record.id)}>Edit</Button>
          <Button type="primary" size="large" danger onClick={()=>handleDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        style={{ marginTop: "50px" }}
        columns={columns}
        dataSource={filtered}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default StudentsList;
