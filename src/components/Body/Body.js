import React, { useState } from "react";
import { useCMS, useForm, usePlugin } from "tinacms";
import { InlineForm, InlineTextarea } from "react-tinacms-inline";
import { HtmlFieldPlugin, MarkdownFieldPlugin } from "react-tinacms-editor";

import "./body.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import EditButton from "../EditButton/EditButton";

export default function Body() {
  const cms = useCMS();
  cms.plugins.add(HtmlFieldPlugin);
  cms.plugins.add(MarkdownFieldPlugin);

  const initalValues = {
    firstOpition: "GitHub",
    fisrtOptionUrl: "https://github.com/patrick0806",
    secondOption: "Linkedin",
    secondOptionUrl:
      "https://www.linkedin.com/in/patrick-da-silva-programador/",
    image:
      "https://s24937.pcdn.co/wp-content/uploads/2016/08/Caf%C3%A9-e-sa%C3%BAde_800_600.jpg",
    imageHeigth: 50,
    imageWidth: 50,
    firstInputLabel: "Email",
    secondInputLabel: "Telefone",
    messageInput: "Mensagem",
    name: "Patrick Nicezi",
    backgroundColor: "#ccc",
    description:
      "Sou um programador de 22 anos,atualmente estudando sobre a tina.io onde podemos desenvolver um cms para testar clique no botão editar",
    xp: ["Ainda Não Possuo"],
  };

  const formConfig = {
    id: "tina-header",
    label: "Edit Page",
    fields: [
      {
        name: "firstOpition",
        label: "Nome do botão",
        component: "text",
      },
      {
        name: "fisrtOptionUrl",
        label: "URL do  primeiro botão",
        component: "text",
      },
      {
        name: "secondOption",
        label: "Nome do botão",
        component: "text",
      },
      {
        name: "secondOptionUrl",
        label: "URL do  primeiro botão",
        component: "text",
      },
      {
        name: "firstInputLabel",
        label: "Email",
        component: "text",
      },
      {
        name: "secondInputLabel",
        label: "Telefone",
        component: "text",
      },
      {
        name: "messageInput",
        label: "Nome do botão",
        component: "text",
      },
      {
        name: "imageWidth",
        label: "Largura da imagem",
        component: "text",
      },
      {
        name: "imageHeigth",
        label: "Altura da Imagem",
        component: "text",
      },
      {
        name: "image",
        label: "Imagem",
        component: "text",
      },
      {
        name: "name",
        label: "Nome",
        component: "text",
      },
      {
        name: "backgroundColor",
        label: "Color",
        component: "color",
      },
      {
        name: "description",
        label: "Nome do botão",
        component: "markdown",
      },
      {
        label: "Experiencias",
        name: "xp",
        component: "list",
        defaultItem: 0,
        field: {
          component: "text",
        },
      },
    ],
    initialValues: initalValues,
    onSubmit: async () => {
      cms.alerts.success("Saved Content!");
    },
  };
  const [editableData, form] = useForm(formConfig);
  usePlugin(form);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{ backgroundColor: editableData.backgroundColor }}
      className="col-12 aling"
    >
      <div className="col-12">
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">TinaCMS TEST</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href={editableData.fisrtOptionUrl}>
                  {editableData.firstOpition}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={editableData.secondOptionUrl}>
                  {editableData.secondOption}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <EditButton />
        </Navbar>
      </div>
      <div className="col-6">
        <div className="col-12">
          <div className="row justify-content-center">
            <img
              style={{ marginTop: 10 }}
              src={editableData.imagem}
              width={editableData.imageWidth}
              height={editableData.imageHeigth}
            />
          </div>
          <div style={{ textAlign: "center" }} className="Row">
            <div className="col-12">
              <h2>{editableData.name}</h2>
            </div>
            <div
              style={{ textAlign: "center", width: "100%" }}
              className="col-12"
            >
              <InlineForm form={form}>
                <h5>
                  <InlineTextarea name="description" />
                </h5>
              </InlineForm>
            </div>
            <div className="body-width">
              <h3>Experiencias</h3>
              <li>{editableData.xp}</li>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 body-width ">
        <h5>Entre em contato</h5>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">{editableData.firstInputLabel}</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Ex. luzinho@gmial.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">{editableData.secondInputLabel}</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Ex. 19 993912304"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">{editableData.messageInput}</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );
}
