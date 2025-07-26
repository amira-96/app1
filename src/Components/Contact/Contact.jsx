import React, { useState } from 'react'; // استيراد useState
import './Contact.css';

export default function Contact() {
  // استخدام useState لتتبع قيم حقول الإدخال
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // دالة للتعامل مع التغييرات في حقول الإدخال
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-3">CONATCT SECTION</h2>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <span>
          <i className="fa-solid fa-star fa-2x"></i>

          </span>
          
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form>
              {/* UserName Input with Floating Label */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control" 
                  id="userName"
                  placeholder="userName" 
                  value={userName}
                  onChange={(e) => handleChange(e, setUserName)}
                />
                <label htmlFor="userName" className={userName ? 'has-content' : ''}>
                  userName 
                </label>
              </div>

              {/* UserAge Input with Floating Label */}
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="userAge"
                  placeholder="userAge"
                  value={userAge}
                  onChange={(e) => handleChange(e, setUserAge)}
                />
                <label htmlFor="userAge" className={userAge ? 'has-content' : ''}>
                  userAge 
                </label>
              </div>

              {/* UserEmail Input with Floating Label */}
              <div className="form-floating mb-4 ">
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  placeholder="userEmail"
                  value={userEmail}
                  onChange={(e) => handleChange(e, setUserEmail)}
                />
                <label htmlFor="userEmail" className={userEmail ? 'has-content' : ''}>
                  userEmail 
                </label>
              </div>

              {/* UserPassword Input with Floating Label */}
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                  placeholder="userPassword"
                  value={userPassword}
                  onChange={(e) => handleChange(e, setUserPassword)}
                />
                <label htmlFor="userPassword" className={userPassword ? 'has-content' : ''}>
                  userPassword
                </label>
              </div>

              {/* Send Message Button */}
              <button type="submit" className=" btn px-3 py-2">
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}