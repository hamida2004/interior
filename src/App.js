
import './App.css';
import { 
  img1, 
  img2, 
  img3, 
  img4,
  img6, 
  img7,
} from './assets';
function App() {
  return (
    <>
     <div className={"main"}>
      <img src={img1} alt="image" />
      <div className={"content"}>
        <h1>Interiors</h1>
        <h3>powerpoint template</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum id rem,
          fugit voluptatibus quae et sit consequuntur deserunt! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Debitis, sequi.
        </p>
      </div>
      <div className={"text"}>Interior</div>
    </div>
    <div className={"page welcome"}>
      <div className={"text"}>Interior</div>
      <div className={"image-container"}>
        <img src={img2} alt="image" />
      </div>
      <div className={"page-content"}>
        <div className={"content"}>
          <h1>welcome</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            commodi provident facilis aliquam. Totam labore iusto facere debitis
            assumenda expedita!
          </p>
        </div>
      </div>
    </div>
    <div className="page decoration">
      <div className="text">Interior</div>

      <div className="page-content">
        <div className="content">
          <h2>Our Decoration</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            commodi provident facilis aliquam. Totam labore iusto facere debitis
            assumenda expedita!
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={img3} alt="image" />
      </div>
    </div>
    <div className="project-introduction page">
      <div className="image-container">
        <img src={img4} alt="" />
      </div>
      <div className="page-content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          possimus qui facere maxime velit tempora. Odit porro in at neque
          animi, nostrum reprehenderit beatae nisi distinctio quisquam
          praesentium temporibus iste.
        </p>
      </div>
    </div>
    <div className="theory page">
      <div className="text">Theory</div>
      <div className="image-container">
        <img src={img6} alt="image" />
        <img src={img7} alt="image" />
      </div>
      <div className="page-content">
        <div className="cntnt">
          <h2>The theory behind us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            obcaecati esse enim officiis! Laboriosam, quaerat delectus
            voluptatem culpa explicabo deleniti.
          </p>
        </div>
      </div>
    </div>
    <div className="style page">
      <div className="container">
        <div className="left-top-corner"></div>
        <div className="left-bottom-corner">
          <h1>style</h1>
          <h2>something to tell about our style</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            minima ut ad officia sequi ab doloribus ullam voluptates debitis
            neque.
          </p>
        </div>

        <div classNameName="right-bottom-corner"></div>
      </div>
    </div>
    </>
  );
}

export default App;
