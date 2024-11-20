
import Image from "next/image";
import './homePage.css';
export default function Home() {
  return (
      <div className="main-container">
      <div className="myinfo">
        <div className="container">
        <h1 className="text">Hello!</h1>
       <h1 className="text">I am Amir Ansari</h1>
       </div>
       <br />
       <br />
        <p>Hello I&apos;m Amir <br /> I am a Graduate from University of Karachi and <br />nowaday i am learning next.js and artificial intellegence <br />SEO expert</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Image
        src="/banner.bg.png" // replace with your image path
        alt="Profile Picture"
        width={300} // Set the width of the image
        height={300} // Set the height of the image
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </div>
    </div>
  );
}
