import { useState } from "react";
import axios from "axios";
import "./App.css";

import round from './assets/Image (2).png'
import cone from './assets/Image (3).png'
import vector3 from "./assets/Vector (3).png";

export default function IconicsLanding() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            alert(res.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.log(err);
            alert("Something went wrong!");
        }
    }

    return (
        <div className="page">


            <section className="contact">
                <div className="contact-3d left">
                    <img src={round} />
                </div>
                <div className="contact-3d right">
                    <img src={cone} />
                </div>

                <div className="contact-box">
                    <span className="tag center">GET IN TOUCH</span>
                    <h2>Ask anything from anywhere!</h2>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="field">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="E.g. Jhon"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="field">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="info@"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field full">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Let us know"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button className="submit-btn" type="submit">
                            <img src={vector3} height="15px" /> SUBMIT
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
}