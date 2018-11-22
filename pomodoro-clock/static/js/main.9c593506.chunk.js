(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(3),i=n(5),r=n(4),o=n(6),c=n(1),h=n(0),l=n.n(h),m=n(8),u=n.n(m),d=(n(15),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={breakLength:5,sessionLength:25,timeLeft:1500,timerType:"Session",timerID:"",start:!1},n.handleBreakDecrement=n.handleBreakDecrement.bind(Object(c.a)(Object(c.a)(n))),n.handleBreakIncrement=n.handleBreakIncrement.bind(Object(c.a)(Object(c.a)(n))),n.handleSessionDecrement=n.handleSessionDecrement.bind(Object(c.a)(Object(c.a)(n))),n.handleSessionIncrement=n.handleSessionIncrement.bind(Object(c.a)(Object(c.a)(n))),n.toggleCountdown=n.toggleCountdown.bind(Object(c.a)(Object(c.a)(n))),n.handleReset=n.handleReset.bind(Object(c.a)(Object(c.a)(n))),n.clockify=n.clockify.bind(Object(c.a)(Object(c.a)(n))),n.decrementTimer=n.decrementTimer.bind(Object(c.a)(Object(c.a)(n))),n}return Object(o.a)(t,e),Object(a.a)(t,[{key:"handleBreakDecrement",value:function(e){this.state.start||this.state.breakLength<=1||("Break"===this.state.timerType?this.setState(function(e){return{breakLength:e.breakLength-1,timeLeft:60*(e.breakLength-1)}}):this.setState(function(e){return{breakLength:e.breakLength-1}}),e.preventDefault())}},{key:"handleBreakIncrement",value:function(e){this.state.start||this.state.breakLength>=60||("Break"===this.state.timerType?this.setState(function(e){return{breakLength:e.breakLength+1,timeLeft:60*(e.breakLength+1)}}):this.setState(function(e){return{breakLength:e.breakLength+1}}),e.preventDefault())}},{key:"handleSessionIncrement",value:function(e){this.state.start||this.state.sessionLength>=60||("Session"===this.state.timerType?this.setState(function(e){return{sessionLength:e.sessionLength+1,timeLeft:60*(e.sessionLength+1)}}):this.setState(function(e){return{sessionLength:e.sessionLength+1}}),e.preventDefault())}},{key:"handleSessionDecrement",value:function(e){this.state.start||this.state.sessionLength<=1||("Session"===this.state.timerType?this.setState(function(e){return{sessionLength:e.sessionLength-1,timeLeft:60*(e.sessionLength-1)}}):this.setState(function(e){return{sessionLength:e.sessionLength-1}}),e.preventDefault())}},{key:"toggleCountdown",value:function(e){var t=this;this.setState(function(e){return{start:!e.start}},function(){t.state.start?t.handleCountdown():clearInterval(t.state.timerID)}),e.preventDefault()}},{key:"handleCountdown",value:function(){var e=this,t=setInterval(function(){e.state.timeLeft>0?e.decrementTimer():(e.audioBeep.play(),e.setState({timeLeft:"Session"===e.state.timerType?60*e.state.breakLength:60*e.state.sessionLength,timerType:"Session"===e.state.timerType?"Break":"Session"}))},1e3);this.setState({timerID:t})}},{key:"decrementTimer",value:function(){this.setState(function(e){return{timeLeft:e.timeLeft-1}})}},{key:"handleReset",value:function(e){this.setState({breakLength:5,sessionLength:25,timeLeft:1500,timerType:"Session",start:!1}),clearInterval(this.state.timerID),this.audioBeep.pause(),this.audioBeep.currentTime=0,e.preventDefault()}},{key:"clockify",value:function(){var e=Math.floor(this.state.timeLeft/60),t=this.state.timeLeft-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"app-container"},l.a.createElement("h1",null,"Pomodoro Clock"),l.a.createElement("div",{id:"flex-container"},l.a.createElement(b,{breakLength:this.state.breakLength,breakDecrement:this.handleBreakDecrement,breakIncrement:this.handleBreakIncrement}),l.a.createElement(k,{sessionLength:this.state.sessionLength,sessionDecrement:this.handleSessionDecrement,sessionIncrement:this.handleSessionIncrement})),l.a.createElement("div",{id:"timer-container"},l.a.createElement("h2",{id:"timer-label"},this.state.timerType),l.a.createElement("p",{id:"time-left",style:this.state.timeLeft<=60?{color:"red"}:{color:"black"}},this.clockify()),l.a.createElement("button",{id:"start_stop",onClick:this.toggleCountdown},"Start/Stop"),l.a.createElement("button",{id:"reset",onClick:this.handleReset},"Reset"),l.a.createElement("audio",{id:"beep",preload:"auto",src:"https://spencercorwin.com/assets/gong.mp3",ref:function(t){e.audioBeep=t}})))}}]),t}(l.a.Component)),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"break-container"},l.a.createElement("h2",{id:"break-label"},"Break Length"),l.a.createElement("p",{id:"break-length"},this.props.breakLength),l.a.createElement("button",{id:"break-decrement",onClick:this.props.breakDecrement},"-"),l.a.createElement("button",{id:"break-increment",onClick:this.props.breakIncrement},"+"))}}]),t}(l.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"session-container"},l.a.createElement("h2",{id:"session-label"},"Session Length"),l.a.createElement("p",{id:"session-length"},this.props.sessionLength),l.a.createElement("button",{id:"session-decrement",onClick:this.props.sessionDecrement},"-"),l.a.createElement("button",{id:"session-increment",onClick:this.props.sessionIncrement},"+"))}}]),t}(l.a.Component);u.a.render(l.a.createElement(d,null),document.getElementById("app"))},15:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.9c593506.chunk.js.map