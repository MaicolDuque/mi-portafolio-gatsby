import React, { useState } from 'react'

export default () => {

  const [isVisible, setIsVisible] = useState(0)
  let infoRef = React.createRef();

  async function sendForm(event) {
    event.preventDefault();
    setIsVisible(1);
    const url  = "https://shopping-cart-api.maicolduque.now.sh/api/email";
    let body = infoRef.current.value;
    let data = {
      "to": "maicol@maicol.com",
      "subject": "Mensaje enviado desde Mi Portafolio",
      "body": body
    } 
    console.log(data);   
    let response = await fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })

    response = await response.json();
    console.log(response);
  }

  function hideButton() {
    setIsVisible(0);
  }
  return (
    <React.Fragment>
      <form className="mt-16 text-center" id="myForm" onSubmit={sendForm}>
        <label htmlFor="contact-content" className="block text-gray-700 text-sm font-bold mb-2">
          Cuéntame de esa idea que quieres hacer realidad.
      </label>
        <div className="flex shadow rounded bg-whiteb border p-2">
          <textarea
            id="contact-content"
            name="contact-content"
            className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            ref={infoRef}
          >
          </textarea>
          <button className="btn ml-4">Enviar</button>
        </div>
      </form>

      <div className={`bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded relative  ${isVisible ? "visible" : "invisible"}`} role="alert">
        <strong className="font-bold">Mensaje enviado exitosamente!</strong>
        <span className="block sm:inline ml-3"> Gracias por comunicarte conmigo, daré respuesta lo más pronto posible.</span>
        <div className="w-full text-xs">Mi correo electrónico es: maicolduque01@gmail.com</div>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" >
          <svg onClick={hideButton} className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
        </span>
      </div>
    </React.Fragment>

  )
};