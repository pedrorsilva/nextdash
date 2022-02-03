import React from "react";
// import { Box, Button, Text, Image } from '@skynexui/components';
import appConfig from "../../config.json";
import { Button, Card, Modal } from "react-bootstrap";
import Image from "next/image";

export function ButtonSendSticker(props) {
  const [isOpen, setOpenState] = React.useState("");

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Stickers
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stickers</Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable={true}>
          {appConfig.stickers.map((sticker) => (
            <span
              onClick={() => {
                if (Boolean(props.onStickerClick)) {
                  props.onStickerClick(`:sticker:${sticker}`);
                }
              }}
              tag="li"
              key={sticker}
              style={{
                width: "50%",
                borderRadius: "5px",
                padding: "10px",
                focus: {},
                hover: {},
                cursor: "pointer",
              }}
            >
              <Image
                src={sticker}
                height={80}
                width={80}
                alt=""
                className="img-lg rounded"
              />
            </span>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
