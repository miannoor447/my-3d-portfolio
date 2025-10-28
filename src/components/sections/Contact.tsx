import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
  if (e === undefined) return;
  e.preventDefault();

  // simple validation
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    Swal.fire({
      title: 'Missing Information',
      text: 'Please fill in your name, email, and message before sending.',
      icon: 'warning',
      confirmButtonColor: '#facc15',
      background: '#0A0816',
      color: '#ffffff',
    });
    return; // stop sending
  }

  setLoading(true);

  emailjs
    .send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        form_name: form.name,
        to_name: config.html.fullName,
        from_email: form.email,
        to_email: config.html.email,
        message: 'Name: ' + form.name + '\nEmail: ' + form.email + '\nMessage: ' + form.message,
      },
      emailjsConfig.accessToken
    )
    .then(
      () => {
        setLoading(false);
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you. I’ll get back to you as soon as possible.',
          icon: 'success',
          confirmButtonColor: '#151030',
          background: '#0A0816',
          color: '#ffffff',
        });
        setForm(INITIAL_STATE);
      },
      error => {
        setLoading(false);
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
          background: '#0A0816',
          color: '#ffffff',
        });
      }
    );
};

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[250px] md:h-[450px] xl:h-[750px] xl:[850px] flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
