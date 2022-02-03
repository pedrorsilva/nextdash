import Image from "next/image";
import React from "react";
import { Card, Col, FormGroup } from "react-bootstrap";
import { TiInputChecked } from "react-icons/ti";
import DashboardLayout from "./_layouts/dashboad";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

import { ButtonSendSticker } from "./_components/button-send-stickers";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMzMTY1NCwiZXhwIjoxOTU4OTA3NjU0fQ.JmJ_8dsqiDYJbrLQfvpAvTWVIkLqAtcVPt3dqSZSh4E";
const SUPABASE_URL = "https://eaerqapuqrjegrpdzivr.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const listeningMessagesInRealTime = (addMessage) => {
  return supabaseClient
    .from("mensagens")
    .on("INSERT", (resp) => {
      if (resp?.new) addMessage(resp.new);
    })
    .subscribe();
};

const Mensagem = ({
  name = "Pedro Silva",
  inverted = false,
  message = "Message",
  image = "pedrorsilva",
  date = "",
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
            <h6 className="mb-1">{name}</h6>{" "}
            <span className="card-description">
              {new Date(date).toLocaleString("pt-BR")}
            </span>
          </div>
          <i className="ti-check font-weight-bold ms-auto px-1 py-1 text-info mdi-24px"></i>
          <TiInputChecked className="font-weight-bold ms-auto text-success mdi-24px" />
        </div>
        <p className="card-text">
          {message?.startsWith(":sticker:") ? (
            <Image
              src={message.replace(":sticker:", "")}
              height={"100%"}
              width={"100%"}
              alt="sticker"
            />
          ) : (
            message
          )}
        </p>
      </div>
    </div>
  );
};

const Chat = () => {
  const router = useRouter();
  const usuarioLogado = router.query.username;
  const [message, setMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);

  React.useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: true })
      .then(({ data }) => {
        setMessageList(data);
      });

    listeningMessagesInRealTime((newMessage) => {
      setMessageList((currentMessageList) => {
        return [...currentMessageList, newMessage];
      });
    });
  }, []);

  const addMessage = (message) => {
    supabaseClient
      .from("mensagens")
      .insert([
        {
          de: usuarioLogado,
          texto: message,
        },
      ])
      .then(() => {
        setMessage("");
      });
  };

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
          <div className="card-body" style={{ maxHeight: "60vh" }}>
            <h4 className="card-title">Lista de mensagens</h4>

            <div
              className="mt-5"
              style={{
                maxHeight: "calc(100% - 75px)",
                overflow: "auto",
              }}
            >
              {messageList.map((messageItem, index) => (
                <Mensagem
                  key={index}
                  inverted={index % 2 ? true : false}
                  name={messageItem.de}
                  image={messageItem.de}
                  message={messageItem.texto}
                  date={messageItem.created_at}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Card>
        <div className="card-body">
          <FormGroup className="row">
            <Col lg={10}>
              <textarea
                value={message}
                id="maxlength-textarea"
                className="form-control"
                maxLength="500"
                rows="auto"
                placeholder="Mensagem"
                onChange={(event) => {
                  const valor = event.target.value;
                  setMessage(valor);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    addMessage(message);
                    setMessage("");
                  }
                }}
              ></textarea>
            </Col>
            <Col lg={2}>
              <ButtonSendSticker
                onStickerClick={(sticker) => {
                  if (sticker) {
                    addMessage(sticker);
                  }
                }}
              />
            </Col>
          </FormGroup>
        </div>
      </Card>
    </>
  );
};

Chat.layout = DashboardLayout;

export default Chat;
