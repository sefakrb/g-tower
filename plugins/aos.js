import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({ 
    disable: window.innerWidth < 640,
    // offset: 200,
    // throttleDelay: 99,
    // anchorPlacement: 'bottom',
    duration: 1000,
    easing: 'ease-in-out-cubic',
    // once: true
  }); // or any other options you need
};