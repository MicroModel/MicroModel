class MicroModel{
  constructor(props){
    this.node = document.getElementById(props.id);
    if(this.render){
      window.setTimeout(this.render.bind(this), 0);
    }
  }

  setState(state){
    if( this.state != state && Object.values(state).length ){
      Object.assign({}, this.state, state);
      if(this.render){
        this.render();
      }
    }
  }
}

// export default MicroModel;
