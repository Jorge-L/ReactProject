import React from "react";
import { Formik } from "formik";
import { Container } from "react-bootstrap";

import "./FormularioContacto.css";

class FormularioContacto extends React.Component {
  render() {
    return (
      <Container>
        <h3>Formulario de contacto</h3>
        <Formik
          initialValues={{ nombreCompleto: "", correo: "", mensaje: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.nombreCompleto) {
              errors.nombreCompleto = "Ingrese su nombre";
            }

            if (!values.correo) {
              errors.correo = "Ingrese su direccion de correo";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
            ) {
              errors.correo = "Dirección de correo electrónico incorrecta";
            }
            if (!values.mensaje) {
              errors.mensaje = "Ingrese su mensaje";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 4000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* otros */
          }) => (
            <div>
              <h4>Dejenos un mensaje y pronto nos pondremos en contacto</h4>
              <form onSubmit={handleSubmit}>
                <label>Nombre Completo</label>
                <input
                  type="text"
                  name="nombreCompleto"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombreCompleto}
                />
                {errors.nombreCompleto &&
                  touched.nombreCompleto &&
                  errors.nombreCompleto}
                <br />

                <label>Correo Electronico</label>
                <input
                  type="email"
                  name="correo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.correo}
                />
                {errors.correo && touched.correo && errors.correo}
                <br />

                <label>Mensaje</label>
                <input
                  type="text"
                  name="mensaje"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mensaje}
                />
                {errors.mensaje && touched.mensaje && errors.mensaje}
                <br />

                <button type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
              </form>
            </div>
          )}
        </Formik>
      </Container>
    );
  }
}

export default FormularioContacto;
