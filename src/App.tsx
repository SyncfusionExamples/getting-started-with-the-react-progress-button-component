import { ProgressButtonComponent,SpinSettingsModel,AnimationSettingsModel } from '@syncfusion/ej2-react-splitbuttons';
import './App.css';
import { useState } from "react";

function App() {
  const [state, setState] = useState({content: 'Download' });
 function begin(): void {
     setState({ content: 'Downloading...' });
 }

 function end(): void {
  setState({ content: 'Download'});
    
 }
  let spinSettings:SpinSettingsModel = { position: 'Right', width: 20,
  template: '<div class="template"></div>' };
  let animationSettings: AnimationSettingsModel = { effect: 'SlideUp',  duration: 500, easing: 'linear' };
  return (
    <div className="App">
    <ProgressButtonComponent content={state.content} enableProgress={true} cssClass= 'e-hide-spinner'
      begin={begin} end={end}
   // isPrimary={true} spinSettings={spinSettings} animationSettings={animationSettings}
    iconCss="e-btn-sb-icons e-download-icon"
    iconPosition='Right'
    >
    </ProgressButtonComponent>
    </div>
  );
}

export default App;
