'use strict';

class menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { menu_deployed:false, m1:'rotate(45deg)', m2:'rotate(-45deg)', menu:'1px', bb:'1px solid black', hr1_top:'-5px', hr2_top:'-5px', left:'-160px', me_dur:'0.6s', so_dur:'0.3s'};
  }

  handleChange(e) {
    if(this.state.menu_deployed == false)
    {
    this.setState({menu_deployed:true, m1:'rotate(0deg)',m2:'rotate(0deg)', menu:'200px', bb:'1px solid white', hr1_top:'37px', hr2_top:'77px', left:'0px', me_dur:'0.3s',so_dur:'0.6s'});
    }
  }
  
  messages()
  {
  var field = this.refs.messages;
  field.click()
  }
  
  settings()
  {
  var field = this.refs.settings;
  field.click()
  }

  render() {
  return(
  <div 
    className="hitBox" 
    onClick={this.handeChange}
  />
  <label className="title3">Home</label>
   <div 
     className="m1a"
     id="m1"
     style={{transform:this.state.m1}}
   />
   <div 
     className="m2a"
     id="m2"
     style={{transform:this.state.m2}}
   />
   <div className="menu" id="menu" style={{height:this.state.menu}}>
   <center>
   <div className="separator" id="hr1" style={{borderBottom:this.state.bb, top:this.state.hr1_top}}/>
   <div className="separator" id="hr2" style={{borderBottom:this.state.bb, top:this.state.hr2_top}}/>
   <label className="messages" id="msg" onClick={this.messages} style={{left:this.state.left, transitionDuration:this.state.me_dur}}>Messages</label>
   <label className="settings" id="stn" onClick={this.settings} style={{left:this.state.left, transitionDuration:'0.45s'}}>Settings</label>
   <button className="so" id="sob" onClick={this.signOut} style={{left:this.state.left, transitionDuration:this.state.so_dur}}>Sign Out</button>
   <form action="/logout" method="post"><input className="stealth" id="signOut" type="submit"></form>
   <form action="/messages" method="post"><input className="stealth" ref="messages" id="messages" type="submit"></form>
   <form action="/settings" method="post"><input className="stealth"ref="settings" id="settings" type="submit"></form>
   </center>
   </div>
  );
  }
  
}

ReactDOM.render(
  <menu />,
  document.getElementById('nav')
);
