class MicroModel{
  constructor(props){
    this.node = document.getElementById(props.id);
    if(this.render){
      this.render = this.render.bind(this);
      window.setTimeout(this.render, 0);
    }
  }

  setState(state){
    if( this.state != state && Object.values(state).length ){
      this.state = Object.assign({}, this.state, state);
      if(this.render){
        window.setTimeout(this.render, 0);
      }
    }
  }
}

// export default MicroModel;
