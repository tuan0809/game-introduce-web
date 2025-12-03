import React from 'react';
import { Users, Target, Heart, Gamepad2, Award, Zap, X } from 'lucide-react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dương Anh Quyết",
      role: "Trưởng Nhóm & Game Reviewer",
      avatar: "🎮",
      description: "10 năm kinh nghiệm trong ngành game"
    },
    {
      name: "Phạm Hữu Nhân",
      role: "Content Creator",
      avatar: "✍️",
      description: "Chuyên gia viết bài review chuyên sâu"
    },
    {
      name: "Hà Thanh Tùng",
      role: "Video Editor",
      avatar: "🎬",
      description: "Sáng tạo nội dung video hấp dẫn"
    },
    {
      name: "Lê Minh Tuân",
      role: "Community Manager",
      avatar: "💬",
      description: "Kết nối và hỗ trợ cộng đồng game thủ"
    },
    {
      name: "Nguyễn Quang Thiện",
      role: "Game Tester & Analyst",
      avatar: "🕹️",
      description: "Phân tích gameplay và cơ chế game"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Trung Thực",
      description: "Đánh giá khách quan, không thiên vị"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Đam Mê",
      description: "Yêu game và chia sẻ đam mê đến cộng đồng"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Chất Lượng",
      description: "Nội dung chuyên nghiệp và chi tiết"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Nhanh Chóng",
      description: "Cập nhật tin tức game mới nhất"
    }
  ];

  return (
    <div className="about-container">
      <header className="about-header">
        <NavBar />
      </header>

      {/* Back Button
      <button
        onClick={() => window.location.href = '/'}
        className="about-back-btn"
        title="Về trang chủ"
      >
        <X />
      </button> */}

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-bg"></div>
        
        <div className="about-hero-content">
          <div className="animate-fade-in">
            <div className="about-hero-icon">
              <Gamepad2 size={80} />
            </div>
            <h1 className="about-hero-title">
              Về Chúng Tôi
            </h1>
            <p className="about-hero-desc">
              Chúng tôi là đội ngũ đam mê game với sứ mệnh mang đến những đánh giá 
              chân thực và hữu ích nhất cho cộng đồng game thủ Việt Nam
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-mission">
        <div className="about-mission-card">
          <div className="about-mission-header">
            <Users size={48} color="rgb(216, 180, 254)" />
            <h2 className="about-mission-title">Sứ Mệnh Của Chúng Tôi</h2>
          </div>
          <p className="about-mission-text">
            Với hơn 5 năm hoạt động, chúng tôi đã xây dựng một cộng đồng game thủ đông đảo 
            và trở thành nguồn tham khảo đáng tin cậy cho những ai yêu thích game. 
            Chúng tôi cam kết đem đến những bài đánh giá khách quan, chi tiết và 
            những tin tức mới nhất về thế giới game.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values">
        <h2 className="about-section-title">Giá Trị Cốt Lõi</h2>
        <div className="about-values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className="about-value-card"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="about-value-icon">
                {value.icon}
              </div>
              <h3 className="about-value-title">{value.title}</h3>
              <p className="about-value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <h2 className="about-section-title">Đội Ngũ Của Chúng Tôi</h2>
        <div className="about-team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="about-team-card"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div 
                className="about-team-avatar"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {member.avatar}
              </div>
              <h3 className="about-team-name">{member.name}</h3>
              <p className="about-team-role">{member.role}</p>
              <p className="about-team-desc">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="about-stats-card">
          <div className="about-stats-grid">
            {[
              { number: "1000+", label: "Bài Review" },
              { number: "50K+", label: "Thành Viên" },
              { number: "5+", label: "Năm Kinh Nghiệm" },
              { number: "100+", label: "Game AAA Đánh Giá" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="about-stat-item"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;