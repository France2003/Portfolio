import type {
  PersonalInfo,
  SkillCategory,
  WorkExperience,
  Education,
  Certificate,
  Project,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Bùi Đình Pháp',
  title: 'Front-End Developer',
  phone: '0363977687',
  dob: '30/07/2003',
  email: 'phapcv2003@gmail.com',
  address: '35 Khuê Mỹ Đông 5, Phường Ngũ Hành Sơn, Thành Phố Đà Nẵng',
  github: 'https://github.com/France2003',
};

export const careerObjective = [
  'Với kinh nghiệm từng triển khai các dự án thực tế về tối ưu hóa quy trình và hệ thống tự động, tôi khao khát được thử thách bản thân ở vị trí Fresher Front-End Developer. Tôi tự tin với kỹ năng sử dụng ReactJS, TailwindCSS và khả năng tích hợp API linh hoạt.',
  'Mục tiêu của tôi là không ngừng nâng cao chuyên môn, đóng góp giá trị cho sự phát triển của công ty.',
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'core',
    label: 'Ngôn ngữ & Công nghệ cốt lõi',
    icon: 'Code2',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    id: 'frontend',
    label: 'Front-End Development',
    icon: 'Monitor',
    skills: ['ReactJS', 'Hooks', 'Router', 'React Query', 'React Form', 'TailwindCSS', 'Ant Design'],
  },
  {
    id: 'backend',
    label: 'Back-End & Database',
    icon: 'Server',
    skills: ['NodeJS', 'MongoDB', 'Axios', 'Fetch API'],
  },
  {
    id: 'ai',
    label: 'Công cụ AI & Tự động hóa',
    icon: 'Bot',
    skills: ['N8N', 'AI Agents', 'RPA', 'ChatGPT', 'Gemini'],
  },
  {
    id: 'tools',
    label: 'Công cụ & Khác',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Vite', 'NPM/Yarn', 'Cursor AI', 'Windsurf', 'Figma', 'Redux/Zustand', 'Custom Hooks', 'Responsive Design'],
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'rainscale',
    company: 'RAINSCALE COMPANY',
    role: 'INTERN AI AUTOMATION DEVELOPER',
    period: '07/2025 – 01/2026',
    bullets: [
      'Dự án tại Công ty May NamLee: Phân tích và triển khai các giải pháp RPA để tự động hóa các tác vụ lặp lại trong quy trình sản xuất, giúp giảm thiểu sai sót và tiết kiệm thời gian.',
      'Hệ thống Chat và Tự động đăng bài Fanpage: Sử dụng n8n và AI Agents để xây dựng quy trình tự động hóa tương tác khách hàng và quản lý nội dung, giúp tối ưu hóa hiệu suất vận hành.',
      'Tối ưu hiệu suất: Ứng dụng các công cụ AI hiện đại (Cursor, Windsurf) để đẩy nhanh tốc độ phát triển và kiểm thử hệ thống.',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'university',
    school: 'Trường Đại học Kiến Trúc Đà Nẵng',
    major: 'Công Nghệ Thông Tin',
    period: '2021 – 2026',
    gpa: '3.0/4.0',
    thesis: 'Thiết kế hệ thống đặt vé xem phim trực tuyến',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'softech',
    issuer: 'Softech Aptech',
    year: '2023',
    course: 'HTML + ReactJS course',
  },
];

export const hobbies = ['Thể thao', 'Du lịch', 'Đọc sách', 'Chơi game'];

export const projects: Project[] = [
  {
    id: 'cinema',
    title: 'Hệ thống đặt vé xem phim trực tuyến',
    subtitle: 'Đồ án tốt nghiệp',
    period: '05/09/2025 – 31/12/2025',
    role: 'Full-stack Developer (Trọng tâm Front-end)',
    github: 'https://github.com/France2003/Booking-Ticker-Cinema',
    technologies: ['ReactJS', 'TailwindCSS', 'NodeJS', 'MongoDB', 'Ant Design', 'Three.js'],
    description: 'Xây dựng hệ thống đặt vé toàn diện theo mô hình Client-Server, tích hợp quản lý lịch chiếu và doanh thu cho quản trị viên.',
    achievement: 'Triển khai thành công tính năng mô phỏng chỗ ngồi 3D bằng Three.js, mang lại trải nghiệm tương tác thực tế cho khách hàng.',
  },
  {
    id: 'tour',
    title: 'Website đặt tour và quản lý du lịch',
    subtitle: '',
    period: '25/02/2025 – 15/05/2025',
    role: 'Front-end Developer',
    github: 'https://github.com/France2003/BookingTour',
    technologies: ['ReactJS', 'TailwindCSS', 'NodeJS', 'MongoDB', 'Ant Design', 'AI'],
    description: 'Phát triển nền tảng đặt tour du lịch trực tuyến, hỗ trợ người dùng tìm kiếm, phân loại tour và quản lý lịch sử đặt chỗ.',
    achievement: 'Xây dựng hệ thống quản trị (Admin) mạnh mẽ để quản lý danh mục tour và dữ liệu đặt chỗ.',
  },
];
