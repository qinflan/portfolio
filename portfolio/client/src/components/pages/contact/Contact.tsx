import React, {useState} from 'react'
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "./Contact.css";

const Contact = () => {

  // declare state for email contents to be validated in backend
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formResponse = await axios.post("http://localhost:9000/api/contactRouter/sendContactEmail",
        {
          fName,
          lName,
          email,
          subject,
          body
        });

      if (formResponse.status == 200) {
        toast.success("Email sent successfully")
        setEmail('');
        setSubject('');
        setBody('');
        setfName('');
        setlName('');
      }
    } catch (error) {
      console.error("Error sending email: ", error)
      toast.error("Failed to send email, ensure all fields are valid")
    }

  }
  
  return (
    <div className="form-section-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="input-field" 
          placeholder="hi, what's your name?"
          value={fName}
          onChange={(e) => setfName(e.target.value)}
          required/>

        <input 
          type="text" 
          className="input-field" 
          placeholder="last name?"
          value={lName}
          onChange={(e) => setlName(e.target.value)}
          required/>

        <input 
          type="text" 
          className="input-field" 
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>

          <input 
          type="text" 
          className="input-field" 
          placeholder="enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required/>

        <textarea
          className="input-field" 
          placeholder="what's up?"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required/>
          
        <button type="submit" className="brutal-btn">
          send message
        </button>

      <ToastContainer/>
      </form>
    </div>
  )
}

export default Contact