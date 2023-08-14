import { FaHtml5 } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const aboutText = '안녕하세요! 프론트엔드 개발자로서 최신 웹 기술과 트렌드에 관심을 갖고, 사용자 친화적인 인터페이스와 효율적인 코드를 실현하기 위해 노력합니다. 다양한 디바이스에서 일관된 성능과 디자인을 제공하며, 웹 접근성과 최적화에 중점을 둡니다.'
export const timelineText = [
  {
    title: '웹 표준 코딩',
    text: 'HTML5 웹표준과 웹접근성을 준수하여 사용자 친화적이고 다양한 기기에서 호환성을 제공하는 웹 애플리케이션을 개발합니다. 시맨틱한 마크업과 ARIA 레이블링을 통해 모든 사용자가 웹 콘텐츠에 접근할 수 있도록 합니다.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Accesibility'],
    icon: FaHtml5, // 변수명으로 그대로 내보내기
    date: 'in progress',
  },
  {
    title: '반응형 웹',
    text: '모바일 퍼스트 디자인 및 미디어 쿼리를 활용한 반응형 웹 구현',
    tags: ['미디어쿼리', 'SASS', '부트스트랩'],
    icon: FaMobileAlt,
    date: 'in progress',
  },
  {
    title: '프론트엔드 프레임워크',
    text: 'React 등의 프론트엔드 프레임워크 역량 강화. 컴포넌트 기반 개발 및 상태 관리 스킬 향상',
    tags: ['React', 'NPM', 'Vite'],
    icon: FaReact,
    date: 'in progress',
  },
  {
    title: '협업 및 버전 관리',
    text: 'Git을 활용한 협업 및 버전 관리 능력 향상. 협업 도구와 워크플로우에 익숙해지기',
    tags: ['Git', 'Github', '버전 관리'],
    icon: FaGithub,
    date: 'in progress',
  },
]
