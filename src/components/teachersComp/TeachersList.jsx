/* eslint-disable react/prop-types */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd"
import axios from "axios";

const TeachersList = ({ setFiltered, filtered, handleEdit }) => {
    const handleDelete = async (id) => {
        if (confirm("Are you sure delete")) {
          setFiltered(filtered.filter((teacher) => teacher.id !== id));
          await axios.delete(`http://localhost:3000/teachers/${id}`);
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
          title: "Level",
          key: "level",
          dataIndex: "level",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <Button type="primary" size="large" icon={<EditOutlined />} onClick={()=>handleEdit(record.id)}>Edit</Button>
              <Button type="primary" size="large" icon={<DeleteOutlined />} danger onClick={()=>handleDelete(record.id)}>Delete</Button>
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
  )
}

export default TeachersList