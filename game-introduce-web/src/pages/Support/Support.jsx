import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, Clock, HelpCircle, Send, CheckCircle, X } from 'lucide-react';
import NavBar from '../../components/NavBar/NavBar';
import './Support.css';
import Footer  from '../../components/Footer/Footer';
const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      info: "support@gamereview.vn",
      description: "Phản hồi trong vòng 24 giờ"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Hotline",
      info: "1900 xxxx",
      description: "Hỗ trợ từ 8:00 - 22:00 hàng ngày"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      info: "Chat trực tiếp",
      description: "Online 24/7"
    }
  ];

  const faqs = [
    {
      question: "Làm thế nào để đăng ký tài khoản?",
      answer: "Bạn có thể đăng ký bằng cách nhấn vào nút 'Đăng ký' ở góc trên bên phải, sau đó điền thông tin email và mật khẩu của bạn."
    },
    {
      question: "Tôi có thể đóng góp bài review không?",
      answer: "Có! Chúng tôi luôn chào đón các game thủ đóng góp review. Hãy liên hệ với chúng tôi qua email để biết thêm chi tiết."
    },
    {
      question: "Làm sao để theo dõi game mới?",
      answer: "Bạn có thể bật thông báo trên website hoặc theo dõi chúng tôi trên các mạng xã hội để không bỏ lỡ tin tức game mới nhất."
    },
    {
      question: "Website có ứng dụng di động không?",
      answer: "Hiện tại chúng tôi chưa có app riêng, nhưng website được tối ưu hoàn toàn cho mobile để bạn dễ dàng truy cập."
    }
  ];

  return (
    <div className="support-container">
      <header className="support-header">
        <NavBar />
      </header>

      {/* Back Button
      <button
        onClick={() => window.location.href = '/'}
        className="support-back-btn"
        title="Về trang chủ"
      >
        <X />
      </button> */}

      {/* Hero Section */}
      <div className="support-hero">
        <div className="support-hero-bg"></div>
        
        <div className="support-hero-content">
          <div className="animate-fade-in">
            <div className="support-hero-icon">
              <HelpCircle size={80} />
            </div>
            <h1 className="support-hero-title">
              Hỗ Trợ & Liên Hệ
            </h1>
            <p className="support-hero-desc">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với chúng tôi 
              qua bất kỳ kênh nào bạn cảm thấy thuận tiện!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="support-methods">
        <h2 className="support-section-title">Kênh Liên Hệ</h2>
        <div className="support-methods-grid">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="support-method-card"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div 
                className="support-method-icon"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {method.icon}
              </div>
              <h3 className="support-method-title">{method.title}</h3>
              <p className="support-method-info">{method.info}</p>
              <p className="support-method-desc">{method.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="support-form-section">
        <div className="support-form-container">
          <div className="support-form-card">
            <div className="support-form-header">
              <Send size={40} color="rgb(96, 165, 250)" />
              <h2 className="support-form-title">Gửi Tin Nhắn</h2>
            </div>
            
            {submitted ? (
              <div className="support-form-success">
                <CheckCircle className="support-success-icon" />
                <h3 className="support-success-title">Gửi Thành Công!</h3>
                <p className="support-success-desc">Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <div className="support-form">
                <div className="support-form-row">
                  <div className="support-form-group">
                    <label className="support-form-label">Họ và Tên</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="support-form-input"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="support-form-group">
                    <label className="support-form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="support-form-input"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div className="support-form-group">
                  <label className="support-form-label">Chủ Đề</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="support-form-input"
                    placeholder="Vấn đề cần hỗ trợ"
                  />
                </div>
                
                <div className="support-form-group">
                  <label className="support-form-label">Nội Dung</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="support-form-textarea"
                    placeholder="Mô tả chi tiết vấn đề của bạn..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="support-form-submit"
                >
                  <Send size={20} />
                  Gửi Tin Nhắn
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="support-faq">
        <h2 className="support-section-title">Câu Hỏi Thường Gặp</h2>
        <div className="support-faq-container">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="support-faq-item"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <summary className="support-faq-question">
                <span>{faq.question}</span>
                <HelpCircle className="support-faq-icon" />
              </summary>
              <div className="support-faq-answer">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Working Hours */}
      <div className="support-hours">
        <div className="support-hours-card">
          <Clock className="support-hours-icon" />
          <h3 className="support-hours-title">Thời Gian Hỗ Trợ</h3>
          <p className="support-hours-text">
            Thứ 2 - Thứ 6: 8:00 - 22:00<br />
            Thứ 7 - Chủ Nhật: 9:00 - 21:00
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;