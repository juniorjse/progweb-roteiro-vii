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

export default function data() {
  const Professor = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Disciplina = ({ codigo, nome }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {codigo}
      </MDTypography>
      <MDTypography variant="caption">{nome}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "disciplina", accessor: "disciplina", width: "45%", align: "left" },
      { Header: "professor", accessor: "professor", align: "left" },
      { Header: "créditos", accessor: "creditos", align: "center" },
      { Header: "tipo", accessor: "tipo", align: "center" },
      { Header: "horário", accessor: "horario", align: "center" },
    ],

    rows: [
      {
        disciplina: <Disciplina codigo="1411314" nome="Engenharia de Software" />,
        professor: <Professor name="Rohit Gheyi" email="rohit@computacao.ufcg.edu.br" />,
        creditos: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        tipo: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Obrigatória" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        horario: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Ter/Qui 10:00-12:00
          </MDTypography>
        ),
      },
      {
        disciplina: <Disciplina codigo="1411355" nome="Visualização de Dados" />,
        professor: (
          <Professor name="Maxwell Guimarães de Oliveira" email="maxwell@computacao.ufcg.edu.br" />
        ),
        creditos: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        tipo: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Optativa" color="info" variant="gradient" size="sm" />
          </MDBox>
        ),
        horario: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Ter/Qui 14:00-16:00
          </MDTypography>
        ),
      },
      {
        disciplina: <Disciplina codigo="1411222" nome="Sistemas Distribuídos" />,
        professor: (
          <Professor name="Andrey Elisio Monteiro Brito" email="andrey@computacao.ufcg.edu.br" />
        ),
        creditos: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        tipo: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Optativa" color="info" variant="gradient" size="sm" />
          </MDBox>
        ),
        horario: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Seg/Qua 10:00-12:00
          </MDTypography>
        ),
      },
    ],
  };
}
