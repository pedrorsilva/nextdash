import Image from "next/image";
import React from "react";
import { Card, Col, FormGroup } from "react-bootstrap";
import { TiInputChecked } from "react-icons/ti";
import DashboardLayout from "./_layouts/dashboad";

const Mensagem = ({
  name = "Pedro Silva",
  inverted = false,
  message = "Message",
  image = "pedrorsilva",
}) => {
  return (
    <div
      className={`card  col-8 mb-2 ${
        inverted ? "mr-5 card-inverse-success" : "card-inverse-info"
      }`}
      id="context-menu-simple"
      style={{
        marginLeft: inverted ? "auto" : "",
        marginRight: inverted ? "10px" : "",
      }}
    >
      <div className="card-body">
        <div className="d-flex align-items-center pb-3">
          <Image
            className="img-sm rounded-circle"
            src={`https://github.com/${image}.png`}
            width={40}
            height={40}
            alt="profile"
          />
          <div className="ms-3">
            <h6 className="mb-1">{name}</h6>
          </div>
          <i className="ti-check font-weight-bold ms-auto px-1 py-1 text-info mdi-24px"></i>
          <TiInputChecked className="font-weight-bold ms-auto text-success mdi-24px" />
        </div>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
};

const TextBox = ({ messageList, setMessageList }) => {
  // const setMensage = (message) = {
  //   messages.push({inverted: true, message: message, image: 'pedrorsilva', })
  // }
  const [message, setMessage] = React.useState("");

  // const setMessageList = (message) => {
  //   messages.push({
  //     message: message,
  //     inverted: true,
  //     image: "pedrorsilva",
  //     name: "Pedro Silva",
  //   });
  // };
  return (
    <Card>
      <div className="card-body">
        <FormGroup className="row">
          <Col lg={12}>
            <textarea
              value={message}
              id="maxlength-textarea"
              className="form-control"
              maxLength="500"
              rows="3"
              placeholder="Mensagem"
              onChange={(event) => {
                const valor = event.target.value;
                setMessage(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setMessageList([
                    ...messageList,
                    {
                      message: message,
                      inverted: true,
                      image: "pedrorsilva",
                      name: "Pedro Silva",
                    },
                  ]);
                  setMessage("");
                }
              }}
            ></textarea>
          </Col>
        </FormGroup>
      </div>
    </Card>
  );
};

const Chat = () => {
  const [messageList, setMessageList] = React.useState([]);
  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
          <h3 className="font-weight-bold">Chat</h3>
          <h6 className="font-weight-normal mb-0">
            Mensagens privadas{" "}
            <span className="text-primary">3 novas mensagens!</span>
          </h6>
        </div>
      </div>
      <div className="col-md-12 grid-margin stretch-card mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Lista de mensagens</h4>

            <div
              className="mt-5"
              style={{ maxHeight: "70%", overflow: "auto" }}
            >
              {messageList.map((message, index) => (
                <Mensagem
                  key={index}
                  inverted={index % 2 ? true : false}
                  name={message.name}
                  image={message.image}
                  message={message.message}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <TextBox messageList={messageList} setMessageList={setMessageList} />
    </>
  );
};

Chat.layout = DashboardLayout;

export default Chat;
