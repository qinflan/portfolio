import React, {useState} from 'react'
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {

  // declare state for email contents to be validated in backend
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formResponse = await axios.post("/api/dummy/endpoint",
        {
          email,
          subject,
          body
        });

      if (formResponse.status == 200) {
        toast.success("Email sent successfully")
        setEmail('');
        setSubject('');
        setBody('');
      }
    } catch (error) {
      console.error("Error sending email: ", error)
      toast.error("Failed to send email, ensure all fields are valid")
    }

  }
  
  return (
    <div className="flex flex-col justify-center bg-gray-50 sm:py-12 border-solid border-2 border-zinc-800">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="input-field" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>

          <input 
          type="text" 
          className="input-field" 
          placeholder="Enter subject of email"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required/>

        <textarea
          className="input-field" 
          placeholder="What would you like to contact me for?"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required/>
          
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>

      <ToastContainer/>
      </form>
    </div>
  )
}

export default Contact