import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Login() {
  const logo = require("./../assets/img/logo/nextdash.png");
  const [username, setUsername] = React.useState("pedrorsilva");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <Row className="w-100 mx-0">
              <Col lg={4} className="mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <Image src={logo} alt="logo" width={200} height={50} />
                  </div>
                  <h4>Olá! Vamos começar</h4>
                  <h6 className="font-weight-light">
                    Realize o login para continuar.
                  </h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="usuario"
                        placeholder="Usuário"
                        value={username}
                        onChange={function (event) {
                          const valor = event.target.value;
                          setUsername(valor);
                        }}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{ visibility: "hidden" }}
                    >
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        placeholder="Senha"
                      />
                    </div>
                    <div className="mt-3">
                      <Button
                        variant="primary"
                        size="lg"
                        className="btn-block font-weight-medium auth-form-btn"
                        onClick={(event) => {
                          router.push(`/dashboard?username=${username}`);
                        }}
                      >
                        Login
                      </Button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <a href="#" className="auth-link text-black">
                        Esquece a senha?
                      </a>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Não possui uma conta?{" "}
                      <a href="register.html" className="text-primary">
                        Criar
                      </a>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
