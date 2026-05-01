import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { CONTACT_DATA, SOCIAL_LINKS } from '../utils/constants'

const EMAILJS_SERVICE_ID  = 'service_8hnaewo'
const EMAILJS_TEMPLATE_ID = 'template_pba7ykn'
const EMAILJS_PUBLIC_KEY  = 'CawVuVP6c3aveQbLe'

function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass = (field) => `
    w-full bg-[#101828] border rounded-xl px-4 py-3 text-[#e2eaff]
    font-body text-sm outline-none transition-all duration-300
    placeholder:text-[#2e3d5c]
    ${focused === field
      ? 'border-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)]'
      : 'border-[rgba(0,229,255,0.1)] hover:border-cyan/30'
    }
  `

  return (
    <section id="contact" className="relative py-32 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#050811]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-cyan text-sm font-mono tracking-widest uppercase mb-3">
            // get in touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#e2eaff] mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#5a6e9a] text-lg max-w-xl mx-auto leading-relaxed">
            {CONTACT_DATA.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 reveal">

          {/* LEFT — Contact Info */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Email card */}
            <div className="bg-[#101828] border border-[rgba(0,229,255,0.1)] hover:border-cyan/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
              <p className="text-cyan text-xs font-mono tracking-widest uppercase mb-2">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="text-[#e2eaff] text-sm font-mono group-hover:text-cyan transition-colors duration-200 break-all"
              >
                {CONTACT_DATA.email}
              </a>
            </div>

            {/* Location card */}
            <div className="bg-[#101828] border border-[rgba(255,179,71,0.1)] hover:border-amber/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <p className="text-amber text-xs font-mono tracking-widest uppercase mb-2">
                Location
              </p>
              <p className="text-[#e2eaff] text-sm font-mono">
                Tamil Nadu, India 🇮🇳
              </p>
            </div>

            {/* Availability card */}
            <div className="bg-[#101828] border border-[rgba(0,255,159,0.1)] hover:border-green/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <p className="text-green text-xs font-mono tracking-widest uppercase mb-2">
                Availability
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <p className="text-[#e2eaff] text-sm font-mono">
                  Open to Opportunities
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#101828] border border-[rgba(0,229,255,0.08)] rounded-2xl p-6">
              <p className="text-[#5a6e9a] text-xs font-mono tracking-widest uppercase mb-4">
                Find me on
              </p>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[#5a6e9a] text-sm font-mono hover:text-cyan transition-colors duration-200 group"
                  >
                    <span>{s.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="md:col-span-3">
            <div className="bg-[#101828] border border-[rgba(0,229,255,0.1)] rounded-2xl p-8">

              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <span className="text-6xl animate-bounce">✅</span>
                  <h3 className="font-heading text-2xl font-bold text-green">
                    Message Sent!
                  </h3>
                  <p className="text-[#5a6e9a] text-sm font-mono">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </div>

              ) : status === 'error' ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <span className="text-6xl">❌</span>
                  <h3 className="font-heading text-2xl font-bold text-rose">
                    Something went wrong!
                  </h3>
                  <p className="text-[#5a6e9a] text-sm font-mono">
                    Please try again or email me directly at {CONTACT_DATA.email}
                  </p>
                </div>

              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#5a6e9a] text-xs font-mono tracking-widest uppercase">
                        Name
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        required
                        placeholder="Your Name"
                        className={inputClass('name')}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#5a6e9a] text-xs font-mono tracking-widest uppercase">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        required
                        placeholder="hello@example.com"
                        className={inputClass('email')}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#5a6e9a] text-xs font-mono tracking-widest uppercase">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused('')}
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      className={inputClass('subject')}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#5a6e9a] text-xs font-mono tracking-widest uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`
                      w-full py-4 rounded-xl font-body font-semibold text-base
                      transition-all duration-300 flex items-center justify-center gap-2
                      ${status === 'loading'
                        ? 'bg-cyan/40 text-bg cursor-not-allowed'
                        : 'bg-cyan text-bg hover:bg-opacity-90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] active:scale-95'
                      }
                    `}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
