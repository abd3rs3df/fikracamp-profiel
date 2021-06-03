import { useRef } from "react";

export default function Contact() {
  let name = useRef(null)
  let email = useRef (null)
  let subject= useRef(null)
  let message = useRef(null)
  
  const send =async(ev)=>{
    ev.preventDefault()

    const date ={
      name :name.current?.value,
      email:email.current?.value,
      subject:subject.current?.value,
      message:message.current?.value,

    }
    try{
      const res = await fetch(
      `http://${process.env.domain}/api/mail/`,{
        method :'post',
        headers:{
          'Content-Type':'application/json',
          
        },
        body:JSON.stringify(data)
      }
      )
    }
      catch(error){
        console.log(error);
      }
  }
   return (
    <section className="contact">
      <div className="container">
        <h3 className="title">Contact me</h3>
        <form className="contact-form" onSubmit={send}>
          <input type="text" name="name" ref={name} placeholder="name" />
          <input type="email" name="email" ref={email} placeholder="email" />
          <input type="text" name="subject" ref={subject} placeholder="subject" />
          <textarea name="message" ref={message} placeholder="message"></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </section>
  );
}
