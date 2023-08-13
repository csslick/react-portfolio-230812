import profile from '../assets/images/profile.jpg'

export default function Home() {
  return (
    <main className='home'>
      <div className="intro">
        <h2>반갑습니다,<br/>홍리나입니다.</h2>
        <p>열정과 책임감을 가진 프론트엔드 개발자입니다.</p>
        <a href="#" className="btn-cta">자세히 보기</a>
      </div>
      <figure>
        <img src={profile} alt="홍리나" />
      </figure>
    </main>
  )
}
