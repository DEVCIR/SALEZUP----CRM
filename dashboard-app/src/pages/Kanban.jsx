import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContextProvider";

const Kanban = () => {
  const navigate = useNavigate();
  const { isAdminLoggedIn } = useAdminContext();
  if (!isAdminLoggedIn) {
    console.log("admin is not logged in");
    navigate('/admin_login');
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <h1 className="text-4xl text-green-900 text-bold">Redirecting to Login Page...</h1>
      </div>
    );
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban;
