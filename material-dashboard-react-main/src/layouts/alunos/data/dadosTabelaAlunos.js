/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// GitHub Avatar URLs
const igorAvatar = "https://avatars.githubusercontent.com/u/64588244?v=4";
const juniorAvatar = "https://avatars.githubusercontent.com/u/69211250?v=4";
const rayaneAvatar = "https://avatars.githubusercontent.com/u/110859172?v=4";

export default function data() {
  const Aluno = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Funcao = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "aluno", accessor: "aluno", width: "45%", align: "left" },
      { Header: "função", accessor: "funcao", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "data inicial", accessor: "data_inicial", align: "center" },
      { Header: "ação", accessor: "acao", align: "center" },
    ],

    rows: [
      {
        aluno: (
          <Aluno
            image={igorAvatar}
            name="Igor Correia da Silva"
            email="igor.correia.silva@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Desenvolvedor Front-end" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        data_inicial: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            08/05/2025
          </MDTypography>
        ),
        acao: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        aluno: (
          <Aluno
            image={juniorAvatar}
            name="Junior José da Silva"
            email="junior.silva@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Líder" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        data_inicial: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            08/05/2025
          </MDTypography>
        ),
        acao: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        aluno: (
          <Aluno
            image={rayaneAvatar}
            name="Rayane Bezerra da Silva"
            email="rayane.silva@ccc.ufcg.edu.br"
          />
        ),
        funcao: <Funcao title="Desenvolvedora Back-end" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        data_inicial: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            08/05/2025
          </MDTypography>
        ),
        acao: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
