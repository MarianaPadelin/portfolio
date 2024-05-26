import Contacto from "./Contacto"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; 

const ContactoContainer = () => {
    const form = useRef();
    let [nombre, setNombre] = useState("");
    let [celular, setCelular] = useState("");
    let [email, setEmail] = useState("");
    let [mensaje, setMensaje] = useState("");
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_prdid6s",
            "template_tixappe",
            form.current,
            "kHIj_9PsmqbGchRXG"
          )
          .then(
            () => {
              const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });

              Toast.fire({
                icon: "success",
                title: "Email enviado",
              });
              setNombre("");
              setEmail("");
              setCelular("");
              setMensaje("");
            },

            (error) => {
              const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });

              Toast.fire({
                icon: "error",
                title: "No se pudo enviar, intente de nuevo más tarde",
              });
              console.error("no se envio", error);
            }
          );
      };
  return (
    <div>
      <Contacto
        sendEmail={sendEmail}
        form={form}
        nombre={nombre}
        celular={celular}
        email={email}
        mensaje={mensaje}
        setNombre={setNombre}
        setCelular={setCelular}
        setEmail={setEmail}
        setMensaje={setMensaje}
      />
    </div>
  );
}

export default ContactoContainer